import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='Home'>
          <Link to="/login" style={{color:"green"}}>
          <h3>Login</h3>
          </Link>
          <Link to="/dashboard" style={{color:"green"}}>
          <h3>Home</h3>
          </Link>
    </div>
  )
}

export default Home