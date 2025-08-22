import React from "react";
import ReactDOM from "react-dom/client";
import { restaurantList } from "./constant";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg" alt="logo" />
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About US</li>
        <li>Contact US</li>
        <li>Cart</li>
      </ul>
    </div>  
  )
}

const RestaurantCard = (props) => {
  const { resData } = props;
  const {name, cloudinaryImageId, cuisines, avgRating, deliveryTime} = resData?.data;

  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="Restaurant" />
      <h2>{name}</h2>
      <p>Cuisines: {cuisines.join(", ")}</p>
      <p>Rating: {avgRating}</p>
      <p>Delivery Time: {deliveryTime} mins</p>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <h2>Welcome to My Kitchen</h2>
      <p>Explore our delicious recipes and cooking tips!</p>
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; {new Date().getFullYear()} My Kitchen. All rights reserved.</p>
      <p>Follow us on social media!</p>
      <ul className="social-icons">
        <li>Instagram</li>
        <li>Youtube</li>
      </ul>
    </div>
  )
}

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


