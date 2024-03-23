import React from "react";
import { Viewer } from "../components/Viewer";
import { Slider } from "../components/Slider";

import flowers from "../assets/0.jpg";
import james from "../assets/1.jpg";
import nature from "../assets/2.jpg";
import tree from "../assets/3.jpg";

const slides = [flowers, james, nature, tree];

export const HomePage = () => {
  return (
    <>
      <Viewer src={flowers} />
      <Slider slides={slides} />
    </>
  );
};
