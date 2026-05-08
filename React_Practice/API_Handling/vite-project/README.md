# Efficient Handling of data and loading

<!-- // Approach1: For Simple Apps: Approach 1 (Single Ternary) (Most Efficient)
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
  // ); -->

<!-- Approach2: Early Return statement -->
<!-- call loading data first then data mapping -->
  <!-- if (isloading) {
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
  ); -->

* Bottom line: Use Approach 1 for your current simple use case, but consider Approach 2 on your app grows more complex.