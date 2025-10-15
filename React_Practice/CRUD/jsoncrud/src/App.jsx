import "./App.css";
import AllRoutes from "./Component/AllRoutes.jsx";
import {Link} from "react-router-dom";
function App() {

  return (
    <>
      <h1 style={{ fontSize: "30px", fontFamily: "'Poppins', sans-serif" }}>
        crud using json server
      </h1>
      <Link to="/create"><button>add</button></Link>
      <br /><br />
      <AllRoutes />
    </>
  );
}

export default App;