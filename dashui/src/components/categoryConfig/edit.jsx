import React, { Fragment } from 'react';
import {Container,Row,Form,Button,Input,Col} from 'reactstrap'
import axios from 'axios'
import { toast } from 'react-toastify';
import i18next from 'i18next'

class EditCategoryConfig extends React.Component
{
  constructor()
  {
    super()
    this.state=
    {
      form:{titlear:"",titleen:"",id:"",isedit:false},
      btnname:i18next.t('create'),
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

  // isEmpty(obj)
  // {
  //   return Object.entries(obj).length ===0 && obj.constructor===Object;
  // }
  componentDidUpdate(prevProps)
  {
 
    if(prevProps !== this.props && this.props.category.constructor===Object && Object.entries(this.props.category).length >0)
    {
      
        this.setState({
          form: {...this.props.category,isedit:true},
          btnname:i18next.t('update'),
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
    let urlApi = "admin/configCategory/"+this.state.form.id 
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
          }).catch(function (error) {
            console.log(error)
            toast.error('error')
          });

          setTimeout(
            function() {
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
    let data = await axios.get("admin/configCategory")
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
                    <Col md="5 mb-3">
                      
                      <Input className="form-control" 
                         name="titlear" type="text" 
                         value={this.state.form.titlear}  
                         onChange={this.handleChange} placeholder={i18next.t('namear')}  />
                      <span>{this.form.errors.title && 'Arabic Title is required'}</span>
                      <div className="valid-feedback">Looks good!</div>
                    </Col>
                    <Col md="5 mb-3">
                    
                      <Input  className="form-control" 
                      name="titleen" type="text"  
                      value={this.state.form.titleen} 
                      onChange={this.handleChange} placeholder={i18next.t('nameen')}  />
                      <span>{this.form.errors.nameen && 'English Title is required'}</span>
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