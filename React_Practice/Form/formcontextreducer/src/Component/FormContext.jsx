import {useReducer} from 'react'
import {GlobalInfo} from './exportContext.jsx'
import reducer from "./reducer.jsx"
import {InitialState} from "../Helper/InitialState.jsx"

export const FormContext = ({children})=>{

  const [state, dispatch] = useReducer(reducer, InitialState)

  return <GlobalInfo.Provider value={{currentState:state, dispatch}}>{children}</GlobalInfo.Provider>
}