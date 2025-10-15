import { useReducer } from 'react'
import './App.css'
// eslint-disable-next-line react-refresh/only-export-components
export const InitialState = {
  firstname:"",
  email:"",
  password:"",
  country:""
}

function reducer(currentState, action){
  console.log("Action", action);
  switch (action.type){
    
    case "HANDLE_CHANGE":
    return{
      ...currentState,
      [action.payload.name]: action.payload.value
    }
    
    case "HANDLE_SUBMIT":
    return{
      firstname: "",
      email: "",
      password: "",
      country: ""
    }

    default:
    return currentState
  }
}

function App() {
  
  const [state, dispatch] = useReducer(reducer, InitialState);
  // const [Input, setInput] = useState(InitialState)

  // Input Handler
  // function handleChange(e){
  //   setInput(oldState=>{
  //     return{
  //       ...oldState,
  //       [e.target.name]: e.target.value
  //     }
  //   })
  // }


  // Submit Handler
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({type:"HANDLE_SUBMIT"});
    console.log(state.email);
  }

  return (
    <>
 <h3>Form Handling using context api</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            name="firstname"
            value={state.firstname}
            onChange={(e)=>dispatch({type:"HANDLE_CHANGE",payload:{name:e.target.name, value:e.target.value}})}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={state.email}
            onChange={(e)=>dispatch({type:"HANDLE_CHANGE",payload:{name:e.target.name, value:e.target.value}})}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={state.password}
            onChange={(e)=>dispatch({type:"HANDLE_CHANGE",payload:{name:e.target.name, value:e.target.value}})}
          />
          <select
            name="country"
            value={state.country}
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


// State Handling return
//   return (
//     <>
//  <h3>Form Handling using context api</h3>
//       <div>
//         <form onSubmit={(e)=>handleSubmit(e)}>
//           <input
//             type="text"
//             placeholder="name"
//             name="name"
//             value={Input.name}
//             onChange={(e)=>handleChange(e)}
//           />
//           <input
//             type="email"
//             placeholder="email"
//             name="email"
//             value={Input.email}
//             onChange={(e)=>handleChange(e)}
//           />
//           <input
//             type="password"
//             placeholder="password"
//             name="password"
//             value={Input.password}
//             onChange={(e)=>handleChange(e)}
//           />
//           <select
//             name="country"
//             value={Input.country}
//             onChange={(e)=>handleChange(e)}
//           >
//             <option value="none">choose</option>
//             <option value="in">India</option>
//             <option value="nz">newZealand</option>
//             <option value="uk">united kingdom</option>
//           </select>
//           <input type="submit" value="submit"/>
//         </form>
//       </div>
//     </>
//   )

}

export default App
