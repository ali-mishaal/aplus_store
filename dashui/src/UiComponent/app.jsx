import React, { Fragment } from 'react';
import Header from './header'
import Footer from './footer'
import {ToastContainer} from 'react-toastify'
import {
  BrowserRouter as Router
} from 'react-router-dom';


const UiApp=({children})=> {
  console.warn = () => {}
  return (
    <Fragment>
      <Router>
           <Header/>
          
               {children}
            
            <Footer/>
      
        <ToastContainer/>
      </Router>
    </Fragment>
  );
}


export default UiApp;