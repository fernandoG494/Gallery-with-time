import React from "react";

export const Slider = ({ slides, selected }) => {
  console.log(slides);

  return (
    <>
      <div className="mt-2 text-center">
        {slides.map((slide) => {
          return (
            <span>
              <img
                src={slide}
                className="img-sizer tmb-container"
                style={{
                  filter: selected === slide ? "blur(0)" : "blur(2px)",
                }}
              />
            </span>
          );
        })}
      </div>
    </>
  );
};
