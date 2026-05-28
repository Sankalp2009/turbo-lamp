import { useContext } from 'react'
import { GlobalAuth } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'
function PrivateRoute({ children }) {
  const { state } = useContext(GlobalAuth)

  if (state.isAuth && state.token)
    return <Navigate to="/login" replace={true} />
  return children
}

export default PrivateRoute
