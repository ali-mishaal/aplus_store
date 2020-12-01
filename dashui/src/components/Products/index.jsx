import React, { Fragment,useEffect,useState,useCallback,useMemo} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import differenceBy from 'lodash/differenceBy';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component'
import {tableData} from '../../data/dummyTableData'
import { Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap';
import { Link } from 'react-router-dom'
import axios from 'axios'
import i18next from 'i18next'

class Products extends React.Component
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
     
      let data = await axios.get("admin/products",{ headers: {"Authorization" : `Bearer ${this.state.token}`} })
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
      let data = await axios.get("admin/products/"+item.id,{ headers: {"Authorization" : `Bearer ${this.state.token}`} })      .then(function(response) {
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
      name: i18next.t('Category'),
      selector: 'category', 
      sortable: true,
      center:true,
  },
  {
    name: i18next.t('model'),
    selector: 'model', 
    sortable: true,
    center:true,
},
{
  name: i18next.t('quantity'),
  selector: 'quantity', 
  sortable: true,
  center:true,
},
      {
          name: i18next.t('measurement'),
          selector: 'measurement',
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
                          to={`${process.env.PUBLIC_URL}/dashboard/products/products/edit/${record.id}`}
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
                                    
    if (window.confirm(`Are you sure you want to delete:\r ${this.state.selectedRows.map(r => r.name)}?`)) {
      this.setState({ toggleCleared: !this.state.toggleCleared });
      let deleteCategory = axios.post("admin/products/1", {
        data: JSON.stringify(this.state.selectedRows),
        _method: 'DELETE'
      },
      { headers: {"Authorization" : `Bearer ${this.state.token}`} }
      )
      .then(function (response) {
         return toast.success("Successfully Deleted !")
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
        <Breadcrumb parent={i18next.t('Products')} title={i18next.t('Products')}/>
        <Container fluid={true}>
                <Row>
                    
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                 <Link className="btn btn-primary active" to={`${process.env.PUBLIC_URL}/dashboard/products/Products/create`}>
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


export default Products ;