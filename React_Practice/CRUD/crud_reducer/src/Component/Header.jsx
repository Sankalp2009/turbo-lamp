import { Link } from "react-router-dom";
import React, {useContext} from 'react'
import {GlobalInfo} from "../Context/GlobalInfo.jsx"

function Header() {
  
  const {state,LogOut} = useContext(GlobalInfo)

  const Links = [
    {
      path: "/",
      content: "Home",
    },
    {
      path: "/dashboard",
      content: "Dashboard",
    },
    {
      path: "/create",
      content: "Create",
    },
    {
      content: state.Role || "Guest"
    }
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-around", alignItems:"center", height:"2rem", paddingBottom:"2em"}}>
      {Links.map((el, idx) => (
        <div key={idx}>
          {el.path ? (
            <Link to={el.path}>
              <h3>{el.content.toUpperCase()}</h3>
            </Link>
          ) : (
            <h3>{el.content.toUpperCase()}</h3>
          )}
        </div>
      ))}

      {state.IsAuth && (
        <button style={{padding:"5px 15px 5px 15px", 
          border:"1px solid red", 
          borderRadius:"2em", 
          cursor:"pointer"
        }} onClick={LogOut}>Logout</button>
      )}
    </div>
  );
}

export default Header;
