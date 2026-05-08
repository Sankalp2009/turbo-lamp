import React from "react";

const UserRow = ({user}) => {
  return (
  <>
             <tr>
               <td>{user.name}</td>
               <td>{user.gender}</td>
               <td>{user.role}</td>
               <td>{user.maritalStatus ? "married" : "unmarried"}</td>
             </tr>
  </>);
};
export { UserRow };
