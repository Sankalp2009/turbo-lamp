import { createContext, useReducer } from 'react'
import DataReducer from '../Utils/Data_Reducer'
// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = createContext(null)

const InitialState = {
  isLoading: false,
  data: [],
}

function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(DataReducer, InitialState)

  const Value = { state, dispatch }

  return <DataContext.Provider value={Value}>{children}</DataContext.Provider>
}

export default DataContextProvider
