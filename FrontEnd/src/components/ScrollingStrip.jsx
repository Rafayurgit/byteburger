const ScrollingStrip = ({ slides }) => {
  return (
    <div className="scroll-strip-container">
      <div className="scroll-strip">
        {slides
          .concat(slides)
          .map((slide, i) =>
            slide.imageURL ? (
              <img
                key={i}
                src={slide.imageURL}
                alt="Food Item"
                className="scroll-image"
              />
            ) : null
          )}
      </div>
    </div>
  );
};

export default ScrollingStrip;
