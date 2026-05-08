import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./../Pages/Home";
import About from "./../Pages/About";
import Contact from "./../Pages/Contact";
import Product from "./../Pages/Product";
import Jeans from "./../Pages/Jeans";
import Shirt from "./../Pages/Shirt";
function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="product" element={<Product />}>
          <Route path="Jeans" element={<Jeans />} />
          <Route path="shirt" element={<Shirt />} />
        </Route>
      </Routes>
    </>
  );
}

export default AllRoutes;
