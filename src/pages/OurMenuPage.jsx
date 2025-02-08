import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import Logo from "../assets/Logo.png";
import miniMenu from "../assets/miniMenu.png";

const menuItems = [
  {
    name: "Mini Burger",
    price: "45₹",
    image: "https://plus.unsplash.com/premium_photo-1664206963904-c0f463621be5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWluaSUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
  
  },
  {
    name: "Veggie Delight",
    price: "75₹",
    image: "https://plus.unsplash.com/premium_photo-1683619761492-639240d29bb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VmVnZ2llJTIwRGVsaWdodCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Spicy Chicken Burger",
    price: "150₹",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3BpY3klMjBDaGlja2VuJTIwQnVyZ2VyfGVufDB8fDB8fHww",
  },
  {
    name: "Loaded Fries",
    price: "70₹",
    image: "https://images.unsplash.com/photo-1598679253544-2c97992403ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TG9hZGVkJTIwZnJlbmNoJTIwRnJpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Cold coffe",
    price: "79₹",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY2xhdGUlMjBzaGFrZSUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Blue Lagoon Mojito",
    price: "79₹",
    image: "https://plus.unsplash.com/premium_photo-1671014947847-ba033c6b9e19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qmx1ZSUyMExhZ29vbiUyME1vaml0byUyMGRyaW5rfGVufDB8fDB8fHww",
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
{/* Dynamic Menu Grid */}
<div className="menu-grid flex flex-wrap justify-center gap-8 px-4">
  {menuItems.map((item, index) => (
    <div
      key={index}
      className="menu-item flex items-center bg-gray-100 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
    >
      {/* Image Section */}
      <img
        src={item.image}
        alt={item.name}
        className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
      />

      {/* Text Section */}
      <div className="ml-4">
        <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
        <p className="text-lg text-gray-600 mt-2">{item.price}</p>
        <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 hover:cursor-pointer transition">
          Order Now
        </button>
      </div>
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

          <a href="https://rafayurgit.github.io/byteBurgerMenu/" target="_blank" rel="noopener noreferrer">
            <img
              src={Logo}
              alt="Menu Pamphlet 1"
              onClick={() => {
                console.log("Selected Image:", Logo);
                setSelectedImage(Logo);
              }}
              className="w-full sm:w-1/2 md:w-1/3 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
            />
          </a>


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
