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

class Latest extends React.Component
{

  constructor()
  {
    super()
    this.state=
      {
        latestProducts:''
      }
  }

  componentDidMount()
    {
      this.getLatestProducts()
    }

  async getLatestProducts()
    {
     
      let data = await axios.get("get_latest_products")
      .then(function(response) {
        return response.data.data
      }).catch(function(error) {
        // toast.error("Config Categories does't exists!")
        console.log(error)
      })
      this.setState({latestProducts: data});
    }

  render()
  {
    
    return(
      <Fragment>
       
       <section className="new-product pd-sec pd-norm-sec text-center">
           <div className="container">
                 <h2 className="mb-5 bold s-color">{i18next.t('latestproducts')}</h2>

          {!this.state.latestProducts ?
                  <div className="text-center">
                    <h4 className="p-5">{i18next.t('pleasewait')} ... </h4>
                  </div>
                  :
            <OwlCarousel 
            loop
            autoplay
            nav
            className="owl-carousel owl-theme owl-loaded owl-drag aos-init aos-animate" >
              <div className="owl-stage-outer">
                  <div className="owl-stage">
                  {this.state.latestProducts.map((data, i)=>(
                      <div className="owl-item active">
                          <div className="item">
                             <div className="card">
                              <img src={data.image} className="card-img-top" alt="..." />
                              <div className="card-body">
                                <h5 className="card-title">{data.name}</h5>
                                <p className="card-text">
                                  {data.description}
                                </p>
                                  <Link to={"/product/"+data.id} className="btn">{i18next.t('more')}</Link>
                              </div>
                            </div>
                          </div>
                      </div>
                  ))}
                  </div>
                </div>
            </OwlCarousel> 
            }
           </div>
        </section>
         
        </Fragment>
    );
  }
 
}
export default Latest;