import LoadingIndicator from "./LoadingIndicator";
import { React, useState, useEffect } from "react";
import CountriesCard from "./CountriesCard";
import Pagination from './Pagination';

function Countries() {
  const [country_data, setCountry_Data] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [pages, setPages] = useState(1);
  const limit = 10;
  const FetchHandler = async (pages) => {
    try {
      setIsLoading(true);
      let response = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${pages}&limit=${limit}`
      );
      let data = await response.json();
      console.log(data);
      setCountry_Data(data?.data);
      setTotalPages(data?.totalPages);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    FetchHandler(pages);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[pages]);

  // eslint-disable-next-line no-unreachable
  return (
    <div>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <div>
          <h1 data-testid="countries-header">Countries List</h1>
          {/* Ist approach common */}
          {/* <div data-testid="countries-container">
            {country_data.map((elem) => (
              <div key={elem.id}>
                <CountriesCard
                  key={elem.id}
                  country={elem.country}
                  Rank={elem.Rank}
                  population={elem.population}
                />
              </div>
            ))}
          </div> */}
          {/* IInd approach send spread properties */}
          <div data-testid="countries-container">
            {country_data.map((elem) => (
              <div key={elem.id}>
                <CountriesCard
                  key={elem.id}
                  {...elem}
                />
              </div>
            ))}
          </div>
            

          <div>{
            <Pagination totalPages={totalPages} current={pages} onChange={setPages} />
            }</div>
        </div>
      )}
    </div>
  );
}

export default Countries;
