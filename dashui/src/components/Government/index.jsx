import React, { Fragment,useEffect,useState,useCallback,useMemo} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import differenceBy from 'lodash/differenceBy';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component'
import {tableData} from '../../data/dummyTableData'
import { Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap';
import EditCategoryConfig from './edit' 
import axios from 'axios'


const Government = () =>  {
   
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const [category, setCategory] = useState([]);

  const [data, setData] = useState({});
  const [isUpdate , setIsUpdate] =useState(false);
  
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/country")
      .then(function(response) {
        setData(response.data.data);
      
      }).catch(function(error) {
        toast.error("country does't exists!")
      })
  }, []);

  
const editRecord =(props)=>
{
  axios.get("http://127.0.0.1:8000/api/country/"+props.id)
  .then(function(response) {
    setCategory(response.data.date)
  }).catch(function(error) {
    toast.error("please try again!")
  })
  
}
 const tableColumns = [
    {
        name: 'ID',
        selector: 'id', 
        sortable: true,
        center:true,
    },
    {
        name: 'title',
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
                        onClick={() => editRecord(record)}
                        style={{marginRight: '5px'}}>
                        <i className="fa fa-edit"></i>
                    </button>
                </Fragment>
            );
        }
    }
   
   
  ]



  const handleRowSelected = useCallback(state => {
      setSelectedRows(state.selectedRows);
    }, []);

    const contextActions = useMemo(() => {
      const handleDelete = () => {
        
        if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.name)}?`)) {
          setToggleCleared(!toggleCleared);
          axios.post('http://127.0.0.1:8000/api/country/1', {
            data: JSON.stringify(selectedRows),
            _method: 'DELETE'
          })
          .then(function (response) {
             toast.success("Successfully Deleted !")
             setData(differenceBy(data, selectedRows, 'name'));
          })
          .catch(function (error) {
            toast.error("delete failed !")
          });
         
        }
      };
  
      return <button key="delete" className="btn btn-danger" onClick={handleDelete}>Delete</button>;
    }, [data, selectedRows, toggleCleared]);

    return (
        <Fragment>
        <Breadcrumb parent="Area" title="Country"/>
        <Container fluid={true}>
                <Row>
                    
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <EditCategoryConfig  category={category}/>
                            </CardHeader>
                            <CardBody>
                              <DataTable
                                data={data}
                                columns={tableColumns}
                                striped={true}
                                center={true}
                                selectableRows
                                persistTableHead
                                contextActions={contextActions}
                                onSelectedRowsChange={handleRowSelected}
                                clearSelectedRows={toggleCleared}
                              />
                            
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );

};

export default Government;