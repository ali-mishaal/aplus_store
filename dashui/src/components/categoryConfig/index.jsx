import React, { Fragment} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import differenceBy from 'lodash/differenceBy';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component'
import { Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap';
import EditCategoryConfig from './edit' 
import axios from 'axios'
import i18next from 'i18next'

class CategoryConfig extends React.Component
{
    constructor()
    {
      super()
      this.state=
      {
        selectedRows:'',
        toggleCleared:false,
        category:'',
        data:''
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
       this.get()
    }

  
    async get()
    {
      let data = await axios.get("admin/configCategory")
      .then(function(response) {
        return response.data.data
      }).catch(function(error) {
        // toast.error("Config Categories does't exists!")
        console.log(error)
      })
      this.setState({data: data});
    }

    async editRecord(item)
    {
      let data = await axios.get("admin/configCategory/"+item.id)
      .then(function(response) {
        return response.data.data
      }).catch(function(error) {
        toast.error("Config Categories does't exists!")
      })
      const category={titlear:data.titlear,titleen:data.titleen,id:item.id}
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
          selector: 'title',
          sortable: true,
          center:true,
      },  {
          name: "action",
          text: "Action",
          className: "action",
          width: 100,
          align: "left",
          sortable: false,
          cell: record => { 
              return (
                  <Fragment>
                      <button
                          className="btn btn-primary btn-sm"
                          onClick={() => this.editRecord(record)}
                          style={{marginRight: '5px'}}>
                          <i className="fa fa-edit"></i>
                      </button>
                  </Fragment>
              );
          }
      }
     
     
    ]

    handleRowSelected= state => {
      this.setState({ selectedRows: state.selectedRows });
    }

  

   handleDelete = () => {
                                    
    if (window.confirm(`${i18next.t('Aresuredelete')}:\r ${this.state.selectedRows.map(r => r.title)}?`)) {
      this.setState({ toggleCleared: !this.state.toggleCleared });
      let deleteCategory = axios.post('admin/configCategory/1', {
        data: JSON.stringify(this.state.selectedRows),
        _method: 'DELETE'
      })
      .then(function (response) {
         return toast.success(i18next.t('deletedSsucces'))
      })
      .catch(function (error) {
        toast.error("delete failed !")
      });
      this.setState({data: differenceBy(this.state.data, this.state.selectedRows, 'title')});
    }
  };
    
 
  render()
  {
    
    return(
      <Fragment>
        <Breadcrumb parent={i18next.t('setting')} title={i18next.t('configCategory')}/>
        <Container fluid={true}>
                <Row>
                    
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <EditCategoryConfig changeCategory={this.changeCategory} setName={this.setName} category={this.state.category}/>
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


export default CategoryConfig;