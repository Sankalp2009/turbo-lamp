
import { GlobalInfo } from './../Context/AuthContext';
// eslint-disable-next-line no-unused-vars
import { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) =>{
   const {isAuth} = useContext(GlobalInfo)
   console.log(isAuth)
   if(!isAuth){
    return <Navigate to="/" />
   }
   
   return children
}
export default PrivateRoute;   