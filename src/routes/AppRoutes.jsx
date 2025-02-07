import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import OurMenuPage from '../pages/OurMenuPage';
import SpecialOffersPage from '../pages/SpecialOffersPage';
import AboutPage from '../pages/AboutPage';
import ReviewsPage from '../pages/ReviewsPage';
import ContactUsPage from '../pages/ContactUsPage';
import OrderPage from '../pages/OrderPage';


const AppRoutes =() =>(
    <Routes >

        <Route path='/' element={<HomePage/>} />
        <Route path='/ourMenu' element={<OurMenuPage/>}/>
        <Route path='/specialOffers' element={<SpecialOffersPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path="/reviews" element={<ReviewsPage/>} />
        <Route path='/contact' element={<ContactUsPage/>} />
        <Route path='/order' element={<OrderPage/>}/>

    </Routes> 
);

export default AppRoutes;
