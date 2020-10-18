import React, { Fragment,useState,useEffect } from 'react'
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app'
import firebase_app from './data/base';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'

import { CSSTransition,TransitionGroup } from 'react-transition-group'
import {routes} from './route';
import ConfigDB  from './data/customizer/config'



// Signin page
// import Signin from './auth/signin'

// Authentication
// import Login from "./pages/authentication/login"
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

const Root = (props) =>  {
  const [anim, setAnim] = useState("");
  const animation = localStorage.getItem("animation") || ConfigDB.data.router_animation || 'fade'
  const abortController = new AbortController();
  const [currentUser, setCurrentUser] = useState(true);

  useEffect(() => {

    setAnim(animation)
    firebase_app.auth().onAuthStateChanged(setCurrentUser);
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
        <App>
          
            <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => {
                  return (<Redirect to={`${process.env.PUBLIC_URL}/dashboard/default`} />)
              }} />

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
      </Provider>
    </Fragment>
    )
  
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
 