import {useReducer} from 'react'
import './App.css'

const initialState = {
  count: 0,
}

function reducer(state, action){
  switch(action.type){
    case "handleIncrement": 
    return({
      ...state,
      count: state.count + 1
  })
    case "handleDecrement": 
    return{
      ...state,
      count: state.count - 1
    }
    default:
      return {
      ...state,
      count: state.count
    }
  }
}

function App(){

  // const [state, setState] = useState(initialState);
    const [state, dispatch] = useReducer(reducer,initialState)

  // function handleClick(){
  //   setState(prev=>({
  //     ...prev,
  //     count:prev.count + 1
  //   }))
  // }

  // function handleDecrement(){
  //   setState(oldState=>{
  //     return{
  //       ...oldState,
  //       count:oldState.count - 1
  //     }
  //   });
  // }

  // return (
  //   <>
  //     <h3>Counter app using useReducer</h3>
  //     <button onClick={handleClick}>Increment</button>
  //     <button onClick={handleDecrement}>Decrement</button>
  //     <h2>Count: {state.count}</h2>
  //   </>
  // )

  return (
    <>
      <h3>Counter app using useReducer</h3>
      <button onClick={()=>{dispatch({type:"handleIncrement"})}}>Increment</button>
      <button onClick={()=>{dispatch({type:"handleDecrement"})}}>Decrement</button>
      <h2>Count: {state.count}</h2>
    </>
)}

export default App