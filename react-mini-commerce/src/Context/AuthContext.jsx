import { createContext, useReducer } from 'react'
import AuthReducer from '../Utils/Auth_Reducer'
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)

const InitialState = {
  isAuth: false,
  token: null,
  isLoading: false,
}

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, InitialState)

  const Value = { state, dispatch }

  return <AuthContext.Provider value={Value}>{children}</AuthContext.Provider>
}

export default AppContextProvider
