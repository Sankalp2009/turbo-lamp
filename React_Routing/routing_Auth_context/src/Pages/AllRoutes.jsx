import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import User from "./User";
import SingleUser from "./SingleUser";
import PrivateRoute from "./../Components/PrivateRoute";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/user"
        element={
          <PrivateRoute>
            <User />
          </PrivateRoute>
        }
      />
      <Route
        path=":id"
        element={
          <PrivateRoute>
            <SingleUser />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
