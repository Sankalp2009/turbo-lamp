import {Route, Routes} from "react-router-dom";
import Home from "../Pages/Home.jsx";
import Create from "../Pages/Create.jsx";
import React from 'react'
import Update from "../Pages/Update.jsx";
function AllRoutes() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
      </React.Fragment>
  )
}

export default AllRoutes