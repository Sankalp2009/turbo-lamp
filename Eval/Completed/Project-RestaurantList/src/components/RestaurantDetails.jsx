/* eslint-disable no-unreachable */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
// import data from given data.json
import data from "../data.json";
import React, { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard.jsx";
import "../App.css";
// const initState = {};
const RestaurantDetails = () => {
  const [state, setState] = useState(data);
  const [ratingFilter, setRatingFilter] = useState(0); // 0 = all
  const [paymentFilter, setPaymentFilter] = useState("");
  const [sortData, setSortData] = useState("");

  const FilteredData = state
  .filter((el) => {
    let rating = Math.floor(el.rating);
    let paymentType = el.payment;

    // Rating filter
    if (ratingFilter > 0 && rating < ratingFilter) return false;

    // Payment filter
    if (paymentFilter !== "" && paymentFilter !== "all") {
      if (!paymentType[paymentFilter]) return false;
    }

    return true; // only at the very end
  })
  .sort((a, b) => {
    if (sortData === "asc") return a.rating - b.rating;
    if (sortData === "desc") return b.rating - a.rating;
    return 0;
  });

  console.log(FilteredData);

  return (
    <div style={{ margin: "auto", textAlign: "center", width:"50%" }}>
      <h1>Restaurant Menu Listing</h1>

      {/* Rating Part */}
      {[4, 3, 2, 1, 0].map((item) => {
        return (
          <button
            style={{ margin: "10px", padding: "5px" }}
            data-testid={`rating-${item}`}
            onClick={() => setRatingFilter(item)}
          >
            {item === 0 ? "All" : `${item} and above`}
          </button>
        );
      })}

      {/* payment methods */}
      {["card", "cash", "upi", "all"].map((item) => {
        return (
          <button
            onClick={() => setPaymentFilter(item)}
            style={{ margin: "10px", padding: "5px" }}
            data-testid={`filter-${item}`}
          >
            {item}
          </button>
        );
      })}

      {/* sorting part */}
      {["asc", "desc"].map((item) => {
        return (
          <button
            onClick={() => setSortData(item)}
            style={{ margin: "10px", padding: "5px" }}
            data-testid={`sortBy-${item}`}
          >
            {item}
          </button>
        );
      })}
      <div className="Grid_card">
        {
          // map through the restaurant data and render Restaurant cards
          FilteredData &&
            FilteredData?.map((el) => <RestaurantCard key={el.id} {...el} />)
        }
      </div>
    </div>
  );
};
export { RestaurantDetails };
