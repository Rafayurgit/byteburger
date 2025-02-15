import React from "react";

const Section = ({ className, id, title, children }) => {
  return (
    <section className={`my-4 p-4 ${className}`} id={id}>
      <h2 className="text-2xl font-bold">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
