import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ReviewsPage from "./pages/ReviewsPage";
import OurMenuPage from "./pages/OurMenuPage";
import SpecialOffersPage from "./pages/SpecialOffersPage";
import AboutPage from "./pages/AboutPage";
import './app.css';
import './index.css';

const menuItems = [
  { name: "Our Menu", link: "/ourmenu", type: "link" },
  { name: "Special Offers", link: "/specialoffers", type: "link" },
  { name: "About", link: "/about", type: "link" },
  { name: "Reviews", link: "/reviews", type: "link" },
  { name: "Order", link: "/order", type: "button" }
];

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header restaurantName="Byte Burger" menuItems={menuItems} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/ourmenu" element={<OurMenuPage />} />
          
          <Route path="/specialoffers" element={<SpecialOffersPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
