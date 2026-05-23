import React from 'react'

function SearchInput({ query, setQuery }) {
  return (
    <div>
      <input
        className="searchInput"
        type="text"
        name="search"
        value={query}
        onChange={(e)=>{setQuery(e.target.value)}}
        placeholder="Enter Search..."
      />
    </div>
  )
}

export default SearchInput
