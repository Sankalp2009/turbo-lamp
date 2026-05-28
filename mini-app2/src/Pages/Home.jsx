import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='Home'>
          <Link to="/login" style={{color:"green"}}>
          <button className='home_button'>Login</button>
          </Link>
          <Link to="/dashboard" style={{color:"green"}}>
          <button className='home_button'>Home</button>
          </Link>
    </div>
  )
}

export default Home