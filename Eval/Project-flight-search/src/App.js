import React from "react";
import FlightSearch from "./components/flightSearch/FlightSearch";

function App() {
  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
        crossOrigin="anonymous"
      />
      <FlightSearch></FlightSearch>
    </div>
  );
}

export default App;
