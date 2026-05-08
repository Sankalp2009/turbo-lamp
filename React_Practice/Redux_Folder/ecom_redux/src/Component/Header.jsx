import React from "react";
import { Link } from "react-router-dom";
import { BsHandbag  } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {ACTION_TYPE} from "../Redux/Auth_Reducer/action.jsx";

function Header() {
  const cartItems = useSelector((state) => state.Cart.items);
  const IsAuth = useSelector((state) => state.Auth.IsAuth);
  const cartCount = cartItems.length;
  const dispatch = useDispatch();
  
  const Links = [
    { path: "/", content: "Home" },
    { path: "/dashboard", content: "Dashboard" },
  ];

  return (
    <header style={{margin: "20px",height: "60px",padding: "0 20px",display: "flex",justifyContent: "space-between",alignItems: "center",background: "#f5f5f5",borderRadius: "8px"}}>
      {/* Navigation Links */}
      <nav style={{ display: "flex", gap: "2rem" }}>
        {Links.map((link) => (
          <h2 key={link.path} style={{ margin: 0 }}>
            <Link
              to={link.path}
              style={{ textDecoration: "none", color: "black" }}
            >
              {link.content}
            </Link>
          </h2>
        ))}
      </nav>

        {/* Cart Icon */}
      <div
        style={{
          width: "15%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "8px",
        }}
      >
        {IsAuth && (
          <div style={{ position: "relative", marginRight: "10px" }}>
            <Link to="/checkout/cart" style={{ fontSize: "30px", color: "black" }}>
              <BsHandbag />
            </Link>

            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "-12px",
                  background: "#f26460",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                {cartCount}
              </span>
            )}
          </div>
        )}

      
      <div>
        {IsAuth && (
          <button style={{borderRadius:"8px", padding:"2px 15px 2px 15px", border:"1px solid black", fontSize:"15px"}}
        onClick={() => {dispatch({type:ACTION_TYPE.LOGOUT})}}
        >Logout</button>
        )}
      </div>
      </div>
    </header>
  );
}

export default Header;