import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import Topbar from '../login_components/Topbar.jsx';
import Cartpage from '../hooks/Cartpage.jsx';
import Order from '../hooks/Order.jsx';
import User from '../login_components/User.jsx';
import Sidebar from '../login_components/SideBar.jsx';
import Billingdetails from '../hooks/Billingdetails.jsx';
import Contact from '../login_components/Contact.jsx';
function AdminRoutes() {
  return <>
  <Topbar/>
  <Sidebar/>
    <Routes>
    <Route path='home' element={<User/>}/>
      <Route path="cartpage" element={<Cartpage />} />
        <Route path="order" element={<Order />} />
        <Route path="billing" element={<Billingdetails />} />
        <Route path="contact" element={<Contact/>} />
            <Route path = '*' element={<Navigate to = 'home'/>}/>
    </Routes>
  </>
}

export default AdminRoutes