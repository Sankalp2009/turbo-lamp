 import { useState } from "react";
import "./App.css";

let InitialState = {
  name : "",
  age : "",
  city: "",
  gender: [],
  role : "",
};   

function App() {
  const [formdata, setFormData] = useState(InitialState);
  const [data, setData] = useState([]);
  
  const HandleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // For checkbox handling, we need to manually check the value
    if(type === "checkbox"){
      setFormData((oldState) => ({
        ...oldState,
        [name]: checked ? [...oldState[name], value] : oldState[name].filter(el => el !== value),
      }));
    }else{
      // This else is used to store other input values
      setFormData((oldState) => ({
        ...oldState,
        [name]: value,
      }));
    }
  };

console.log(data);

  const HandleSubmit = (event) => {
    event.preventDefault();
    setData([...data, formdata]);
    setFormData(InitialState)
  };

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <input
          onChange={HandleChange}
          value={formdata.name}
          type="text"
          name="name"
          id="Name"
          placeholder="Enter First Name"
        />
        <br />
        <br />
        <input
          onChange={HandleChange}
          value={formdata.age}
          type="number"
          name="age"
          id="age"
          placeholder="Enter Age"
        />
        <br />
        <br />
        <select
          onChange={HandleChange}
          value={formdata.city}
          name="city"
          id="city"
        >
          <option value="">select city</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="China">China</option>
        </select>
        <br />
        <br />
          <input
            onChange={HandleChange}
            type="checkbox"
            name="gender"
            value="male"
            checked={formdata.gender.includes('male')}
          />
          Male
        
          <input
            onChange={HandleChange}
            type="checkbox"
            name="gender"
            value="Female"
            checked={formdata.gender.includes('Female')}
          />
          Female

        <br />
        <br />
        <input
            onChange={HandleChange}
            type="radio"
            name="role"
            value="Frontend"
          />
          India
        
          <input
            onChange={HandleChange}
            type="radio"
            name="role"
            value="Backend"
          />
          USA
          <br />
        <br />
        <button type="submit">Submit</button>
      </form>

          <div>
        <table style={{margin:"auto", paddingTop:"2%", fontSize:"x-large"}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Gender</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
           {data && data.map(el=>(

            <tr key={el.index}>
              <td>{el.name}</td>
              <td>{el.age}</td>
              <td>{el.city}</td>
              <td>{el.gender}</td>
              <td>{el.role}</td>
            </tr>
            ))} 
          </tbody>
        </table>
      </div>
    </>
  );
}
export default App;