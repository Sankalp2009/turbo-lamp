import { useContext } from 'react'
import { AuthContext } from '../Context/AppContext'
import { Navigate } from 'react-router-dom'
function PrivateRoute({ children }) {
  const { state } = useContext(AuthContext)

  if (!state.IsAuth && !state.token)
    return <Navigate to="/login" replace={true} />
  return children
}

export default PrivateRoute