
import React, {useState} from 'react'
const InitialState = {
  email: "",
  password: "",
}
import {ACTION_TYPE} from "../Redux/Auth_Reducer/action.jsx"

import {useDispatch, useSelector} from "react-redux"

import {useNavigate} from "react-router-dom"
function Login(){
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector(state=>state.TOKEN)
  console.log(data)
  const [IsInput, setIsInput] = useState(InitialState);

  const handleChange = (e)=>{
     const {name, value} =  e.target;
     setIsInput(Prev=>({
      ...Prev,
      [name]: value,
     }))
  }
  
  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      dispatch({type:ACTION_TYPE.LOGIN_REQUEST})
      let Response = await fetch('https://reqres.in/api/login',{
        method: "POST",
        body: JSON.stringify({
          email: IsInput.email.trim(),
          password: IsInput.password.trim(),
        }),
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1"
        },
      })
      let result = await Response.json();
      dispatch({type:ACTION_TYPE.LOGIN_SUCCESS, payload:result.token})
      navigate("/dashboard");
    } catch (error) {
      console.log(error)
      dispatch({type:ACTION_TYPE.LOGIN_FAILURE, payload:error})
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        name="email"
        value={IsInput.email}
        onChange={handleChange}
        placeholder="Enter Email"/>
        <br /><br />
        <input 
        type="text" 
         name="password"
        value={IsInput.password}
        onChange={handleChange}
        placeholder="Enter Password"/>
        <br /><br />
        <button type="submit" value="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login
// api: 'https://reqres.in/api/login'
// email: eve.holt@reqres.in
// pass:  cityslicka
// header:  {
      //   headers: {
      //     "Content-Type": "application/json",
      //     "x-api-key": "reqres-free-v1"
      //   },
      // }