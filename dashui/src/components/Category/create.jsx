import React,{useEffect,useState,Fragment} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {useForm} from 'react-hook-form'
import {Container,Row,Col,Card,CardHeader,CardBody,Nav,NavItem,NavLink,TabContent,TabPane,Button,Form,FormGroup,Label,Input,InputGroup,InputGroupAddon,InputGroupText} from 'reactstrap'
import axios from 'axios'
import { toast } from 'react-toastify';
import i18next from 'i18next'
import { withRouter } from 'react-router'
import { HashRouter as Router,BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'


class createCategory extends React.Component
{
  constructor()
    {
      super()
      this.state=
      {
        inputValues:'',
        form:{titlear:"",titleen:"",id:"",image:"",isedit:false},
        category:'',
        configs:'',
        LeftLineTab:1,
        RightLineTab:'1',
        token:'',
        toDashboard: false,
       
      }
    }

    componentDidMount()
    {
       this.setState({token:localStorage.getItem('_token')})
     
    }

    handleChange=event=>
  {
    const{name,value} = event.target;
    let form = this.state.form;
    form[name] = value
    this.setState({form})
  }
    onSubmit = () => {
      let dataForm = document.getElementById('create')
      let formData = new FormData(dataForm);
      let config = 
      {     
          headers: { 'content-type': 'multipart/form-data' },
          headers: {"Authorization" : `Bearer ${this.state.token}`}
      }
    
  
        axios.post("admin/category", 
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

  

    render()
  {
    if (this.state.toDashboard === 1) {
      return <Redirect to={`${process.env.PUBLIC_URL}/dashboard/products/categories`} />
    }
  
    return(
      <Fragment>
          <Breadcrumb parent={i18next.t('createNew')} title={i18next.t('Category')}/>
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
                  
                  </Nav>
                  </Col>
                  <Col sm="9">
                  <Form id="create" className="needs-validation" noValidate="" >

                        <div className="form-row">
                      <TabContent className="tab-content col-md-12" activeTab={this.state.LeftLineTab}>
              

                        <TabPane  className="fade show" tabId={1}>
                             
                               <Row>
                                <Col md="12 mb-3">
                                       <label>{i18next.t('image')}</label>
                                       <Input className="form-control" 
                                         name="image" type="file"
                                         id="image"
                                         onChange={this.handleChange}  
                                         placeholder="image" />
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
                                       placeholder="Arabic Name" />
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
                                       placeholder="English Name" />
                                     <div className="valid-feedback">Looks good!</div>
                                   </Col>
                              </Row>
                         
                  
                              </TabPane>
                      </TabContent>

                      
                      <Col md="2 mb-3">
                            <Button onClick={this.onSubmit} color="primary">
                                {i18next.t('create')}
                            </Button>
                        </Col>

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
 

export default withRouter(createCategory);