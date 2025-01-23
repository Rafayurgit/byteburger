const Section = ({ id, title, children }) => (
    <section id={id} className="section">
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
  
  export default Section;
  