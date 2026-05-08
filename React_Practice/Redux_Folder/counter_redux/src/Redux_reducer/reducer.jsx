const InitialState = {
  count: 0,
}

const reducer = (CurrentState = InitialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case "INCREMENT":
      return{
        ...CurrentState,
        count: CurrentState.count + (payload ?? 1)
      }
    case "DECREMENT":
      return{
        ...CurrentState,
        count: CurrentState.count - (payload ?? 1)
      }
    case "RESET":
      return InitialState

    default:
      return CurrentState;
  }
}

export default reducer;