import {Route, Routes} from "react-router-dom";
import Dashboard from "../Pages/Dashboard.jsx";
import Login from '../Pages/Login.jsx'
import Home from '../Pages/Home.jsx'
import PageNotFound from '../Pages/PageNotFound.jsx'
import ProtectRoute from "../Utils/ProtectRoute.jsx"
import Cart from '../Pages/cart.jsx'
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
      path="/dashboard" 
      element={
      <ProtectRoute>
        <Dashboard />
      </ProtectRoute>    
      } />
      <Route 
      path="/checkout/Cart" 
      element={
      <ProtectRoute>
        <Cart />
      </ProtectRoute>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AllRoutes