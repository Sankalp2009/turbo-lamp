import {useContext} from 'react'
import './App.css'
import {GlobalInfo} from './Component/exportContext.jsx'
function App() {

  const {currentState, dispatch} = useContext(GlobalInfo)
  
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({type:"HANDLE_SUBMIT"});
    console.log(currentState);
  }
  return (
    <>
      <h1>Form Handling using context api and useReducer</h1>
       <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            name="firstname"
            value={currentState.firstname}
            onChange={(e)=>dispatch({type:"HANDLE_CHANGE",payload:{name:e.target.name, value:e.target.value}})}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={currentState.email}
            onChange={(e)=>dispatch({type:"HANDLE_CHANGE",payload:{name:e.target.name, value:e.target.value}})}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={currentState.password}
            onChange={(e)=>dispatch({type:"HANDLE_CHANGE",payload:{name:e.target.name, value:e.target.value}})}
          />
          <select
            name="country"
            value={currentState.country}
            onChange={(e)=>dispatch({type:"HANDLE_CHANGE",payload:{name:e.target.name, value:e.target.value}})}
          >
            <option value="none">choose</option>
            <option value="in">India</option>
            <option value="nz">newZealand</option>
            <option value="uk">united kingdom</option>
          </select>
          <input type="submit" value="submit"/>
        </form>
      </div>
    </>
  )
}

export default App
