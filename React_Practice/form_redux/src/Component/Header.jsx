import React from "react";
import { Typography, Button, Flex, Tooltip } from "antd";
const { Title } = Typography;
import { Link, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Action_Type } from "../Redux/Auth_Reducer/action.jsx";
const selectorState = (state) => state.Auth;

function Header() {
  const navigation = useNavigate();
  const { IsAuth, username } = useSelector(selectorState);
  const dispatch = useDispatch();

  const Links = [
    {
      path: "/",
      content: "Home",
    },
    {
      path: "/product",
      content: "Product",
    },
  ];

  return (
    <div>
      <div className="outer_card">
        <div className="nav-left">
          {Links.map((link) => (
            <Link key={link.path} to={link.path}>
              <Title level={4}>{link.content}</Title>
            </Link>
          ))}
        </div>
        <Button
          color="default"
          variant="outlined"
          size="large"
          style={{ padding: "0% 10% 0% 10%" }}
        >
          Search
        </Button>
        {!IsAuth ? (
          <div className="nav-right">
            <Button
              onClick={() => navigation("/login")}
              size="medium"
              shape="round"
              type="primary"
            >
              Login
            </Button>
          </div>
        ) : (
          <div className="nav-right">
            <h2>{username}</h2>
            <Button
              onClick={() => {
                dispatch({ type: Action_Type.LOGOUT });
              }}
              size="medium"
              shape="round"
              type="primary"
            >
              Logout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
