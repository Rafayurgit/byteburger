import React from "react";

const Banner = ({ title, subtitle, imageURL }) => (
    <section className="banner">
      <div className="content">
        <h1>{title}</h1>
        <span className="call-to-action">
          {subtitle} <i className="fas fa-long-arrow-alt-right"></i>
        </span>
      </div>
      <img src={imageURL} />
    </section>
  );
  
  export default Banner;
  