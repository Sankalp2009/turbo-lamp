import RestaurantCard from "./RestaurantCard";

function RestaurantTable({product}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Type</th>
          <th>Price Starts From</th>
        </tr>
      </thead>
      <tbody>
        {
          product && product.map(el => (
               <RestaurantCard key={el.id} {...el} />
           ))
        }

      </tbody>
    </table>
  );
}

export default RestaurantTable;
