import { useState } from "react";
import { LOGO } from "./../utils/constant";

const Header = () => {
const [authBtn, setAuthBtn] = useState("Login");

const handleAuth = () => {
  authBtn === "Login" ? setAuthBtn("Logout") : setAuthBtn("Login");
}

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO} alt="logo" />
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About US</li>
        <li>Contact US</li>
        <li>Cart</li>
        <li><button className="auth-btn" onClick={handleAuth}>{authBtn}</button></li>
      </ul>
    </div>  
  )
}

export default Header;