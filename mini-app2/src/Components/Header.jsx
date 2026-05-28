import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalAuth } from '../Context/AuthContext'
import { Action_Type } from '../Helpers/Action_Creators'
function Header() {
  const { state, dispatch } = useContext(GlobalAuth)

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
      <div className="Header">
        {Links.map((el) => (
          <Link key={el.path} to={el.path}>
            <h3>{el.content}</h3>
          </Link>
        ))}
      </div>
      <div>
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