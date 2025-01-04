// import data from given data.json

// const initState = {};
const RestaurantDetails = () => {
 
  return (
    <>
      <h1>RestaurantDetails</h1>
      {/* rating buttons */}
      {[4, 3, 2, 1, 0].map((item) => {
        return (
          <button data-testid={`rating-${item}`}>
            {item == 0 ? "All" : `${item} and above`}
          </button>
        );
      })}
      {/* payment methods */}
      {["card", "cash", "upi", "all"].map((item) => {
        return <button data-testid={`filter-${item}`}>{item}</button>;
      })}
      {["asc", "desc"].map((item) => {
        return <button data-testid={`sortBy-${item}`}>{item}</button>;
      })}
      {
        // map through the restaurant data and render Restaurant cards
      }
    </>
  );
};
export { RestaurantDetails };

