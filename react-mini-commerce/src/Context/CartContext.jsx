import { createContext, useReducer } from 'react'
import CartReducer from '../Utils/Cart_Reducer'
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext(null)

const InitialState = {
  cart:[]
}

function CartContextProvider({ children }) {
  const [CartState, dispatch] = useReducer(CartReducer, InitialState)

  const Value = { CartState, dispatch }

  return <CartContext.Provider value={Value}>{children}</CartContext.Provider>
}

export default CartContextProvider
