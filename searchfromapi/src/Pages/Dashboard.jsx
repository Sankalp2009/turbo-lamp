import { useState, useEffect } from "react";

import Search from "../Components/Search.jsx";
import Display from "../Components/Display.jsx";

function Dashboard() {
  const [data, setData] = useState([]);

  const [IsLoading, setIsLoading] = useState(false);

  const [text, setText] = useState("");

  const FetchQuery = async (query) => {
    try {
      setIsLoading(true);
      let Res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
      let Product = await Res.json();
      console.log(Product?.products);
      setData(Product?.products);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timerID = setTimeout(() => {
      if (text.trim()) {
        FetchQuery(text);
      } else {
        setData([]);
      }
    }, 500);

    return () => clearTimeout(timerID);
  }, [text]);

  return (
    <div>
      <Search text={text} setText={setText} data={data} />
      {IsLoading && <h3>Loading...</h3>}
      {!IsLoading && data.length === 0 && <h3>No Results Found</h3>}
      <div id="recipeContainer">
        {data &&
          data?.map((el) => (
            <div key={el.id} className="container ">
              <Display {...el} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
