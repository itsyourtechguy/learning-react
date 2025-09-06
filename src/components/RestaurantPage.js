import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Restaurant_Menu_API } from "../utils/constant";
import DishCard from "../utils/DishCard";
import Shimmer from "./Shimmer";

const RestaurantPage = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [dishes, setDishes] = useState([]);
  const { restaurantID } = useParams();

  useEffect(() => {
    fetchRestaurantInfo();
  }, []);

  const fetchRestaurantInfo = async () => {
    const response = await fetch(Restaurant_Menu_API + restaurantID);
    const data = await response.json();
    const restaurantInfo = data?.data?.cards[2]?.card?.card?.info;
    const dishList = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    setRestaurant(restaurantInfo);
    setDishes(dishList);
  };

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
