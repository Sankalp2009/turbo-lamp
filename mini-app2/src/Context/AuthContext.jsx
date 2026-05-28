/* eslint-disable react-refresh/only-export-components */
import  { createContext, useReducer } from 'react'
import Reducer  from '../Helpers/AuthReducer'
export const GlobalAuth = createContext(null)

function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer)
  const value = { state, dispatch }
  return <GlobalAuth.Provider value={value}>{children}</GlobalAuth.Provider>
}

export default AuthContextProvider