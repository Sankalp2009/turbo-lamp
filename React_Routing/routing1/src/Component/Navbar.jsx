import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const link = [
    {
      path:"/",
      Content: "Home"
    },
    {
      path:"/about",
      Content: "About"
    },
    {
      path:"/contact",
      Content: "Contact"
    },
    {
      path:"/product",
      Content: "Product"
    }
  ]

  return (
    <div style={{fontSize:"larger", display:"flex", justifyContent:"space-around"}}>
      {
        link.map(el=>(
          <div>
            <Link to={el.path}>{el.Content}</Link>
          </div>
        ))
      }
    </div>
)}
export default Navbar