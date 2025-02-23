import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center text-center py-16 ">
      <h2 className="text-4xl font-bold text-white mb-6 text-shadow-lg">About Byte-Burger</h2>
      
      <div className=" shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
      <img 
  src="/src/assets/hitesh.jpg" 
  alt="Founder" 
  className="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-orange-500 shadow-lg 
             hover:scale-105 transition-transform duration-300"
/>

        <h3 className="text-2xl font-semibold text-gray-700">Hitesh aka Hittu</h3>
        <p className="text-gray-500 text-lg text-shadow-md">Founder & CEO</p>
        
        <p className="text-white mt-4 leading-relaxed text-shadow-lg">
          Hitesh is a passionate software engineer who turned his love for tech and fast food into Byte-Burger. 
          What started as a side hustle is now a go-to spot for delicious, affordable, and fast-served burgers.
        </p>
        
        <div className="mt-6">
          <p className="text-gray-700 font-medium">📍 Based in: Hinjewadi Phase 3</p>
          <p className="text-gray-700 font-medium">📧 Contact: contact@byteburger.com</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
