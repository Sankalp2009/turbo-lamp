import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import About from "../Pages/About.jsx";
import Contact from "../Pages/Contact.jsx";
import User from "../Pages/User.jsx";
import SingleUser from "../Pages/SingleUser.jsx";
import PageNotFound from "../Pages/PageNotFound.jsx";
import PrivateRoute from "../Pages/PrivateRoute.jsx";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user" element={<PrivateRoute>{<User />}</PrivateRoute>} />
      <Route
        path=":userId"
        element={<PrivateRoute>{<SingleUser />}</PrivateRoute>}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AllRoutes;
