import React from 'react'

export default function EmployeeSalary({data}) {
    return (
        <div data-testid="employee-salary">
             <>
      {data.map((elem)=>
          { 
              return(
                  <div key = {elem.id}>
                  <h3>salary: {elem.salary}</h3>
                  </div>
              )
          })
      }
    </> 
    </div>
    )
}
