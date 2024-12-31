import { useState } from "react";
import "./App.css";

// single checkbox
const InitialState = () => ({
  name: "",
  course: "",
  unit: "",
  batch: "",
  result: false,
  result2: false,
  country: "",
});

// Multiple selection checkbox
// const InitialState = () => ({
//   name: "",
//   course: "",
//   unit: "",
//   batch: "",
//   result: [] or {},
//   country: "",
// });

function App() {
  const [isInput, setisInput] = useState(InitialState);

  // Single selection checkbox handling done by assigning different states for different checkbox
  const HandleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    const newValue = type === "checkbox" ? checked : value;
    
    setisInput((oldState) => {return{
        ...oldState,
        [name] : newValue
    }})
  };

// Multiple selection checkbox handling done by assigning array or object
  // const HandleInputChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  
  //     if (type === 'checkbox') {
  //       setisInput(oldState => ({
  //         ...oldState,
  //         [name]: checked ? [...oldState[name],value] : oldState[name].filter((item)=>item !==value),
  //       }));
  //     }
  //   else {
  //     setisInput(oldState => ({
  //       ...oldState,
  //       [name]: value,
  //     }));
  //   }
  // };

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(isInput);
    setisInput(InitialState);
  };

  return (
    <>
      <div>
        <h2>Student Dashboard</h2>
        <form id="form" onSubmit={HandleSubmit}>
          <input
            type="text"
            value={isInput.name}
            name="name"
            placeholder="Enter Name"
            onChange={HandleInputChange}
          />
          <br />
          <br />
          <input
            type="text"
            value={isInput.course}
            name="course"
            placeholder="Enter course"
            onChange={HandleInputChange}
          />
          <br />
          <br />
          <input
            type="text"
            value={isInput.unit}
            name="unit"
            placeholder="Enter Unit"
            onChange={HandleInputChange}
          />
          <br />
          <br />
          <input
            type="text"
            value={isInput.batch}
            name="batch"
            placeholder="Enter Batch"
            onChange={HandleInputChange}
          />
          <br />
          <br />
          <label htmlFor="result">
            Pass
            <input
              type="checkbox"
              name="result"
              value="pass"
              checked={isInput.result}
              onChange={HandleInputChange}
            />
          </label>
          <label htmlFor="result">
            Fail
            <input
              type="checkbox"
              name="result2"
              value="fail"
              checked={isInput.result2}
              onChange={HandleInputChange}
            />
          </label>
          <br />
          <br />
          <select name="country" id="country" onChange={HandleInputChange}>
            <option value="">select country</option>
            <option value="in">India</option>
            <option value="usa">USA</option>
            <option value="ireland">Ireland</option>
            <option value="france">France</option>
          </select>
          <br />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  );
}

export default App;
