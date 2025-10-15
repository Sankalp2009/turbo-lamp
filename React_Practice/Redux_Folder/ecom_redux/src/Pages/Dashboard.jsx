import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_TYPE } from "../Redux/Product_Reducer/action.jsx";
import { ACTION_TYPE as cart_Type } from "../Redux/Cart_Reducer/action.jsx";
import Product from "./Product.jsx";

function Dashboard() {
  const dispatch = useDispatch();
  const { data, IsLoading } = useSelector((state) => ({
    data: state.Product?.data,
    IsLoading: state.Product?.IsLoading,
  }));

  const [filters, setFilters] = React.useState([]);
  
  

  const LoadData = async () => {
    try {
      dispatch({ type: ACTION_TYPE.GET_REQUEST });
      const res = await fetch("http://localhost:8080/Employee");
      const resData = await res.json();
      dispatch({ type: ACTION_TYPE.GET_SUCCESS, payload: resData });
    } catch (error) {
      console.error(error);
      dispatch({ type: ACTION_TYPE.GET_FAILURE, payload: error });
    }
  };

  React.useEffect(() => {
    LoadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (IsLoading) return <h1>Loading...</h1>;

  // filter data based on selected checkboxes
  const filteredData =
    filters.length > 0
      ? data.filter((item) => filters.includes(item.department))
      : data;

  const handleFilterChange = (dept) => {
    setFilters((prev) =>
      prev.includes(dept)
        ? prev.filter((d) => d !== dept)
        : [...prev, dept]
    );
  };
  
  console.log(filteredData);

  return (
    <div
      style={{
        width: "100%",
        margin: "auto",
        minHeight: "100vh",
        display: "flex",
        gap: "20px",
        padding: "20px",
      }}
    >
      {/* Sidebar Filters */}
      <aside
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "220px",
          height: "fit-content",
        }}
      >
        <h3 style={{ marginBottom: "15px" }}>Department</h3>
        {Array.from(new Set(data?.map((item) => item.department)))?.map(
          (dept) => (
            <div
              key={dept.department}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "10px",
              }}
            >
              <input
                type="checkbox"
                checked={filters.includes(dept)}
                onChange={() => handleFilterChange(dept)}
              />
              <label htmlFor={dept.toLowerCase()}>{dept}</label>
            </div>
          )
        )}
      </aside>

      {/* Product Grid */}
      <section
        className="Grid_card"
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredData?.map((el) => (
          <div
            key={el.id}
            className="card_buddy"
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              textAlign: "center",
            }}
          >
            <Product {...el} />
            <button
              type="button"
              style={{
                marginTop: "10px",
                padding: "8px 16px",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "#007bff",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() =>
                dispatch({ type: cart_Type.ADD_TO_CART, payload: el })
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Dashboard;

// Handling filter with URL
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";
// import { ACTION_TYPE } from "../Redux/Product_Reducer/action.jsx";
// import { ACTION_TYPE as cart_Type } from "../Redux/Cart_Reducer/action.jsx";
// import Product from "./Product.jsx";

// function Dashboard() {
//   const dispatch = useDispatch();
//   const [searchParams, setSearchParams] = useSearchParams();

//   const { data, IsLoading } = useSelector((state) => ({
//     data: state.Product?.data,
//     IsLoading: state.Product?.IsLoading,
//   }));

//   // keep filters in state
//   const [filters, setFilters] = React.useState([]);

//   // Load products from API
//   const LoadData = async () => {
//     try {
//       dispatch({ type: ACTION_TYPE.GET_REQUEST });
//       let URL = "http://localhost:8080/Employee";
//       let Response = await fetch(URL);
//       let Res_data = await Response.json();
//       dispatch({ type: ACTION_TYPE.GET_SUCCESS, payload: Res_data });
//     } catch (error) {
//       console.log(error);
//       dispatch({ type: ACTION_TYPE.GET_FAILURE, payload: error });
//     }
//   };

//   React.useEffect(() => {
//     LoadData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // On mount OR URL change → sync filters from URL
//   React.useEffect(() => {
//     const deptFromURL = searchParams.get("department");
//     if (deptFromURL) {
//       setFilters(deptFromURL.split(",")); // ["Engineering","Finance"]
//     } else {
//       setFilters([]);
//     }
//   }, [searchParams]);

//   // handle checkbox toggle
//   const handleFilterChange = (dept) => {
//     let updated;
//     if (filters.includes(dept)) {
//       updated = filters.filter((f) => f !== dept);
//     } else {
//       updated = [...filters, dept];
//     }
//     setFilters(updated);

//     // Update URL query param
//     if (updated.length > 0) {
//       setSearchParams({ department: updated.join(",") });
//     } else {
//       setSearchParams({}); // clear filters from URL
//     }
//   };

//   // filter data based on selected departments
//   const filteredData =
//     filters.length > 0
//       ? data.filter((item) => filters.includes(item.department))
//       : data;

//   if (IsLoading) return <h1>...Loading</h1>;

//   return (
//     <React.Fragment>
//       <div
//         style={{
//           width: "100%",
//           margin: "auto",
//           minHeight: "100vh",
//           display: "flex",
//           gap: "20px",
//           padding: "20px",
//         }}
//       >
        
//         {/* Sidebar Filters */}
//         <div
//           style={{
//             border: "1px solid #ccc",
//             padding: "20px",
//             borderRadius: "8px",
//             minWidth: "220px",
//           }}
//         >
//           <h3 style={{ marginBottom: "15px" }}>Department</h3>

//           {["engineering", "operations", "finance", "marketing", "hr"].map(
//             (dept) => (
//               <div
//                 key={dept}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "8px",
//                   marginBottom: "10px",
//                 }}
//               >
//                 <input
//                   type="checkbox"
//                   id={dept.toLowerCase()}
//                   checked={filters.includes(dept)}
//                   onChange={() => handleFilterChange(dept)}
//                 />
//                 <label htmlFor={dept.toLowerCase()}>{dept}</label>
//               </div>
//             )
//           )}
//         </div>



//         {/* Product Grid */}
//         <div
//           className="Grid_card"
//           style={{
//             flex: 1,
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
//             gap: "20px",
//           }}
//         >
//           {filteredData &&
//             filteredData.map((el) => (
//               <div
//                 key={el.id}
//                 className="card_buddy"
//                 style={{
//                   border: "1px solid #ddd",
//                   borderRadius: "8px",
//                   padding: "15px",
//                   textAlign: "center",
//                 }}
//               >
//                 <Product {...el} />
//                 <button
//                   type="button"
//                   style={{
//                     marginTop: "10px",
//                     padding: "8px 16px",
//                     border: "none",
//                     borderRadius: "6px",
//                     backgroundColor: "#007bff",
//                     color: "white",
//                     cursor: "pointer",
//                   }}
//                   onClick={() =>
//                     dispatch({ type: cart_Type.ADD_TO_CART, payload: el })
//                   }
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             ))}
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }

// export default Dashboard;
