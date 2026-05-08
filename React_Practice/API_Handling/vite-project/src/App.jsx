import "./App.css";
import { useContext } from "react";
import { GlobalInfo } from "./Component/DataContext.jsx";

function App() {

  const { data, isloading } = useContext(GlobalInfo);
  
  // Approach1: For Simple Apps: Approach 1 (Single Ternary) (Most Efficient)
  // return (
  //   <>
  //     <h1>API Handling</h1>
  //     {isloading ? (<h1>Loading...</h1>) : (
  //     data && data.map((el) => (
  //         <div key={el.id}>
  //           <ul>
  //             <li>
  //               <h4>{el.title}-{el.price}</h4>
  //             </li>
  //           </ul>
  //         </div>
     
  //     )))}
  //   </>
  // );

  // Approach2: For Medium Apps: Approach 2 (Early Return)
  // call loading part before data rendering
  if (isloading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>API Handling</h1>
      {
        data && data.map((el) => (
          <div key={el.id}>
            <ul>
              <li>
                <h4>{el.title}-{el.price}</h4>
              </li>
            </ul>
          </div>
     
      ))};
    </>
  );
}

export default App;