import { IMG_CDN_URL } from "./constant";

const DishCard = ({ dishData }) => {
const { name, description, price, imageId } = dishData;

    return (
        <div className="dish-card">
            <div className="dish-details">
                <h3>{name}</h3>
                <p>{description}</p>
                <p>Price: ₹{price / 100}</p>
            </div>
            {imageId && <img className="dish-image" src={`${IMG_CDN_URL + imageId}`} alt={name} />}
        </div>
    )
}

export default DishCard;