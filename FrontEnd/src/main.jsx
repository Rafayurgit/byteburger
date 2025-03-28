import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import OurMenuPage from "./pages/OurMenuPage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutPage from "./pages/AboutPage";
import SpecialOffersPage from "./pages/SpecialOffersPage";
import ReviewsPage from "./pages/ReviewsPage";
import OrderPage from "./pages/OrderPage";
import MainLayout from "./layouts/MainLayout";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route path="" element={<HomePage/>}/>
      <Route path="ourMenu" element={<OurMenuPage/>}/>
      <Route path="contact" element={<ContactUsPage/>}/>
      <Route path="about" element={<AboutPage/>}/>
      <Route path="specialOffers" element={<SpecialOffersPage/>}/>
      <Route path="reviews" element={<ReviewsPage/>}/>
      <Route path="order" element={<OrderPage/>}/>

    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById("root")); // Access the root div
root.render(
  <StrictMode>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <RouterProvider router={router}/>



  </StrictMode>
  
);
