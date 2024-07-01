import React from 'react'
import Topbar from '../login_components/Topbar'
import Adminnavbar from '../login_components/Adminnavbar'
import Admindashboard from '../login_components/Admindashboard'
import {useEffect, useState} from 'react'

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes'
function Userreport() {
  let [user,setUser] = useState([])
  let [userCartitem,setUsercartitem] = useState([])
  let navigate = useNavigate()
 
  const getData = async () => {
   
    let res = await AxiosService.get(
      `${ApiRoutes.GET_USERS.path}`,

      {
        authenticate: ApiRoutes.GET_USERS.authenticate,
      }
    );
    setUser(res.data.users);
   
  
  };
  
  useEffect(() => {
    getData();
  }, []);
  return <>
 {/* <Admindashboard/> */}
 <div className="container row">
  <div><h3>User Report</h3></div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Location</th>
                      
                        <th>Cartcount</th>                      
                      
                        <th>Role</th>
                        <th>CreatedAT</th>
                        <th>Last_Login_Time</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            user.map((e,i)=>{
                                return <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.mobile}</td>
                                    <td>{e.location}</td>
                                    <td>{e.cartCount}</td>
                                    <td>{e.role}</td>
                                    <td>{e.createdAt}</td>
                                    <td>{e.last_login}</td>
                                </tr>

                            })
                       }
                    </tbody>
                </Table>
                </div>
</>
}

export default Userreport