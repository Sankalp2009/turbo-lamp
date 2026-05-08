import {InitialState} from "../Utils/InitialState.jsx"

const reducer = (CurrentState, action) => {
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