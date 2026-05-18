import { useState, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../Context/AppContext'
import {Action_Type} from '../Utils/ActionCreators'
const InitialState = {
  email: '',
  password: '',
}

function Login() {
  const [IsInput, setIsInput] = useState(InitialState)
  const { dispatch } = useContext(AuthContext);
  
  const HandleChange = (e) => {
    const { name, value } = e.target
    setIsInput((PrevState) => ({
      ...PrevState,
      [name]: value,
    }))
  }

  const HandleSubmit = async (event) => {
    event.preventDefault()
    try {
      dispatch({type:Action_Type.LOGIN_REQUEST})
      let data = await axios.post('https://reqres.in/api/login', IsInput, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'reqres_cb2ec0f9a86845e39f6ea142bb3d20d8',
        },
      })
      console.log(data?.data)
      dispatch({
        type:Action_Type.LOGIN_SUCCESS,
        payload:data?.data?.token
      })
    } catch (error) {
      console.log(error);
      dispatch({
        type:Action_Type.LOGIN_FAILURE
      })
    }
  }

  return (
    <div className="Form">
      <h1>Login</h1>
      <form onSubmit={HandleSubmit}>
        <input
          type="email"
          name="email"
          value={IsInput.email}
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
