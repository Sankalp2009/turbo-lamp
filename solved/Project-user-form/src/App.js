import "./App.css";
import React from "react";

const InitialState = {
  name : "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus:false
}

function App() {
  
  const [formdata, setFormData] = React.useState(InitialState); 
  const [userdata, setUserData] = React.useState([]);
  const HandleChange = (e)=>{
    const {name, type, checked, value} = e.currentTarget;
    const  newValue = type === 'checkbox' ? checked : value;

    setFormData((prevState)=>{
      return {
        ...prevState,
        [name] : newValue
      }
    })
  }
  
  const HandleSubmit = (e) =>{
    e.preventDefault();
    console.log(formdata);
    setUserData([...userdata, formdata]);
    setFormData(InitialState);
  }
  console.log(userdata)
  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form data-testid="form-element" onSubmit={HandleSubmit}>
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input 
              type="text" 
              name="name"
              data-role="textbox"
              value={formdata.name} 
              placeholder="Name" 
              onChange={HandleChange} />
            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper" >
              <label>Gender</label>
              <select 
              data-testid="gender-select"
              name="gender"
              value={formdata.gender} 
              onChange={HandleChange}>
                 <option value="none">select gender</option>
                <option value="Male">Male</option>
                 <option value="Female">Female</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper" >
              <label>Role</label>
              <select 
              data-testid="role-select"
              name="role" 
              value={formdata.role}
              onChange={HandleChange}>
                 <option value="none">select role</option>
                <option value="FrontEnd Developer">FrontEnd Developer</option>
                <option value="BackEnd Developer">BackEnd Developer</option>
                <option value="FullStack Developer">FullStack Developer</option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input 
                type={"checkbox"} 
                name="maritalStatus"
                checked={formdata.maritalStatus} 
                onChange={HandleChange} />
                <label>Married</label>
              </div>
            </div>
            <div>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
      <div>
     {userdata.length === 0 ? (<h2 data-testid="no-user-container">no users found</h2>
     ) : (
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
            {userdata && userdata.map(el=>(
             <tr>
               <td>{el.name}</td>
               <td>{el.gender}</td>
               <td>{el.role}</td>
               <td>{el.maritalStatus ? "married" : "unmarried"}</td>
             </tr>
            ))}
           </tbody>
            </table>
)}
      </div>
    </div>
  )};
export default App;