import React, { Fragment} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import differenceBy from 'lodash/differenceBy';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component'
import { Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap';
import { Link } from 'react-router-dom'
import axios from 'axios'
import i18next from 'i18next'

class Careers extends React.Component
{
    constructor()
    {
      super()
      this.state=
      {
        selectedRows:'',
        toggleCleared:false,
        category:'',
        data:'',
        token:''
      }

      
    }

   
  

    setName = (data) => {
      this.setState({ data: data })
    }

    changeCategory = () => {
      this.setState({ category: '' })
    }

    componentDidMount()
    {
       this.setState({token:localStorage.getItem('_token')})
       setTimeout(
        function() {
          this.get()
        }
        .bind(this),
        3000
       );
       
    }

   
  
    async get()
    {
     
      let data = await axios.get("admin/careers")
      .then(function(response) {
        return response.data.data
      }).catch(function(error) {
        
      })
      this.setState({data: data});
    }

    async editRecord(item)
    {
      let data = await axios.get("admin/careers/"+item.id)
        .then(function(response) {
        return response.data.data
      }).catch(function(error) {
        toast.error("Countries does't exists!")
      })
      const category={namear:data.titlear,nameen:data.titleen,id:item.id}
      this.setState({category: category })
    }

    tableColumns = [
      {
          name: i18next.t('id'),
          selector: 'id', 
          sortable: true,
          center:true,
      },
      {
          name: i18next.t('name'),
          selector: 'name',
          sortable: true,
          center:true,
      },
      {
        name: i18next.t('image'),
        text: 'image',
        sortable: true,
        center:true,
        cell: record => { 
          return (
              <Fragment>
                  <img style={{width:"100px",padding:"5px"}} src={record.image} />
              </Fragment>
          );
      }
      }, 
       {
          name: i18next.t('action'),
          text: "Action",
          className: "action",
          width: 100,
          align: "left",
          sortable: false,
          cell: record => { 
              return (
                  <Fragment>
                      <Link
                          className="btn btn-primary btn-sm active"
                          to={`${process.env.PUBLIC_URL}/dashboard/setting/careers/edit/${record.id}`}
                          style={{marginRight: '5px'}}>
                          <i className="fa fa-edit"></i>
                      </Link>
                  </Fragment>
              );
          }
      }
     
     
    ]

    handleRowSelected= state => {
      this.setState({ selectedRows: state.selectedRows });
    }

  

   handleDelete = () => {
                                    
    if (window.confirm(`${i18next.t('Aresuredelete')}:\r ${this.state.selectedRows.map(r => r.name)}?`)) {
      this.setState({ toggleCleared: !this.state.toggleCleared });
      let deleteCategory = axios.post("admin/careers/1", {
        data: JSON.stringify(this.state.selectedRows),
        _method: 'DELETE'
      }
      )
      .then(function (response) {
         return toast.success(i18next.t('deletedSsucces'))
      })
      .catch(function (error) {
        toast.error("delete failed !")
      });
      this.setState({data: differenceBy(this.state.data, this.state.selectedRows, 'name')});
    }
  };
    
 
  render()
  {
    
    return(
      <Fragment>
        <Breadcrumb parent={i18next.t('setting')} title={i18next.t('careers')}/>
        <Container fluid={true}>
                <Row>
                    
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                 <Link className="btn btn-primary active" to={`${process.env.PUBLIC_URL}/dashboard/setting/careers/create`}>
                                     {i18next.t('createnew')}
                                  </Link>
                            </CardHeader>
                            <CardBody>
                              <DataTable
                                data={this.state.data}
                                columns={this.tableColumns}
                                striped={true}
                                center={true}
                                selectableRows
                                persistTableHead
                                contextActions= {<button key="delete" className="btn btn-danger" onClick={this.handleDelete}>Delete</button>}
                                onSelectedRowsChange={this.handleRowSelected}
                                clearSelectedRows={this.state.toggleCleared}
                              />
                            
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
  }
 
}


export default Careers;