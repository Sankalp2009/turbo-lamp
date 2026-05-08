import React, { useState, useEffect } from "react";

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

  function HandleChange(query) {
    setText(query);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (text) {
        FetchQuery(text);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [text]);

  if (IsLoading) return <div>Loading</div>;

  return (
    <div>
      <Search HandleChange={HandleChange} data={data} />
      <Display data={data} />
    </div>
  );
}

export default Dashboard;
