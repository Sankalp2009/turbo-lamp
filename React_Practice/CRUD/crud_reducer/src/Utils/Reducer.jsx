export const Reducer = (CurrentState, action) => {
  console.log(action);

  switch (action.type) {
    // lOGIN CASE
    case "LOGIN_REQUEST":
      return {
        ...CurrentState,
        IsLoading: true,
        IsAuth: false,
        IsError: false,
      };
    case "LOGIN_SUCCESS":
      return {
        ...CurrentState,
        IsLoading: false,
        IsAuth: true,
        IsError: false,
        Token: action.payload.token,
        Role: action.payload.role,
      };
    case "LOGIN_FAILURE":
      return {
        ...CurrentState,
        IsLoading: false,
        IsAuth: false,
        IsError: true,
      };

    // Data Handling case
    case "GET_PRODUCTS_REQUEST":
      return {
        ...CurrentState,
        IsLoading: true,
        IsAuth: false,
        IsError: false,
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...CurrentState,
        data: action.payload,
        IsLoading: false,
        IsAuth: true,
        IsError: false,
      };
    case "GET_PRODUCTS_FAILURE":
      return {
        ...CurrentState,
        data: action.payload,
        IsLoading: false,
        IsAuth: false,
        IsError: true,
      };

    // Adding Product
    case "ADD_PRODUCTS":
      return {
        ...CurrentState,
        data: [...CurrentState.data, action.payload],
      };
    // Update product
    case "UPDATE_PRODUCTS":
      return{
        ...CurrentState,
        data: CurrentState.data.map(user =>
          user.id === action.payload.id ? action.payload.updated_data : user
        ),
      }
      case "DELETE_PRODUCT":
  return {
    ...CurrentState,
    data: CurrentState.data.filter(item => item.id !== action.payload)
  };
      case "LOGOUT":
        return {
    ...CurrentState,
    IsAuth: false,
    Token: null,
    Role: ""
  };
    default:
      return CurrentState;
  }
};
