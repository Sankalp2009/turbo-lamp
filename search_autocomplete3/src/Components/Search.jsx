import React, {useState} from 'react'
import SearchInput from './SearchInput'
function Search() {

  const [query, setQuery] = useState("");
  console.log(query);

  return (
    <div>
      <SearchInput query={query} setQuery={setQuery} />
    </div>
  )
}

export default Search