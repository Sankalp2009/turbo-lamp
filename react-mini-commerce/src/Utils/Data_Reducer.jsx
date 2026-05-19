import { Action_Type } from './ActionCreators'
const DataReducer = (currentState, action) => {
  const { type, payload } = action
  switch (type) {
    case Action_Type.GET_REQUEST:
      return {
        ...currentState,
        isLoading: true,
      }
    case Action_Type.GET_SUCCESS:
      return {
        ...currentState,
        isLoading: false,
        data: payload,
      }
    case Action_Type.GET_FAILURE:
      return {
        ...currentState,
        isLoading: false,
        data: [],
      }
    default:
      return currentState
  }
}

export default DataReducer