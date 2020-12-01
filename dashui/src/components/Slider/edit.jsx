import React, { useState ,useEffect, Fragment,componentDidUpdate } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {useForm} from 'react-hook-form'
import {Container,Row,Col,Card,CardHeader,CardBody,Button,Form,FormGroup,Label,Input,InputGroup,InputGroupAddon,InputGroupText} from 'reactstrap'
import axios from 'axios'
import { toast } from 'react-toastify';
import { Category } from 'emoji-mart';
import i18next from 'i18next'


class EditSlider extends React.Component
{
  constructor()
  {
    super()
    this.state=
    {
      form:{namear:"",nameen:"",id:"",isedit:false},
      btnname:i18next.t('create'),
      btncolor:'primary',
      isUpdate:false,
      category:'',
      data:'',
      categoryForm:'',
      token:''
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
  componentDidMount()
  {
    this.setState({token:localStorage.getItem('_token')})
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
    let urlApi = "admin/sliders/"+this.state.form.id 
   
  
    if(Object.entries(this.props.category).length >0)
    {
      formData.append('_method', 'PUT')
    }

        axios.post(urlApi, 
                 formData)
          .then(function (response) {
             toast.success(response.data.message)
          }).catch(function (error) {
            toast.error('error')
          });

          setTimeout(
            function() {
              document.getElementById('create').reset();
              this.get()
              this.props.changeCategory()
              this.setState({
                form: {namear:"",nameen:"",id:"",isedit:false},
                btnname:i18next.t('create'),
                btncolor:'primary',
      
              })
            }
            .bind(this),
            3000
        );
          
  };


  async get()
    {
     
      let data = await axios.get("admin/sliders")
      .then(function(response) {
        return response.data.data
      }).catch(function(error) {
        // toast.error("Config Categories does't exists!")
        console.log(error)
      })
      this.props.setName(data);
    }

  render()
  {
    return(
      <Fragment>
      
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            
                <Form id="create" className="needs-validation" noValidate="" >
                  
                  <div className="form-row">
                    <Col md="10 mb-3">
                      
                      <Input className="form-control" 
                         name="image" type="file"   />
                      <span>{this.form.errors.title && 'Arabic Title is required'}</span>
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


export default EditSlider;