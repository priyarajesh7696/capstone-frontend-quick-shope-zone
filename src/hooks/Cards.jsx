import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { toast } from "react-toastify";
import AxiosService from "../utils/AxiosService";
import ApiRoutes from "../utils/ApiRoutes";
import { useNavigate } from "react-router-dom";
import { Figure } from "react-bootstrap";

function Cards({ carts, count, setCount }) {
  let navigate = useNavigate();
  // console.log(carts);
  let [toggle, settoggle] = useState(true);

  let [cartItem, setCartitem] = useState([]);
  // console.log(cartItem)
  const Increment = async (id) => {
   
              let userId = sessionStorage.getItem("id");
             
              let res = await AxiosService.get(
                `${ApiRoutes.GET_PRODUCTS.path}/${id}`,

                {
                  authenticate: ApiRoutes.GET_PRODUCTS.authenticate,
                }
              );
let resdata =res.data.product
let cartcount = count + 1

              setCartitem(res.data.product);
              setCount(cartcount);
              settoggle(false);

              let updateRes = await AxiosService.put(
                `${ApiRoutes.UPDATE_USER.path}/${userId}`,
                { cartcount ,resdata}
              );
              window.location.reload(true)
             
            };
  const decrement = async (id) => {
              
              let user = await AxiosService.get(
                `${ApiRoutes.GET_PRODUCTS.path}/${id}`,{ authenticate: ApiRoutes.GET_PRODUCTS.authenticate}
              );
              setCartitem(res.data.product);
              let userId = sessionStorage.getItem("id");
              // console.log(count)

              let res = await AxiosService.get(
                `${ApiRoutes.GET_USER.path}/${id}`,

                {
                  authenticate: ApiRoutes.GET_USER.authenticate,
                }
              );
              let updateRes = await AxiosService.put(
                `${ApiRoutes.UPDATE_USER.path}/${userId}`,
                { cartCount: count, cartitem: cartItem }
              );
             
              settoggle(true);
              setCount(count - 1);
              // navigate("/user");
              window.location.reload(true)
            };
          
  // console.log(count)
  return (
    <>
      <div className="card h-100 d-flex justify-content-center align-items-center bg-gradient-primary text-light">
      <div className="mx-0 " start-0 >
          <strong className="btn btn-outline-light bg-danger link-light"> 45% off</strong>
          </div>
        <div>
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
          {/* <!-- Product details-->*/}
        </div>
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name-->*/}
            <h5 className="fw-bolder">{carts.productName}</h5>
            {/* <!-- Product reviews-->*/}
            <div className="d-flex justify-content-center text-warning mb-2">
              <div className="bi-star-fill">*</div>
              <div className="bi-star-fill">*</div>
              <div className="bi-star-fill">*</div>
              <div className="bi-star-fill">*</div>
              <div className="bi-star-fill">*</div>
            </div>
            MRP : $ {carts.price}
          </div>
          
        </div>
      
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {toggle ? (
              <button
                className="btn btn-outline-light mt-auto"
                onClick={() => {
                  Increment(carts._id);
                }}
              >
                Add to Cart
              </button>
            ) : (
              <button
                className="btn btn-outline-light mt-auto"
                onClick={() => {
                  decrement(carts._id);
                }}
              >
                Remove from Cart
              </button>
            )}
          </div>
        </div>
      </div>

      {/* );
          })} */}
    </>
  );
}

export default Cards;
