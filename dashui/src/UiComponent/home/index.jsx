import React, { Fragment} from 'react';
import { Container,Row} from 'reactstrap';
import i18next from 'i18next';

import Slider from './slider';
import ChooseStone from './chooseStone';
import ChooseEngagement from './ChooseEngagement';
import BuildModal from './buildModal';
import Latest from './latest';
import BeforeFooter from './beforeFooter';

class Home extends React.Component
{

  constructor()
  {
    super()
  }

  render()
  {
    
    return(
      <Fragment>
         <Slider />
         <ChooseStone />
         <ChooseEngagement />
         <BuildModal />
         <Latest />
         <BeforeFooter />
      </Fragment>
    );
  }
 
}
export default Home;