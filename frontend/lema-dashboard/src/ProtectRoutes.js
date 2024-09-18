import { useAuth } from 'contexts/authContext';
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectRoutes = () => {

  const {
    user, isAuthenticated
  } = useAuth();
  if(!isAuthenticated) return <Navigate to="/admin/login" replace/>


  return (
    <Outlet/>
  )
}

export default ProtectRoutes