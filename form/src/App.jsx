import { useState } from "react";
import "./App.css";
import DashForm from './Components/DashForms';

function App() {
  const [data, setData] = useState([]);



  const HandleInputChange= (InputData) => {
    setData(oldState=>[...oldState,InputData])
  };


  console.log(data);

  return (
    <>
     <DashForm CallBack={HandleInputChange} />
    </>
  );
}

export default App;