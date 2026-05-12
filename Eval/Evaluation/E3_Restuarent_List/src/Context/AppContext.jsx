import {createContext, useState} from 'react'

export const AppContext = createContext(null);

const InitialState = {
  isAuth:false,
  token:null
}

function AppContextProvider({children}){

const [Auth, setAuth] = useState(InitialState);

const Login = (token)=>{
   setAuth({
    isAuth:true,
    token
   })
 }
  
const LogOut = ()=>{
   setAuth({
      isAuth: false,
      token: null,
    })
 }

 return (
  <AppContext.Provider value={{authState: Auth, Login, LogOut}}>{children}</AppContext.Provider>
 )
}
export default AppContextProvider;