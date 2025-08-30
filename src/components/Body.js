import { useState, useEffect, use } from "react";
import RestaurantCard from "../utils/RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const handleClick = () => {
        const filteredList = restaurantList.filter((res) => res.info.avgRating >= 4.5);
        setFilteredRestaurant(filteredList);
    }

    const handleInput = (input) => {
      const filteredList = restaurantList.filter((res) => res.info.name.toLowerCase().includes(input.toLowerCase()));
      setFilteredRestaurant(filteredList);
    }

    useEffect(() => {
      fetchData();
    }, []);

    const API = "https://pastebin.com/raw/0QcdEDBL";
    const fetchData = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setRestaurantList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if (restaurantList.length === 0) {
      return <Shimmer />;
    }

  return (
    <div className="body">
      <h2>Welcome to My Kitchen</h2>
      <p>Explore our delicious recipes and cooking tips!</p>
      <input type="search" placeholder="Type restaurant name..." onChange={(e) => handleInput(e.target.value)} />
      <button onClick={handleClick}>Top Rated Resturants</button>
      <div className="restaurant-list">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant?.info} />
        ))}
      </div>
    </div>
  )
}

export default Body;