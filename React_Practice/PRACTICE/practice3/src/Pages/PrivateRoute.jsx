
import React, {useContext} from 'react'
import {AuthInfo} from "../Helpers/AuthInfo.jsx"
import {Navigate} from "react-router-dom"
function PrivateRoute({children}) {
  
  const {IsAuthData} = useContext(AuthInfo);

  if(!IsAuthData.isAuth) return <Navigate to="/" replace={true} />;
  return children;
}

export default PrivateRoute