import React from "react";
import Header from "./Header";
import { menuItems } from "../constant/menuItems";
import Footer from "../components/Footer";


const MainLayout =({children}) =>{
    return(
        <div className="App" style={{minHeight:"100vh", overflowY:"auto" }}>
            <Header restaurantName="Byte-Burger" menuItems={menuItems} />
            {children}
            <Footer/>
        </div>
    )
}

export default MainLayout;