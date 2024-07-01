
import React,{useEffect, useState} from 'react'
import ApiRoutes from '../utils/ApiRoutes';
import AxiosService from '../utils/AxiosService';
import { Container, Form } from 'react-bootstrap';
import Cards from './Cards';
function Searchbar({count,setCount}) {
    const [carts, setCarts] = useState([]);
    // let [count, setCount] = useState(0);
    const [query,setQuery] = useState('')
  const [searchitem,setSearchitem]=useState([]);
  console.log(count)
  useEffect(()=>{
const fetchData = async()=>
{
  try {
    const res = await AxiosService.get(
      `${ApiRoutes.GET_PRODUCTS.path}`,{authenticate: ApiRoutes.GET_PRODUCTS.authenticate})
      setSearchitem(res.data.products)
      // console.log(searchitem)
  } catch (error) {
    console.log(error)
  }
}
fetchData();
  },[])

  const result=searchitem.filter(product => product.productName.toLowerCase().includes(query.toLocaleLowerCase()))

  return (
    <Container>
    <div>
    <Form className="d-flex mx-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 text-certer"
              aria-label="Search"
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
            />
           
          </Form>
          </div>
          <div className="container px-4 px-lg-5 mt-5">
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
         {
             result.map((e,i)=>
             (
              <div className=" col mb-5 text-capitalize hover ">
              <Cards carts={e} count={count} setCount={setCount} key={i}/> 
              </div>
         
            ))
           }
           
           </div>
           </div> 
           
           </Container>       
         
  )
}

export default Searchbar
