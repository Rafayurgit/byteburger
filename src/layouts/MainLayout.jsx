import React from "react";
import Header from "./Header";
import { menuItems } from "../constant/menuItems";
import Footer from "../components/Footer";

const MainLayout =({children}) =>{
    return(
        <div className="App">
            <Header restaurantName={Byte-Burger} menuItems={menuItems} />
            <Main>{children}</Main>
            <Footer/>
        </div>
    )
}

export default MainLayout;