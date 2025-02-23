import React, { useEffect } from "react";

const Banner = ({ title, subtitle, imageURL }) => {
  useEffect(() => {
    const handleScroll = () => {
      const banner = document.querySelector(".banner");
      if (banner && !banner.classList.contains("animate")) {
        if (window.scrollY > 200) { // Adjust trigger position
          banner.classList.add("animate");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="banner">
      <div className="content">
        <h1>{title}</h1>
        <span className="call-to-action">
          {subtitle} <i className="fas fa-long-arrow-alt-right"></i>
        </span>
      </div>
      <img src={imageURL} alt="Banner Image" />
    </section>
  );
};

export default Banner;
