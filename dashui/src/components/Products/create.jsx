import React,{useEffect,useState,Fragment} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {useForm} from 'react-hook-form'
import {Container,Row,Col,Card,CardHeader,CardBody,Nav,NavItem,NavLink,TabContent,TabPane,Button,Form,FormGroup,Label,Input,InputGroup,InputGroupAddon,InputGroupText} from 'reactstrap'
import axios from 'axios'
import { toast } from 'react-toastify';
import i18next from 'i18next'
import { withRouter } from 'react-router'
import { HashRouter as Router,BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import SimpleMDE from "react-simplemde-editor";


class createProduct extends React.Component
{
  constructor()
    {
      super()
      this.state=
      {
        inputValues:'',
        form:{titlear:"",titleen:"",id:"",image:"",isedit:false},
        category:'',
        measurements:'',
        configs:'',
        LeftLineTab:1,
        RightLineTab:'1',
        token:'',
        toDashboard: false,
        text:'',
        descar:'',
        descen:'',
        categories:'',
        attribute:'',
        attributes:{sss:""},
        inputs: ['input-0']
      }
    }

    //  changeEditor = () => {
    //     setText("Enter text in the area on the left. For more info, click the ? (help) icon in the menu.")
    // }

    componentDidMount()
    {
      
       this.setState({token:localStorage.getItem('_token')})
       setTimeout(
        function() {
          this.getCategory()
          this.getAttribute()
          this.getMeasurement()
        }
        .bind(this),
        3000
       );
       
     
    }

    handleChange=event=>
  {
    const{name,value} = event.target;
    let form = this.state.form;
    form[name] = value
    this.setState({form})
  }

  handleSelectChange=event=>
  {
    const{value} = event.target;
    this.setState({category:value})
  }

  handleSelectAttChange=event=>
  {
      const{name,value,id} = event.target;
      let attibute = this.state.attribute;
      attibute[id] = value
      this.setState({attibute})
  }

  handleChangeDescar = value => {
    this.setState({ descar: value });
  };
  
  handleChangeDescen = value => {
    this.setState({ descen: value });
  };
  

    onSubmit = () => {
      let dataForm = document.getElementById('create')
      let formData = new FormData(dataForm);
      let config = 
      {     
          headers: { 'content-type': 'multipart/form-data' },
          headers: {"Authorization" : `Bearer ${this.state.token}`}
      }
    
      formData.append('descriptionar', this.state.descar)
      formData.append('descriptionen', this.state.descen)

        axios.post("admin/products", 
        formData,config)
            .then(function (response) {
               toast.success(response.data.message)
              
            })
            .catch(function (error) {
              toast.error("created failed !")
            });
            setTimeout(
              function() {
                this.setState({
                  toDashboard: 1
                })
              }
              .bind(this),
              3000
             );
           
            
       
    };

    async getCategory()
    {
     
      let data = await axios.get("admin/category",{ headers: {"Authorization" : `Bearer ${this.state.token}`} })
      .then(function(response) {
        return response.data.data
      }).catch(function(error) {
        // toast.error("Config Categories does't exists!")
        console.log(error)
      })
      setTimeout(
        function() {
          this.setState({categories: data});
        }
        .bind(this),
        3000
       );
      
    }

    async getAttribute()
    {
     
      let data = await axios.get("admin/attributes",{ headers: {"Authorization" : `Bearer ${this.state.token}`} })
      .then(function(response) {
        return response.data.data
      }).catch(function(error) {
        // toast.error("Config Categories does't exists!")
        console.log(error)
      })
      this.setState({attributes: data});
    }

    async getMeasurement()
    {
     
      let data = await axios.get("admin/measurements",
      { headers: {"Authorization" : `Bearer ${this.state.token}`} })
      .then(function(response) {
        return response.data.data
      }).catch(function(error) {
        // toast.error("Config Categories does't exists!")
        console.log(error)
      })
      this.setState({measurements: data});
    }


    appendInput(event) {
    
      var newInput = `input-${this.state.inputs.length}`;
      this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
  }

    render()
  {
    if (this.state.toDashboard === 1) {
      return <Redirect to={`${process.env.PUBLIC_URL}/dashboard/products/products`} />
    }

    if (!this.state.categories ) {
      return <div>please wait ...</div>;
    }
  
    return(
      <Fragment>
          <Breadcrumb parent={i18next.t('createNew')} title={i18next.t('Products')}/>
      <Container fluid={true}>
          <Row>
           <Col  sm="12" xl="6 xl-100">
              <Card>
                <CardBody>
                  <Row>
                    <Col sm="3"className="tabs-responsive-side">
                    <Nav className="flex-column nav-pills border-tab nav-left" >
        
                      <NavItem>
                          <NavLink href="#javascript"  
                          className={this.state.LeftLineTab === 1 ? 'active' : ''} 
                          onClick={() => this.setState({LeftLineTab:1})}>
                            {i18next.t('maindata')}
                            </NavLink>
                      </NavItem>

                      <NavItem>
                          <NavLink href="#javascript"  
                          className={this.state.LeftLineTab === 2 ? 'active' : ''} 
                          onClick={() => this.setState({LeftLineTab:2})}>
                             {i18next.t('arabicData')}</NavLink>
                      </NavItem>

                      <NavItem>
                          <NavLink href="#javascript"  
                          className={this.state.LeftLineTab === 3 ? 'active' : ''} 
                          onClick={() => this.setState({LeftLineTab:3})}>
                            {i18next.t('englishData')}</NavLink>
                      </NavItem>

                      <NavItem>
                          <NavLink href="#javascript"  
                          className={this.state.LeftLineTab === 4 ? 'active' : ''} 
                          onClick={() => this.setState({LeftLineTab:4})}>
                            {i18next.t('attributes')}</NavLink>
                      </NavItem>

                      <NavItem>
                          <NavLink href="#javascript"  
                          className={this.state.LeftLineTab === 5 ? 'active' : ''} 
                          onClick={() => this.setState({LeftLineTab:5})}>
                            {i18next.t('images')}</NavLink>
                      </NavItem>
                  
                  </Nav>
                  </Col>
                  <Col sm="9">
                  <Form id="create" className="needs-validation" noValidate="" encType="multipart/form-data">

                        <div className="form-row">
                      <TabContent className="tab-content col-md-12" activeTab={this.state.LeftLineTab}>
              

                        <TabPane  className="fade show" tabId={1}>
                             
                               <Row>
                               <Col md="12 mb-3">
                      
                                    <select className="form-control" 
                                      name="category_id" 
                                      value={this.state.category}  
                                      onChange={this.handleSelectChange} placeholder="Arabic Title"  >
                                        {this.state.categories.map((data, i)=>(
                                          <option value={data.id}>{data.name}</option>
                                        ))
                                        }
                                        </select>
                                    {/* <span>{this.form.errors.category_id && 'country is required'}</span> */}
                                    <div className="valid-feedback">Looks good!</div>
                                  </Col>

                               <Col md="12 mb-3">
                                     <label>{i18next.t('measurement')}</label>
                                     <select className="form-control" 
                                      name="measurement_id"  placeholder="Arabic Title"  >
                                        {this.state.measurements.map((data, i)=>(
                                          <option value={data.id}>{data.name}</option>
                                        ))
                                        }
                                        </select>
                                  
                                     <div className="valid-feedback">Looks good!</div>
                                   </Col>

                               <Col md="12 mb-3">
                                     <label>{i18next.t('quantity')}</label>
                                     <Input className="form-control" 
                                       name="quantity" type="text"
                                       id="quantity"
                                       onChange={this.handleChange}  
                                       placeholder={i18next.t('quantity')} />
                                     <div className="valid-feedback">Looks good!</div>
                                   </Col>

                               <Col md="12 mb-3">
                                     <label>{i18next.t('model')}</label>
                                     <Input className="form-control" 
                                       name="model" type="text"
                                       id="model"
                                       onChange={this.handleChange}  
                                       placeholder={i18next.t('model')} />
                                     <div className="valid-feedback">Looks good!</div>
                                   </Col>

                              
                                </Row>
                           
                    
                                </TabPane>


                                
                        <TabPane  className="fade show" tabId={2}>
                             
                             <Row>
                                 <Col md="12 mb-3">
                                     <label>{i18next.t('name')}</label>
                                     <Input className="form-control" 
                                       name="namear" type="text"
                                       id="namear"
                                       onChange={this.handleChange}  
                                       placeholder={i18next.t('name')} />
                                     <div className="valid-feedback">Looks good!</div>
                                   </Col>

                                   <Col md="12 mb-3">
                                     <label>{i18next.t('description')}</label>
                                     <SimpleMDE
                                     onChange={this.handleChangeDescar}
                                        id="editor_container"
                                        value={this.state.text}
                                        name = "descriptionar"
                                        options={{
                                            autofocus: true,
                                            spellChecker: false
                                        }}
                                        />
                                     <div className="valid-feedback">Looks good!</div>
                                   </Col>

                                   
                              </Row>
                         
                  
                              </TabPane>


                              <TabPane  className="fade show" tabId={3}>
                             
                             <Row>
                              <Col md="12 mb-3">
                                     <label>{i18next.t('name')}</label>
                                     <Input className="form-control" 
                                       name="nameen" type="text"
                                       id="nameen"
                                       onChange={this.handleChange}  
                                       placeholder={i18next.t('name')} />
                                     <div className="valid-feedback">Looks good!</div>
                                   </Col>
                                   <Col md="12 mb-3">
                                     <label>{i18next.t('description')}</label>
                                     <SimpleMDE
                                     onChange={this.handleChangeDescen}
                                        id="editor_container2"
                                        value={this.state.text}
                                        name = "descriptionen"
                                        options={{
                                            autofocus: true,
                                            spellChecker: false
                                        }}
                                        />
                                     <div className="valid-feedback">Looks good!</div>
                                   </Col>
                              </Row>
                         
                  
                              </TabPane>


                              <TabPane  className="fade show" tabId={4}>
                                

                                {this.state.inputs.map((input, x)=>
                            (
                            
                               
                               <Row>
                                     <Col md="6 mb-3">
                                       <label>{i18next.t('attribute')}</label>
                                       <select className="form-control" 
                                      name={input+"attribute_id"} 
                                      id="sss"
                                      value={this.state.attribute['sss']}  
                                       placeholder="Arabic Title"  >
                                        {this.state.attributes.map((data, i)=>(
                                          <option value={data.id}>{data.name}</option>
                                        ))
                                        }
                                        </select>
                                       <div className="valid-feedback">Looks good!</div>
                                     </Col>

                                     <Col md="6 mb-3">
                                       <label>{i18next.t('attributeValue')}</label>
                                       <Input className="form-control" 
                                          name="attributeValue[]" type="text"
                                          id="nameen"
                                          onChange={this.handleChange}  
                                          placeholder={i18next.t('attributeValue')} />
                                       <div className="valid-feedback">Looks good!</div>
                                     </Col>
                                    
                                </Row>
                                )
                            )}

                                  <Row>    
                                      <Col md="3 mb-3">
                                           <button className="btn btn-primary btn-sm active" 
                                           type="button" onClick={ (event) => this.appendInput() }>
                                             add attribute
                                           </button>
                                      
                                      </Col>
                                    
                                  </Row>
                              </TabPane>

                              <TabPane  className="fade show" tabId={5}>
                             
                             <Row>
                                    <Col md="12 mb-3">
                                       <label>{i18next.t('image')}</label>
                                       <Input className="form-control" 
                                         name="image" type="file"
                                         id="image"
                                         onChange={this.handleChange}  
                                         placeholder={i18next.t('image')} />
                                       <div className="valid-feedback">Looks good!</div>
                                     </Col>

                                     <Col md="12 mb-3">
                                       <label>{i18next.t('images')}</label>
                                       <Input className="form-control" 
                                         name="imgs[]" type="file"
                                         id="images"
                                         multiple
                                         onChange={this.handleChange}  
                                         placeholder={i18next.t('images')} />
                                       <div className="valid-feedback">Looks good!</div>
                                     </Col>

                                     
                                  <Col md="2 mb-3">
                                        <Button onClick={this.onSubmit} color="primary">
                                            {i18next.t('create')}
                                        </Button>
                                    </Col>
                                
                              </Row>
                         
                  
                              </TabPane>
                      </TabContent>

                      

                         </div>
                      </Form>
                  </Col>
                  </Row>
              </CardBody>
              </Card>
               </Col>
         </Row>
        </Container>
        </Fragment>
  
    )
  
}

}
 

export default withRouter(createProduct);