import { AuthInfo } from "../Helpers/AuthInfo.jsx";
import { useState } from "react";
function AuthContext({ children }) {
  const [isAuth, setIsAuth] = useState(true);
  const ToggleAuth = () => {
    setIsAuth(prev=>({
      ...prev,
      isAuth:true
    }))
  };

  const value = { isAuth, ToggleAuth };

  return <AuthInfo.Provider value={value}>{children}</AuthInfo.Provider>;
}

export default AuthContext;

