import React, { Fragment,useEffect,useState,useCallback,useMemo} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import differenceBy from 'lodash/differenceBy';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component'
import {tableData} from '../../data/dummyTableData'
import { Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap';
import EditGovern from './edit' 
import axios from 'axios'

class Government extends React.Component
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
      let data = await axios.get("https://aplus-code.com/alhabbal/store/api/country")
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
      let data = await axios.get("https://aplus-code.com/alhabbal/store/api/country/"+item.id)
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
          name: 'ID',
          selector: 'id', 
          sortable: true,
          center:true,
      },
      {
          name: 'name',
          selector: 'name',
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
                                    
    if (window.confirm(`Are you sure you want to delete:\r ${this.state.selectedRows.map(r => r.name)}?`)) {
      this.setState({ toggleCleared: !this.state.toggleCleared });
      let deleteCategory = axios.post('https://aplus-code.com/alhabbal/store/api/country/1', {
        data: JSON.stringify(this.state.selectedRows),
        _method: 'DELETE'
      })
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
        <Breadcrumb parent="Setting" title="Country"/>
        <Container fluid={true}>
                <Row>
                    
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <EditGovern changeCategory={this.changeCategory} setName={this.setName} category={this.state.category}/>
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


export default Government;