
import { Action_Type } from '../Utils/ActionCreators'
const reducer = (currentState, action)=>{
  const { type, payload } = action
  switch (type) {
    case Action_Type.LOGIN_REQUEST:
      return{
        ...currentState,
        IsLoading:true
      }
    case Action_Type.LOGIN_SUCCESS:
      return {
        ...currentState,
        IsAuth:true,
        IsLoading:false,
        token:payload
      }
    case Action_Type.LOGIN_FAILURE:   
    return {
        ...currentState,
        IsAuth:false,
        IsLoading:false,
        token:null
      }
    default:
      return currentState;
  }
}

export default reducer;