import React from "react";
import OrderOptions from "../components/OrderOptions";
import Section from "../components/Section";

const platforms = [
  { name: "Zomato", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Zomato_logo.png/600px-Zomato_logo.png", link: "https://www.zomato.com/" },
  { name: "Swiggy", logo: "https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.png", link: "https://www.swiggy.com/" },
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
  </div>
);

export default OrderPage;
