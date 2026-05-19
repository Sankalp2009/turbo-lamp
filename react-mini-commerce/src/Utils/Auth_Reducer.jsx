import { Action_Type } from './ActionCreators'
const AuthReducer = (currentState, action) => {
  const { type, payload } = action
  switch (type) {
    case Action_Type.LOGIN_REQUEST:
      return {
        ...currentState,
        isLoading: true,
      }
    case Action_Type.LOGIN_SUCCESS:
      return {
        ...currentState,
        isAuth: true,
        isLoading: false,
        token: payload,
      }
    case Action_Type.LOGIN_FAILURE:
      return {
        ...currentState,
        isAuth: false,
        isLoading: false,
        token: null,
      }
    case Action_Type.LOGOUT:
      return {
        ...currentState,
        isAuth: false,
        token: null,
      }
    default:
      return currentState
  }
}

export default AuthReducer