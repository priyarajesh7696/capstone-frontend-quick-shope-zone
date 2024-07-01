import React, { useState, useEffect } from "react";
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
import AxiosService from "../utils/AxiosService";
import ApiRoutes from "../utils/ApiRoutes";
import Cartitem from "./Cartitem";
import {useNavigate } from "react-router-dom";
import Billingdetails from "./Billingdetails";
  
import useRazorpay from "react-razorpay";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import PlaceOrder from "./PlaceOrder";


function Productpage() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  
   
   const navigate = useNavigate()
    const [cartData, setCartdata] = useState([]);
    const [newData, setNewdata] = useState([]);
    const [quantity, setQuantity] = useState();
  
    const [total, setTotal] = useState()
    const [productid, setProductid] = useState()
  
   
  
   
    const getData = async () => {
      let id = sessionStorage.getItem("id");
  
      let res = await AxiosService.get(
        `${ApiRoutes.GET_PRODUCTS.path}`,

        {
          authenticate: ApiRoutes.GET_PRODUCTS.authenticate,
        }
      );
      setCartdata(res.data.products);
  
    };
   
    
    useEffect(() => {
       getData();
    }, []);
  
  return (
  
    <Container className=" h-100 py-5 w-100">
         
    <div className="justify-content-center align-items-center h-100">
     
        <Card className="usercartpage shopping-cart " style={{ borderRadius: "15px" }}>
          <CardBody className="text-black">
            <h2 className="pt-2 text-center fw-bold text-uppercase bg-light rounded ">
             ProductPage
            </h2>
          

            { 
                 
                 (cartData != undefined) ?
                 cartData.map((e,i) =>{
                  
                   return <>


           
          
            
             <Card className="d-flex flex-row justify-content-center align-items-center p-3 gap-4 mt-3">
             
  <div>
<Card.Text><strong style={{backgroundColor:"orange",marginLeft:"10px"}} className="rounded-circle ">best seller !</strong></Card.Text>
  <Card.Img src={e.image} style={{ height: "12rem", width: "12rem", padding: "1rem" }} />
  

  </div>
  <div>
    <Card.Body>
      <Card.Title>{e.productName} </Card.Title>
      <Card.Text>$ {e.price} </Card.Text>
      <Card.Text>stock :{e.count} </Card.Text> 
      <Card.Text as="h5" className="border">Total: {total} </Card.Text> 
     
    </Card.Body>
    <div className="d-flex flex-row justify-content-center align-items-center">
      <Button
        className="bg-danger w-50"
        style={{ margin: "10px" }}
       
      >
        Remove
      </Button>
      <Button className="bg-primary w-50" style={{ margin: "10px" }}>
        Place Order 
       
      </Button>
    </div>
  </div>
</Card>
</> 
                  })  : <div className='d-flex flex-row justify-content-center align-items-center p-3 gap-5'> !! your cart is empty  !! </div>
                  }  
         
          </CardBody>
        </Card>
        
    </div>
     
  </Container>
  )
}

export default Productpage