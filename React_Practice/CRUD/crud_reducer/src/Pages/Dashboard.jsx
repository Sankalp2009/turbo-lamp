import React, { useContext, useEffect } from "react";
import { GlobalInfo } from "../Context/GlobalInfo.jsx";
import getData from "../Utils/API.jsx";
import {Link} from "react-router-dom";
import {ACTION_TYPE} from "../Utils/Action_Creators.jsx";
import '../App.css'
import axios from "axios";


function Dashboard(){

  const { state, dispatch } = useContext(GlobalInfo);
  console.log(state)

  const FetchData = async()=>{
    try {
       dispatch({ type: "GET_PRODUCTS_REQUEST"})
      const Response = await getData("http://localhost:8080/Products");
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload:Response.data})
    } catch (error) {
      dispatch({ type: "GET_PRODUCTS_FAILURE", payload:error})
      console.log(error)
      
    }
  }

  // delete Functionality (Optimistic Production-Ready Approach)
 const handleDelete = async (id) => {
   
  // save the data 
   const backUp = [...state.data];
  //  First remove the data from UI
    dispatch({ type: "DELETE_PRODUCT", payload : id });
  
  // Then Remove the data from server, If fail pass the backup data to success
    try {
      await axios.delete(`http://localhost:8080/Products/${id}`);
    } catch (error) {
      console.log(error);
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: backUp });
    }
  };

  useEffect(()=>{
    FetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dispatch])
  
  if(state.IsLoading) return (<h2>...Loading</h2>)

  return (
  
  <>
  <div className="card">
    {
      state.data && state.data?.map((el) => (
          <div className="inner-card" key={el.id}>
              <img src={el.thumbnail} alt="image" />
            <h3>{el.title} - {el.category}</h3>
            <h3><span>Price</span> {el.price}</h3>
            <div style={{display:"flex", justifyContent:"space-around", padding:"10px"}}>
              <Link to={`/update/${el.id}`}>
               <button>Edit</button>
              </Link>
              <button onClick={()=>handleDelete(el?.id)}>Delete</button>
            </div>
          </div>
        ))} 
  </div>
  </>);
}

export default Dashboard;

// import React, { useContext, useEffect, useState } from "react";
// import { GlobalInfo } from "../Context/GlobalInfo.jsx";
// import getData from "../Utils/API.jsx";
// import { ACTION_TYPE } from "../Utils/Action_Creators.jsx";
// import "../App.css";
// import axios from "axios";

// function Dashboard() {
//   const { state, dispatch } = useContext(GlobalInfo);

//   // track which card is being edited
//   const [editId, setEditId] = useState(null);
//   const [editForm, setEditForm] = useState({ title: "", price: "" });

//   const FetchData = async () => {
//     try {
//       dispatch({ type: "GET_PRODUCTS_REQUEST" });
//       const Response = await getData("http://localhost:8080/Products");
//       dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: Response.data });
//     } catch (error) {
//       dispatch({ type: "GET_PRODUCTS_FAILURE", payload: error });
//       console.log(error);
//     }
//   };

//   // Switch to edit mode
//   const handleEdit = (product) => {
//     setEditId(product.id);
//     setEditForm({ title: product.title, price: product.price });
//   };

//   // Handle input change
//   const handleChange = (e) => {
//     setEditForm({ ...editForm, [e.target.name]: e.target.value });
//   };

//   // Save update
//   const handleSave = async (id) => {
//     try {
//       const res = await axios.put(`http://localhost:8080/Products/${id}`, editForm);

//       // dispatch update to context
//       dispatch({ type: ACTION_TYPE.UPDATE_PRODUCT, payload: res.data });

//       setEditId(null); // exit edit mode
//     } catch (error) {
//       console.log("Update failed:", error);
//     }
//   };

//   // delete Functionality
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8080/Products/${id}`);
//       dispatch({ type: "DELETE_PRODUCT", payload: id });
//     } catch (error) {
//       dispatch({ type: "GET_PRODUCTS_FAILURE", payload: error });
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     FetchData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [dispatch]);

//   if (state.IsLoading) return <h2>...Loading</h2>;

//   return (
//     <>
//       <div className="card">
//         {state.data &&
//           state.data?.map((el) => (
//             <div className="inner-card" key={el.id}>
//               <img src={el.thumbnail} alt="image" />

//               {editId === el.id ? (
//                 <>
//                   {/* Edit mode */}
//                   <input
//                     type="text"
//                     name="title"
//                     value={editForm.title}
//                     onChange={handleChange}
//                   />
//                   <input
//                     type="number"
//                     name="price"
//                     value={editForm.price}
//                     onChange={handleChange}
//                   />
//                   <button onClick={() => handleSave(el.id)}>Save</button>
//                   <button onClick={() => setEditId(null)}>Cancel</button>
//                 </>
//               ) : (
//               <>
//                   {/* View mode */}
//                   <h3>
//                     {el.title} - {el.category}
//                   </h3>
//                   <h3>
//                     <span>Price</span> {el.price}
//                   </h3>
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "space-around",
//                       padding: "10px",
//                     }}
//                   >
//                     <button onClick={() => handleEdit(el)}>Edit</button>
//                     <button onClick={() => handleDelete(el.id)}>Delete</button>
//                   </div>
//               </>
//               )}
//             </div>
//           ))}
//       </div>
//     </>
//   );
// }

// export default Dashboard;
