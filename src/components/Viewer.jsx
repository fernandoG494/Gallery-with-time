import React from "react";

export const Viewer = ({ src, setImage, slides }) => {
  const nextImage = () => {
    const currentIndex = slides.indexOf(src);
    const nextIndex = (currentIndex + 1) % slides.length;
    setImage(slides[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = slides.indexOf(src);
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    setImage(slides[prevIndex]);
  };

  return (
    <>
      <div className="center container">
        <div className="hstack gap-3 text-center">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={prevImage}>
            {"<"}
          </button>
          <div>
            <img src={src} className="img-fluid img-container" />
          </div>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={nextImage}>
            {">"}
          </button>
        </div>
      </div>
    </>
  );
};
