import { IMG_CDN_URL } from "./constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {name, cloudinaryImageId, cuisines, avgRating, deliveryTime} = resData?.data;

  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt="Restaurant" />
      <h2>{name}</h2>
      <p>Cuisines: {cuisines.join(", ")}</p>
      <p>Rating: {avgRating}</p>
      <p>Delivery Time: {deliveryTime} mins</p>
    </div>
  )
}

export default RestaurantCard;