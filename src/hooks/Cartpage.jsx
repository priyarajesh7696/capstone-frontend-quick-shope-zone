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
  import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import PlaceOrder from "./PlaceOrder";


  
function Cartpage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

 
 const navigate = useNavigate()
  const [cartData, setCartdata] = useState([]);
  const [newData, setNewdata] = useState([]);
  const [quantity, setQuantity] = useState();
  const [billingdata,setBillingdata]=useState([])
  const [total, setTotal] = useState()
  const [productid, setProductid] = useState()
  // const getProduct = async (id) => {
    
  //   console.log(id);
  //   let res = await AxiosService.get(
  //     `${ApiRoutes.GET_PRODUCTS.path}/${id}`,

  //     {
  //       authenticate: ApiRoutes.GET_PRODUCTS.authenticate,
  //     }
  //   );
  //   console.log(res);
  //   setProductid(res.data.product._id)
  //   setProductName(res.data.product.productName);
  //   setImage(res.data.product.image);
  //   setPrice(res.data.product.price);
  //   setShow(true);
  // };

 
  const handleOrder = async(id) =>{
    const userId = sessionStorage.getItem("id");

     let res = await AxiosService.put(
       `${ApiRoutes.ORDER_PRODUCT.path}/${userId}`,
    { product_id: id,quantity,total },
      {
         authenticate: ApiRoutes.ORDER_PRODUCT.authenticate,
    })
    console.log(res)
    setShow(true);
    setProductid(id)
// navigate("/user/billing")
  }
const handlePreOrder = async (id,price)=>{
  
 

  let newDatas = cartData.filter((e)=>e._id == id)
  
  setTotal(quantity * price)
setNewdata(id,price,total)
  
  
  
  // console.log(newStock)
}
 
  const getData = async () => {
    let id = sessionStorage.getItem("id");

    let res = await AxiosService.get(
      `${ApiRoutes.GET_USER.path}/${id}`,

      {
        authenticate: ApiRoutes.GET_USER.authenticate,
      }
    );
    setCartdata(res.data.user.cartitem);

  };
  const handleDeletecartitem = async (id) => {
   
    const userId = sessionStorage.getItem("id");
    let deleteCartitem = await AxiosService.put(
      `${ApiRoutes.DELETE_CARTITEM.path}/${userId}`,
      { product_id: id },
      { authenticate: ApiRoutes.DELETE_CARTITEM.authenticate });
     
      getData();
      window.location.reload(true)
      
  };
  
  useEffect(() => {
     getData();
  }, []);


  return <>
  
      <Container className=" h-100 py-5 w-100">
        <div className="justify-content-center align-items-center h-100">
         
            <Card className="usercartpage shopping-cart " style={{ borderRadius: "15px" }}>
              <CardBody className="text-black">
                <h2 className="pt-2 text-center fw-bold text-uppercase bg-light rounded ">
                  Shopping cart
                </h2>
              


   
 
                 { 
                 
                (cartData != undefined) ?
                cartData.map((e,i) =>{
                 
                  return <>
                 <Card className="d-flex flex-row justify-content-center align-items-center p-3 gap-4 mt-3">
                 
      <div>
<Card.Text><strong style={{backgroundColor:"orange",marginLeft:"10px"}} className="rounded-circle ">best seller !</strong></Card.Text>
      <Card.Img src={e.image} style={{ height: "12rem", width: "12rem", padding: "1rem" }} />
        <input type="number"className="W-25" value={quantity} placeholder="qty"  onChange={(e)=>{
          setQuantity(e.target.value)}} ></input>
          <button size="sm" onClick={()=>{handlePreOrder(e._id,e.price) }}>submit</button>
{/* //             if(quantity < e.count)
//             { 
//           setTotal(quantity * e.price)
//              }
//              else
//              {
// alert("please enter including limit")
//              } 
}}>submit</button> */}
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
            onClick={() => handleDeletecartitem(e._id)}
          >
            Remove
          </Button>
          <Button className="bg-primary w-50" onClick={() => handleOrder(e._id) } style={{ margin: "10px" }}>
            Place Order 
            Total:{total} 
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
        {/* <div>
          <Billingdetails />
        </div> */}
         
      </Container>
 
    <Modal
  show={show}
  onHide={handleClose} 
  className="Model"
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
  <Modal.Header closeButton>
    <Modal.Title >
      Billing details
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Billingdetails product_id={productid}  totalAmount={total} qty={quantity} />
    
  </Modal.Body>
  <Modal.Footer className="g-5">
    <Button variant="danger" onClick={handleClose}>
      Close
    </Button>
    {/* <Button variant="primary" type="submit"onClick={(e)=>handleSubmit(e)}>
      Save Changes
    </Button> */}
  </Modal.Footer>
</Modal>
   </>
}

export default Cartpage;