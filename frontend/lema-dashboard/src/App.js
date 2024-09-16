import BackgroundColorWrapper from 'components/BackgroundColorWrapper/BackgroundColorWrapper'
import ThemeContextWrapper from 'components/ThemeWrapper/ThemeWrapper'
import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AdminLayout from "layouts/Admin/Admin.js";
import { AuthProvider } from './contexts/authContext';

const App = () => {
  return (
    <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/admin/*" element={<AdminLayout />} />
            <Route
              path="*"
              element={<Navigate to="/admin/dashboard" replace />}
            /> 
          </Routes>
        </BrowserRouter>
        </AuthProvider>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>
  )
}

export default App