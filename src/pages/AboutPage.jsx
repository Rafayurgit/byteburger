import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center text-center py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">About Byte-Burger</h2>
      
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
        <img 
          src="https://source.unsplash.com/300x300/?businessman,entrepreneur" 
          alt="Founder" 
          className="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-orange-500"
        />
        <h3 className="text-2xl font-semibold text-gray-700">John Doe</h3>
        <p className="text-gray-500 text-lg">Founder & CEO</p>
        
        <p className="text-gray-600 mt-4 leading-relaxed">
          John is a passionate software engineer who turned his love for tech and fast food into Byte-Burger. 
          What started as a side hustle is now a go-to spot for delicious, affordable, and fast-served burgers.
        </p>
        
        <div className="mt-6">
          <p className="text-gray-700 font-medium">📍 Based in: New York, USA</p>
          <p className="text-gray-700 font-medium">📧 Contact: hello@byteburger.com</p>
        </div>
      </div>
    </div>
  );
};

export default About;
