import React from "react";
import Banner from "../components/Banner";
import FoodRecommender from "../components/FoodRecommender";
import Section from "../components/Section";
import { Link } from "react-router-dom"; // Link instead of direct ReviewsPage

const HomePage = () => (
  <div>
    {/* Banner Section */}
    <Banner
      title="Fast food, made fresh, right to your door"
      subtitle="Explore Our Menu"
      imageURL="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format"
    />
    
    {/* Food Recommendations Section */}
    <Section id="food-recommender" title="Food Recommendations">
      <FoodRecommender />
    </Section>

    {/* Reviews Section - Use Link Instead */}
    <Section id="reviews" title="What Our Customers Say">
      <p>Check out what our customers say about us!</p>
      <Link to="/reviews" className="call-to-action">Read Reviews</Link>
    </Section>
  </div>
);

export default HomePage;
