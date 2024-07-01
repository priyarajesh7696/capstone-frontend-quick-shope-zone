
import React,{useEffect,useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Footer from '../src/hooks/Footer';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carosal from '../src/hooks/Carosal';
import ApiRoutes from '../src/utils/ApiRoutes';
import AxiosService from '../src/utils/AxiosService';
import Cards from '../src/hooks/Cards'
import Productpage from './hooks/Productpage';



function Dashboard() {
  const navigate = useNavigate();
  const [query,setQuery] = useState('')
  let [count, setCount] = useState(0);
  const [searchitem,setSearchitem]=useState([]);
  const [productdata, setProductdata] = useState([])
  console.log(count)
  // const getData = async () => {
      
  //   let res = await AxiosService.get(
  //     `${ApiRoutes.GET_PRODUCTS.path}`,

  //     {
  //       authenticate: ApiRoutes.GET_PRODUCTS.authenticate,
  //     }
  //   );
  //   console.log(res);
  //   setProductdata(res.data.products);
  // };
  useEffect(()=>{
   
const fetchData = async()=>
{
  try {
    const res = await AxiosService.get(
      `${ApiRoutes.GET_PRODUCTS.path}`,{authenticate: ApiRoutes.GET_PRODUCTS.authenticate})
      setSearchitem(res.data.products)
      setProductdata(res.data.products);
      // console.log(searchitem)
  } catch (error) {
    console.log(error)
  }
}
fetchData();
  },[])

  const result=searchitem.filter(product => product.productName.toLowerCase().includes(query.toLocaleLowerCase()))

 return  <>

   {/* <Container> */}
    <div >
  <Navbar className='d-flex p-3 px-6 px-md-12 px-lg-12 bg-success link-light'>
     
        <Navbar.Brand href="#"className="fs-6"><h2>Quick Shope Zone</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          
        <Nav className="text-white">
        <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="features">Offers</Nav.Link>
            
            <NavDropdown title="Products" id="collapsible-nav-dropdown" className='fs-6'>
             
              <NavDropdown.Item href="/Productpage">
               Smart Phones
              </NavDropdown.Item>
              <NavDropdown.Item href="/Productpage">
               AC or Air Conditioner
              </NavDropdown.Item>
              <NavDropdown.Item href="/Productpage">Laptop</NavDropdown.Item>
            
              <NavDropdown.Item href="/Productpage">
                Fridge or Refrigiretor
              </NavDropdown.Item>
              <NavDropdown.Item href="/Productpage">
                Washing Machine
              </NavDropdown.Item>
              <NavDropdown.Item href="/Productpage">
                Smart LED TV
              </NavDropdown.Item>
             
            </NavDropdown>
           
            <Nav.Item>
            <Form className="d-flex mx-5 w-100">
            <Form.Control
              type="search"
              placeholder="Search"
              className="mx-5 w-100 float-end"
              aria-label="Search"
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
            />
          
          </Form>
          </Nav.Item>
          <Nav.Item className='mx-5 g-3 float-end '>
          <Link to="/login"><i class="fa fa-fw fa-user"></i> Signin</Link>
          </Nav.Item>
          </Nav>
          
        </Navbar.Collapse>
    
    </Navbar>
    {/* </div>
    <div> */}
    <div style={{border:"1px groove"}} className="mt-2 px-6 px-lg-12 row gx-6 gx-lg-12 row-cols-12 row-cols-md-12 row-cols-xl-12 d-flex justify-content-center align-items-center p-2 ">
      <Carosal/>
    </div>
    
    
               <div style={{border:"1px groove"}} className=" mt-3 px-4 px-lg-12 row gx-4 gx-lg-12 row-cols-1 row-cols-md-6 row-cols-lg-12 d-flex justify-content-center align-items-center">
               
         {
          result.map((e,i)=>
           {
 return  <Card key={i} className='p-1 me-3 mb-3 mt-2 bg-gradient-success text-light' style={{ height: "20rem", width: "12rem", padding: "1rem" }}>
<Card.Img
    variant="top"
    src={e.image}
    style={{ height: "10rem", width: "12rem", padding: "1rem" }}
    className=''
  />
  <Card.Body>
  <h5 className="fw-bolder"style={{fontSize:"0.8rem"}}>{e.productName}</h5>
    <Card.Title>$ {e.price}.00 </Card.Title>
   
  </Card.Body>
</Card>
           }

           )}
           </div>
           <div className="bg-success text-center color-red"><h3><strong>Shop By Catagory</strong></h3></div>
    <div className=" px-5 px-lg-6 mt-5 row gx-5 gx-lg-6 row-cols-1 row-cols-md-6 row-cols-xl-6 d-flex justify-content-center align-items-center text-center">
         {
        productdata.map((e,i)=>{
          return  <Card key={i} className=' border-dark text-light p-2 me-2 mb-2'style={{backgroundColor:"navy"}}>
         
            <Card.Body>
              <Card.Title>{e.brand} </Card.Title>
            </Card.Body>
          </Card>
        })
      }
     
    </div>
           <Footer/>
    </div>
   
    
      
    {/* </Container> */}
  </>
}


//           {/* <Nav
//             className="me-auto  my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             {/* <Link  to="/" >Home</Link> */}
//             {/* <Nav.Link href="#action2">Offers</Nav.Link>
//             <Nav.Link href="#action2">About</Nav.Link> */}
           
//           </Nav>
//           
//           {/* <button className='btn btn-outline-success btn-rounded btn-sm' onClick={()=>navigate('/login')}>Login</button> */}
//   {/* <button className='btn btn-outline-success btn-rounded btn-sm'  onClick={()=>navigate('/signup')}>Register</button> */}
//         </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     </div>
    
   
  
           
        //     <div className="container px-4 px-lg-5 mt-5">
        //       <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 d-flex justify-content-center align-items-center">
        //  {
        //      result.map((e,i)=>
        //      (
        //       <div className=" col mb-5 text-capitalize ">
        //        <div className="card h-100">
        //             {/*<!-- Sale badge-->*/}
        //             {/* <div className="badge bg-dark text-white position-absolute" style = {{top:"0.5rem", right:"0.5rem"}}>Sale</div> */}
        //             {/*<!-- Product image-->*/}
        //             <img
        //               className="card-img-top"
        //               src={e.image}
        //               style={{
        //                 height: "10rem",
        //                 width: "15rem",
        //                 padding: "1rem",
        //               }}
        //               alt="..."
        //             />
        //             {/* <!-- Product details-->*/}
        //             <div className="card-body p-4">
        //               <div className="text-center">
        //                 {/* <!-- Product name-->*/}
        //                 <h5 className="fw-bolder">{e.productName}</h5>
        //                 {/* <!-- Product reviews-->*/}
        //                 <div className="d-flex justify-content-center text-warning mb-2">
        //                   <div className="bi-star-fill">*</div>
        //                   <div className="bi-star-fill">*</div>
        //                   <div className="bi-star-fill">*</div>
        //                   <div className="bi-star-fill">*</div>
        //                   <div className="bi-star-fill"></div>
        //                 </div>
        //                 {/* <!-- Product price-->*/}${e.price}

        //               </div>
        //               {e.description}
        //             </div>
        //             {/*<!-- Product actions-->*/}
        //             <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        //               <div className="text-center">
        //                 <button
        //                     className="btn btn-outline-dark mt-auto"
        //                     onClick={() =>{ } }
        //                   >
        //                     Add to Cart
        //                   </button>
        //               </div>
                     
        //             </div>
        //           </div>
        //       </div>
         
        //     ))
        //    }
           
        //    </div>
        //    </div> 
          
        //    <div className="productcards mt-2" >
        //       <Card className=''>
        //         <Card.Img variant="top" src='https://tse3.mm.bing.net/th?id=OIP.eZe7uCwzZfWVBzgG2wdB4gHaE3&pid=Api&…'style = {{height:"10rem", width:"15rem",padding:'1rem'}} />
        //         <Card.Body>
        //           <Card.Title>Smart TV</Card.Title>
        //         </Card.Body>
        //       </Card>
        //       <Card>
        //         <Card.Img variant="top" src='https://tse4.mm.bing.net/th?id=OIP.Y5Ygai29oo36dlek7s7TdQHaE7&pid=Api&…'style = {{height:"10rem", width:"15rem",padding:'1rem'}} />
        //         <Card.Body>
        //           <Card.Title>Mobiles</Card.Title>
        //         </Card.Body>
        //       </Card>
        //       <Card >
        //         <Card.Img variant="top" src='https://tse1.mm.bing.net/th?id=OIP.IUJ8yTHbEUqESuvi2VL16AHaHa&pid=Api&P=0&h=180'style = {{height:"10rem", width:"15rem",padding:'1rem'}} />
        //         <Card.Body>
        //           <Card.Title>Air Conditioner</Card.Title>
        //         </Card.Body>
        //       </Card>
        //       <Card >
        //         <Card.Img variant="top" src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5712/5712431_sd.jpg?is-pending-load=1'style = {{height:"10rem", width:"15rem",padding:'1rem'}} />
        //         <Card.Body>
        //           <Card.Title>Washing Machine</Card.Title>
        //         </Card.Body>
        //       </Card>
        //     </div>
        //    
           
        //     </div>
        //     </Container>
           
//   </>
// } */}

export default Dashboard

