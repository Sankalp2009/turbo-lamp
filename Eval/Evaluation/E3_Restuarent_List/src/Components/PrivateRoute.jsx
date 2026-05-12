import { useContext } from 'react'
import { GlobalInfo } from '../Context/AppContext'
import { Navigate } from 'react-router-dom'
function PrivateRoute({ children }) {
  const { authState } = useContext(GlobalInfo)
  const { isAuth, token } = authState
  if (!isAuth || !token) return <Navigate to="/login" replace={true} />
  return children
}
export default PrivateRoute