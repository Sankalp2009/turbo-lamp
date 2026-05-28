/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer } from 'react'
import Reducer from '../Helpers/CartReducer'
export const GlobalCart = createContext(null)
const InitialState = {
  Cart_Data: [],
}

function CartContextProvider({ children }) {
  const [CartState, dispatch] = useReducer(Reducer, InitialState)
  const Value = { CartState, dispatch }
  return <GlobalCart.Provider value={Value}>{children}</GlobalCart.Provider>
}

export default CartContextProvider
