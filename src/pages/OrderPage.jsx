import React from "react";
import OrderOptions from "../components/OrderOptions";
import Section from "../components/Section";
import Footer from "../components/Footer"

const platforms = [
  { name: "Zomato", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Zomato_logo.png/600px-Zomato_logo.png", link: "https://link.zomato.com/xqzv/rshare?id=979507972a1b9bf8" },
  { name: "Swiggy", logo: "https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.png", link: "https://www.swiggy.com/menu/890816?source=sharing "},
  { name: "Uber Eats", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Uber_Eats_Logo.svg/1024px-Uber_Eats_Logo.svg.png", link: "https://www.ubereats.com/" },
];

const OrderPage = () => (
  <div className="order-page">
    <h1>Order Your Byte-Burger</h1>
    
    {/* Order via Delivery Platforms */}
    <Section id="order-platforms" title="Order via Platforms">
      <div className="order-options">
        {platforms.map((platform, index) => (
          <OrderOptions key={index} {...platform} />
        ))}
      </div>
    </Section>

    {/* Direct Order Option */}
    <Section id="direct-order" title="Order Directly from Us">
      <p>Want fresh burgers directly from us? Click below!</p>
      <a href="/direct-order" className="call-to-action">Order Now</a>
    </Section>

    <Section>
        <img src="https://images.unsplash.com/photo-1517601278517-456741619dad?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Delicious Burger" 
        className="order-image" 
        />
    </Section>
  </div>
);

export default OrderPage;
