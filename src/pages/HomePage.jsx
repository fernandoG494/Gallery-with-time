import React, { useState } from "react";
import { Viewer } from "../components/Viewer";
import { Slider } from "../components/Slider";
import { TimeLine } from "../components/TimeSlider";

import flowers from "../assets/0.jpg";
import james from "../assets/1.jpg";
import nature from "../assets/2.jpg";
import tree from "../assets/3.jpg";
import space from "../assets/4.jpg";

const slides = [flowers, james, nature, tree, space];

export const HomePage = () => {
  const [image, setImage] = useState(slides.at(0));
  const [autoScroll, setAutoScroll] = useState(false);

  const nextImage = () => {
    const currentIndex = slides.indexOf(image);
    const nextIndex = (currentIndex + 1) % slides.length;
    setImage(slides[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = slides.indexOf(image);
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    setImage(slides[prevIndex]);
  };

  return (
    <>
      <Viewer
        src={image}
        setImage={setImage}
        slides={slides}
        nextImage={nextImage}
        prevImage={prevImage}
      />
      <hr />
      <Slider
        selected={image}
        slides={slides}
        autoScroll={autoScroll}
        setAutoScroll={setAutoScroll}
      />

      {autoScroll ? <TimeLine nextImage={nextImage} /> : ""}
    </>
  );
};
