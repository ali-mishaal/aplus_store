import React, { Fragment, useState, useEffect } from 'react';
import man from '../../assets/images/dashboard/profile.jpg'
import { FileText, LogIn, Mail, User, Search } from 'react-feather';
import { useHistory } from 'react-router-dom'
import firebase_app from '../../data/base'
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  translate,
} from 'react-switch-lang';

import en from '../../assets/i18n/en.json';
import es from '../../assets/i18n/es.json';
import pt from '../../assets/i18n/pt.json';
import fr from '../../assets/i18n/fr.json';
import du from '../../assets/i18n/du.json';
import cn from '../../assets/i18n/cn.json';
import ae from '../../assets/i18n/ae.json';

import { useTranslation } from 'react-i18next';

setTranslations({ en, es, pt, fr, du, cn, ae });
setDefaultLanguage('en');
setLanguageCookie();

const Rightbar = (props) => {

  // const { t, i18n } = useTranslation();
  const user =()=> localStorage.getItem('user')||null
  const history = useHistory();
  const [profile, setProfile] = useState('');
  const [name, setName] = useState(user)
  const [searchresponsive, setSearchresponsive] = useState(false)
  const [langdropdown, setLangdropdown] = useState(false)
  const [moonlight, setMoonlight] = useState(false)
  // const [selected, setSelected] = useState("en")

  function handleSetLanguage (key)
  {
    localStorage.setItem('lang',key)
    window.location.reload();
  };

  useEffect(() => {
    setProfile(localStorage.getItem('profileURL' || man));
    if(localStorage.getItem("layout_version") === "dark-only"){
      setMoonlight(true)
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem('profileURL')
    firebase_app.auth().signOut()
  }

  // const RedirectToChats = () => {
  //   history.push(`${process.env.PUBLIC_URL}/app/chat-app`)
  // }

  // const RedirectToCart = () => {
  //   history.push(`${process.env.PUBLIC_URL}/app/ecommerce/cart`)
  // }

  const UserMenuRedirect = (redirect) => {
    history.push(redirect)
  }


  //full screen function
  function goFull() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  const SeacrhResposive = (searchresponsive) => {
    if (searchresponsive) {
      setSearchresponsive(!searchresponsive)
      document.querySelector(".search-full").classList.add("open");
      document.querySelector(".more_lang").classList.remove("active");
    } else {
      setSearchresponsive(!searchresponsive)
      document.querySelector(".search-full").classList.remove("open");
    }
  }

  const LanguageSelection = (language) => {
    if (language) {
      setLangdropdown(!language)
    } else {
      setLangdropdown(!language)
    }
  }

  const MoonlightToggle = (light) => {
    if (light) {
      setMoonlight(!light)
      document.body.className = "light"
      localStorage.setItem('layout_version', 'light');
    } else {
      setMoonlight(!light)
      document.body.className = "dark-only"
      localStorage.setItem('layout_version', 'dark-only');
    }
  }

  const lang = localStorage.getItem('lang')||'en';
  return (
    
    <Fragment>
      <div className="nav-right col-8 pull-right right-menu">
        <ul className="nav-menus">
          <li className="language-nav">
            <div className={`translate_wrapper ${langdropdown ? 'active' : ''}`}>
              <div className="current_lang">
                <div className="lang" onClick={() => LanguageSelection(langdropdown)}>
                  <i className={`flag-icon flag-icon-${lang=='ar'?'ae':'us'}`}></i>
                  <span className="lang-txt">{lang}</span>
                </div>
              </div>
              <div className={` more_lang ${langdropdown ? 'active' : ''}`}>

                <div className="lang" onClick={() => handleSetLanguage('en')}>
                  <i className="flag-icon flag-icon-us"></i><span className="lang-txt">English<span> (US)</span></span>
                </div>

                <div className="lang" onClick={() => handleSetLanguage('ar')}>
                  <i className="flag-icon flag-icon-ae"></i><span className="lang-txt">لعربية <span> (ae)</span></span>
                </div>

              </div>
            </div>
          </li>
          <li><span className="header-search"><Search onClick={() => SeacrhResposive(searchresponsive)} /></span></li>
        {/* <li className="onhover-dropdown">
            <div className="notification-box"><Bell /><span className="badge badge-pill badge-secondary">2</span></div>
            <ul className="notification-dropdown onhover-show-div">
              <li className="bg-primary">
                <h6 className="f-18 mb-0">Notitication</h6>
                <p className="mb-0">You have 4 new notification</p>
              </li>
              <li>
                <p className="mb-0"><i className="fa fa-circle-o mr-3 font-primary"> </i>Delivery processing <span className="pull-right">10 min.</span></p>
              </li>
              <li>
                <p className="mb-0"><i className="fa fa-circle-o mr-3 font-success"></i>Order Complete<span className="pull-right">1 hr</span></p>
              </li>
              <li>
                <p className="mb-0"><i className="fa fa-circle-o mr-3 font-info"></i>Tickets Generated<span className="pull-right">3 hr</span></p>
              </li>
              <li>
                <p className="mb-0"><i className="fa fa-circle-o mr-3 font-danger"></i>Delivery Complete<span className="pull-right">6 hr</span></p>
              </li>
              <li><button className="btn btn-primary">Check all notification</button>
              </li>
            </ul>
          </li>  */}
          <li>
            <div className="mode" onClick={() => MoonlightToggle(moonlight)}><i className={`fa ${moonlight ? 'fa-lightbulb-o' : 'fa-moon-o'}`}></i></div>
          </li>
          {/* <li className="cart-nav onhover-dropdown">
            <div className="cart-box"><ShoppingCart /><span className="badge badge-pill badge-primary">2</span></div>
            <ul className="cart-dropdown chat-dropdown onhover-show-div">
              <li className="bg-primary text-center">
                <h6 className="f-18">Shoping cart</h6>
                <p className="mb-0">You have 3 items in your cart  </p>
              </li>
              <li className="mt-0">
                <div className="media" onClick={RedirectToCart}><img className="img-fluid rounded-circle mr-3 img-60" src={require("../../assets/images/ecommerce/01.jpg")} alt="" />
                  <div className="media-body"><span>Boy's T-shirt</span>
                    <p>It is a long established fact that a reader</p>
                    <h6 className="f-12 light-font">1 x $ 299.00</h6>
                  </div>
                  <div className="close-circle"><a href="#javascript"><X /></a></div>
                </div>
              </li> */}
              {/* <li>
                <div className="media" onClick={RedirectToCart}><img className="img-fluid rounded-circle mr-3 img-60" src={require("../../assets/images/ecommerce/02.jpg")} alt="" />
                  <div className="media-body"><span>Girls's T-shirt</span>
                    <p>It is a long established fact that a reader</p>
                    <h6 className="f-12 light-font">1 x $ 199.00</h6>
                  </div>
                  <div className="close-circle"><a href="#javascript"><X /></a></div>
                </div>
              </li>
              <li>
                <div className="media" onClick={RedirectToCart}><img className="img-fluid rounded-circle mr-3 img-60" src={require("../../assets/images/ecommerce/03.jpg")} alt="" />
                  <div className="media-body"><span>Girls's T-shirt</span>
                    <p>It is a long established fact that a reader</p>
                    <h6 className="f-12 light-font">2 x $ 199.00</h6>
                  </div>
                  <div className="close-circle"><a href="#javascript"><X /></a></div>
                </div>
              </li>
              <li>
                <div className="total">
                  <h6 className="mb-0 mt-1">Subtotal : <span className="f-right">$799.00</span></h6>
                </div>
              </li>
              <li>
                <div className="buttons">
                  <h6 className="mb-0">
                    <a className="view-cart" href="#javascript" onClick={RedirectToCart}>View Cart</a>
                    <a className="checkout f-right" href="#javascript">Checkout</a></h6>
                </div>
              </li>
            </ul>
          </li> */}
          {/* <li className="onhover-dropdown"><MessageSquare /> */}
            {/* <ul className="chat-dropdown onhover-show-div">
              <li className="bg-primary text-center">
                <h6 className="f-18 mb-0">Message Box</h6>
                <p className="mb-0">You have 3 new messages </p>
              </li>
              <li onClick={RedirectToChats}>
                <div className="media"><img className="img-fluid rounded-circle mr-3" src={require("../../assets/images/user/1.jpg")} alt="" />
                  <div className="status-circle online"></div>
                  <div className="media-body"><span>Erica Hughes</span>
                    <p>Lorem Ipsum is simply dummy...</p>
                  </div>
                  <p className="f-12 font-success">58 mins ago</p>
                </div>
              </li>
              <li onClick={RedirectToChats}>
                <div className="media"><img className="img-fluid rounded-circle mr-3" src={require("../../assets/images/user/2.jpg")} alt="" />
                  <div className="status-circle online"></div>
                  <div className="media-body"><span>Kori Thomas</span>
                    <p>Lorem Ipsum is simply dummy...</p>
                  </div>
                  <p className="f-12 font-success">1 hr ago</p>
                </div>
              </li>
              <li onClick={RedirectToChats}>
                <div className="media"><img className="img-fluid rounded-circle mr-3" src={require("../../assets/images/user/4.jpg")} alt="" />
                  <div className="status-circle offline"></div>
                  <div className="media-body"><span>Ain Chavez</span>
                    <p>Lorem Ipsum is simply dummy...</p>
                  </div>
                  <p className="f-12 font-danger">32 mins ago</p>
                </div>
              </li>
              <li className="text-center"> <button className="btn btn-primary">View All     </button></li>
            </ul>
          </li> */}
          {/* <li className="maximize"><a className="text-dark" href="#javascript" onClick={goFull}><Minimize /></a></li> */}
          <li className="onhover-dropdown p-0">
            <div className="media profile-media">
              <img className="b-r-10" src={profile} alt="" />
              <div className="media-body"><span>{name}</span>
              </div>
            </div>
            <ul className="profile-dropdown onhover-show-div">
              <li onClick={() => UserMenuRedirect(`${process.env.PUBLIC_URL}/app/users/userProfile`)}><User /><span>Account </span></li>
              <li onClick={() => UserMenuRedirect(`${process.env.PUBLIC_URL}/app/email-app`)}><Mail /><span>Inbox</span></li>
              <li onClick={() => UserMenuRedirect(`${process.env.PUBLIC_URL}/app/todo-app/todo`)}><FileText /><span>Taskboard</span></li>
              <li onClick={logOut}><LogIn /><span>Log Out </span></li>
            </ul>
          </li>
        </ul>
      </div>
    </Fragment>

  );
}
export default translate(Rightbar);