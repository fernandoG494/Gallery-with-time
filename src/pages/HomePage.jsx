import React, { useState } from "react";
import { Viewer } from "../components/Viewer";
import { Slider } from "../components/Slider";

import flowers from "../assets/0.jpg";
import james from "../assets/1.jpg";
import nature from "../assets/2.jpg";
import tree from "../assets/3.jpg";
import space from "../assets/4.jpg";

const slides = [flowers, james, nature, tree, space];

export const HomePage = () => {
  const [image, setImage] = useState(slides.at(0));

  return (
    <>
      <Viewer src={image} setImage={setImage} slides={slides} />
      <hr />

      <Slider selected={image} slides={slides} />
    </>
  );
};
