import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaRegEnvelope } from "react-icons/fa";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const contacts = [
    { name: "Instagram", icon: <FaInstagram />, link: "https://instagram.com" },
    { name: "Facebook", icon: <FaFacebookF />, link: "https://facebook.com" },
    { name: "WhatsApp", icon: <FaWhatsapp />, link: "https://wa.me/your-number" },
    { name: "Email", icon: <FaRegEnvelope />, link: "mailto:your@email.com" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 sm:p-12">
      {/* Contact Section */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Stay connected with us on social media!
      </p>

      {/* Social Media Links */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-2xl">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <div className="text-orange-500 text-4xl">{contact.icon}</div>
            <p className="text-gray-800 font-semibold mt-2">{contact.name}</p>
          </a>
        ))}
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-lg mt-10 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send us a message</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
