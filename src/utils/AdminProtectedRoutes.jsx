import React from 'react'
import { Navigate } from 'react-router-dom'
function AdminProductedRoutes({children}) {
    let role = sessionStorage.getItem('role')
  return role==='admin'?children:<Navigate to='/'/>
}

export default AdminProductedRoutes