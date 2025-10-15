const InitialState = {
  token:null,
  IsLoading: false,
  IsAuth:false
}

export const reducer = (currentState = InitialState, action) => {
  const {type, payload} = action
  switch(type){
    case "LOGIN_REQUEST":
      return {
        ...currentState,
        IsLoading:true,
        IsAuth:false
      }
    case "LOGIN_SUCCESS":
      return {
        ...currentState,
        token:payload,
        IsLoading:false,
        IsAuth:true
      }
    case "LOGIN_FAILURE":
      return {
        ...currentState,
        IsLoading:false,
        IsAuth:false
      }
    case "LOGOUT":
      localStorage.removeItem("authState")
      return {...InitialState}
    default:
      return currentState
  }
}