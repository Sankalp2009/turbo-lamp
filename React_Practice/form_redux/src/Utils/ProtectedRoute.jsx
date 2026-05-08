import React from "react";
import { useSelector } from "react-redux";
import {Navigate} from "react-router";
const selector = state => state.Auth;

function ProtectedRoute({ children }) {
  const {Access_Token, IsAuth}  = useSelector(selector);
  
  if(!Access_Token && !IsAuth) return <Navigate to="/login" replace={true} />

  return children;
}

export default ProtectedRoute;
