import React from "react";

// add styling on your own just giving you the template
const RestaurantCard = () => {
  return (
    <div data-testid="card-item">
      <div>
        <div>{/* add image */}</div>
        <div>
          <h3 data-testid="card-title"></h3>
          {/* add all other rest details */}
        </div>
        <div>
          <div data-testid="card-rating">{/* rating */}</div>
          {/* votes etc.. */}
        </div>
      </div>
    </div>
  );
};
export { RestaurantCard };
