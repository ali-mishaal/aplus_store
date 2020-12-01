import React, { Fragment,useEffect,useState,useCallback,useMemo} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import differenceBy from 'lodash/differenceBy';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component'
import {tableData} from '../../data/dummyTableData'
import { Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap';
import EditSlider from './edit' 
import axios from 'axios'
import i18next from 'i18next'

class Slider extends React.Component
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
     
      let data = await axios.get("admin/sliders")
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
      let data = await axios.get("admin/sliders/"+item.id)      
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
      }
     
     
    ]

    handleRowSelected= state => {
      this.setState({ selectedRows: state.selectedRows });
    }

  

   handleDelete = () => {
                                    
    if (window.confirm(`${i18next.t('Aresuredelete')}:\r ${this.state.selectedRows.map(r => r.name)}?`)) {
      this.setState({ toggleCleared: !this.state.toggleCleared });
      let deleteCategory = axios.post("admin/sliders/1", {
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
      this.setState({data: differenceBy(this.state.data, this.state.selectedRows, 'id')});
    }
  };
    
 
  render()
  {
    
    return(
      <Fragment>
        <Breadcrumb parent={i18next.t('setting')} title={i18next.t('slider')}/>
        <Container fluid={true}>
                <Row>
                    
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <EditSlider changeCategory={this.changeCategory} setName={this.setName} category={this.state.category}/>
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


export default Slider ;