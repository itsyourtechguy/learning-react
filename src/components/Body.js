import { useState } from "react";
import { restaurantData } from "../utils/constant";
import RestaurantCard from "../utils/RestaurantCard";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState(restaurantData);

    const handleClick = () => {
        const filteredList = restaurantList.filter((res) => res.data.avgRating >= 4);
        setRestaurantList(filteredList);
    }

  return (
    <div className="body">
      <h2>Welcome to My Kitchen</h2>
      <p>Explore our delicious recipes and cooking tips!</p>
      <button onClick={handleClick}>Top Rated Resturants</button>
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default Body;