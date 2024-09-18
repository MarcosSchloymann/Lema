import { useAuth } from 'contexts/authContext'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRouter = () => {

    const {
        user,
        isAuthenticated,
        errores
    } = useAuth()

    if(!isAuthenticated) return <Navigate to="/login" replace/>

    return (
        <Outlet/>
    )
}

export default ProtectedRouter