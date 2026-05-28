/* eslint-disable react-refresh/only-export-components */
import  { createContext, useReducer } from 'react'
import Reducer  from '../Helpers/AuthReducer'
export const GlobalAuth = createContext(null)
const InitialState = {
  isAuth: false,
  isLoading: false,
  isError: null,
  token: null,
}
function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, InitialState)
  const Value = { state, dispatch }
  return (
    <GlobalAuth.Provider value={Value}>{children}</GlobalAuth.Provider>
  )
}

export default AuthContextProvider