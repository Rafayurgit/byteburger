import React from "react";
import Banner from "../components/Banner";
import FoodRecommender from "../components/FoodRecommender";
import Section from "../components/Section";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    {/* Hero Section */}
    <Banner
      title="Savor the Flavor at Byte Burger!"
      subtitle="Fresh, fast, and delicious - Order Now!"
      imageURL="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format"
    />
    
    {/* Featured Menu */}
    <Section id="featured-menu" title="Featured Menu">
      <FoodRecommender />
      <Link to="/ourMenu" className="call-to-action">View Full Menu</Link>
    </Section>
    
    {/* Special Offers */}
    <Section id="special-offers" title="Today's Special Deals">
      <p>Get the best deals on our signature meals!</p>
      <Link to="/specialoffers" className="call-to-action">Check Offers</Link>
    </Section>
    
    {/* Customer Reviews */}
    <Section id="reviews" title="What Our Customers Say">
      <p>See why our customers love us!</p>
      <Link to="/reviews" className="call-to-action">Read Reviews</Link>
    </Section>
    
    {/* Call to Action */}
    <Section id="order-now" title="Ready to Order?">
      <p>Fast delivery & fresh ingredients at your doorstep.</p>
      <Link to="/order" className="call-to-action">Order Now</Link>
    </Section>
  </div>
);

export default HomePage;
