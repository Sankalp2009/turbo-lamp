const Reducer = (currentState, action) => {
  
  const { type, payload } = action

  switch (type) {
    case 'Add_to_Cart':
      return {
        ...currentState,
       Cart_Data:[...currentState.Cart_Data, payload]
      }
    case 'Remove_Cart':
      return {
        ...currentState,
        Cart_Data:currentState.Cart_Data.filter(item => item.id !== payload)
      }

    default:
      return currentState
  }
}

export default Reducer