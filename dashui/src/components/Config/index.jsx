import React, { Fragment,useEffect,useState,useCallback,useMemo} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import differenceBy from 'lodash/differenceBy';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component'
import {tableData} from '../../data/dummyTableData'
import { Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap';
import EditCategoryConfig from './edit' 
import axios from 'axios'


const Config = () =>  {
   
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const [category, setCategory] = useState([]);

  const [data, setData] = useState({});
  const [config, setConfig] = useState({});
  const [isUpdate , setIsUpdate] =useState(false);
  
  useEffect(() => {
     

  }, []);

  
  

    return (
        <Fragment>
        <Breadcrumb parent="Setting" title="Config"/>
        <Container fluid={true}>
                <Row>
                    
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                
                            </CardHeader>
                            <CardBody>
                            <EditCategoryConfig/>
                            
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );

};

export default Config;