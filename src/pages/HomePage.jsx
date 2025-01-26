import React from "react";
import Banner from "../components/Banner";
import FoodRecommender from "../components/FoodRecommender";
import Section from "../components/Section";
import ReviewsPage from "../pages/ReviewsPage";

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

    {/* Reviews Section */}
    <Section id="reviews" title="What Our Customers Say">
      <ReviewsPage />
    </Section>
  </div>
);

export default HomePage;
