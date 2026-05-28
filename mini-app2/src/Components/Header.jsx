import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalAuth } from '../Context/AuthContext'
import { GlobalCart } from '../Context/CartContext'
import { Action_Type } from '../Helpers/Action_Creators'
import { FaCartShopping } from "react-icons/fa6";
function Header() {
  const { state, dispatch } = useContext(GlobalAuth)
  const {CartState } = useContext(GlobalCart);

  const length = CartState?.Cart_Data.length || 0;

  const Links = [
    {
      path: '/',
      content: 'Home',
    },
    {
      path: '/about',
      content: 'About',
    },
    {
      path: '/contact',
      content: 'contact',
    },
  ]

  return (
    <div className="Header_top">
      <div className='inner_Header'>
      <div className="Header">
        {Links.map((el) => (
          <Link key={el.path} to={el.path}>
            <h3>{el.content}</h3>
          </Link>
        ))}
      </div>
      <div className="cart-wrapper">
              <Link to="/cart">
                <FaCartShopping className="cart-icon" />
              </Link>
              <span className="cart-count">{length}</span>
            </div>

      </div>
      <div className='Auth_Header'>
        {!state.isAuth ? (
          <Link to="/login">
            <h3>Login</h3>
          </Link>

        ) : (
          <button
            onClick={() => {
              dispatch({
                type: Action_Type.Logout,
              })
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  )
}

export default Header