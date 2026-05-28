/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer } from 'react'
import Reducer from '../Helpers/DataReducer'
export const GlobalData = createContext(null)
const InitialState = {
  isLoading: false,
  isError: null,
  data: [],
}

function DataContext({ children }) {
  const [stateData, dispatch] = useReducer(Reducer, InitialState)
  const Value = { stateData, dispatch }
  return <GlobalData.Provider value={Value}>{children}</GlobalData.Provider>
}

export default DataContext
