/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import Search from "../Components/Search";
import Display from "../Components/Display";
function SearchData() {
  const [data, setData] = useState([]);

  const [InputData, setInputData] = useState("");

  const [IsLoading, setIsLoading] = useState(true);
  
  const [FilteredData, setFilteredData] = useState([]);

  useEffect(() => {
    try {
      setIsLoading(true);
      const fetchData = async () => {
        const response = await fetch(`https://dummyjson.com/products`);
        if (!response.ok) throw new Error("API Error");
        const dataProducts = await response.json();
        const ExtractData = dataProducts?.products || []; // ← Fallback to empty array
        setData(ExtractData); // ← Store ALL data
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
      setData([]);
    }
  }, []); // ← Fetch only once on mount
  
  useEffect(() => {
  const FilteredData = data.filter(item =>
    item.title?.toLowerCase().includes(InputData.toLowerCase())
  );
  setFilteredData(FilteredData);
}, [InputData, data]); 


  // Loading Part
  if (IsLoading) return <div>...Loading</div>;

  const HandleChange = (text) => {
    setInputData(text);
  };

  return (
    <div>
      <Search HandleChange={HandleChange} />
      <div id="recipeContainer">
        {FilteredData.length === 0 && <h3>No Results Found</h3>}
        {FilteredData &&
          FilteredData?.map((el) => (
            <div key={el.id} className="container">
              <Display {...el} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchData;
