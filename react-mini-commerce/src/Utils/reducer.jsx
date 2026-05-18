
const reducer = (currentState, action)=>{
  const { type, payload } = action
  switch (type) {
    case "LOGIN_REQUEST":
      return{
        ...currentState,
        IsLoading:true
      }
    case "LOGIN_SUCCESS":
      return {
        ...currentState,
        IsAuth:true,
        IsLoading:false,
        token:payload
      }
    case "LOGIN_FAILURE":   
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