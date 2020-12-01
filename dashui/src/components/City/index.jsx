import React, { Fragment} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import differenceBy from 'lodash/differenceBy';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component'
import { Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap';
import EditCity from './edit' 
import axios from 'axios'

class City extends React.Component
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
        countries:''
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
       this.getCountry()
       this.get()
       
    }

 

    async getCountry()
    {
      let data = await axios.get("country")
      .then(function(response) {
        return response.data.data
      }).catch(function(error) {
        // toast.error("Config Categories does't exists!")
        console.log(error)
      })
      this.setState({countries: data});
    }

    async get()
    {
      let data = await axios.get("city")
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
      let data = await axios.get("city/"+item.id)
      .then(function(response) {
        return response.data.data
      }).catch(function(error) {
        toast.error("cities does't exists!")
      })
      const category={namear:data.titlear,nameen:data.titleen,country:data.country,id:item.id}
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
        name: 'country',
        selector: 'country', 
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
                                    
    if (window.confirm(`Are you sure you want to delete:\r ${this.state.selectedRows.map(r => r.title)}?`)) {
      this.setState({ toggleCleared: !this.state.toggleCleared });
      let deleteCategory = axios.post('city/1', {
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
        <Breadcrumb parent="Setting" title="City"/>
        <Container fluid={true}>
                <Row>
                    
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <EditCity countries={this.state.countries} changeCategory={this.changeCategory} setName={this.setName} category={this.state.category}/>
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


export default City;