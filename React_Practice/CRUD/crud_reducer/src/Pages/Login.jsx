import React, { useState, useContext } from "react";
import { GlobalInfo } from "../Context/GlobalInfo.jsx";
import {ACTION_TYPE} from "../Utils/Action_Creators.jsx";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const InitialState = {
  email: "",
  role: "",
  password: "",
};

function Login() {
  const [IsInput, setIsInput] = useState(InitialState);
  const {dispatch} = useContext(GlobalInfo);
  const navigate = useNavigate();
  
  const HandleChange = (e)=>{
    const {name, value} = e.currentTarget;
    setIsInput(oldState=>({
      ...oldState,
      [name] : value
    }))
  }

  const HandleSubmit = async(e) => {
    e.preventDefault();
    try {  
      
      dispatch({type:ACTION_TYPE.LOGIN_REQUEST});
      
      const res = await axios.post('https://reqres.in/api/login', {email:IsInput.email, password:IsInput.password },
      
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1"
        },
      })

       dispatch({type:ACTION_TYPE.LOGIN_SUCCESS, payload:{token:res.data?.token, role:IsInput.role}});
       
       navigate("/dashboard")
    
      } catch (error) {
      
        dispatch({type:ACTION_TYPE.LOGIN_FAILURE});
      
        console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={IsInput.email}
          onChange={HandleChange}
        />
        <br /><br />
        <input 
        type="text" 
        name="password" 
        placeholder="Enter password" 
        value={IsInput.password} 
        onChange={HandleChange}
        />
        <br /><br />
        <select name="role" value={IsInput.role} onChange={HandleChange}>
          <option value="">Select Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <br /><br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Login;

// email: eve.holt@reqres.in
// pass:  cityslicka