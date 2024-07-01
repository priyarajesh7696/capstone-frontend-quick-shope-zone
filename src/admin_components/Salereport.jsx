import React from "react";
import Topbar from "../login_components/Topbar";
import Adminnavbar from "../login_components/Adminnavbar";
import Admindashboard from "../login_components/Admindashboard";
import { useEffect, useState } from "react";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import AxiosService from "../utils/AxiosService";
import ApiRoutes from "../utils/ApiRoutes";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Container } from "react-bootstrap";
function Product() {
  
  let [salereport, setSalereport] = useState([]);
 

  let navigate = useNavigate();

  const getData = async () => {
      console.log("hhhhi")
    let res = await AxiosService.get(
      `${ApiRoutes.GET_REPORT.path}`,

      {
        authenticate: ApiRoutes.GET_REPORT.authenticate,
      }
    );
    console.log(res);
    setSalereport(res.data.salereport);
  };
 
  useEffect(() => {
    
    getData();
  }, []);
  return (
    <>
    
      <div className="container row">
        <div>
          <h3>Product Sale Reports</h3>
        </div>
       
        <Table striped bordered hover className="">
          {/* <table striped bordered hover className=""> */}
          <thead className="">
            <tr>
              <th>No</th>
              <th>USER NAME</th>
              <th>USER EMAIL</th>
              <th>USER mobile</th>
              <th>ORDER DATE</th>
              <th>ORDER STATUS</th>
              <th>Product Id</th>
              <th>PRICE</th>
              <th>SHIPPING CHARGES</th>
              <th>QUNTITY</th>
              <th>SHIPPING ADDRESS</th>
              <th>DELIVRY STATUS</th>
              <th>PAYMENT STATUS</th>
              <th>orderId</th>
              <th>razorpayPaymentId</th>
            </tr>
          </thead>
          <tbody>
            {salereport.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.mobile_no}</td>
                  <td>{e.orderDate}</td>
                  <td>{e.order_status}</td>
                  <td>{e.product_id}</td>
                  <td>{e.price}</td>
                  <td>{e.shipping_charges}</td>
                  <td>{e.quantity}</td>
                  <td>{e.shipping_address}</td>
                  <td>{e.delivery_status}</td>
                  <td>{e.payment_type}</td>
                  <td>{e.orderId}</td>
                  <td>{e.razorpayPaymentId}</td>
                  
                 
                </tr>
              );
            })}
          </tbody>
          {/* </table> */}
        </Table>
        {/* </Container> */}
      </div>
      {/* <Modal
        show={show}
        onHide={handleClose}
       
        className="Model"
      >
        <Modal.Header closeButton>
          <Modal.Title >
            Update Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="d-flex flex-column justify-content-center align-content-center mt-4">
              <Form >
                <Form.Group className="mb-2">
                  <Form.Label >Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="productName"
                    value={productName}
                    onChange={(e)=>{setProductName(e.target.value)}}
                    o
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Image Url"
                    name="image"
                    value={image}
                    onChange={(e)=>{setImage(e.target.value)}}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Product Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Product Code"
                    name="code"
                    value={code}
                    onChange={(e)=>{setCode(e.target.value)}}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Price"
                    name="price"
                    value={price}
                    onChange={(e)=>{setPrice(e.target.value)}}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Count</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Count"
                    name="count"
                    value={count}
                    onChange={(e)=>{setCount(e.target.value)}}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Brand</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Brand"
                    name="brand"
                    value={brand}
                    onChange={(e)=>{setBrand(e.target.value)}}

                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Description"
                    name="description"
                    value={description}
                    onChange={(e)=>{setDescription(e.target.value)}}
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="g-5">
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit"onClick={(e)=>handleSubmit(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}

export default Product;
