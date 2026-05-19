import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { Action_Type } from '../Utils/ActionCreators'
function Header() {
  const { state, dispatch } = useContext(AuthContext)

  // cart part
  const { CartState } = useContext(CartContext)
  console.log(CartState?.cart)
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
    <div>
      <div
        style={{
          width: '100%',
          height: '50px',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        {Links.map((el) => (
          <div key={el.path}>
            <Link to={el.path}>
              <h2>{el.content}</h2>
            </Link>
          </div>
        ))}
        <div>
          {state.isAuth ? (
            <Link to="/login">
              <button
                style={{
                  padding: '5px 15px 5px 15px',
                  border: '1px solid green',
                  borderRadius: '2em',
                  cursor: 'pointer',
                }}
              >
                Login
              </button>
            </Link>
          ) : (
            <div
              style={{
                width: '100%',
                height: '50px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '30px',
              }}
            >
              <div style={{ position: 'relative' }}>
                <Link to="/cart">
                  <ShoppingCart />
                </Link>

                <span
                  style={{
                    position: 'absolute',
                    top: '-15px',
                    right: '-1px',
                    background: 'green',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '2px 6px',
                    fontSize: '10px',
                  }}
                >
                  {length}
                </span>
              </div>
              <button
                style={{
                  padding: '5px 15px 5px 15px',
                  border: '1px solid red',
                  borderRadius: '2em',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  dispatch({
                    type: Action_Type.LOGOUT,
                  })
                }}
              >
                LOGOUT
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
