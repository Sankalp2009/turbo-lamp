import { useState } from "react";
import "./Search.css";

function Search({ text, setText, data }) {
  const [showSuggestions, setShowSuggestions] = useState(false);

  function handleSuggestionClick(product) {
    setText(product.title);
    setShowSuggestions(false);
  }

  function handleChange(e) {
    const value = e.target.value;

    setText(value);

    // Show suggestions while typing
    setShowSuggestions(value.trim().length > 0);
  }

  return (
    <div className="search-container">
      <input
        type="text"
        value={text}
        name="search"
        placeholder="Enter Search Data"
        onChange={handleChange}
        onFocus={() => {
          if (text.trim() && data.length > 0) {
            setShowSuggestions(true);
          }
        }}
        onBlur={() => {
          // Delay so click event can fire
          setTimeout(() => {
            setShowSuggestions(false);
          }, 200);
        }}
      />

      {showSuggestions && data.length > 0 && (
        <ul className="suggestions-dropdown">
          {data.slice(0, 8).map((product) => (
            <li
              key={product.id}
              onClick={() => handleSuggestionClick(product)}
            >
              <div className="suggestion-item">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  width="50"
                />

                <div className="suggestion-text">
                  <p className="product-title">{product.title}</p>
                  <p className="product-price">
                    ${product.price}
                  </p>
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