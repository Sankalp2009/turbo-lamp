import { AuthInfo } from "./AuthInfo.jsx";
import { InitialState } from "./AuthInfo.jsx";
import { useState } from "react";
function AuthContext({ children }) {

  const [IsAuthData, setIsAuthData] = useState(InitialState || {});
  console.log(IsAuthData);
  const LoginAuth = (token_data) => {
    setIsAuthData(prev=>({
      ...prev,
      isAuth:true,
      isToken:token_data
    }))
  };

  const LogOut = () => {
    setIsAuthData(prev=>({
      ...prev,
      isAuth:false,
      isToken:""
    }))
  };

  const value = { IsAuthData, LoginAuth, LogOut };

  return <AuthInfo.Provider value={value}>{children}</AuthInfo.Provider>;
}

export default AuthContext;

