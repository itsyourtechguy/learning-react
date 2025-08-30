import { IMG_CDN_URL } from "./constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {name, cloudinaryImageId, cuisines, avgRating, sla} = resData;

  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt="Restaurant" />
      <h2>{name}</h2>
      <p>Cuisines: {cuisines.join(", ")}</p>
      <p>Rating: {avgRating}</p>
      <p>Delivery Time: {sla.deliveryTime} mins</p>
    </div>
  )
}

export default RestaurantCard;