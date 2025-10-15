
import React from 'react'

function Product({avatar,department,gender,name,salary}) {
  return (
    <div>
        <img src={avatar} alt="marry"  />
        <h3>{name.toUpperCase()}</h3>
        <div style={{display: "flex", flexDirection:"column", justifyContent:"space-around"}}>
          <p>Department: <span style={{color:"red"}}>{department}</span></p>
          <p>Gender: <span style={{color:"red"}}>{gender}</span></p>
        </div>
        <h3>Salary: <span style={{color:"red"}}>{salary}</span></h3>
    </div>
  )
}

export default Product