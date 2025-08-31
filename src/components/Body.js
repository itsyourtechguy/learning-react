import { useState, useEffect, use } from "react";
import RestaurantCard from "../utils/RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

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

    const API = "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7169967&lng=75.86830739999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const fetchData = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setRestaurantList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant?.info} />
        ))}
      </div>
    </div>
  )
}

export default Body;