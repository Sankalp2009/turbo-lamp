import { Routes, Route } from "react-router";
import Home from "../Pages/Home.jsx";
import Dashboard from "../Pages/Dashboard.jsx";
import Login from "../Pages/Login.jsx";
import ProtectedRoute from "../Utils/ProtectedRoute.jsx";
// import PageNotFound from "../Pages/PageNotFound.jsx";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/product"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
}

export default AllRoutes;
