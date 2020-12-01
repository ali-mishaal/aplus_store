import React, { Fragment,useState,Suspense,useEffect } from 'react'
import ReactDOM from 'react-dom';





import App from './components/app'
import UiApp from './UiComponent/app'

import firebase_app from './data/base';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store'
import { HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

import { CSSTransition,TransitionGroup } from 'react-transition-group'

import {routes} from './route';
import {uiroutes} from './route/uiroute'

import ConfigDB  from './data/customizer/config'
import './i18next';
import i18next from 'i18next';
import axios from 'axios'


// Signin page
import Signin from './auth/signin'

// Authentication
import Login from "./pages/authentication/login"

// import LoginWithBgImage from "./pages/authentication/loginWithBgImage"
// import LoginWithBgVideo from "./pages/authentication/loginWithBgVideo"
// import Register from "./pages/authentication/register"
// import RegisterWithBgImage from "./pages/authentication/registerWithBgImage"
// import RegisterWithBgVideo from "./pages/authentication/registerWithBgVideo"
// import UnlockUser from "./pages/authentication/unlockUser"
// import Forgetpwd from "./pages/authentication/forgetpwd"
// import Resetpwd from "./pages/authentication/resetpwd"

// Error page
// import Error400 from "./pages/errors/error400"
// import Error401 from "./pages/errors/error401"
// import Error403 from "./pages/errors/error403"
// import Error404 from "./pages/errors/error404"
// import Error500 from "./pages/errors/error500"
// import Error503 from "./pages/errors/error503"

// Comming soo
// import Comingsoon from "./pages/comingSoon/comingsoon"
// import ComingsoonImg from "./pages/comingSoon/comingsoonImg"
// import ComingsoonVideo from "./pages/comingSoon/comingsoonVideo"

// Maintenanc
// import Maintenance from "./pages/maintenance"
const lang = localStorage.getItem('lang')||'en';
const token = localStorage.getItem('_token')||'';

i18next.changeLanguage(lang)

axios.defaults.headers.common['Accept-Language']=lang;
axios.defaults.baseURL='http://127.0.0.1:8000/api/';
   

const Root = (props) =>  {
 
  const user =()=> localStorage.getItem('user')||null
  const [anim, setAnim] = useState("");
  const animation = localStorage.getItem("animation") || ConfigDB.data.router_animation || 'fade'
  const abortController = new AbortController();
  const [currentUser, setCurrentUser] = useState(user);


  useEffect(() => {
  
    if(window.location.href.indexOf('dashboard') > -1 || window.location.href.indexOf('admin/login')>-1) 
    {
      require('./index.scss')
    }
     
    if(window.location.href.indexOf('dashboard') == -1 && window.location.href.indexOf('admin/login')==-1) 
    {
      require('./uiAssets/app.css');
    }

    if(window.location.href.indexOf('dashboard') == -1 && window.location.href.indexOf('admin/login')==-1 && lang =='ar') 
    {
      require('./uiAssets/css/styleRtl.css');
    }

    setAnim(animation)
    setCurrentUser(localStorage.getItem('user'));
    console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
    console.disableYellowBox = true;
    return function cleanup() {
        abortController.abort();
      }
    // eslint-disable-next-line
  }, []);
  

  return(
    <Fragment>
      <Provider store={store}>
      <Router  history={'/'} basename={`/`}>
<Switch>
  <Route  path={`${process.env.PUBLIC_URL}/admin/login`} component={Signin}></Route>
 
       {window.location.href.indexOf('dashboard') > -1 && 
         
          <App>
            <TransitionGroup>
              {routes.map(({ path, Component }) => (
              <Route key={path} exact   path={`${process.env.PUBLIC_URL}${path}`}>
                  {({ match }) => ( 
                      <CSSTransition 
                      in={match != null}
                      timeout={100}
                      classNames={anim} 
                      unmountOnExit
                      >
                      <div><Component/></div>
                      </CSSTransition> 
                  )}
              </Route>
              ))}

            </TransitionGroup>  
           </App>
        }
        <UiApp>
        <TransitionGroup>
          {uiroutes.map(({ path, Component }) => (
              <Route key={path} exact   path={`${process.env.PUBLIC_URL}${path}`}>
                  {({ match }) => ( 
                      <CSSTransition 
                      in={match != null}
                      timeout={100}
                      classNames={anim} 
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
    )
  
}

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={(<div>loading......</div>)}>
      
    <Root />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);


 