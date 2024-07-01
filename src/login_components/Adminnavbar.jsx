import React,{useEffect,useState} from 'react'
import Carosal from '../hooks/Carosal.jsx'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logout from '../hooks/Logout'
import { Button } from 'react-bootstrap';
import Topbar from './Topbar.jsx'
import 'react-toastify/dist/ReactToastify.css';

function Adminnavbar() {
  let logout = Logout();
    
  return (
    <div className='' style={{backgroundColor:"springgreen"}}>
   
   <Nav className="justify-content-start bg-gr gap-3 mb-2 fs-6 p-2" activeKey="/home" fixed="top">
   <div className="mb-2 fs-6 p-2"><h3>Quick Shope zone</h3> </div>
        <Nav.Item>
            <Nav.Link href="home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="product">products</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="addproduct">Add Product</Nav.Link>
              
            </Nav.Item>
            <NavDropdown title="Reports" id="nav-dropdown">
        <NavDropdown.Item href="userreport">Userreport</NavDropdown.Item>
        <NavDropdown.Item href="salereport">Salereport</NavDropdown.Item>
        {/* <NavDropdown.Item href="delevery">Delivery</NavDropdown.Item> */}
          </NavDropdown>
      <Nav.Item className='mt-0 btn btn-danger ' onClick={logout}>
      <span> Logout</span>
      </Nav.Item>
          </Nav>
          </div>
  )
}

export default Adminnavbar