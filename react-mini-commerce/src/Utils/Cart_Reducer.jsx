import { Action_Type } from './ActionCreators'
const CartReducer = (currentState, action) => {
  const { type, payload } = action
  switch (type) {
    case Action_Type.ADD_TO_CART:
      return {
        ...currentState,
        isLoading: true,
      }
    case Action_Type.REMOVE_CART:
      return {
        ...currentState,
        isAuth: true,
        isLoading: false,
        token: payload,
      }
    default:
      return currentState
  }
}

export default CartReducer