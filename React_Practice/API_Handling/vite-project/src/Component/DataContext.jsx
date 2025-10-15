import React, { useState, useEffect } from "react";

import { getData } from "./Api.jsx";

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalInfo = React.createContext(null);

function DataContext({ children }) {
  const [data, setData] = useState();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getData("https://fakestoreapi.com/products")
    .then(data => {
      setData(data);
      setIsLoading(false);
    }) 
    .catch(err => {
      console.log(err);
      setIsLoading(false)
    });
  }, []);

  let value = { data, isloading };

  return <GlobalInfo.Provider value={value}>{children}</GlobalInfo.Provider>;
}

export default DataContext;