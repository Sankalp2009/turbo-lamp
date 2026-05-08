import React from 'react'
import {useNavigate} from "react-router-dom"

function Home() {
  
  const navigate = useNavigate()
  
  function HandleClick(){
    navigate("/login")
  }

  return (
    <>
    <button onClick={HandleClick}>
      <h3>Please Login</h3>
    </button>
    </>
  )
}

export default Home