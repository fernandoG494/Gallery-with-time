import React from "react";

export const Viewer = ({ src, prevImage, nextImage }) => {
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
