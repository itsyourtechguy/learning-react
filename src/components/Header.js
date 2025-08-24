import { LOGO } from "./../utils/constant";

const Header = () => {
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
      </ul>
    </div>  
  )
}

export default Header;