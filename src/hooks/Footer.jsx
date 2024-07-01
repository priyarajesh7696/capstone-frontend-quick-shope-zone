import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return <>
  
      <div className="text-center p-2 link-light mx-0" fixed-bottom style={{backgroundColor:"indigo"}}>
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="#">Full Stack Develeoper at Guvi</a>
        <div className='mt-2' >
          <a href="https://facebook.com" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://google.com" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="https://instagram.com" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </>
}

export default Footer