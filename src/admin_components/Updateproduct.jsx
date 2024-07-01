import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes';
import { Container } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { toast,ToastContainer } from "react-toastify";
function Updateproduct() {
    let navigate = useNavigate()
    const [data,setData]=useState([]);
    const handleSubmit = async()=>{
       
      try {
       e.preventDefault()
  
   
       const formData = new FormData(e.target);
       const formProps = Object.fromEntries(formData); 

       
       let res = await AxiosService.post(`${ApiRoutes.UPDATE_PRODUCT.path}`,formProps)
      console.log(res)
     toast.success(`Product updated successfully`)
      navigate('/product')
      
      } catch (error) {
         toast.error(error.response.data.message || error.message)
        console.log(error)
      }
     }
     const getCarts = async () => {
        try {
  
            let res = await AxiosService.get(`${ApiRoutes.GET_PRODUCTS.path}`,{
                authenticate:ApiRoutes.GET_PRODUCTS.authenticate})
                setData(res.data.products)
          if (res.status === 200)
          {
           
            toast.success("product fetch successfully");
          }
          
         
        } catch (error) {
          toast.error("Internal Server Error");
        }
      }
    
    useEffect(() => {

      getCarts();
    }, []);
  
   
       
      return (
        <Container>
        <div className='first d-flex flex-column justify-content-center align-content-center h-auto mt-4 w-25'>
          <h2>Add New Product</h2>
        <div className="d-flex align-content-center mb-6 mt-3" >
          <Form onSubmit={handleSubmit}>
          <Form.Group  className="mb-2">
          
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name='productName' />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" placeholder="Enter Image Url" name='image'/>
          </Form.Group>     
          <Form.Group className="mb-3">
            <Form.Label>Product Code</Form.Label>
            <Form.Control type="text" placeholder="Enter Product Code" name='code'/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Enter Price" name='price'/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Count</Form.Label>
            <Form.Control type="number" placeholder="Enter Count" name='count'/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Brand</Form.Label>
            <Form.Control type="text" placeholder="Enter Brand" name='brand'/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Description" name='description'/>
          </Form.Group>
    
          <Button className='' style={{marginLeft:'100px'}} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>
        </div>
        <ToastContainer/>
        </Container>
    
  )
}

export default Updateproduct