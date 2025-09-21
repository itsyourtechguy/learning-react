import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import DishCard from "../utils/DishCard";
import Shimmer from "./Shimmer";

const RestaurantPage = () => {
  const { restaurantID } = useParams();
  const restaurant = useRestaurantInfo(restaurantID)?.data?.cards[2]?.card?.card?.info;
  const dishes = useRestaurantInfo(restaurantID)?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

  if (!restaurant) {
    return <Shimmer />;
  }

  return (
    <div className="restaurant-page">
        <h1>{restaurant.name}</h1>
        <p>{restaurant.cuisines.join(", ")}</p>
        <p>Area: {restaurant.area}</p>
        <p>City: {restaurant.city}</p>
        <p>Average Rating: {restaurant.avgRating}</p>
        <p>Cost for Two: ₹{restaurant.costForTwo / 100}</p>
        {dishes.length > 0 && dishes.map((dish) => (
            <DishCard key={dish.card.info.id} dishData={dish.card.info} />
        ))}    
    </div>
  );
};

export default RestaurantPage;
