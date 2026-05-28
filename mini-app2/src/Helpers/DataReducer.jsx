const Reducer = (currentState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'Get_Request':
      return {
        ...currentState,
        isLoading: true,
      }
    case 'Get_Success':
      return {
        ...currentState,
        isLoading: false,
        data: payload.Data,
      }
    case 'Get_Failure':
      return {
        ...currentState,
        isLoading: false,
        data: [],
        isError: payload.error,
      }

    default:
      return currentState
  }
}

export default Reducer
