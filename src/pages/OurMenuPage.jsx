// src/pages/OurMenu.jsx
import React from "react";

const OurMenu = () => {
  return (
    <div className="our-menu-container">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-800">Our Menu</h1>
        <p className="text-lg text-gray-600 mt-2">
          Explore our delicious range of burgers, beverages, and sides!
        </p>
      </div>
      <div className="menu-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {/* Placeholder for menu items */}
        <div className="menu-item bg-gray-100 p-4 rounded-lg shadow-lg text-center">
          <img
            src="/assets/menu-placeholder.jpg"
            alt="Menu Item"
            className="w-full h-40 object-cover rounded-lg"
          />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">
            Menu Item Name
          </h2>
          <p className="text-lg text-gray-600 mt-2">$Price</p>
        </div>
        {/* Add more items dynamically */}
      </div>
    </div>
  );
};

export default OurMenu;
