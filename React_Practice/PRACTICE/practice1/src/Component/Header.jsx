import {Link} from "react-router-dom";
import React from 'react'

function Header() {

  const Links = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "contact",
      path: "/contact",
    },
    {
      name: "user",
      path: "/user",
    },
    {
      name: "singleUser",
      path: "/singleUser",
    },
  ]

  return (
    <div style={{display: "flex", justifyContent:"space-between", textDecoration:"none"}}>
      {
        Links.map((link) => (
          <h3 key={link.name}>
            <Link style={{textDecoration:"none"}} to={link.path}>{link.name}</Link>
          </h3>
        ))
      }
    </div>
  )
}

export default Header