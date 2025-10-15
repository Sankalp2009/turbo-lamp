const InitialState = {
  items:[],
}

export const reducer = (currentState = InitialState, action) => {
  const {type} = action

  switch(type){
     case "ADD_TO_CART": {
      const item = action.payload;
      const existingItem = currentState.items.find((el) => el.id === item.id);

      if (existingItem) {
        // if already in cart, increase qty
        return {
          ...currentState,
          items: currentState.items.map((el) =>
            el.id === item.id ? { ...el, quantity: el.quantity + 1 } : el
          ),
        };
      }

      return {
        ...currentState,
        items: [...currentState.items, { ...item, quantity: 1 }],
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...currentState,
        items: currentState.items.filter((el) => el.id !== action.payload),
      };

    case "INCREASE_QTY":
      return {
        ...currentState,
        items: currentState.items.map((el) =>
          el.id === action.payload ? { ...el, quantity: el.quantity + 1 } : el
        ),
      };

    case "DECREASE_QTY":
      return {
        ...currentState,
        items: currentState.items
          .map((el) =>
            el.id === action.payload
              ? { ...el, quantity: el.quantity - 1 }
              : el
          )
          .filter((el) => el.quantity > 0), // remove if qty becomes 0
      };

    default:
      return currentState;
  }
}