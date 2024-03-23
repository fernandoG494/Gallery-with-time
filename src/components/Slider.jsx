import React from "react";

export const Slider = ({ slides }) => {
  console.log(slides);

  return (
    <>
      <div className="mt-5 text-center">
        {slides.map((slide) => {
          return (
            <span>
              <img src={slide} className="img-sizer tmb-container" />
            </span>
          );
        })}
      </div>
    </>
  );
};
