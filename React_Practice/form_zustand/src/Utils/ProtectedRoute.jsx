
import React from 'react'
import GlobalInfo from "../Zustand_store/AuthStore.jsx"
import {Navigate} from "react-router"
function ProtectedRoute({children}) {
  
  const token = GlobalInfo(state=>state.Access_token)
  const IsAuth = GlobalInfo(state => state.IsAuth)

  if(!token && !IsAuth) return <Navigate to="/login" replace={true} />

  return children
}

export default ProtectedRoute