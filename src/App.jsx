import React,{useEffect,useState}  from 'react'
import Dashboard from './Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './login_components/User.jsx';
import Login from './login_components/Login.jsx';
import Signup from './login_components/Signup';
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import UserProtectedRoutes from './utils/UserProtectedRoutes.jsx';
import AdminProductedRoutes from './utils/AdminProtectedRoutes.jsx';
import Sidebar from './login_components/SideBar.jsx';
import 'react-toastify/dist/ReactToastify.css';
import Topbar from './login_components/Topbar.jsx';
import Adminnavbar from './login_components/Adminnavbar.jsx';
import Admin from './login_components/Admindashboard.jsx';
import Product from './admin_components/Product.jsx';
import Salereport from './admin_components/Salereport.jsx';
import Userreport from './admin_components/Userreport.jsx';
import Delivery from './admin_components/Delivery.jsx';
import Addproduct from './admin_components/Addproduct.jsx';
import Searchbar from './hooks/Searchbar.jsx';
import VerifyOtp from './login_components/VerifyOtp.jsx';
import ForgotPassword from './login_components/ForgotPassword.jsx';
import ResetPassword from './login_components/ResetPassword.jsx';
import Cartpage from './hooks/Cartpage.jsx';
import Order from './hooks/Order.jsx';
import UserRoutes from './utils/UserRoutes'
import AdminRoutes from './utils/AdminRoutes'
import axios from "axios";
import Productpage from './hooks/Productpage.jsx';


function App() {


  return <div id="wrapper">
   
    
  <BrowserRouter>
 
    <Routes>
    <Route path='/' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path= '/forgot-password' element={<ForgotPassword />} />
        <Route path= '/reset-password' element={<ResetPassword />} />
        <Route path='/verify-otp' element={<VerifyOtp />} />
        <Route path= '/productpage' element={<Productpage />} />
    <Route path = '/admin/*' element={<AdminProductedRoutes><AdminRoutes/></AdminProductedRoutes>}/>
  <Route path = '/user/*' element={<UserProtectedRoutes><UserRoutes/></UserProtectedRoutes>}/>
      
     

      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  </BrowserRouter>
</div>
}
 
export default App