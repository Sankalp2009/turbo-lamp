import React from "react";

import { Link, useNavigate } from "react-router";
import { Button, Text, Input, Center } from '@chakra-ui/react'
import GlobalInfo from "../Zustand_store/AuthStore.jsx";
function Header() {
  
  console.log(GlobalInfo(state => state));

  // IsAuth
  const IsAuth = GlobalInfo(state => state.IsAuth);
  
  // Logout
  const Logout = GlobalInfo(state => state.logout);
  
  // Username
  const Username = GlobalInfo(state => state.username);

  const nav = useNavigate();

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
              <Text fontSize='lg'>{link.content}</Text>
            </Link>
          ))}
        </div>
        <Center>
          <Input placeholder="Search" width='auto' />
        </Center>
        {
          IsAuth ? (
            <div className="nav-right">
              <Text fontSize='lg'>{Username}</Text>
            <Button
              colorScheme='teal' 
              variant='outline'
              onClick={()=>Logout()}
            >
              Logout
            </Button>
          </div>
          ) : (
            <div className="nav-right">
            <Button
              colorScheme='teal' 
              variant='outline'
              onClick={()=>nav("/login")}
            >
              Login
            </Button>
          </div>
          )
        }
      </div>
    </div>
  );
}

export default Header; 