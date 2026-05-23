import React, {useState, useEffect} from 'react'
import SearchInput from './SearchInput'
function Search() {

  const [query, setQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [iserror, setIsError] = useState(null);
  
  useEffect(()=>{
    const trimmed = encodeURIComponent(query.trim());
    
    // Handle Empty Query
    if(!trimmed && trimmed.length < 2){
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSuggestion([]);
      setIsLoading(false);
      setIsError(null);
    }

    const FetchSearch = async()=>{
      try {
        setIsLoading(true)
        let res = await fetch(`https://dummyjson.com/products/search?q=${trimmed}`)
        let data = await res.json();
        if(!data?.products) throw new Error("Data Not Found");
        console.log(data?.products);
        setSuggestion(data?.products || []);
      } catch (error) {
        console.error(error);
        setIsError(error);
      }finally{
        setIsLoading(false);
        setIsError(null);
      }
    }
    
    FetchSearch();

  },[query])

  return (
    <div>
      <SearchInput query={query} setQuery={setQuery} />
    </div>
  )
}

export default Search