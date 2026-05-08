import { useContext } from "react";
import "./App.css";
import { GlobalInfo } from "./Utils/FormContext.jsx";
import { InitialState } from "./Utils/InitialData.jsx";
function App() {
  const { formValues, setFormValues } = useContext(GlobalInfo);

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(oldState=>{
      return{
        ...oldState,
        [name]: value
      }
    });
  };

  const handleSubmit= (e) => {
    e.preventDefault();
    console.log(formValues);
    setFormValues(InitialState);
  };

  return (
    <>
      <h3>Form Handling using context api</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={formValues.name}
            onChange={HandleChange}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={formValues.email}
            onChange={HandleChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={formValues.password}
            onChange={HandleChange}
          />
          <select
            name="country"
            value={formValues.country}
            onChange={HandleChange}
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
  );
}

export default App;