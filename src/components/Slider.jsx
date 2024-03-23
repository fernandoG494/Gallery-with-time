import React from "react";

export const Slider = ({ slides, selected, autoScroll, setAutoScroll }) => {
  function handleCheckboxChange(event) {
    const isChecked = event.target.checked;
    setAutoScroll(isChecked);
  }

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
      <div className="text-center mt-2">
        <input
          className="form-check-input me-2"
          type="checkbox"
          value={autoScroll}
          id="flexCheckDefault"
          onChange={handleCheckboxChange}
        />
        <label
          className="form-check-label unselectable"
          htmlFor="flexCheckDefault">
          Auto scroll
        </label>
      </div>
    </>
  );
};
