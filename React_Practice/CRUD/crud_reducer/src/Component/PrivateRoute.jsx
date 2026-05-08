import React, { useContext } from "react";
import { GlobalInfo } from "../Context/GlobalInfo.jsx";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, requiredRole }) {
  
  const { state } = useContext(GlobalInfo);

  const { Token, Role } = state;

  if (!Token) return <Navigate to="/login" replace={true} />;

  // Logged in but not the right role
  if (requiredRole && Role !== requiredRole)
    return <Navigate to="/" replace={true} />;

  return children;
}

export default PrivateRoute;
