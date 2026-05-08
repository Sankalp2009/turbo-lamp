
import React, {useContext} from 'react'
import {AuthInfo} from "../Helpers/AuthInfo.jsx"
import {Navigate, useNavigate} from "react-router-dom"
function Home(){

  const {isAuth,ToggleAuth} = useContext(AuthInfo)
  
  console.log(isAuth,ToggleAuth);
  
  const Navigate = useNavigate();
  
  function handleClick(){
    ToggleAuth();
    Navigate("/user");
  }
   
  return (
   <>
    <h1>Home</h1>
    <h1><button onClick={handleClick}>Login</button></h1>
   </>
  )  
}

export default Home