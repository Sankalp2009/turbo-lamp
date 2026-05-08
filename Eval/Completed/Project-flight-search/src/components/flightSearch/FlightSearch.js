import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import SearchResults from "./SearchResults.jsx";

// create an separate function to handle api and return relevant data as required
export const fetchData = async () => {
  try {
    let url =
      "https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1";
    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

function FlightSearch() {
  // on page load fetch the data (useEffect)
  
  // these two states are used for collection of input data 
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  // data is used for the collection of pre-data rendering
  const [data, setData] = useState([]);

  // this data used to collect filter data on the basis of input data
  const [filterData, setFilterData] = useState([]);

  console.log(filterData);
  
  // Handling the side effect calling the fetch function and get the relevant data
  useEffect(() => {
    fetchData().then((result) => setData(result));
  }, []);
  
  // on button click we filter data on the basis of input we provided
  const handleSearch = () => {
    if (!source || !destination) return false;

    const filtered = data.filter(
      (item) =>
        item.source.toLowerCase() === source.toLowerCase() &&
        item.destination.toLowerCase() === destination.toLowerCase()
    );

    setFilterData(filtered);
  };

  return (
    <div style={{ margin: "auto", textAlign: "center", marginTop: "5%" }}>
      <div></div>
      <div>
        <section>
          <h4 class="display-4">Flight Search</h4>
          <br />
          <input
            data-testid="source-input"
            value={source}
            placeholder="Source"
            name="source"
            onChange={(e) => setSource(e.target.value)}
          />
          <br /> <br />
          <input
            data-testid="destination-input"
            value={destination}
            placeholder="Destination"
            name="destination"
            onChange={(e) => setDestination(e.target.value)}
          />
          <br /> <br />
          <button
            data-testid="search-button"
            class="btn btn-primary"
            onClick={handleSearch}
          >
            Search
          </button>
        </section>
      </div>

{/* conditionally rendering the data, as if search results data is filter the we show the relevant output else we show no data found on tabular format */}

      {filterData.length === 0 ? (
        <h2 data-testid="no-flights">No flights found</h2>
      ) : (
        <table style={{ margin: "auto", marginTop: "10px" }}>
          <thead>
            <tr>
              <th>DEPARTURE</th>
              <th>DURATION</th>
              <th>ARRIVAL</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody data-testid="flight-results">
            {filterData &&
              filterData.map((el, index) => (
                <SearchResults key={index} {...el} />
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default FlightSearch;