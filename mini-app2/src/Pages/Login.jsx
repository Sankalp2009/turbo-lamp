import { useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { GlobalAuth } from '../Context/AuthContext'
import { Action_Type } from '../Helpers/Action_Creators'

const InitialState = {
  username: '',
  password: '',
}

function Login() {
  const [isInput, setIsInput] = useState(InitialState)
  const { state, dispatch } = useContext(GlobalAuth)
  const nav = useNavigate()

  const HandleChange = (e) => {
    const { name, value } = e.target
    setIsInput((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const HandleSubmit = async (event) => {
    event.preventDefault()

    if (!isInput.username || !isInput.password) {
      alert('FIELDS ARE REQUIRED TO LOGIN')
      return
    }

    try {
      dispatch({
        type: Action_Type.Login_Request,
      })
      let url = 'https://dummyjson.com/auth/login'
      let res = await axios.post(url, isInput)
      if (!res.status) throw new Error('Something is Wrong')
      const token = res?.data?.accessToken || null
      if (token) {
        dispatch({
          type: Action_Type.Login_Success,
          payload: {
            Token: token || null,
          },
        })
        nav('/dashboard')
      } else {
        dispatch({
          type: Action_Type.Login_Failure,
          payload: {
            error: 'Token is Missing',
          },
        })
      }
    } catch (error) {
      dispatch({
        type: Action_Type.Login_Failure,
        payload: {
          error: error.message,
        },
      })
    }
  }

  return (
    <div className="Form">
      {state.isLoading && <h2>Loading</h2>}
      {state.isError && <h2>{state.isError}</h2>}
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