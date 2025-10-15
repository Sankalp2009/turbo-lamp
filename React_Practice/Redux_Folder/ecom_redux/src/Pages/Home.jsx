import React from 'react'
import {Link} from "react-router-dom"
function Home() {
  return (
    <h1>
      <Link to="/login">
       <button>Login</button>
      </Link>
    </h1>
  )
}

export default Home