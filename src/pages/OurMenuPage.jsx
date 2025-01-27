import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import Logo from "../assets/Logo.png";
import miniMenu from "../assets/miniMenu.png";

const menuItems = [
  {
    name: "Mini Burger",
    price: "45₹",
    image: "/assets/classic-cheeseburger.jpg",
  },
  {
    name: "Veggie Delight",
    price: "75₹",
    image: "/assets/spicy-chicken-burger.jpg",
  },
  {
    name: "Spicy Chicken Burger",
    price: "150₹",
    image: "/assets/veggie-delight.jpg",
  },
  {
    name: "Loaded Fries",
    price: "70₹",
    image: "/assets/loaded-fries.jpg",
  },
  {
    name: "Choco Shake",
    price: "79₹",
    image: "/assets/choco-shake.jpg",
  },
  {
    name: "Blue Lagoon Mojito",
    price: "79₹",
    image: "/assets/vanilla-cone.jpg",
  },
];

const OurMenuPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
  }, [selectedImage]);

  return (
    <div className="our-menu-container">
      {/* Menu Title Section */}
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-800">Our Menu</h1>
        <p className="text-lg text-gray-600 mt-2">
          Explore our delicious range of burgers, beverages, and sides!
        </p>
      </div>

      {/* Dynamic Menu Grid */}
      <div className="menu-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="menu-item bg-gray-100 p-4 rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-4">
              {item.name}
            </h2>
            <p className="text-lg text-gray-600 mt-2">{item.price}</p>
          </div>
        ))}
      </div>

      {/* Pamphlet Section */}
      <div className="menu-pamphlet my-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          View Our Full Menu
        </h2>
        <div className="pamphlet-images flex flex-wrap justify-center gap-6">
          <img
            src={miniMenu}
            alt="Menu Pamphlet 1"
            onClick={() => {
              console.log("Selected Image:", miniMenu);
              setSelectedImage(miniMenu);
            }}
            className="w-full sm:w-1/2 md:w-1/3 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
          />

          <img
            src={Logo}
            alt="Menu Pamphlet 1"
            onClick={() => {
              console.log("Selected Image:", Logo);
              setSelectedImage(Logo);
            }}
            className="w-full sm:w-1/2 md:w-1/3 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
          />

        </div>
        <p className="text-center text-gray-600 mt-4">
          Click the menu pamphlet to enlarge and explore in detail!
        </p>
      </div>

      {/* Modal for Fullscreen View */}
      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
        <div className="flex items-center justify-center h-full">
          <img
            src={selectedImage}
            alt="Menu Pamphlet"
            className="max-h-[90vh] w-auto rounded-lg"
          />
        </div>
      </Modal>

    </div>
  );
};

export default OurMenuPage;
