import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Admin from '../Admin/Components/Admin'
import AdminLogin from '../Admin/Components/AdminLogin'

const AdminRouter = () => {
  // Check authentication
  const isAuthenticated = () => {
    const jwt = localStorage.getItem("jwt");
    const role = localStorage.getItem("role");
    return jwt && role === "ADMIN";
  };

  return (
    <Routes>
      {/* Login route - accessible without authentication */}
      <Route path="/login" element={<AdminLogin />} />
      
      {/* All other admin routes should go through Admin component */}
      <Route path="/*" element={
        isAuthenticated() ? <Admin /> : <Navigate to="/admin/login" replace />
      } />
    </Routes>
  )
}

export default AdminRouter