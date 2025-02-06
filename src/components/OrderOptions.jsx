import React from "react";

const OrderOptions = ({ name, logo, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="order-option">
    <img src={logo} alt={name} className="order-logo" />
    <span>Order via {name}</span>
  </a>
);

export default OrderOptions;
