import React, { useEffect, useState } from "react";
import EmployeeName from "./EmployeeName";
import EmployeeSalary from "./EmployeeSalary";

export const Dashboard = () => 
{

  const [post, setPOST] = useState([]);
  const [sortStatus, setSortStatus] = useState(true);
  useEffect(() => {
   
      const Main = async ()=>
      {
        try {
          let response = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`)
          let res =  await response.json();
          let data = res.data;
          setPOST(data)
        console.log(data)
        } catch (error) {
          console.log(error);
        }
      }
      Main();
  }, []);

  const HandleSort= () => {
    if (sortStatus) {
        let sorted = post.sort((a, b) => a.salary- b.salary);
        setPOST(sorted);
        setSortStatus(!sortStatus);
        console.log(`sorted`,sorted);
    } else {
        let sorted = post.sort((a, b) => b.salary- a.salary);
        setPOST(sorted);
        setSortStatus(!sortStatus);
    }
    if (sortStatus) {
      let sorted = post.sort((a, b) => a.name> b.name);
      setPOST(sorted);
      setSortStatus(!sortStatus);
      console.log(`sorted`,sorted);
  } else {
      let sorted = post.sort((a, b) => b.name> a.name);
      setPOST(sorted);
      setSortStatus(!sortStatus);
  }
  }
  return (
    <div>
      <button data-testid="sorting-btn" onClick={HandleSort}>Top 10 Employees</button>

      <div data-testid="employee-data">
        {/* <EmployeeName /> */}
        <EmployeeName data={post}  /> 
        {/* <EmployeeSalary /> */}
      </div>
      
    </div>
  );
};
