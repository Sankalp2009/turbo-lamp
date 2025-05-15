
/* eslint-disable react/prop-types */
import { useState } from "react";

const InitialState = () => ({
  name: "",
  course: "",
  unit: "",
  batch: "",
  pass: false,
  fail: false,
  country: "",
});


const DashForm = ({ CallBack }) => {
  const [isInput, setIsInput] = useState(InitialState);

  const HandleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    const newValue = type === "checkbox" ? checked : value;

    setIsInput((oldState) => {
      oldState[name] = newValue;
      return { ...oldState };
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    CallBack(isInput);
    setIsInput(InitialState);
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
              name="pass"
              checked={isInput.pass}
              onChange={HandleInputChange}
            />
          </label>
          <label htmlFor="result">
            Fail
            <input
              type="checkbox"
              name="fail"
              checked={isInput.fail}
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
};

export default DashForm;