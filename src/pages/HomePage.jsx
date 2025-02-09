import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FoodRecommender from "../components/FoodRecommender";
import Section from "../components/Section";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Savor the Flavor at Byte Burger!",
    subtitle: "Fresh, fast, and delicious - Order Now!",
    imageURL: "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format",
    link: "/order",
    buttonText: "Order Now",
  },
  {
    title: "Exclusive Offers Just for You!",
    subtitle: "Don't miss our limited-time special deals!",
    imageURL: "https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJ1cmdlcnxlbnwwfHx8fDE2ODc1NDAyNzA&ixlib=rb-1.2.1&q=80&w=1080",
    link: "/specialoffers",
    buttonText: "Check Offers",
  },
  {
    title: "Craving a Feast? Try Our Signature Burgers!",
    subtitle: "Juicy, flavorful, and made with love ❤️",
    imageURL: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEzfHxidXJnZXJ8ZW58MHx8fHwxNjg3NTQwMjcw&ixlib=rb-1.2.1&q=80&w=1080",
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
    <div>
      {/* Sliding Hero Section */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <AnimatePresence>
          {slides.map((slide, index) =>
            index === currentSlide ? (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className="absolute w-full h-full flex flex-col justify-center items-center text-center bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.imageURL})` }}
              >
                <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                  <h1 className="text-white text-4xl font-bold">{slide.title}</h1>
                  <p className="text-white text-lg mt-2">{slide.subtitle}</p>
                  <Link to={slide.link} className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg shadow-lg transition">
                    {slide.buttonText}
                  </Link>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Featured Menu */}
      <Section id="featured-menu" title="Featured Menu">
        <FoodRecommender />
        <Link to="/ourMenu" className="call-to-action">View Full Menu</Link>
      </Section>

      {/* Special Offers */}
      <Section id="special-offers" title="Today's Special Deals">
        <p>Get the best deals on our signature meals!</p>
        <Link to="/specialoffers" className="call-to-action">Check Offers</Link>
      </Section>

      {/* Customer Reviews */}
      <Section id="reviews" title="What Our Customers Say">
        <p>See why our customers love us!</p>
        <Link to="/reviews" className="call-to-action">Read Reviews</Link>
      </Section>

      {/* Call to Action */}
      <Section id="order-now" title="Ready to Order?">
        <p>Fast delivery & fresh ingredients at your doorstep.</p>
        <Link to="/order" className="call-to-action">Order Now</Link>
      </Section>
    </div>
  );
};

export default HomePage;
