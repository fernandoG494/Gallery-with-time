import React from "react";

export const Viewer = ({ src }) => {
  return (
    <>
      <div className="center">
        <div className="hstack gap-3 text-center">
          <div class="p-2">Button</div>
          <div>
            <img src={src} className="img-fluid img-container" />
          </div>
          <div class="p-2">Button</div>
        </div>
      </div>
    </>
  );
};
