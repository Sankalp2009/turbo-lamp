import { useState } from "react";
import "./App.css";

let InitialState = {
  name: "",
  email: "",
  age: "",
  gender: "",
  role:[]
};


function App() {
// eslint-disable-next-line no-unused-vars
  const [isInput, setIsInput] = useState(InitialState);

  const HandleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setIsInput((oldState)=>{return{
      ...oldState,
      [name] : newValue
    }})
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    console.log(isInput);
  };

  return (
    <>
      <h3>Form Practice</h3>
      <div>
        <form id="Form" onSubmit={HandleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={isInput.name}
            onChange={HandleInputChange}
          />
          <br />
          <br />
          <input
            type="email"
            name="email"
            value={isInput.email}
            placeholder="Enter Email"
            onChange={HandleInputChange}
          />
          <br />
          <br />
          <input
            type="number"
            name="age"
            value={isInput.age}
            placeholder="Enter Your Age"
            onChange={HandleInputChange}
          />
          <br />
          <br />
          <select
            style={{ padding: "5px 5px 5px 5px", borderRadius: "10px" }}
            name="gender"
            value={isInput.gender}
            onChange={HandleInputChange}
          >
            <option value="none">select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
          <br />
          <label htmlFor="Role">Select Role</label>
          <br />
          <label htmlFor="Frontend">Frontend</label>
          <input
            type="checkbox"
            name="role"
            value="frontend"
            checked={isInput.role.includes("frontend")}
            onChange={HandleInputChange}
          />
          <label htmlFor="Backend">Backend</label>
          <input
            type="checkbox"
            name="role"
            value="backend"
            checked={isInput.role.includes("backend")}
            onChange={HandleInputChange}
          />
          <label htmlFor="Full Stack">Full Stack</label>
          <input
            type="checkbox"
            name="role"
            value="fullStack"
             checked={isInput.role.includes("fullStack")}
            onChange={HandleInputChange}
          />
          <br />
          <br />
          <input
            style={{ padding: "5px 5px 5px 5px", borderRadius: "10px" }}
            type="submit"
            value="submit"
          />
        </form>
      </div>
    </>
  );
}

export default App;