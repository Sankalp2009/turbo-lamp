
import {useReducer, useEffect} from "react";
import {GlobalInfo} from "./GlobalInfo.jsx"
import {InitialState} from "./InitialState.jsx"
import {Reducer as reducer} from "../Utils/Reducer.jsx"
import {Navigate} from 'react-router-dom'

function AuthContext({children}){
  
  // 1️⃣ Read saved auth info before reducer starts
  const saveAuth = JSON.parse(localStorage.getItem("auth_data"));
  
  // get the first go data from storage and  
  const [state, dispatch] = useReducer(reducer,  {
    ...InitialState,
    IsAuth: saveAuth?.isAuth || false,
    Token: saveAuth?.token || null,
    Role: saveAuth?.role || ""
  });
  
  
  
   // 2️⃣  Save to localStorage whenever token/auth changes or the different user's login
  useEffect(()=>{
    localStorage.setItem(
      "auth_data",
      JSON.stringify({
      token:state.Token, 
      isAuth:state.IsAuth,
      role:state.Role
    })
    )},[state.Token,state.IsAuth,state.Role])
    
    const LogOut = ()=>{
      localStorage.removeItem("auth_data");
      dispatch({ type: "LOGOUT" }); // your reducer should clear state
    }
   
    const value = {state, dispatch, LogOut};

  return (
    <GlobalInfo.Provider value={value}>{children}</GlobalInfo.Provider>
  )
}

export default AuthContext