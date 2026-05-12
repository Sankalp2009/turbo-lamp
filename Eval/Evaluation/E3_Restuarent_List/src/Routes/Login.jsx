import { Link } from "react-router-dom";
import {useState, useContext} from 'react'
import {GlobalInfo} from '../Context/AppContext'
import {useNavigate} from 'react-router-dom'
const InitialState = {
  email:"",
  password:""
}

function Login() {
  
  const [IsInput, setIsInput] = useState(InitialState);
  
  const {LoginUser} = useContext(GlobalInfo);
  
  const Nav = useNavigate();

  const HandleChange = (e)=>{
    const {name, value } = e. target;
    setIsInput((PrevState)=>({
      ...PrevState,
      [name]:value
    }))
  }

  const HandleSubmit = async(event)=>{
   event.preventDefault();

   if(!IsInput.email || !IsInput.password){
    alert(`Fill the Required Fields`)
   }

   try {
     let Res = await fetch('https://reqres.in/api/login',{
      method:"POST",
      headers:{
      'Content-Type':'application/json',
      'x-api-key':'reqres_cb2ec0f9a86845e39f6ea142bb3d20d8'
      },
      body:JSON.stringify({
        email:IsInput.email,
        password:IsInput.password
      })
     })
     let TokenData = await Res.json();
     if(TokenData?.token){
      LoginUser(TokenData?.token)
      Nav("/dashboard")
     }
     console.log(TokenData);
   } catch (error) {
    console.log(error);
   }
  }
  return (
    <div className="login-page">
      <form className="form" data-testid="login-form"  onSubmit={HandleSubmit}>
        <div>
          <label>
            <input 
            data-testid="email-input" 
            type="email"
            name="email"
            value={IsInput.email}
            onChange={HandleChange} 
            placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              name="password"
            value={IsInput.password}
            onChange={HandleChange} 
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
