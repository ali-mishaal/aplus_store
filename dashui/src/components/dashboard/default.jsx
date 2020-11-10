import React, { Fragment,useEffect,useState,useCallback,useMemo} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap';


class Default extends React.Component
{

  constructor()
  {
    super()
  }
  render()
  {
    
    return(
      <Fragment>
        <Breadcrumb parent="Setting" title="Catgeory"/>
        <Container fluid={true}>
                <Row>
                    
                   <div>
                       <h1 className="text-center">welcome</h1>
                    </div>
                </Row>
            </Container>
        </Fragment>
    );
  }
 
}
export default Default;