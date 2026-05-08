/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useReducer } from 'react'
import './App.css'
import {InitialState} from "./Utils/InitialState.jsx"
import reducer from "./useReducerr/Reducer.jsx"
import { useSelector, useDispatch } from 'react-redux';
function App() {
  // const [likes, setLikes] = useState(InitialState)
  
  // function handleIncrement(){
  //   setLikes((Prev)=>({
  //     ...Prev,
  //     count: likes.count + 1
  //   }))
  // }

  // function handleDecrement(){
  //   setLikes((Prev)=>({
  //     ...Prev,
  //     count: likes.count - 1
  //   }))
  // }
  
  // const [state, dispatch] = useReducer(reducer, InitialState)
  // console.log(state)

   const count = useSelector(state=>state.count);
   console.log("user", count)
  
   const dispatch = useDispatch();

  return (
    <>
     <h2>Likes : {count}</h2>
     <button onClick={()=>dispatch({
      type: "INCREMENT",
      payload: 1
     })}>Increment</button>
     <button onClick={()=>dispatch({
      type: "DECREMENT",
      payload: 1
     })}>Decrement</button>
     <button onClick={()=>dispatch({type: "RESET"})}>Reset</button>
    </>
  )
}

export default App