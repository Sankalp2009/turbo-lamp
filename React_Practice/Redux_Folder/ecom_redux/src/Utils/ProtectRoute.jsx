
import React from 'react'
import {useSelector} from "react-redux"
import {Navigate} from "react-router-dom"
function ProtectRoute({children}) {

  const {token, IsAuth} = useSelector(state=>({
    token: state.Auth.token,
    IsAuth: state.Auth.IsAuth,
  }))

  if(!token && !IsAuth) return <Navigate to="/login" replace={true} />

  return children
}

export default ProtectRoute