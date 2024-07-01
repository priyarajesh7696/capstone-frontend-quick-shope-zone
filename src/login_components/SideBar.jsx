import React from 'react'
import {Link} from 'react-router-dom'
function Sidebar() {
  return <ul className="sidebar navbar-nav sidebar sidebar-dark accordion " position-relative style={{backgroundColor:"navy"  }} >

  <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
     
      <div className="sidebar-brand-text mx-3">Quick Shope zone </div>
  </a>
  
  <hr className="sidebar-divider my-0"/>
  
  <li className="nav-item active">
      <Link to='home' className="nav-link" href="index.html">
          <i className="fa-solid fa-house"></i>
          <span className='mx-2'>Dashboard</span>
      </Link>
  </li>
  <li className="nav-item active">
      <Link to='profile' className="nav-link" href="index.html">
      <i class="fa fa-fw fa-user"></i>
          <span className='mx-2'>Profile</span>
      </Link>
  </li>
  <li className="nav-item active">
      <Link to='cartpage' className="nav-link" href="index.html">
      <i className="fa-solid fa-cart-shopping"></i>
          <span className='mx-2'>CartPage</span>
      </Link>
  </li>
  <li className="nav-item active">
      <Link to='order' className="nav-link" href="index.html">
      <i class="fa-brands fa-first-order"></i>
          <span className='mx-2'>Your Orders</span>
      </Link>
      </li>
      <li className="nav-item active">
      <Link to='billing' className="nav-link" href="index.html">
      <i class="fa-solid fa-money-bill"></i>
          <span className='mx-2'>Billing Details</span>
      </Link>
      </li>
      <li className="nav-item active">
      <Link to='contact' className="nav-link" href="index.html">
      <i class="fa-regular fa-address-card"></i>
          <span className='mx-2'>Contacts</span>
      </Link>
  </li>
  <li className="nav-item active">
      <Link to='/logout' className="nav-link" href="index.html">
      <i class="fa-solid fa-arrow-right-from-bracket"></i>
          <span className='mx-2'>Logout</span>
      </Link>
  </li>
  
  <hr className="sidebar-divider"/>
  </ul>
  }


export default Sidebar