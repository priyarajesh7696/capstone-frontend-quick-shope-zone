import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes';
import { Container } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { toast,ToastContainer } from "react-toastify";
function Addproduct() {
    let navigate = useNavigate()
  const handleSubmit = async(e)=>{
     
    try {
     e.preventDefault()

 
     const formData = new FormData(e.target);
     const formProps = Object.fromEntries(formData); 
   
     console.log(formProps)
     
     let res = await AxiosService.post(`${ApiRoutes.CREATE_PRODUCT.path}`,formProps)
    console.log(res)
    alert(`Product Added successfully`)
    navigate('/admin')
    
    } catch (error) {
       toast.error(error.response.data.message || error.message)
      console.log(error)
    }
   }

  return (
    <Container className='d-flex flex-row  justify-content-center align-items-center p-2 border-4 rounded-2 bg-body shadow-lg'>
    <div className='first justify-content-center align-content-center h-auto mt-2 '>
      <h2 className='text-center text-decoration-underline text-bg-light my-2'>Add New Product</h2>
    <div className="align-content-around mb-6 mt-3 border-3 rounded-circle" >
      <Form onSubmit={handleSubmit} className='border-3 p-5 text-bg-light fs-5'  style={{border:"2px solid black",fontFamily:"serif"}}>
       <Row className='p-2'>
        <Col className='p-2'>
      <Form.Group  className="mb-2 g-5">
      
        <Form.Label as={"h4"} >Product Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name='productName'/>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label as={"h4"}>Image URL</Form.Label>
        <Form.Control type="text" placeholder="Enter Image Url" name='image'/>
      </Form.Group> 
      
      <Form.Group className="mb-3">
        <Form.Label as={"h4"}>Product Code</Form.Label>
        <Form.Control type="text" placeholder="Enter Product Code" name='code'/>
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label as={"h4"}>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter Price" name='price'/>
      </Form.Group>
      </Col>
      <Col className='mx-5'>
      <Form.Group className="mb-3">
        <Form.Label as={"h4"}>Count</Form.Label>
        <Form.Control type="number" placeholder="Enter Count" name='count'/>
      </Form.Group>
     
      {/* <Form.Select >
        <option>brand</option>
        <option>LG</option>
        <option>Samsung</option>
        <option>Sony</option>
        <option>Micromax</option>
      </Form.Select> */}
      <Form.Group className="mb-3">
        <Form.Label as={"h4"}>Brand</Form.Label>
        <Form.Control type="text" placeholder="Enter Brand" name='brand'/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label as={"h4"}>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter Category" name='category'/>
      </Form.Group>
      </Col>
      </Row>   
      {/* <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Description" name='description'/>
      </Form.Group> */}
      <div className='d-flex justify-content-center align-content-certer'>
      <Button  variant="primary" type="submit">
        Submit
      </Button>
      </div>
    </Form>
    </div>
    </div>
    </Container>
  )
}

export default Addproduct