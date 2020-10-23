import React, { useState ,useEffect, Fragment,componentDidUpdate } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {useForm} from 'react-hook-form'
import {Container,Row,Col,Card,CardHeader,CardBody,Button,Form,FormGroup,Label,Input,InputGroup,InputGroupAddon,InputGroupText} from 'reactstrap'
import axios from 'axios'
import { toast } from 'react-toastify';
import { Category } from 'emoji-mart';

const EditCategoryConfig = (props) => 
    {
    const { register, handleSubmit, errors } = useForm();
    const [isUpdate , setIsUpdate] =useState(false);
    const [titlear , setTitlear] =useState();

    const categoryForm = 
    {     
        form: { titlear: '',titleen:'',isEdit:false },
        btnName: 'save',
        btnColor:'primary'
    }
  
    const isEmpty=(obj)=>
    {
      return Object.entries(obj).length === 0 & obj.constructor === Object;
    }

  

    useEffect(() => {
      if( !isEmpty(props))
        console.log('update!');
    }, [props]);

  const config = 
  {     
      headers: { 'content-type': 'multipart/form-data' }
  }

  const onSubmit = data => {
    let dataForm = document.getElementById('create')
    let formData = new FormData(dataForm);
    let urlApi = "http://127.0.0.1:8000/api/country/"
    // if(isUpdate)
    // {
    //   formData.append('<input type="hidden" name="_method" value="PUT"')
    // }

    if (data !== '') {
      axios.post(urlApi, 
                 formData,config)
          .then(function (response) {
            console.log(response)
            window.location.reload(false)
            setIsUpdate(false)
             toast.success("Successfully Created !")
          })
          .catch(function (error) {
            console.log(error)
            toast.error("created failed !")
          });
     
    } else {
      errors.showMessages();
    }
  };

  return (
    <Fragment>
      
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            
                <Form id="create" className="needs-validation" noValidate="" onSubmit={handleSubmit(onSubmit)}>
                  
                  <div className="form-row">
                    <Col md="5 mb-3">
                      
                      <Input className="form-control" name="name:ar" type="text" value={titlear}   placeholder="Arabic Title" innerRef={register({ required: true })} />
                      <span>{errors.title && 'Arabic Title is required'}</span>
                      <div className="valid-feedback">Looks good!</div>
                    </Col>
                    <Col md="5 mb-3">
                    
                      <Input  className="form-control" name="name:en" type="text"  placeholder="English Title" innerRef={register({ required: true })} />
                      <span>{errors.title && 'English Title is required'}</span>
                      <div className="valid-feedback">Looks good!</div>
                    </Col>

                    <Col md="2 mb-3">
                        <Button  color={categoryForm.btnColor}>{categoryForm.btnName}</Button>
                    </Col>

                  </div>
                 
                 
                </Form>
             
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default  EditCategoryConfig ;