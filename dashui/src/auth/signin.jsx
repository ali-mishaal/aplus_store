import React,{Fragment,useState,useEffect} from 'react';
import man from '../assets/images/dashboard/profile.jpg';
import {Container,Row,Col,CardBody,Form,FormGroup,Input,Label,Button} from 'reactstrap'
import app, { googleProvider,facebookProvider,twitterProvider,githubProvider } from '../data/base'
import { toast } from 'react-toastify';
import {useHistory} from 'react-router-dom'
import axios from 'axios'
const Login = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test123");
  const [loading,setLoading] = useState(false) 
  const [message,setMessage] =useState()
  const [validate,setValidate] = useState(
  {
    message:"",
    classbtn:"",
    icon :"",
    role:""
  })

  const [value, setValue] = useState(
      localStorage.getItem('profileURL' || man)
  );
    const [name, setName] = useState(
      localStorage.getItem('Name')
  );

  useEffect(() => {
      localStorage.setItem('profileURL', value);
      localStorage.setItem('Name', name);
  }, [value,name]);

const loginAuth = async () => {
  setLoading(true)
  try {
      const data = {email:email,password:password}
      await axios.post("https://aplus-code.com/alhabbal/store/api/admin-auth/login",data)
      .then(function(response) {
        console.log(response.data)
        localStorage.setItem('_token', response.data.access_token);
        localStorage.setItem('user', response.data.user.name);
        localStorage.setItem('user_id', response.data.user.id);
        setValidate(
          {
            classbtn:"alert alert-success inverse alert-dismissible fade show",
            message:"login success",
            role:"alert",
            icon:"icon-thumb-up alert-center"
          }
        )

        setTimeout(() => {
          history.push(`${process.env.PUBLIC_URL}/dashboard/default`);
          window.location.reload()
        }, 200);

      }).catch(function(error) {
        toast.error(error.response.data.error)
        setValidate(
          {
            classbtn:"alert alert-danger inverse alert-dismissible fade show",
            message:error.response.data.error,
            role:"alert",
            icon:"icon-thumb-down"
          }
        )
       
      })
      
      setLoading(false)
  } catch (error) {
      setTimeout(() => {
        setLoading(false)
          toast.error("Oppss.. The password is invalid or the user does not have a password.");
      }, 200);
  }
}



    return (
      <Fragment>
        <div className="page-wrapper">
        <Container fluid={true} className="p-0">
          <div className="authentication-main m-0">
            <Row>
              <Col md="12">
                <div className="auth-innerright">
                  <div className="authentication-box">
                    <CardBody className="h-100-d-center">
                      <div className="cont text-center b-light">
                        <div> 
                          <Form className="theme-form">
                            <h4>LOGIN</h4>
                            <h6>Enter your Username and Password</h6>
                            <div className={validate.classbtn} role={validate.role}>
                            <i className={validate.icon}></i>
                              {validate.message}
                            </div>
                            <FormGroup>
                              <Label className="col-form-label pt-0">Your Name</Label>
                              <Input className="form-control" type="text" onChange={e => setEmail(e.target.value)} defaultValue={email} required=""/>
                            </FormGroup>
                            <FormGroup>
                              <Label className="col-form-label">Password</Label>
                              <Input className="form-control" type="password" onChange={e => setPassword(e.target.value)} defaultValue={password}  required=""/>
                            </FormGroup>
                            <div className="checkbox p-0">
                              <Input id="checkbox1" type="checkbox"/>
                              <Label for="checkbox1">Remember me</Label>
                            </div>
                            <FormGroup className="form-row mt-3 mb-0">
                              {loading ?
                              <Button color="primary btn-block" disabled={loading}>
                                LOADING...
                              </Button>
                              :
                              <Button color="primary btn-block" onClick={() => loginAuth()}>
                                  LOGIN
                              </Button>
                              }
                            
                            </FormGroup>
                            
                           
                          </Form>
                        </div>
                        <div className="sub-cont">
                          <div className="img">
                            <div className="img__text m--up">
                              <h2>welcome </h2>
                              <p>in our store</p>
                            </div>
                           
                          </div>
                     
                        </div>
                      </div>
                    </CardBody>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          </Container>
        </div>
        </Fragment>
    );
}

export default Login;