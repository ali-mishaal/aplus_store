import React,{useEffect,useState,Fragment} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {useForm} from 'react-hook-form'
import {Container,Row,Col,Card,CardHeader,CardBody,Nav,NavItem,NavLink,TabContent,TabPane,Button,Form,FormGroup,Label,Input,InputGroup,InputGroupAddon,InputGroupText} from 'reactstrap'
import axios from 'axios'
import { toast } from 'react-toastify';



class EditConfig extends React.Component
{
  constructor()
    {
      super()
      this.state=
      {
        inputValues:'',
        formData:'',
        category:'',
        configs:'',
        LeftLineTab:'1',
        RightLineTab:'1'
      }
    }

    async componentDidMount() {
      this.getConfigCategory()
      this.getConfigs()
    }

    componentDidUpdate()
    {
      console.log(this.state.configs)
      // this.getConfigCategory()
      // this.getConfigs() 
        // console.log(this.getConfigCategory)
    }
     

    async getConfigCategory()
    {
      let data = await axios.get("https://aplus-code.com/alhabbal/store/api/configCategory")
      .then(function(response) {
        return response.data.data;
      }).catch(function(error) {
        toast.error("Config Categories does't exists!")
      })
      this.setState({category: data})
      this.setState({LeftLineTab: data[0].id})
    }

    async getConfigs()
    {
      let data = await axios.get("https://aplus-code.com/alhabbal/store/api/config")
      .then(function(response) {
        return response.data.data;
      }).catch(function(error) {
        toast.error("Config Categories does't exists!")
      })
      this.setState({configs: data})
    }

    handleChange=event=>
    {
      const{name,value,id} = event.target;
      let config = this.state.configs;
      config[id].name = value
      this.setState({config})
    }

    onSubmit = () => {
      let dataForm = document.getElementById('update')
      let formData = new FormData(dataForm);
      let urlApi = "https://aplus-code.com/alhabbal/store/api/config/1" 
      let config = 
      {     
          headers: { 'content-type': 'multipart/form-data' }
      }
    
  
        axios.post(urlApi, 
                   formData,config)
            .then(function (response) {
               toast.success(response.data.message)
              //  window.location.reload(false)
            })
            .catch(function (error) {
              toast.error("created failed !")
            });
       
    };

  

    render()
  {
    
    if (!this.state.category || !this.state.configs) {
      return <div>please wait ...</div>;
    }
    return(
      <Fragment>
      <Container fluid={true}>
          <Row>
           <Col  sm="12" xl="6 xl-100">
              <Card>
                <CardBody>
                  <Row>
                    <Col sm="3"className="tabs-responsive-side">
                    <Nav className="flex-column nav-pills border-tab nav-left" >
                    {this.state.category.map((data, i)=>(
                      <NavItem>
                          <NavLink href="#javascript"  
                          className={this.state.LeftLineTab === data.id ? 'active' : ''} 
                          onClick={() => this.setState({LeftLineTab:data.id})}>
                            {data.title}</NavLink>
                      </NavItem>
                        )
                    )}
                    
                  </Nav>
                  </Col>
                  <Col sm="9">
                  <Form id="update" className="needs-validation" noValidate="" >
                         <Input  name="_method" type="hidden" value="PUT"   />

                        <div className="form-row">
                      <TabContent className="tab-content col-md-12" activeTab={this.state.LeftLineTab}>
                      {this.state.category.map((data, i)=>(

                        <TabPane  className="fade show" tabId={data.id}>
                            {this.state.configs.map((config, x)=>
                            (
                            
                               config.config_category_id===data.id &&  
                               <Row>
                                <Col md="12 mb-3">
                                       <label>{config.key}</label>
                                       <Input className="form-control" 
                                         name={config.key} type="text"
                                         id={x} 
                                         onChange={this.handleChange} 
                                         value={config.name}   
                                         placeholder={config.key}  />
                                       <div className="valid-feedback">Looks good!</div>
                                     </Col>
                                </Row>
                                )
                            )}
                        </TabPane>
                      )
                      )}
                       
                      </TabContent>
                      <Col md="2 mb-3">
                            <Button onClick={this.onSubmit} color="primary">update</Button>
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
 

export default EditConfig;