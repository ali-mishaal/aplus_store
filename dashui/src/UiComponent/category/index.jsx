import React, { Fragment} from 'react';
import { Container,Row} from 'reactstrap';
import '../../i18next'
import { withTranslation } from "react-i18next";
import i18next from 'i18next';

class Category extends React.Component
{

  constructor()
  {
    super()
  }


  

  render()
  {
    
    return(
      <Fragment>
       
        <Container fluid={true}>
                <Row>
                    
                   <div>
                       <h1 className="text-center">Category</h1>
                    </div>
                </Row>
            </Container>
          
         
        </Fragment>
    );
  }
 
}
export default Category;