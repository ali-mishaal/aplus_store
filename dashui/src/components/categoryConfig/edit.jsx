import React, { useState ,useEffect, Fragment,componentDidUpdate } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {useForm} from 'react-hook-form'
import {Container,Row,Col,Card,CardHeader,CardBody,Button,Form,FormGroup,Label,Input,InputGroup,InputGroupAddon,InputGroupText} from 'reactstrap'
import axios from 'axios'
import { toast } from 'react-toastify';
import { Category } from 'emoji-mart';

class EditCategoryConfig extends React.Component
{
  constructor()
  {
    super()
    this.state=
    {
      form:{titlear:"",titleen:"",id:"",isedit:false},
      btnname:'save',
      btncolor:'primary',
      isUpdate:false,
      category:'',
      data:'',
      categoryForm:''
    }

    this.form=
    {
      register:'',
      handleSubmit:'',
      errors:''
    }
    
  }

  isEmpty(obj)
  {
    return Object.entries(obj).length ===0 && obj.constructor===Object;
  }
  componentDidUpdate(prevProps)
  {
 
    if(prevProps !== this.props && this.props.category.constructor===Object && Object.entries(this.props.category).length >0)
    {
      
        this.setState({
          form: {...this.props.category,isedit:true},
          btnname:'update',
          btncolor:'danger',

        })
    }
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
          <Col sm="12">
            
                <Form id="create" className="needs-validation" noValidate="" >
                  
                  <div className="form-row">
                    <Col md="5 mb-3">
                      
                      <Input className="form-control" 
                         name="titlear" type="text" 
                         value={this.state.form.titlear}  
                         onChange={this.handleChange} placeholder="Arabic Title"  />
                      <span>{this.form.errors.title && 'Arabic Title is required'}</span>
                      <div className="valid-feedback">Looks good!</div>
                    </Col>
                    <Col md="5 mb-3">
                    
                      <Input  className="form-control" 
                      name="titleen" type="text"  
                      value={this.state.form.titleen} 
                      onChange={this.handleChange} placeholder="English Title"  />
                      <span>{this.form.errors.title && 'English Title is required'}</span>
                      <div className="valid-feedback">Looks good!</div>
                    </Col>

                    <Col md="2 mb-3">
                        <Button  color={this.state.btncolor}
                                 onClick={this.onSubmit}>
                          {this.state.btnname}
                          </Button>
                    </Col>

                  </div>
                 
                 
                </Form>
             
          </Col>
        </Row>
      </Container>
    </Fragment>
    );
  }


}


export default  EditCategoryConfig ;