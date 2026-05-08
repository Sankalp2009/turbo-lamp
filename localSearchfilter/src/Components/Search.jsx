import React from "react";
function Search({ HandleChange }) {
  const [IsInput, setIsInput] = React.useState("");

  function HandleInput(e) {
    const value = e.target.value;
    setIsInput(value);
    HandleChange(IsInput);
  }

  return (
    <>
      <input
        type="text"
        id="search"
        value={IsInput}
        name="search"
        placeholder="Search Data"
        onChange={HandleInput}
      />
    </>
  );
}

export default Search;