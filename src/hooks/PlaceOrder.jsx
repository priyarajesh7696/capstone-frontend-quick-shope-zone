import React, { useState, useEffect } from "react";
import { Navigate,useNavigate } from "react-router-dom";
import AxiosService from "../utils/AxiosService";
import ApiRoutes from "../utils/ApiRoutes";
import axios from "axios";


function PlaceOrder () {
  function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

async function displayRazorpay() {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    let result = await AxiosService.post(
        `${ApiRoutes.ORDER_USERORDER.path}`,

        {
          authenticate: ApiRoutes.ORDER_USERORDER.authenticate,
        }
      );
console.log(result)
    if (!result) {
        alert("Server error. Are you online?");
        return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
        key: "rzp_test_5hLdLmUevPlu7q", // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: "Soumya Corp.",
        description: "Test Transaction",
       
        order_id: order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };
            let id = sessionStorage.getItem('id')
            let result = await AxiosService.post(
                `${ApiRoutes.ORDER_SUCCESS.path}`,
        
                {
                  authenticate: ApiRoutes.ORDER_SUCCESS.authenticate,
                },data
              );

            alert(result.data.msg);
        },
        prefill: {
            name: "Priya",
            email: "rameshpriyait@gmail.com",
            contact: "7418182749",
        },
        notes: {
            address: "Bright QUICK SHOPE Corporate Office",
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}
return (
    <div>
      <button 
       onClick={displayRazorpay}
      >Place Order
      </button>
  
    </div>
  );
}
export default PlaceOrder