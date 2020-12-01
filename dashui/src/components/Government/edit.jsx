import React, { Fragment } from 'react';
import {Container,Row,Col,Button,Form,Input} from 'reactstrap'
import axios from 'axios'
import { toast } from 'react-toastify';

class EditGovern extends React.Component
{
  constructor()
  {
    super()
    this.state=
    {
      form:{namear:"",nameen:"",id:"",isedit:false},
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
    let urlApi = "country/"+this.state.form.id 
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
            toast.error('error')
          });

          setTimeout(
            function() {
              this.get()
              this.props.changeCategory()
              this.setState({
                form: {namear:"",nameen:"",id:"",isedit:false},
                btnname:'create',
                btncolor:'primary',
      
              })
            }
            .bind(this),
            3000
        );
          
  };

  async get()
  {
    let data = await axios.get("country")
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
                         name="namear" type="text" 
                         value={this.state.form.namear}  
                         onChange={this.handleChange} placeholder="Arabic Title"  />
                      <span>{this.form.errors.title && 'Arabic Title is required'}</span>
                      <div className="valid-feedback">Looks good!</div>
                    </Col>
                    <Col md="5 mb-3">
                    
                      <Input  className="form-control" 
                      name="nameen" type="text"  
                      value={this.state.form.nameen} 
                      onChange={this.handleChange} placeholder="English Title"  />
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


export default  EditGovern ;