import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Footer from "../hooks/Footer";
import { Card, Container } from "react-bootstrap";
import AxiosService from "../utils/AxiosService";
import ApiRoutes from "../utils/ApiRoutes";

import 'react-toastify/dist/ReactToastify.css';
import { toast,ToastContainer } from "react-toastify";
import Searchbar from "../hooks/Searchbar";
import Carosal from "../hooks/Carosal";
import Cartpage from "../hooks/Cartpage";
import Contact from "./Contact";
import { Navigate,useNavigate } from "react-router-dom";



function User() {
  const navigate = useNavigate();
  const[quantity,setQuantity] = useState(0)
  const [userdata, setUserdata] = useState([]);
  const [carts,setCarts]=useState([]);
  let [count, setCount] = useState();
  const  getProducts = async () => {
      try {
 let res = await AxiosService.get(`${ApiRoutes.GET_PRODUCTS.path}`,{
              authenticate:ApiRoutes.GET_PRODUCTS.authenticate})             
        if (res.status === 200)        
          // alert("product fetch successfully");
          setCarts(res.data.products)
       
      } catch (error) {
        // alert("Internal Server Error");
      }
    };
  const getData = async () => {
    let id = sessionStorage.getItem("id");

    let res = await AxiosService.get(
      `${ApiRoutes.GET_USER.path}/${id}`,

      {
        authenticate: ApiRoutes.GET_USER.authenticate,
      }
    );
    setUserdata(res.data.user);
    setCount(res.data.user.cartCount)
  };
  
  useEffect(() => {
    getData();
    getProducts();
  }, []);

  return <>
  <Container className="mt-5">
 
      {/* <div className="fs-6 mt-5 my-5"> */}
      <div className="mt-5 border-bottom p-2">
        <p><strong className="link-danger">!!! Select your Best Product Here !!!</strong></p>
        <Carosal/>
      </div>
      <div className="lh-sm mt-4 mb-5 text-center link-light fs-4"style={{backgroundColor:"indigo"}}><span>Shop By Catagory</span></div>
      <div className=" usercards bg-secondary mx-3  rounded-1 border-danger d-flex mt-5 g-5  px-4 px-lg-6 row gx-4 gx-lg-6 row-cols-1 row-cols-md-4 row-cols-xl-6 d-flex justify-content-center align-items-center" style={{gap:"2rem",fontSize:"0.8rem"}} >           
   
   {         
  carts.map((carts,i)=>{
    return  <Card key={i} className="d-flex bg-body-success  mt-4 g-5 rounded-circle "  style={{ height: "12rem", width: "10rem", padding: "1rem",fontSize:"0.2rem" }}>
    <Card.Img src={carts.image} className="mx-3" style={{ height: "6rem", width: "6rem", padding: "1rem" }} />
    <Card.Body>
      <Card.Title className="fs-6 text-center">{carts.brand} </Card.Title>
    </Card.Body>
  </Card>
    
  })
}
<strong className="link-primary fs-2 w-50 bg-light  border-danger border-start-0 rounded-start "> All Electronic Products Available Here </strong>
</div>          
        
           
            <div className="">
              <Searchbar count={count} setCount={setCount} />
            </div>
            {/* <div className="">
              <Contact/>
            </div> */}
            {/* </div> */}
            <div className="mx-0">
            <Footer />
            </div>
        
       
            </Container>

    
      
      
   
     
    </>
}

export default User;
