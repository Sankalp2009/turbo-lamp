import { useState, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../Context/AppContext'
import { Action_Type } from '../Utils/ActionCreators'
const InitialState = {
  Username: '',
  password: '',
}

function Login() {
  const [IsInput, setIsInput] = useState(InitialState)
  const { dispatch } = useContext(AuthContext)

  const HandleChange = (e) => {
    const { name, value } = e.target
    setIsInput((PrevState) => ({
      ...PrevState,
      [name]: value,
    }))
  }
  console.log(IsInput)
  const HandleSubmit = async (event) => {
    event.preventDefault()
    try {
      dispatch({ type: Action_Type.LOGIN_REQUEST })
      let data = await axios.post(
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
      console.log(data)
      dispatch({
        type:Action_Type.LOGIN_SUCCESS,
        payload:data?.data?.accessToken
      })
    } catch (error) {
      console.log('err', error)
      dispatch({
        type: Action_Type.LOGIN_FAILURE,
      })
    }
  }

  return (
    <div className="Form">
      <h1>Login</h1>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          name="Username"
          value={IsInput.Username}
          onChange={HandleChange}
          placeholder="Enter Email"
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          value={IsInput.password}
          onChange={HandleChange}
          placeholder="Enter Password"
        />
        <br />
        <br />
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login