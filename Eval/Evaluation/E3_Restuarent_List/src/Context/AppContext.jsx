import {createContext, useState} from 'react'

export const GlobalInfo = createContext(null);

const InitialState = {
  isAuth:"",
  token:null
}

function AppContextProvider({children}){

const [Auth, setAuth] = useState(InitialState);

const LoginUser = (token)=>{
   setAuth((Prev)=>({
    ...Prev,
    isAuth:true,
    token
   }))
 }
  
const LogOut = ()=>{
   setAuth(InitialState);
 }

 return (
  <GlobalInfo.Provider value={{authState:Auth, LoginUser, LogOut}}>{children}</GlobalInfo.Provider>
 )
}
export default AppContextProvider;