import React from 'react'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
const Product = () => {
  return (
    <div>
     <h1>Product</h1>
     <nav style={{display:"flex", justifyContent:"space-around", fontSize:"x-large"}}>
      <Link to="jeans">Jeans</Link>
      <Link to="shirt">Shirt</Link>
     </nav>
    <Outlet /> 
    </div>
  )
}


