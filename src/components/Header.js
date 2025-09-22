import { useState } from "react";
import { LOGO } from "./../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Header = () => {
const [authBtn, setAuthBtn] = useState("Login");
const isOnline = useOnlineStatus();

const handleAuth = () => {
  authBtn === "Login" ? setAuthBtn("Logout") : setAuthBtn("Login");
}

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO} alt="logo" />
      </div>
      <ul className="nav-links">
        <li className={isOnline ? "online" : "offline"}>Online Status: {isOnline ? "🟢" : "🔴"}</li>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About US</li></Link>
        <Link to="/contact"><li>Contact US</li></Link>
        <li>Cart</li>
        <li><button className="auth-btn" onClick={handleAuth}>{authBtn}</button></li>
      </ul>
    </div>  
  )
}

export default Header;