import {useReducer, createContext} from 'react'
import reducer from '../Utils/reducer'
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const InitialState = {
  IsAuth:false,
  token:null,
  IsLoading:false,
  data:[]
}

function AppContextProvider({children}) {

  const [state, dispatch] = useReducer(reducer, InitialState)
  
  const Value = {state, dispatch};

  return (
    <AuthContext.Provider value={Value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AppContextProvider