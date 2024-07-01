import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import Topbar from '../login_components/Topbar.jsx';
import Adminnavbar from '../login_components/Adminnavbar.jsx';
import Admin from '../login_components/Admindashboard.jsx';
import Product from '../admin_components/Product.jsx';
import Salereport from '../admin_components/Salereport.jsx';
import Userreport from '../admin_components/Userreport.jsx';
import Delivery from '../admin_components/Delivery.jsx';
import Addproduct from '../admin_components/Addproduct.jsx';
import Searchbar from '../hooks/Searchbar.jsx';
import { Container } from 'react-bootstrap';
function AdminRoutes() {
  return <>
  <Container className='d-flex flex-column justify-content-center'>
  <Adminnavbar/>
    <Routes>
    <Route path="home" element={<Admin/>}/>
    <Route path="product" element={<Product/>}/>
            <Route path="addproduct" element={<Addproduct/>}/>
            <Route path="salereport" element={<Salereport/>}/>
            <Route path="userreport" element={<Userreport/>}/>
            <Route path="delivery" element={<Delivery/>}/>
            <Route path = " * " element={<Navigate to = "home"/>}/>
    </Routes>
    </Container>
  </>
}

export default AdminRoutes