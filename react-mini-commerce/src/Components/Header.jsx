import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { Action_Type } from '../Utils/ActionCreators'

function Header() {
  const { state, dispatch } = useContext(AuthContext)

  const { CartState } = useContext(CartContext)

  const length = CartState?.cart.length

  const Links = [
    {
      path: '/',
      content: 'Home',
    },
    {
      path: '/about',
      content: 'About',
    },
  ]

  return (
    <header className="header">
      {/* Left Side */}
      <div className="nav-links">
        {Links.map((el) => (
          <Link key={el.path} to={el.path} className="nav-link">
            {el.content}
          </Link>
        ))}
      </div>

      {/* Right Side */}
      <div className="auth-section">
        {!state.isAuth ? (
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        ) : (
          <>
            <div className="cart-wrapper">
              <Link to="/cart">
                <ShoppingCart className="cart-icon" />
              </Link>

              <span className="cart-count">{length}</span>
            </div>

            <button
              className="logout-btn"
              onClick={() => {
                dispatch({
                  type: Action_Type.LOGOUT,
                })
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  )
}

export default Header