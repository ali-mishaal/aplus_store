import React,{useEffect,useState,Fragment} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {useForm} from 'react-hook-form'
import {Container,Row,Col,Card,CardHeader,CardBody,Nav,NavItem,NavLink,TabContent,TabPane,Button,Form,FormGroup,Label,Input,InputGroup,InputGroupAddon,InputGroupText} from 'reactstrap'
import axios from 'axios'
import { toast } from 'react-toastify';



class TabLine extends React.Component
{
  constructor()
    {
      super()
      this.state=
      {
        inputValues:'',
        formData:'',
        category:'',
        data:''
      }

      
    }
    componentDidMount()
    {
        this.getConfigCategory()
        this.getConfigs() 
        // var arr = [];
        // this.props.category.map(function(name, keyIndex){
        //   console.log('mn')
        //   arr.push(name);
        // })

        // this.setState({formData: arr});
        console.log(this.state.category)
 

    }
     

    async getConfigCategory()
    {
      let data = await axios.get("http://127.0.0.1:8000/api/configCategory")
      .then(function(response) {
        return response.data.data;
      }).catch(function(error) {
        toast.error("Config Categories does't exists!")
      })
      this.setState({category: data})
      
    }

    async getConfigs()
    {
      let data = await axios.get("http://127.0.0.1:8000/api/config")
      .then(function(response) {
        return response.data.data;
      }).catch(function(error) {
        toast.error("Config Categories does't exists!")
      })
      console.log(data)
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
      let urlApi = "http://127.0.0.1:8000/api/configCategory/"+this.state.form.id 
      let config = 
      {     
          headers: { 'content-type': 'multipart/form-data' }
      }
    
      if(Object.entries(this.props.category).length >0)
      {
        formData.append('_method', 'PUT')
      }
  
        axios.post(urlApi, 
                   formData,config)
            .then(function (response) {
               toast.success(response.data.message)
               window.location.reload(false)
            })
            .catch(function (error) {
              toast.error("created failed !")
            });
       
    };

  

    render()
  {
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
                   
                    </Nav>
                    </Col>
                    <Col sm="9">
                    
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
 

export default TabLine;