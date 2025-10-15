/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import "../App.css";
// add styling on your own just giving you the template
const RestaurantCard = ({
  restaurantName,
  image,
  categories,
  cost_for_one,
  cost_for_two,
  min,
  rating,
  votes,
  reviews,
  payment,
}) => {
  const paymentData = Object.entries(payment)
    .filter(([_, value]) => value === true)
    .map(([key]) => key);

  return (
    <div
      data-testid="card-item"
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "6px",
        padding: "10px",
        marginBottom: "15px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        maxWidth: "480px",
        backgroundColor: "#fff",
        boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
      }}
    >
      {/* Left Image */}
      <div style={{ marginRight: "10px" }}>
        <img
          src={image}
          alt="restaurant"
          style={{
            width: "70px",
            height: "100px",
            borderRadius: "4px",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Middle Content */}
      <div style={{ flex: 1 }}>
        <h3
          data-testid="card-title"
          style={{
            margin: "0",
            fontSize: "16px",
            fontWeight: "600",
            color: "red",
          }}
        >
          {restaurantName}
        </h3>

        <p style={{ margin: "2px 0", fontSize: "13px", color: "#757575" }}>
          {categories.join(", ")}
        </p>

        <p style={{ margin: "2px 0", fontSize: "13px", color: "#757575" }}>
          Cost ₹{cost_for_one} for one
        </p>
        <p style={{ margin: "2px 0", fontSize: "13px", color: "#757575" }}>
          Cost ₹{cost_for_two} for two
        </p>
        <p style={{ margin: "2px 0", fontSize: "13px" }}>
          Min ₹{min} • Up to 30 min
        </p>
        <div style={{ margin: "2px 0", fontSize: "13px" }}>
          Accepts online payments only{" "}
          {paymentData.length > 0 ? paymentData.join(", ") : "Cash only"}
        </div>
      </div>

      {/* Right Rating + Votes */}
      <div style={{ textAlign: "right", minWidth: "70px" }}>
        <div
          data-testid="card-rating"
          style={{
            backgroundColor: "#48c479",
            color: "#fff",
            fontSize: "13px",
            fontWeight: "600",
            borderRadius: "3px",
            padding: "2px 5px",
            display: "inline-block",
            marginBottom: "5px",
          }}
        >
          {rating}
        </div>
        <p style={{ margin: "2px 0", fontSize: "12px", color: "#757575" }}>
          {votes} votes
        </p>
        <p style={{ margin: "2px 0", fontSize: "12px", color: "#757575" }}>
          {reviews} reviews
        </p>
      </div>
    </div>
  );
};
export { RestaurantCard };
