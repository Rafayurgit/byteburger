import React from "react";
import Header from "./Header";
import { menuItems } from "../constant/menuItems";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import HomePage from "../pages/HomePage";

const MainLayout =({children}) =>{
    return(
        <div className="App">
            <Header restaurantName="Byte-Burger" menuItems={menuItems} />
            {children}
            <Footer/>
        </div>
    )
}

export default MainLayout;