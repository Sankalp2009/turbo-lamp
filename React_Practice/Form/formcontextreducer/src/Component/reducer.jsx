function reducer(currentState, action){
  switch (action.type){
    case "HANDLE_CHANGE":
    return{
      ...currentState,
      [action.payload.name]: action.payload.value
    }
    case "HANDLE_SUBMIT":
    return{
      firstname: "",
      email: "",
      password: "",
      country: ""
    }
    default:
    return currentState
  }
}

export default reducer