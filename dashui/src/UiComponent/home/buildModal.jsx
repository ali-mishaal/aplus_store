import React, { Fragment} from 'react';
import { Container,Row} from 'reactstrap';
import i18next from 'i18next';
import axios from 'axios'
import {BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class BuildModal extends React.Component
{

  constructor()
  {
    super()

    this.state=
      {
        categoriesLimit:''
      }
  }

  componentDidMount()
  {
    this.getCategoriesLimit()
  }

  async getCategoriesLimit()
    {
     
      let data = await axios.get("getRandCategories")
      .then(function(response) {
        return response.data.data
      }).catch(function(error) {
        // toast.error("Config Categories does't exists!")
        console.log(error)
      })
      this.setState({categoriesLimit: data});
    }

  render()
  {
    
    return(
      <Fragment>
          <section className="text-center build-model pt-5">
            <div className="container">
                <h2 className="bold s-color">{i18next.t('buildmodeleasily')}</h2>
                <div className="row justify-content-center">
                {!this.state.categoriesLimit ?
                         <div className="text-center">
                           <h4 className="p-5">{i18next.t('pleasewait')} ... </h4>
                          </div>
                         :

                         this.state.categoriesLimit.map((data, i)=>(
                           <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 h-100">
                        <Link to={"/category/"+data.id}>
                            <div className="card mt-5">
                              <img src={data.image} className="card-img-top" alt="..." />
                              <div className="card-body">
                         <h6 className="bold s-color">{data.name}</h6>
                              </div>
                            </div>
                        </Link>
                    </div>
                         ))
                  }
                </div>

                   
            </div>
        </section>
        </Fragment>
    );
  }
 
}
export default BuildModal;