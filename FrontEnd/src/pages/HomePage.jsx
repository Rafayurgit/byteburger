import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FoodRecommender from "../components/FoodRecommender";
import Section from "../components/Section";
import { motion, AnimatePresence } from "framer-motion";
import ScrollingStrip from "../components/ScrollingStrip";

const slides = [
  {
    title: "Savor the Flavor at Byte Burger!",
    subtitle: "Fresh, fast, and delicious - Order Now!",
    imageURL:
      "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format",
    link: "/order",
    buttonText: "Order Now",
  },
  {
    title: "Exclusive Offers Just for You!",
    subtitle: "Don't miss our limited-time special deals!",
    imageURL:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJ1cmdlcnxlbnwwfHx8fDE2ODc1NDAyNzA&ixlib=rb-1.2.1&q=80&w=1080",
    link: "/specialoffers",
    buttonText: "Check Offers",
  },
  {
    title: "Craving a Feast? Try Our Signature Burgers!",
    subtitle: "Juicy, flavorful, and made with love ❤️",
    imageURL:
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEzfHxidXJnZXJ8ZW58MHx8fHwxNjg3NTQwMjcw&ixlib=rb-1.2.1&q=80&w=1080",
    link: "/ourMenu",
    buttonText: "View Menu",
  },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Auto slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-between">
      {/* Sliding Hero Section */}
      <div className="relative w-full h-[70vh] overflow-hidden mt-3 ">
        <AnimatePresence>
          {slides.map((slide, index) =>
            index === currentSlide ? (
              <motion.div
                key={index}
                initial={{ opacity: 0, clipPath: "circle(0% at 50% 50%)" }}
                animate={{ opacity: 1, clipPath: "circle(100% at 50% 50%)" }}
                exit={{ opacity: 0, clipPath: "circle(0% at 50% 50%)" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute w-full h-full flex flex-col justify-center items-center text-center bg-cover bg-center p-6 z-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.imageURL})`,
                }}
              >
                <div className="bg-black bg-opacity-60 p-6 rounded-lg max-w-md">
                  <h1 className="text-white text-4xl font-bold leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-white text-lg mt-3">{slide.subtitle}</p>
                  <Link
                    to={slide.link}
                    className="mt-5 inline-block bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg shadow-lg transition font-semibold"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Motion Scrolling Strip - Full Width & Continuous Loop */}
      <div className="scroll-strip-container mt-3">
        <div className="scroll-strip">
          {[...slides, ...slides].map(
            (
              slide,
              i // Duplicating dynamically
            ) => (
              <img
                key={i}
                src={slide.imageURL}
                alt="Food Item"
                className="w-[200px] h-[150px] object-cover"
              />
            )
          )}
        </div>
      </div>

      {/* Featured Menu */}
      {/* <Section id="featured-menu" title="Featured Menu">
        <FoodRecommender />
        <Link to="/ourMenu" className="call-to-action mt-4">View Full Menu</Link>
        <img className=""
        src="https://images.unsplash.com/photo-1594179047519-f347310d3322?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8fDA%3D" alt="" />
      </Section> */}

      {/* Special Offers */}
      <Section
        className="p-3 mt-3 "
        id="special-offers"
        title="Today's Special Deals"
      >
        <p className="text-lg">Get the best deals on our signature meals!</p>
        <Link to="/specialoffers" className="call-to-action mt-4">
          Check Offers
        </Link>
        <img
          src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhZmUlMjBpbm9ncmF0aW9ufGVufDB8fDB8fHww"
          alt=""
        />
      </Section>

      {/* Customer Reviews */}
      <Section id="reviews" title="What Our Customers Say">
        <p className="text-lg">See why our customers love us!</p>
        <Link to="/reviews" className="call-to-action mt-4">
          Read Reviews
        </Link>
        <img
          src="https://plus.unsplash.com/premium_photo-1682309650634-363db7521e6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3VzdG9tZXIlMjByZXZpZXdzfGVufDB8fDB8fHww"
          alt=""
        />
      </Section>

      {/* Call to Action */}
      <Section id="order-now" title="Ready to Order?">
        <p className="text-lg">
          Fast delivery & fresh ingredients at your doorstep.
        </p>
        <Link to="/order" className="call-to-action mt-4">
          Order Now
        </Link>
        <img
          src="https://plus.unsplash.com/premium_photo-1683141096869-b21fb229dd02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVldWV8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </Section>
    </div>
  );
};

export default HomePage;
