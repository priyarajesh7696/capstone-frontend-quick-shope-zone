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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  let [productData, setProductdata] = useState([]);
  let [product, setProduct] = useState([]);
  const [productid, setProductid] = useState()
  const [productName, setProductName] = useState()
  const [image, setImage] = useState()
  const [count, setCount] = useState()
  const [code, setCode] = useState()
  const [brand, setBrand] = useState()
  const [price, setPrice] = useState()
  const [description, setDescription] = useState()

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
       
      e.preventDefault()

 console.log("hi")
      const formData ={_id:productid,
        productName:productName,
        image:image,
        code:code,
        price:price,
        count:count,
      brand:brand,
    description:description}
      
    console.log(formData)
     
      let res = await AxiosService.put(
        `${ApiRoutes.UPDATE_PRODUCT.path}/${productid}`,
        formData
        
      );
      console.log(res);
     alert(`Product updated successfully`);
     getData();
     handleClose()
      
   
  };

  let handleDelete = async (id) => {
    try {
      let res = await AxiosService.delete(
        `${ApiRoutes.DELETE_PRODUCT.path}/${id}`
      );
      console.log(res);
      if (res.status === 200) {
        toast.success("product deleted successfully");
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getData = async () => {
      
    let res = await AxiosService.get(
      `${ApiRoutes.GET_PRODUCTS.path}`,

      {
        authenticate: ApiRoutes.GET_PRODUCTS.authenticate,
      }
    );
    console.log(res);
    setProductdata(res.data.products);
  };
  const getProduct = async (id) => {
    
    console.log(id);
    let res = await AxiosService.get(
      `${ApiRoutes.GET_PRODUCTS.path}/${id}`,

      {
        authenticate: ApiRoutes.GET_PRODUCTS.authenticate,
      }
    );
    console.log(res);
    setProductid(res.data.product._id)
    setProductName(res.data.product.productName);
    setImage(res.data.product.image);
    setCode(res.data.product.code);
    setCount(res.data.product.count);
    setPrice(res.data.product.price);
    setBrand(res.data.product.brand);
    setDescription(res.data.product.description);
  
    setShow(true);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    
      <div className="container">
        <div>
          <h3>Product Reports</h3>
        </div>
        <div className="" >
        <Table striped bordered hover className="">
          <thead className="">
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Image</th>
              <th>Code</th>
              <th>Price</th>
              <th>Count</th>
              <th>Brand</th>
              <th>Category</th>
              <th>CreatedAT</th>
              <th>Last update date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.productName}</td>
                  <td>{e.image}</td>
                  <td>{e.code}</td>
                  <td>{e.price}</td>
                  <td>{e.count}</td>
                  <td>{e.brand}</td>
                  <td>{e.category}</td>
                  <td>{e.createdAt}</td>
                  <td>{e.last_update}</td>
                  <td>
                    <Button
                      variant="info"
                      onClick={() => {
                        getProduct(e._id);
                      }}
                    >
                      Edit
                    </Button>
                    {/* &nbsp; */}
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        handleDelete(e._id);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        </div>
      </div>
      <Modal
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
      </Modal>
    </>
  );
}

export default Product;
