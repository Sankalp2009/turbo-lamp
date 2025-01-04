import React from "react";

export const fetchData = async () => {
  // make fetch request to the mentioned api and return the result here
};

function FlightSearch() {
  // on page load fetch the data (useEffect)

  const handleSearch = () => {
    // filter the data based on source and destination
  };
  return (
    <div>
      <div></div>
      <div>
        <section>
          <h4>Flight Search</h4>
          <br />
          <input data-testid="source-input" placeholder="Source" />
          <br /> <br />
          <input data-testid="destination-input" placeholder="Destination" />
          <br /> <br />
          <button data-testid="search-button">Search</button>
        </section>
      </div>
      {/* if there are search results pass it to SearchResults components else print no floghts found  */}
    </div>
  );
}

export default FlightSearch;
