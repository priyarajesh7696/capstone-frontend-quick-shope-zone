import React,{ useEffect,useState} from 'react'
import Container from 'react-bootstrap/Container';

import 'react-toastify/dist/ReactToastify.css';
import { toast,ToastContainer } from "react-toastify";
import ApiRoutes from '../utils/ApiRoutes.jsx';
import {Row, Col, Tab,Tabs } from 'react-bootstrap';
import Footer from '../hooks/Footer.jsx';
import AxiosService from '../utils/AxiosService.jsx';
import Topbar from './Topbar.jsx';
import Adminnavbar from './Adminnavbar.jsx';
import { Card} from 'react-bootstrap';
import Product from '../admin_components/Product.jsx';
import Addproduct from '../admin_components/Addproduct.jsx'
import Cards from '../hooks/Cards.jsx'
import Userreport from '../admin_components/Userreport.jsx'
import Salereport from '../admin_components/Salereport.jsx'
import Searchbar from '../hooks/Searchbar.jsx';
function Admindashboard() {
  let [count, setCount] = useState(0);
  const [userdata, setUserdata] = useState([]);
  const [products, setProducts] = useState([]);
  const getUser = async () => {
    let id = sessionStorage.getItem("id");
   
    let res = await AxiosService.get(
      `${ApiRoutes.GET_USER.path}/${id}`,
  
      {
        authenticate: ApiRoutes.GET_USER.authenticate,
      }
    );
   
    setUserdata(res.data.user);
  };
  
    const getCart = async () => {
     
          let res = await AxiosService.get(`${ApiRoutes.GET_PRODUCTS.path}`,{
              authenticate:ApiRoutes.GET_PRODUCTS.authenticate})
  
              setProducts(res.data.products)
       
    };
    
    useEffect(() => {
      getUser();
      getCart();
    }, []);
  
  
  return <>
  
  <Container className='mt-5'>
 
 
            <div>
            
              <Searchbar count={count} setCount={setCount} />
            </div>
        {/* <Tabs
          defaultActiveKey="home"
          id="fill-tab-example"
          className="mb-3 bg-gray"
          fill          
        >
          <Tab eventKey="home" title="Home" >
          <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center">
          
          { products.map((carts, i) => {
            return <div className="row " key={i}>
                <div className=" col mb-5 text-capitalize ">
                  <div className="card h-100">
                    <img
                      className="card-img-top"
                      src={carts.image}
                      style={{
                        height: "10rem",
                        width: "15rem",
                        padding: "1rem",
                      }}
                      alt="..."
                    />
                  
                    <div className="card-body p-4">
                      <div className="text-center">
                      
                        <h5 className="fw-bolder">{carts.brand}</h5>
                    
                  </div>
                </div>
              </div>
              </div>
              </div>
          })}
          </div>
         
            <div className="bg-info lh-sm mt-4 mb-5 text-center fs-4"><span>Shop By Catagory</span></div>
            <div>
            
              <Searchbar count={count} setCount={setCount} />
            </div>
            </Tab>
          <Tab eventKey="products" title="Products">
          <Product />
          </Tab>
          <Tab eventKey="addproduct" title="Add Product">
          <Addproduct />
          </Tab>
        
          <Tab eventKey="UserReport" title="User Report" >
         
            <Userreport/>
          </Tab>
         
          <Tab eventKey="salereport" title="Sale Report">
            <Salereport/>
          </Tab>

        <Tab eventKey="contact" title="Contact">
        <div className="">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> India,Tamil Nadu,Chennai</p>
              <p><i className="fas fa-envelope me-3"></i>
                rameshpriyait@gmail.com
              </p>
              <p><i className="fas fa-phone me-3"></i> 7418182749</p>
             
            </div>
        </Tab>
        </Tabs>
        */}
     
  
   <Footer/>
   </Container>
   </>
}

export default Admindashboard