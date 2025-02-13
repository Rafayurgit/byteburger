import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Byte Burger. All rights reserved.</p>
    <p>
      <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
    </p>
  </footer>
);

export default Footer;
