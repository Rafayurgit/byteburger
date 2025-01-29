import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaRegEnvelope } from "react-icons/fa";
import Logo from "../assets/Logo.png";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can handle form submission logic here (e.g., API call)
  };

  return (
    <div className="contact-us-container px-4 py-8">
      {/* Contact Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-lg text-gray-600 mt-2">
          Get in touch with us through any of the following channels!
        </p>
      </div>

      {/* Contact Details Section */}
      <div className="flex flex-col sm:flex-row justify-between gap-8 mb-8">
        <div className="contact-info w-full sm:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800">Follow Us</h2>
          <div className="social-icons mt-4 flex gap-6">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl text-blue-600 hover:text-blue-700 transition" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-3xl text-blue-800 hover:text-blue-900 transition" />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-3xl text-green-500 hover:text-green-600 transition" />
            </a>
          </div>
        </div>

        <div className="delivery-platforms w-full sm:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800">Order On</h2>
          <div className="platform-links mt-4">
            <ul>
              <li>
                <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Zomato
                </a>
              </li>
              <li>
                <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Swiggy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form w-full sm:w-1/2 mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
              rows="4"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
