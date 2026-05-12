import { createContext, useState } from 'react'

export const GlobalInfo = createContext(null) 

const InitialState = {
  isAuth: false,
  token: null,
}

function AppContextProvider({ children }) {
  const [Auth, setAuth] = useState(InitialState)

  // Login Handler
  const Login = (token) => {
    setAuth({
      isAuth: true,
      token,
    })
  }
  // logout Handler
  const Logout = () => {
    setAuth({
      isAuth: false,
      token: null,
    })
  }

  return (
    <GlobalInfo.Provider value={{ authState: Auth, Login, Logout }}>
      {children}
    </GlobalInfo.Provider>
  )
}

export default AppContextProvider
