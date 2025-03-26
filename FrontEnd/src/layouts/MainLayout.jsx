import React from "react";
import Header from "./Header";
import { menuItems } from "../constant/menuItems";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";


const MainLayout =() =>{
    return(
        <div className="App" style={{minHeight:"100vh", overflowY:"auto" }}>
            <Header restaurantName="Byte-Burger" menuItems={menuItems} />
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default MainLayout;