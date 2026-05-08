import React, { useState, useContext } from "react";
import { AuthInfo } from "../Helpers/AuthInfo.jsx";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
const InitialCred = {
  email: "",
  password: "",
};

function Login() {
  const [IsInput, setIsInput] = useState(InitialCred);
  const { LoginAuth } = useContext(AuthInfo);
  
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setIsInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const LoginUser = async () => {
    try {
      const res = await axios.post('https://reqres.in/api/login', IsInput,{
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1"
        },
      })
      console.log(res.data?.token);
      LoginAuth(res.data?.token);
      navigate("/user");

    } catch (error) {
      console.log(error);
    }
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    LoginUser();
    // setIsInput(InitialCred);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={IsInput.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={IsInput.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit" value="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;