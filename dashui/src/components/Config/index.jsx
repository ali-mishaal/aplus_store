import React, { Fragment,useEffect,useState,useCallback,useMemo} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap';
// import EditConfig from './edit' 


class Config extends React.Component
{
    constructor()
    {
      super()
    }

    render()
  {
    
    return(
        <Fragment>
        <Breadcrumb parent="Setting" title="Config"/>
        <Container fluid={true}>
               <Row>
                   
                   <Col sm="12">
                       <Card>
                           <CardHeader>
                               
                           </CardHeader>
                           <CardBody>
                           </CardBody>
                       </Card>
                   </Col>
               </Row>
           </Container>
       </Fragment>
    );
  }
  
}


export default Config;