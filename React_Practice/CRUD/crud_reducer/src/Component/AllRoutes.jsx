import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard.jsx";
import Create from "../Pages/Create.jsx";
import Update from "../Pages/Update.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Login from "../Pages/Login.jsx";
import Home from "../Pages/Home.jsx";
import Edit from "../Pages/Edit.jsx";
function AllRoutes() {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      
      <Route
        path="/create"
        element={
          <PrivateRoute requiredRole="admin">
            <Create />
          </PrivateRoute>
        }
      />
      
      <Route
        path="/update/:id"
        element={
          <PrivateRoute requiredRole="admin">
            <Edit />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AllRoutes;
