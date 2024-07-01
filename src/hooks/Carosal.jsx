import React from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Carosal() {

  return (
    <Container>
 <div id="demo" className="carousel slide h-25" data-bs-ride="carousel">

  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/Deals/Rec/Hero/PC_header_2.jpg" alt="Los Angeles" className="d-block" style={{width:"100%"}}/>
    </div>
    <div className="carousel-item">
      <img src=" https://images-eu.ssl-images-amazon.com/images/G/31/img18/PC/Laptops/Buyingguide/1_-performance_01.jpg" alt="New York" className="d-block" style={{width:"100%"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/MayArt24/Header/PC_header_unrec_rev.jpg" alt="Chicago" className="d-block"  style={{width:"100%"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/Aman/Feb/1-3000x1000PC.jpg" alt="New York" className="d-block" style={{width:"100%"}}/>
    </div>
  </div>
  
 
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
</Container>
  )
}

export default Carosal