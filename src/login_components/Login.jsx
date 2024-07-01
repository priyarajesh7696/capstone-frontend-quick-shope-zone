import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import AxiosService from "../utils/AxiosService";
import ApiRoutes from "../utils/ApiRoutes";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";

function Login() {
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);

      let res = await AxiosService.post(
        `${ApiRoutes.SIGN_IN.path}`,
        formProps,
        {
          authenticate: ApiRoutes.SIGN_IN.authenticate,
        }
      );
     
      if (res.status === 200) 
      {
       
        toast.success("login successfully");

        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("role", res.data.role);
        sessionStorage.setItem("id", res.data.id);

        if (res.data.role === "admin")
        {
          navigate("/admin");
        }
       
        else if (res.data.role === "user") 
        {
          navigate("/user")
         
        }
       
      }
          
    } catch (error) {
      toast.error(error.response.data.message || error.message);
      console.log(error);
    }
  };

  return (

    <Container fluid className='d-flex flex-column  justify-content-center align-items-center p-5 w-50 shadow-lg mt-5'style={{backgroundColor:"springgreen",border:"20px solid gray", borderImage:"stretch"}}>
     <h2 className='text-center  my-2'>Welcome To Quick Shope</h2>
    {/* <h4 className='text-center text-decoration-underline text-bg-light my-2'>Login</h4> */}
      <div className="d-flex align-content-center mb-6 mt-3">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>

          <Form.Group className="mb-3">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>

          <Button className="w-100" variant="primary" type="submit">
            Login
          </Button><br></br><br></br>
          <Link to="/signup" className="nav-link" href="index.html">
            <span>Don't have any Account ? Signup</span>
          </Link>
          
          <br></br>
          <Link to="/forgot-password" className="nav-link" href="index.html">
            <span>Forgot password</span>
          </Link>
          {/* <a href='/forgot-password' className='text-center mx-5'>Forgot password</a> */}
        </Form>
       
        <ToastContainer/>
      </div>
      <Link to="/" className="nav-link d-flex justify-content-end align-content-end m3-5" href="index.html">
            <span>back</span>
          </Link>
    </Container>
  );
}

export default Login;
