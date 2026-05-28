import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const InitialState = {
  username: '',
  password: '',
}
function Login() {
  
  const [isInput, setIsInput] = useState(InitialState)
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  
  const nav = useNavigate();
  
  const HandleChange = (e) => {
    const { name, value } = e.target
    setIsInput((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  


  const HandleSubmit = async(event) => {
    event.preventDefault()

  if(!isInput.username || !isInput.password){
      setIsInput(InitialState);
      setIsError(null);
      return
    }

    try {
      setIsLoading(true);
      let url = 'https://dummyjson.com/auth/login';
      let res = await axios.post(url,isInput);
      if(!res.status) throw new Error("Something is Wrong");
      const token = res?.data?.accessToken || null;
      if(token){
        nav('/dashboard');
      }else{
        setIsError("Token is Missing");
      }
      
    } catch (error) {
      setIsError(error.message)
    }finally{
      setIsLoading(false);
    }
  }

  return (
    <div className="Form">
      {isLoading && (<h2>Loading</h2>)}
      {isError && (<h2>{isError}</h2>)}
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