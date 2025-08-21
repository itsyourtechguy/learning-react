import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <img src="null" alt="logo" />
      <input type="search" />
      <img src="null" alt="icon" />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);


