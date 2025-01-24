import Banner from "./components/Banner";
import FoodRecommender from "./components/FoodRecommender";
import Header from "./components/Header";
import './app.css';
import "./index.css";
import Section from "./components/section";
import Footer from "./components/Footer";

import React from "react";
import {BrowserRouter, Router, Routes, Route} from "react-router-dom";
import ReviewsPage from "./pages/ReviewsPage.jsx";



const menuItems = [
  { name: "Our Menu", link: "#food-recommender", type: "link" },
  { name: "Special Offers", link: "#offers", type: "link" },
  { name: "About", link: "#about", type: "link" },
  { name: "Reviews", link: "#reviews", type: "link" },
  { name: "Order", link: "/order", type: "button" }
];


export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header restaurantName="Byte Burger" menuItems={menuItems} />

      <Routes>
        <Route path="/" element={
          <>
          <Banner
          title="Fast food, made fresh, right to your door"
          subtitle="Explore Our Menu"
          imageURL="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format"
        />
        <Section id="food-recommender" title="Food Recommendations">
          <FoodRecommender />
        </Section>
          </>
        }/>
      <Section id="reviews" title="What Our Customers Say">
        <ReviewsPage/>
      </Section>
      <Route path="/reviews" element={<ReviewsPage/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
    
  );
}
