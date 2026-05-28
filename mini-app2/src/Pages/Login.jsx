import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const InitialState = {
  username: '',
  password: '',
}
function Login() {
  
  const [isInput, setIsInput] = useState(InitialState)
  
  const Nav = useNavigate();
  
  const HandleChange = (e) => {
    const { name, value } = e.target
    setIsInput((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const HandleSubmit = (event) => {
    event.preventDefault()
    console.log('form Submit')
  }

  return (
    <div className="Form">
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          name="username"
          value={isInput.username}
          onChange={HandleChange}
          placeholder="Enter Username"
        />
        <br />
        <br />
        <input
          type="text"
          name="password"
          value={isInput.password}
          onChange={HandleChange}
          placeholder="Enter Password"
        />
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Login