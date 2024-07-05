import React,{ useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBRadio,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import AxiosService from "../utils/AxiosService";
import ApiRoutes from "../utils/ApiRoutes";
import Cartitem from "./Cartitem";
import {useNavigate } from "react-router-dom";
import axios from "axios";

export default function Billingdetails({product_id,totalAmount,qty}) {
  const [cartData, setCartdata] = useState([]);
  const [userData, setUserdata] = useState([]);
  const [quantity, setQuantity] = useState(0);
  // const [billingdata,setBillingdata]=useState()
  const [total, setTotal] = useState()
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [payment, setPayment] = useState('')
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
    const paymentOptions = {
      amount: totalAmount*100, // amount in smallest currency unit
      currency: "INR",
      receipt: `recieptno_${Math.random()}`,
  };

  let result = await AxiosService.post(
    `${ApiRoutes.ORDER_USERORDER.path}`,

    {
      authenticate: ApiRoutes.ORDER_USERORDER.authenticate,
    },paymentOptions);
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
        name: "Quick Shope Zone .",
        description: "Test Transaction",
       
        order_id: order_id,
        handler: async function (response) {
            const data = {
              orderDate:Date.now(),
              order_status:"",
               shipping_address:address,
               payment_type:"card Payment",
               email:email,
               mobile_no:phone,
               total:totalAmount,
               quantity:qty,
               name:name,
               product_id:product_id,
               shipping_charges:"free",
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };
            let id = sessionStorage.getItem('id')
            console.log(data)
           
            let result = await AxiosService.post(
              `${ApiRoutes.ORDER_SUCCESS.path}`,
      
              {
                authenticate: ApiRoutes.ORDER_SUCCESS.authenticate,
              },data);

            alert(result.data);
        },
        prefill: {
            name: "priya",
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

  const handlePayment =  () => {
    const billing = {
      name,address,email,phone,totalAmount,qty
      
    }
    console.log(billing)
  }
 
  
  const getData = async () => {
    let id = sessionStorage.getItem("id");

    let res = await AxiosService.get(
      `${ApiRoutes.GET_USER.path}/${id}`,

      {
        authenticate: ApiRoutes.GET_USER.authenticate,
      }
    );
    setCartdata(res.data.user.order);
    setUserdata(res.data.user)
    setAddress(res.data.user.location)
    setName(res.data.user.name)
    setEmail(res.data.user.email)
    setPhone(res.data.user.mobile)
    
  };
  
  
  useEffect(() => {
    getData();
   
 }, []);



  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="8" className="mb-2">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3 mt-5">
              <h5 className="mb-0">Biling details</h5>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBRow className="mb-4">
                <MDBCol>
                  <MDBInput label="name" id="form1" type="text"  value={name} onChange={(e)=>setName(e.target.value)} />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                label="Address"
                id="form3"
                type="text"
                 value={address}
                onChange={(e)=>setAddress(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form4"
                type="email"
                 value={email}
                onChange={(e)=>setEmail(e.target.value)}

              />
              <MDBInput
                wrapperClass="mb-4"
                label="Phone"
                id="form5"
                type="number"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
              />

              <hr className="my-4" />

              <MDBCheckbox
                name="flexCheck"
                value=""
                id="checkoutForm1"
                label="Shipping address is the same as my billing address"
              />
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="checkoutForm2"
                label=" Save this information for next time"
                defaultChecked
              />

              <hr className="my-4" />

             
              <MDBBtn size="lg" block 
     
       onClick={displayRazorpay}>
      Place Order
     </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
  
  
     <MDBCol md="4" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3 mt-5">
              <h5 className="mb-0">Summary</h5>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products Cost
                  <span>${totalAmount} </span>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Quantity
                  <span>{qty} </span>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Shipping charges
                  <strong>free</strong>
                </MDBListGroupItem>
                <hr className="my-2"></hr>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span>
                    <strong>${totalAmount}</strong>
                  </span>
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        
        </MDBRow>
    </MDBContainer>
  );
}