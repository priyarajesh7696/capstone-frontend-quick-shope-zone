import React from 'react'
import {
  Button,
  Card,
  CardBody,
  CardImg,
  Col,
  Container,
  Row,
  InputGroup
} from "react-bootstrap";
import Footer from '../hooks/Footer';

function Contact() {
  return (
    <Container className=" h-100 py-5 w-100">
         
    <div className=" d-flex justify-content-center align-items-center h-100 w-100">
     
       
             <Card className="d-flex flex-row justify-content-center align-items-center w-100 p-3 gap-4 mt-3">
    <Card.Body>
    <div className="">
    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
    <p><i className="fas fa-home me-3"></i> India,Tamil Nadu,Chennai</p>
    <p><i className="fas fa-envelope me-3"></i>
      rameshpriyait@gmail.com
    </p>
    <p><i className="fas fa-phone me-3"></i> 7418182749</p>
   
  </div>
     
    </Card.Body>
   
  
</Card>

          </div>        
         
          <div className="mx-0 my-0">
            <Footer />
            </div>  
     
  </Container>
    
  )
}

export default Contact