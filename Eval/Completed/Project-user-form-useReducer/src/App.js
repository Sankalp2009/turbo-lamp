import { useReducer, useState } from "react";
import "./App.css";
import { UserRow } from "./Component/UserRow";

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "gender":
      return { ...state, gender: action.payload };
    case "role":
      return { ...state, role: action.payload };
    case "maritalStatus":
      return { ...state, maritalStatus: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const [data, setData] = useState([]);

  const handleSubmit = (e) =>{
     e.preventDefault();
     setData([
      ...data,state
     ])
     dispatch({type:"reset"})
  }

  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <h3>useReducer</h3>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form data-testid="form-element" onSubmit={handleSubmit}>
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input type="text" name="name" placeholder="Name" value={state.name} onChange={(e)=>dispatch({type:"name",payload:e.target.value})} />
            </div>
<br />
            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>Gender</label>
              <select name="gender" data-testid="gender-select" value={state.gender} onChange={(e)=>dispatch({type:"gender",payload:e.target.value})} >
                <option value="Prefer Not to Say">Prefer Not to Say</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <br />
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>
              <select name="role" data-testid="role-select" value={state.role} onChange={(e)=>dispatch({type:"role",payload:e.target.value})}>
                <option value="FrontEnd Developer">FrontEnd Developer</option>
                <option value="BackEnd Developer">BackEnd Developer</option>
                <option value="FullStack Developer">FullStack Developer</option>
              </select>
            </div>
            <br />
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input type={"checkbox"} name="maritalStatus" checked={state.maritalStatus} onChange={(e)=>dispatch({type:"maritalStatus",payload:e.target.checked})}/>
                <label>Married</label>
              </div>
            </div>
            <div>
              <button type="submit" value="submit">SUBMIT</button>
            </div>
          </form>
        </div>
        {
          data.length === 0 ? (<h2 data-testid="no-user-container">no users found</h2>

          ):(
            <table style={{margin:"auto", marginTop:"10px"}}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Role</th>
                  <th>Status</th>
             </tr>
           </thead>
           <tbody>
             {
              data.map((el,i)=><UserRow key={i} user={el}/>)
             }
           </tbody>
            </table> 
          )
        }
        
      </div>
    </div>
  );
}

export default App;
