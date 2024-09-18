import BackgroundColorWrapper from 'components/BackgroundColorWrapper/BackgroundColorWrapper'
import ThemeContextWrapper from 'components/ThemeWrapper/ThemeWrapper'
import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AdminLayout from "layouts/Admin/Admin.js";
import { AuthProvider } from './contexts/authContext';
import Register from 'views/Register';
import Login from 'views/Login';
import ProtectedRouter from 'ProtectedRouter';


const App = () => {
  return (
    <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
          <Route
              path="*"
              element={<Login />}
            /> 
            <Route
              path="/admin/login"
              element={<Login />}
            /> 
            <Route path="/admin/register" element={<Register/>} />

            <Route element={<ProtectedRouter/>}>
            <Route path="/admin/*" element={<AdminLayout />} />
            </Route>

          </Routes>
        </BrowserRouter>
        </AuthProvider>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>
  )
}

export default App