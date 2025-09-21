import { useState, useEffect } from "react";
import RestaurantCard from "../utils/RestaurantCard";
import Shimmer from "./Shimmer";
import { FETCH_RESTAURANTS_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const isOnline = useOnlineStatus();

    const handleClick = () => {
        const filteredList = restaurantList.filter((res) => res.info.avgRating >= 4.5);
        setFilteredRestaurant(filteredList);
    }

    const handleSearch = () => {
      const filteredList = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
      setFilteredRestaurant(filteredList);
    }

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      const response = await fetch(FETCH_RESTAURANTS_URL);
      const data = await response.json();
      const restaurants = data?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants;
      setRestaurantList(restaurants);
      setFilteredRestaurant(restaurants);
    }

    if (!isOnline) {
      return (
        <div className="offline-status">
          <h1>You are offline</h1>
          <h2>Please check your internet connection.</h2>
        </div>
      )
    }

    if (restaurantList.length === 0) {
      return <Shimmer />;
    }

  return (
    <div className="body">
      <h2>Welcome to My Kitchen</h2>
      <p>Explore our delicious recipes and cooking tips!</p>
      <input type="search" placeholder="Type restaurant name..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleClick}>Top Rated Resturants</button>
      <div className="restaurant-list">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}><RestaurantCard resData={restaurant?.info} /></Link>
        ))}
      </div>
    </div>
  )
}

export default Body;