import React, { Fragment} from 'react';
import { Container,Row} from 'reactstrap';
import i18next from 'i18next';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import axios from 'axios'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Home extends React.Component
{

  constructor()
  {
    super()
    this.state=
      {
        showHideSidenav:'hidden',
        typeDown:'',
        categories:''
      }
  }

  componentDidMount()
    {
      this.getCategories()
    }

  async getCategories()
    {
     
      let data = await axios.get("categories")
      .then(function(response) {
        return response.data.data
      }).catch(function(error) {
        // toast.error("Config Categories does't exists!")
        console.log(error)
      })
      this.setState({categories: data});
    }

  hideDown(type)
  {
    
    var css = (this.state.showHideSidenav === "hidden") ? "show" : "hidden";
    this.setState({"showHideSidenav":css});
    this.setState({typeDown:type})
  }

 handleSetLanguage (key)
  {
    localStorage.setItem('lang',key)
    window.location.reload();
  };

  render()
  {
    
    return(
      <Fragment>
          <div className="modal fade" id="sign_in" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-modal="true">
                 <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header row">
                    <ul className="nav nav-pills row" id="pills-tab" role="tablist">
                      <li className="nav-item col">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">تسجيل الدخول</a>
                      </li>
                      <li className="nav-item col">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">انشاء حساب</a>
                      </li>
                    </ul>
              </div>
              <div className="modal-body">
                 <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade active show" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                      <form>
                        <h5 className="form-group">مرحبا بعودتك ..</h5>
                        <div className="form-group">
                            <input type="email" className="form-control email" id="inputAddress" required="" placeholder="البريد الالكتروني" />
                        </div>

                        <div className="form-group">
                            <input type="password" className="form-control password" required="" id="inputAddress" placeholder="كلمة المرور" />
                        </div>
                          <div className="form-group">
                            <a href="#" className="f-size">هل نسيت كلمة المرور؟</a>
                          </div>
                          <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">تسجيل الدخول</button>
                          </div>
                          <div className="form-group f-size text-center">
                            ليس لديك حساب؟ <a href="#">انشاء حساب</a>
                          </div>
                          <div className="form-group text-center line-or">
                              <div className="flex">
                                  <hr className="line" />
                                <div className="text">او</div>
                                  <hr className="line" />
                              </div>
                          </div>
                          <div className="form-group register-link">
                              <div className="row">
                                  <div className="col">
                                      <button className="btn btn-primary btn-block"><svg viewBox="5 -5 30 30" enable-background="new 5 -5 30 30" className="_provider-button_logo__331N7 __web-inspector-hide-shortcut__" title="facebook"><path fill="#3C5B9A" d="M33.3-5H6.7C5.7-5 5-4.3 5-3.3v26.7c0 .9.7 1.6 1.7 1.6H21V13.4h-3.9V8.9H21V5.6c0-3.9 2.4-6 5.8-6 1.7 0 3.1.1 3.5.2v4h-2.4c-1.9 0-2.2.9-2.2 2.2v2.9h4.5l-.6 4.5h-3.9V25h7.6c.9 0 1.7-.7 1.7-1.7V-3.3c0-1-.7-1.7-1.7-1.7z"></path></svg> <span> سجل بالفيسبوك</span></button>
                                  </div>
                                  <div className="col">
                                      <button className="btn btn-primary btn-block"><svg viewBox="5 -5 30 30" enable-background="new 5 -5 30 30" className="_provider-button_logo__331N7" title="google"><path fill="#fff" d="M15.3-4.2C11.6-3 8.4-.2 6.6 3.2 6 4.5 5.6 5.7 5.3 7c-.7 3.3-.2 6.7 1.3 9.7 1 1.9 2.4 3.7 4.2 5 1.6 1.3 3.5 2.2 5.6 2.7 2.6.7 5.3.7 7.8.1 2.3-.5 4.5-1.6 6.3-3.2 1.9-1.7 3.2-3.9 3.9-6.2.8-2.6.9-5.3.4-8-4.8 0-9.6 0-14.4 0 0 2 0 3.9 0 5.9 2.8 0 5.6 0 8.3 0-.3 1.9-1.5 3.6-3.1 4.6-1 .7-2.2 1.1-3.4 1.3-1.2.2-2.5.2-3.7 0-1.2-.2-2.4-.7-3.4-1.4-1.6-1.1-2.9-2.8-3.5-4.6-.7-1.9-.7-4 0-5.8.5-1.3 1.2-2.5 2.2-3.5 1.2-1.2 2.8-2.1 4.6-2.5 1.5-.3 3-.2 4.5.2 1.2.4 2.4 1 3.3 1.9.9-.9 1.9-1.8 2.8-2.8.5-.5 1-1 1.5-1.5-1.4-1.3-3.1-2.3-4.9-3-3.3-1.2-7-1.2-10.3-.1z"></path><path fill="#EA4335" d="M15.3-4.2c3.3-1.1 7-1.1 10.3.1 1.8.7 3.5 1.7 4.9 3-.5.5-1 1-1.5 1.5-.9.9-1.9 1.8-2.8 2.8-.9-.9-2.1-1.5-3.3-1.9-1.4-.4-3-.5-4.5-.2-1.7.4-3.3 1.2-4.6 2.5-1 1-1.8 2.2-2.2 3.5-1.7-1.3-3.3-2.5-5-3.8 1.8-3.5 5-6.2 8.7-7.5z"></path><path fill="#FBBC05" d="M5.3 7c.3-1.3.7-2.6 1.3-3.7 1.7 1.3 3.3 2.5 5 3.8-.7 1.9-.7 4 0 5.8-1.7 1.3-3.3 2.5-5 3.8-1.5-2.9-2-6.4-1.3-9.7z"></path><path fill="#4285F4" d="M20.3 7.2c4.8 0 9.6 0 14.4 0 .5 2.6.4 5.4-.4 8-.7 2.4-2 4.6-3.9 6.2-1.6-1.2-3.2-2.5-4.9-3.7 1.6-1.1 2.7-2.8 3.1-4.6-2.8 0-5.6 0-8.3 0 0-2 0-4 0-5.9z"></path><path fill="#34A853" d="M6.6 16.7c1.7-1.3 3.3-2.5 5-3.8.6 1.8 1.9 3.5 3.5 4.6 1 .7 2.2 1.2 3.4 1.4 1.2.2 2.4.2 3.7 0 1.2-.2 2.4-.6 3.4-1.3 1.6 1.2 3.2 2.5 4.9 3.7-1.8 1.6-3.9 2.7-6.3 3.2-2.6.6-5.3.6-7.8-.1-2-.5-3.9-1.5-5.6-2.7-1.7-1.3-3.2-3-4.2-5z"></path></svg> <span> سجل بالجوجل</span></button>
                                  </div>
                              </div>
                            
                            
                          </div>
                      </form>
                  </div>
                  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                          <form>
                            <h5 className="form-group">انشاء حساب جديد ..</h5>
                            <div className="form-group">
                                <input type="text" className="form-control" id="inputAddress" placeholder="الاسم" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="inputAddress" placeholder="البريد الالكتروني" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="inputAddress" placeholder="كلمة المرور" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="inputAddress" placeholder="رقم الهاتف" />
                            </div>
                            <div className=" form-group custom-control f-size custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="customCheck1" /> 
                              <label className="custom-control-label" for="customCheck1">أوافق على جميع الشروط</label>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">انشاء حساب</button>
                            </div>
                          <div className="form-group text-center f-size">
                             لديك حساب بالفعل? <a href="#"> تسجيل دخول</a>
                          </div>
                          <div className="form-group text-center line-or">
                              <div className="flex">
                                  <hr className="line" />
                                <div className="text">او</div>
                                  <hr className="line" />
                              </div>
                          </div>
                          <div className="form-group register-link">
                              <div className="row">
                                  <div className="col">
                                      <button className="btn btn-primary btn-block"><svg viewBox="5 -5 30 30" enable-background="new 5 -5 30 30" className="_provider-button_logo__331N7 __web-inspector-hide-shortcut__" title="facebook"><path fill="#3C5B9A" d="M33.3-5H6.7C5.7-5 5-4.3 5-3.3v26.7c0 .9.7 1.6 1.7 1.6H21V13.4h-3.9V8.9H21V5.6c0-3.9 2.4-6 5.8-6 1.7 0 3.1.1 3.5.2v4h-2.4c-1.9 0-2.2.9-2.2 2.2v2.9h4.5l-.6 4.5h-3.9V25h7.6c.9 0 1.7-.7 1.7-1.7V-3.3c0-1-.7-1.7-1.7-1.7z"></path></svg> <span> سجل بالفيسبوك</span></button>
                                  </div>
                                  <div className="col">
                                      <button className="btn btn-primary btn-block"><svg viewBox="5 -5 30 30" enable-background="new 5 -5 30 30" className="_provider-button_logo__331N7" title="google"><path fill="#fff" d="M15.3-4.2C11.6-3 8.4-.2 6.6 3.2 6 4.5 5.6 5.7 5.3 7c-.7 3.3-.2 6.7 1.3 9.7 1 1.9 2.4 3.7 4.2 5 1.6 1.3 3.5 2.2 5.6 2.7 2.6.7 5.3.7 7.8.1 2.3-.5 4.5-1.6 6.3-3.2 1.9-1.7 3.2-3.9 3.9-6.2.8-2.6.9-5.3.4-8-4.8 0-9.6 0-14.4 0 0 2 0 3.9 0 5.9 2.8 0 5.6 0 8.3 0-.3 1.9-1.5 3.6-3.1 4.6-1 .7-2.2 1.1-3.4 1.3-1.2.2-2.5.2-3.7 0-1.2-.2-2.4-.7-3.4-1.4-1.6-1.1-2.9-2.8-3.5-4.6-.7-1.9-.7-4 0-5.8.5-1.3 1.2-2.5 2.2-3.5 1.2-1.2 2.8-2.1 4.6-2.5 1.5-.3 3-.2 4.5.2 1.2.4 2.4 1 3.3 1.9.9-.9 1.9-1.8 2.8-2.8.5-.5 1-1 1.5-1.5-1.4-1.3-3.1-2.3-4.9-3-3.3-1.2-7-1.2-10.3-.1z"></path><path fill="#EA4335" d="M15.3-4.2c3.3-1.1 7-1.1 10.3.1 1.8.7 3.5 1.7 4.9 3-.5.5-1 1-1.5 1.5-.9.9-1.9 1.8-2.8 2.8-.9-.9-2.1-1.5-3.3-1.9-1.4-.4-3-.5-4.5-.2-1.7.4-3.3 1.2-4.6 2.5-1 1-1.8 2.2-2.2 3.5-1.7-1.3-3.3-2.5-5-3.8 1.8-3.5 5-6.2 8.7-7.5z"></path><path fill="#FBBC05" d="M5.3 7c.3-1.3.7-2.6 1.3-3.7 1.7 1.3 3.3 2.5 5 3.8-.7 1.9-.7 4 0 5.8-1.7 1.3-3.3 2.5-5 3.8-1.5-2.9-2-6.4-1.3-9.7z"></path><path fill="#4285F4" d="M20.3 7.2c4.8 0 9.6 0 14.4 0 .5 2.6.4 5.4-.4 8-.7 2.4-2 4.6-3.9 6.2-1.6-1.2-3.2-2.5-4.9-3.7 1.6-1.1 2.7-2.8 3.1-4.6-2.8 0-5.6 0-8.3 0 0-2 0-4 0-5.9z"></path><path fill="#34A853" d="M6.6 16.7c1.7-1.3 3.3-2.5 5-3.8.6 1.8 1.9 3.5 3.5 4.6 1 .7 2.2 1.2 3.4 1.4 1.2.2 2.4.2 3.7 0 1.2-.2 2.4-.6 3.4-1.3 1.6 1.2 3.2 2.5 4.9 3.7-1.8 1.6-3.9 2.7-6.3 3.2-2.6.6-5.3.6-7.8-.1-2-.5-3.9-1.5-5.6-2.7-1.7-1.3-3.2-3-4.2-5z"></path></svg> <span> سجل بالجوجل</span></button>
                                  </div>
                              </div>
                            
                            
                          </div>
                          </form>
                      </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
            </div>
           <div className="part-cart">
            
                 <h5><img className="close-cart" src="imgs/close.png" alt="close" /> عربتك</h5>
            <div className="all-shops">
                    <div className="media">
                        <img src="imgs/Nk2.jpg" className="mr-3 img-item" alt="..." />
                        <div className="media-body">
                            <h6 className="mt-0">سلسلة</h6>
                            <p>30$</p>
                            <span><i className="fas fa-plus"></i> 1 <i className="fas fa-minus"></i></span>
                            
                        </div>
                    <img className="remove-item" src="imgs/close@2x.png" alt="close" />
                    </div>
                <div className="media">
                  <img src="imgs/pro13.jpg" className="mr-3 img-item" alt="..." />
                  <div className="media-body">
                    <h6 className="mt-0">خاتم</h6>
                      <p>50$</p>
                    <span><i className="fas fa-plus"></i> 2 <i className="fas fa-minus"></i></span>
                    
                  </div>
                  <img className="remove-item" src="imgs/close@2x.png" alt="close" />
                </div>
                
                
                <hr />
                <h4 className="tot-price">المجموع : 80:00$</h4>
                <div className="row div-btn">
                    <button type="button" className="btn btn-dark">شراء</button>
                    <a className="btn btn-outline-dark">ذهاب الي السلة</a>
                </div>
            </div>
        </div>
           <div className="over-body"></div>
           <ul className="nav pad-nav">
            <div className="container nav">
                <div className="registration rt-side">
                    <a href="#" className="trans-2s">دخول</a>
                      <span> / </span>
                    <a href="#" className="trans-2s">تسجيل</a>
                </div>
                <div className="nav lt-side">
                    <form className="form-inline my-2 my-lg-0 mr-3">
                        <input className="form-control mr-sm-" type="search" placeholder="ابحث هنا.." aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                    </form>

                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <a className="nav-link btn-lang mr-1" id="pills-home-tab" data-toggle="pill" href="#" role="tab" aria-controls="pills-home" aria-selected="true" onClick={() => this.handleSetLanguage('en')}>EN</a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a className="nav-link active btn-lang" id="pills-profile-tab" data-toggle="pill" href="#" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={() => this.handleSetLanguage('ar')}>AR</a>
                      </li>

                    </ul>
                </div>
            </div>
        </ul>
       
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">

              <Link className="navbar-brand" to="/">
                <img src={require('./../../uiAssets/imgs/logo1.png')} alt="logo" />
              </Link>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.hideDown.bind(this,1)}  href="#">{i18next.t('ourProducts')} <i className="fas fa-angle-down"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">{i18next.t('buildModel')}</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">{i18next.t('soultere')}</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">{i18next.t('wasata')}</a>
                  </li>
                  
                  <li className="nav-item">
                    <a className="nav-link" href="favorite.html"><i className="fas fa-heart"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="modal" data-target="#sign_in" data-placement="bottom" href="#"><i className="fas fa-user-alt"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link btn-carts" href="#"><span className="count">2</span> <i className="fas fa-shopping-bag"></i></a>
                  </li>
                </ul>
                  
              </div>
              <div className={this.state.typeDown == 1?"hov-navlink quick-link " +this.state.showHideSidenav:'hov-navlink quick-link  hidden'}>
                <div className="container">
                    <div className="slide-dropdown">
                        <div className="close-mob" onClick={this.hideDown}>
                            <i className="fas fa-times"></i>
                        </div>

                       {!this.state.categories ?
                         <div className="text-center">
                           <h4 className="p-5">{i18next.t('pleasewait')} ... </h4>
                          </div>
                         :
                        <OwlCarousel 
                        loop
                        autoplay
                        nav
                        margin={20}
                        className="owl-theme">
                            <div className="owl-stage-outer">
                              <div className="owl-stage">
                                {this.state.categories.map((data, i)=>(
                                    <div className="owl-item active">
                                        <div className="item">
                                          <Link to={"/category/"+data.id}>
                                              <div className="card">
                                                  <img src={data.image} alt="..." />
                                                  <div className="mt-2">
                                                    <h6 className="s-color">{data.name}</h6>
                                                  </div>
                                              </div>
                                          </Link>
                                        </div>
                                    </div>
                                ))}
                              </div>
                            </div>
                        </OwlCarousel>
                      }
                    </div>
                </div>
            </div>
              
            </div>
        </nav>
       
         
        </Fragment>
    );
  }
 
}
export default Home;