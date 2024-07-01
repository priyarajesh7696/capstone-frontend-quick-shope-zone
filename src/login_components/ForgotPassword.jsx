import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";


function ForgotPassword() {
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);

      let res = await AxiosService.post(
        `${ApiRoutes.SEND_EMAIL.path}`,
        formProps,
        {
          authenticate: ApiRoutes.SEND_EMAIL.authenticate,
        }
      );
     console.log(res)
      if (res.status === 200) 
      {
       
       alert("Otp Send successfully");
navigate('/verify-otp')
      }
      else{
        alert("please enter valid otp")
      }
    
    } catch (error) {
      // toast.error(error.response.data.message || error.message);
      console.log(error);
      alert(error)
    }
  };
  
  return (
   
    <Container fluid className='d-flex flex-column  justify-content-center align-items-center p-5 w-50 shadow-lg mt-5'style={{backgroundColor:"springgreen",border:"20px solid gray", borderImage:"stretch"}}>
    <h4 className='text-center my-2'>Forgot Password</h4>
    <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Text className="text-muted">
              Enter Your Registerd Email ID Below ,We will send the 4-Digit OTP code to your Registered email.
            </Form.Text><br></br>
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control type="email" placeholder="Enter email"name="email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
         
          <Button variant="primary" className='w-100 my-4' type="submit">
            Submit
          </Button>
        </Form>
        <Link to="/login" className="nav-link" href="index.html">
            <span>back</span>
          </Link>
        {/* <button className='d-flex justify-content-end align-content-end'onClick={navigate("/login")} float-end>  back </button> */}
        </Container>
  )
}

export default ForgotPassword