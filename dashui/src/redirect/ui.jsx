
import { Container,Row} from 'reactstrap';
import i18next from 'i18next';
import { CSSTransition,TransitionGroup } from 'react-transition-group'
import React, { Fragment,useState,Suspense,useEffect } from 'react'



import '../uiAssets/app.css';

import UiApp from '../UiComponent/app';

import { Provider } from 'react-redux';
import { HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import {useHistory} from 'react-router-dom'


import {uiroutes} from '../route/uiroute'

import axios from 'axios'

class UiRoutes extends React.Component
{

  constructor()
  {
    super()
  }


  

  render()
  {
    
    return(
        <Fragment>
        <Provider store={'/'}>
        <Router  history={'/'} basename={`/`}>
  <Switch>
   
   
  
  
  
     <UiApp>
         
         <TransitionGroup>
          {uiroutes.map(({ path, Component }) => (
              <Route key={path} exact   path={`${process.env.PUBLIC_URL}${path}`}>
                  {({ match }) => ( 
                      <CSSTransition 
                      in={match != null}
                      timeout={100}
                      unmountOnExit
                      >
                      <div><Component/></div>
                      </CSSTransition> 
                  )}
              </Route>
              ))}
        </TransitionGroup>   
     </UiApp>
      

     </Switch> 
  </Router>
        </Provider>
      </Fragment>
    );
  }
 
}
export default UiRoutes;