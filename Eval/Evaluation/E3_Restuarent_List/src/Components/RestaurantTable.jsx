import RestaurantCard from "./RestaurantCard";

function RestaurantTable({data}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Votes</th>
          <th>Type</th>
          <th>Price Starts From</th>
        </tr>
      </thead>
      <tbody>
        {
          data && data.map(el => (
               <RestaurantCard key={el.id} {...el} />
           ))
        }

      </tbody>
    </table>
  );
}

export default RestaurantTable;
