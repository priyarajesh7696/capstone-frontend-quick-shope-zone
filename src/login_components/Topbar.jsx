import React,{useEffect,useState} from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import Logout from "../hooks/Logout";
import Carosal from "../hooks/Carosal";
import { Form } from "react-bootstrap";
import ApiRoutes from '../utils/ApiRoutes.jsx';
import AxiosService from '../utils/AxiosService.jsx';
import Cartpage from "../hooks/Cartpage.jsx";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast,ToastContainer } from "react-toastify";

function Topbar() {
  let logout = Logout();
  let navigate = useNavigate()
  const [userdata, setUserdata] = useState([]);
  const [carts,setCarts]=useState([]);
  let [count, setCount] = useState();
  const  getProducts = async () => {
    // try {

        let res = await AxiosService.get(`${ApiRoutes.GET_PRODUCTS.path}`,{
            authenticate:ApiRoutes.GET_PRODUCTS.authenticate})
            setCarts(res.data.products)
    //   if (res.status === 200)
    //   // {
       
    //   //   // toast.success("product fetch successfully");
    //   // }
      
     
    // } catch (error) {
    //   toast.error("Internal Server Error");
    // }
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

  return (
    <Navbar className="" fixed="top" style={{backgroundColor:"navy"  }} >
      <Container>
        <Navbar.Brand className="text-light fs-6"><h1>Quick Shope Zone</h1></Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Carosal /> */}
        <Navbar.Collapse className="justify-content-end text-capitalize">
        
          <Navbar.Text className="fs-5 text-light">
            Welcome ! {userdata.name}
          </Navbar.Text>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end text-capitalize">
          <Navbar.Text>
        
                 
         <i class="fa-solid fa-cart-arrow-down text-light"><span className="mx-2 text-light" onClick={()=>navigate("/user/cartpage")}><sb>{count}</sb></span></i> 
       
          
          </Navbar.Text>
        </Navbar.Collapse>

        {/* <Button className='mx-5' onClick={logout}>Logout</Button> */}
        <ToastContainer/>
      </Container>
    </Navbar>
   
  );
}

export default Topbar;
