import { useState, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../Context/AuthContext'
import { Action_Type } from '../Utils/ActionCreators'
import { useNavigate } from 'react-router-dom'

const InitialState = {
  Username: '',
  password: '',
}

function Login() {
  const [IsInput, setIsInput] = useState(InitialState)

  const { dispatch } = useContext(AuthContext)

  const Nav = useNavigate()

  const HandleChange = (e) => {
    const { name, value } = e.target

    setIsInput((PrevState) => ({
      ...PrevState,
      [name]: value,
    }))
  }

 const getValidToken = (response) => {
  return response?.data?.accessToken || null
}

const HandleSubmit = async (event) => {

  event.preventDefault()

  try {

    dispatch({
      type: Action_Type.LOGIN_REQUEST,
    })

    const response = await axios.post(
      'https://dummyjson.com/auth/login',
      {
        username: IsInput.Username,
        password: IsInput.password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const token = getValidToken(response)

    // SUCCESS CASE

    if (token) {

      dispatch({
        type: Action_Type.LOGIN_SUCCESS,
        payload: token,
      })

      Nav('/dashboard')

    } else {

      // FAILURE CASE

      dispatch({
        type: Action_Type.LOGIN_FAILURE,
      })
  
      console.error('Invalid token received')
    }

  } catch (error) {

    console.log(error)

    dispatch({
      type: Action_Type.LOGIN_FAILURE,
    })
  }
}

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Login to continue your shopping experience</p>
        </div>

        <form className="login-form" onSubmit={HandleSubmit}>

          <div className="input-group">
            <label>Username</label>

            <input
              type="text"
              name="Username"
              value={IsInput.Username}
              onChange={HandleChange}
              placeholder="Enter your username"
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              value={IsInput.password}
              onChange={HandleChange}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login