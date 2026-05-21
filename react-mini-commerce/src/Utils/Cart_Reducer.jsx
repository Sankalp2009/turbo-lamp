import { Action_Type } from './ActionCreators'
const CartReducer = (currentState, action) => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case Action_Type.ADD_TO_CART:
      return {
        ...currentState,
        cart: [...currentState.cart, payload],
      }
    case Action_Type.REMOVE_CART:
      return {
        ...currentState,
        cart: currentState.cart.filter(item => item.id !== payload),
      }
    default:
      return currentState
  }
}

export default CartReducer