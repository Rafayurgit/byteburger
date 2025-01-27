import React from "react";
import { Link } from "react-router-dom";

const Header = ({ restaurantName, menuItems }) => (
  <header>
    <div className="logo">
      <Link to="/">
      {restaurantName}
      </Link>
    </div>
    {/* <img src="path-to-logo" alt="Byte Burger Logo" />  add logog image in future */}

    <nav>
      <div className="menu">
        {menuItems?.map((menuItem, index)=>(
          <p key={index}>
            <Link to={menuItem.link} className={`menu-item ${menuItem.type === "button" ? "order-button" : ""}`}>
            {menuItem.name}
            </Link>
          </p>
        ))}
      </div>
    </nav>
  </header>
);

export default Header;
