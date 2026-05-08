const InitialState = {
  data:[],
  IsLoading: false,
  IsError:false
}

export const reducer = (currentState = InitialState, action) => {
  const {type, payload} = action
  switch(type){
    case "GET_REQUEST":
      return {
        ...currentState,
        IsLoading:true,
        IsError:false
      }
    case "GET_SUCCESS":
      return {
        ...currentState,
        data:payload,
        IsLoading:false,
        IsError:false
      }
    case "GET_FAILURE":
      return {
        ...currentState,
        IsLoading:false,
        IsError:true
      }
    default:
      return currentState
  }
}