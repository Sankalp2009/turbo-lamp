import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Link } from 'react-router-dom'
import { Action_Type } from '../Utils/ActionCreators'
function Header() {

  const { state, dispatch } = useContext(AuthContext)

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
      path: '/login',
      content: 'Login',
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
      </div>
    </div>
  )
}

export default Header