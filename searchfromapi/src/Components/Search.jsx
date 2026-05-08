import React from "react";
import "./Search.css";

function Search({ HandleChange, data }) {
  const [IsInput, setIsInput] = React.useState("");
  const [showSuggestions, setShowSuggestions] = React.useState(false);

  function HandleInput(e) {
    const value = e.target.value;
    setIsInput(value);
    setShowSuggestions(value.length > 0);
    HandleChange(value);
  }

  function HandleSuggestionClick(product) {
    setIsInput(product.title);
    setShowSuggestions(false);
    HandleChange(product.title);
  }

  return (
    <div className="search-container">
      <input
        type="text"
        value={IsInput}
        name="search"
        placeholder="Enter Search Data"
        onChange={HandleInput}
        onFocus={() => IsInput && setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
      />
      {showSuggestions && data.length > 0 && (
        <ul className="suggestions-dropdown">
          {data.slice(0, 8).map((product) => (
            <li key={product.id} onClick={() => HandleSuggestionClick(product)}>
              <div className="suggestion-item">
                <img src={product.thumbnail} alt={product.title} />
                <div className="suggestion-text">
                  <p className="product-title">{product.title}</p>
                  <p className="product-price">${product.price}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
