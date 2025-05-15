import React from 'react'

export default function EmployeeName({data}) 
{ 
    console.log(`Name`,data);  
    return (
        <div data-testid="employee-name">
             <>
      {data.map((elem)=>
          { 
              return(
                  <div key = {elem.id}>
                  <h3>name: {elem.name}</h3>
                  <h3>salary: {elem.salary}</h3>
                  </div>
              )
          })
      }
    </>
        </div>
    )
}
