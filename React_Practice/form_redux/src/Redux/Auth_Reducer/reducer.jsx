 const InitialState = {
   Access_Token:null,
   IsAuth:false,
   IsLoading:false,
   username:""
 }

export const reducer = (CurrentState = InitialState, action)=>{
   const {type, payload} = action
   console.log(payload)
   switch(type){
    case"LOGIN_REQUEST":
    return{
      ...CurrentState,
      Access_Token:null,
      IsAuth:false,
      IsLoading:true,
      username:""
    }
    case"LOGIN_SUCCESS":
    return{
      ...CurrentState,
      Access_Token:payload.token,
      IsAuth:true,
      IsLoading:false,
      username:payload.name
    }
    case"LOGIN_FAILURE":
    return{
      ...CurrentState,
      Access_Token:null,
      IsAuth:false,
      IsLoading:false,
      username:""
    }
    case"LOGOUT":
    return{
      ...InitialState
    }
    default:
      return CurrentState
   }
 }