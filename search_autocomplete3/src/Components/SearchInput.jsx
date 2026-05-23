function SearchInput({ query, setQuery }) {
  return (
    <div>
      <input
        className="search_input"
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}

export default SearchInput
