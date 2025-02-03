import React from "react";
import { NavLink } from "react-router-dom";
import {menuItems} from "../constant/menuItems.js"

const Header = ({ restaurantName, menuItems }) => (
  <header>
    <div className="logo">
      <NavLink to="/">
      {restaurantName}
      </NavLink>
    </div>
    {/* <img src="path-to-logo" alt="Byte Burger Logo" />  add logog image in future */}

    <nav>
      <div className="menu">
        {menuItems?.map((menuItem, index)=>(
          <p key={index}>
            <NavLink 
            to={menuItem.link} 
            className={({isActive})=>
              `menu-item ${menuItem.type === "button" ? "order-button" : ""} ${isActive  ? "active-link" : ""} `}>
            {menuItem.name}
            </NavLink>
          </p>
        ))}
      </div>
    </nav>
  </header>
);

export default Header;
