import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import PageNotFound from '../Pages/PageNotFound'
import Single from '../Pages/Single'
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
import PrivateRoute from './PrivateRoute'
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="/single/:id" element={<Single />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AllRoutes
