import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Dashboard from '../Pages/Dashboard'
import Single from '../Pages/Single'
import Login from '../Pages/Login'
import PageNotFound from '../Pages/PageNotFound'
import PrivateRoute from '../Helpers/PrivateRoute'
import Cart from '../Pages/Cart'
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/single/:id"
        element={
          <PrivateRoute>
            <Single />
          </PrivateRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AllRoutes
