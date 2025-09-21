import { useState, useEffect } from "react";
import { Restaurant_Menu_API } from "./constant";

const useRestaurantInfo = (restaurantID) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchRestaurantInfo();
  }, []);

  const fetchRestaurantInfo = async () => {
    const response = await fetch(Restaurant_Menu_API + restaurantID);
    const data = await response.json();
    setRestaurantInfo(data);
  };

    return restaurantInfo;
};

export default useRestaurantInfo;
