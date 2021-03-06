import React, { Fragment,useState,useEffect,useCallback } from 'react';
import {Form,Row} from 'reactstrap'
import {X} from 'react-feather'
import {MENUITEMS} from '../sidebar/menu'
import LeftHeader from './leftbar'
import RightHeader from './rightbar'

import { HashRouter as Router,Route,Switch,Redirect,Link} from 'react-router-dom'
import Signin from '../../auth/signin'

import axios from 'axios'

const token = localStorage.getItem('_token')||'';
axios.defaults.headers.common['Authorization']=`Bearer ${token}`;



const Header = (props) => {

  // eslint-disable-next-line
  const [mainmenu, setMainMenu] = useState(MENUITEMS);
  const [searchValue, setsearchValue] = useState('');
  // eslint-disable-next-line
  const [searchResult, setSearchResult] = useState(false);
  // eslint-disable-next-line
  const [searchResultEmpty, setSearchResultEmpty] = useState(false);

  const escFunction = useCallback((event) => {
    if(event.keyCode === 27) {
      setsearchValue('')
    }
  }, []);

   const check = ()=>
  {
   let data =  axios.post("admin-auth/me")
    .then(function(response) {
    }).catch(function(error) {
        localStorage.setItem('user',null)
        window.location.href=process.env.PUBLIC_URL+'/#/admin/login';
        
    })

  }

  useEffect(() => {
      check()
    document.addEventListener("keydown", escFunction, false);
    return () => {
        document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  const handleSearchKeyword = (keyword) => {
    keyword ? addFix() : removeFix()
    const items = [];
    setsearchValue(keyword)
    mainmenu.map(menuItems => {
      menuItems.Items.filter(mItems => {
        if (mItems.title.toLowerCase().includes(keyword) && mItems.type === 'link') {
            items.push(mItems);
        }
        if (!mItems.children) return false
        mItems.children.filter(subItems => {
            if (subItems.title.toLowerCase().includes(keyword) && subItems.type === 'link') {
                subItems.icon = mItems.icon
                items.push(subItems);
            }
            if (!subItems.children) return false
            subItems.children.filter(suSubItems => {
                if (suSubItems.title.toLowerCase().includes(keyword)) {
                    suSubItems.icon = mItems.icon
                    items.push(suSubItems);
                }
                return suSubItems
            })
            return subItems
        })
        checkSearchResultEmpty(items)
        setsearchValue(items);
        return mItems
    });
        return menuItems
  });
  }

  const checkSearchResultEmpty = (items) => {
      if (!items.length) {
          setSearchResultEmpty(true);
          document.querySelector(".empty-menu").classList.add('is-open');
      } else {
          setSearchResultEmpty(false);
          document.querySelector(".empty-menu").classList.remove('is-open');
      }
  }

  const addFix = () => {
      setSearchResult(true);
      document.querySelector(".Typeahead-menu").classList.add('is-open');
      if(localStorage.getItem('layout_version') === 'dark-only'){
        document.body.className="dark-only offcanvas"
      }else{
        document.body.className="offcanvas"
      }
  }

  const removeFix = () => { 
      setSearchResult(false)
      setsearchValue('')
      document.querySelector(".Typeahead-menu").classList.remove('is-open');
      if(localStorage.getItem('layout_version') === 'dark-only'){
        document.body.className="dark-only"
      }else{
        document.body.className="light"
      }
  }

  return (
      <Fragment>
        <div className="page-main-header">
           <Row className="main-header-right m-0">
           <Form className="form-inline search-full" action="#" method="get">
               <div className="form-group w-100">
                  <div className="Typeahead Typeahead--twitterUsers">
                      <div className="u-posRelative">
                        <input 
                            className="Typeahead-input form-control-plaintext w-100" 
                            id="demo-input" 
                            type="search" 
                            placeholder="Search alhabal .."
                            defaultValue={searchValue}
                            onChange={(e) => handleSearchKeyword(e.target.value)}
                        />
                        <div className="spinner-border Typeahead-spinner" role="status">
                          <span className="sr-only">Loading...</span>
                        </div><X className="close-search" onClick={() => document.querySelector(".search-full").classList.remove("open")}/>
                      </div>

                       <div className="Typeahead-menu custom-scrollbar" id="search-outer">
                        {searchValue ?
                            searchValue.map((data, index) => {
                                return (
                                    <div className="ProfileCard u-cf" key={index}>
                                        <div className="ProfileCard-avatar">
                                            <data.icon />
                                        </div>
                                        <div className="ProfileCard-details">
                                            <div className="ProfileCard-realName">
                                                <Link 
                                                    to={data.path} 
                                                    className="realname" 
                                                    onClick={removeFix}
                                                >
                                                    {data.title}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : ''
                        }
                     </div>
                    <div className="Typeahead-menu empty-menu">
                        <div className="tt-dataset tt-dataset-0">
                            <div className="EmptyMessage">
                                Opps!! There are no result found.
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </Form> 
            <LeftHeader/>
            <RightHeader/>
            </Row>

        </div>
    </Fragment>
  );
}

export default Header;