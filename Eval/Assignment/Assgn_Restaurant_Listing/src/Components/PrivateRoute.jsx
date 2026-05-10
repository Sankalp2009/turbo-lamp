import { useContext } from 'react'
import { GlobalInfo } from '../Context/AppContext'
import { Navigate } from 'react-router-dom'
function PrivateRoute({ children }) {
  const { authState } = useContext(GlobalInfo)

  const { isAuth, Token } = authState ?? {}
  if (!isAuth && !Token) return <Navigate to="/login" />
  return children
}
export default PrivateRoute