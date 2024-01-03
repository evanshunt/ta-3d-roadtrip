import { Day1InfoBoxes } from "./Day1InfoBoxes";
import { NightImage } from "./NightImage";
import { useTexture } from "@react-three/drei";
import React, { useRef } from "react";
import ImagePin from "../models/final/ImagePin";
import InfoBox from "../components/InfoBox";
import { NightLights } from "./NightLights";

// import banffGondolaImageSrc from "/images/banff-gondola.webp";
// import banffUpperHotSpringsImageSrc from "/images/banff-upper-hot-springs.webp";
// import caveAndBasinImageSrc from "/images/cave-and-basin-national-historic-site.webp";
// import fairmontBanffSpringsHotelImageSrc from "/images/fairmont-banff-springs-hotel.webp";
// import skyBistroImageSrc from "/images/sky-bistro.webp";

const Day = ({
  animateHover,
  animateOut,
  attractionsOpen,
  day,
  destinations,
  geometry,
  handleIndex,
  hoverIndex,
  inBetweens,
  isMobile,
  isNight,
  material,
  setAttractionsOpen,
  setHoverIndex,
  sceneIndex,
  setPinRefs,
}) => {
  const nightLightsRef = useRef();

  const nightLightPositions = [
    [-4.46, 1.09, 2.96],
    [-3.14, 1.15, 0.66],
    [5.4, 1.06, -5.65],
  ];

  const nightImagePositions = [
    {
      position: [-4.46, 1.04, 2.96],
      rotation: [-1.2, 0, 4.5],
    },
    {
      position: [-3.14, 1.1, 0.66],
      rotation: [-1.53, 3.41, 0.88],
    },
    {
      position: [5.31, 0.99, -6.02],
      rotation: [5.4, -0.07, -1.55],
    },
  ];

  return (
    <>
      {!isMobile && day === 1(<Day1InfoBoxes />)}
      {/* {!isMobile && day === 2(<Day2InfoBoxes />)} */}
      {/* {!isMobile && day === 3(<Day3InfoBoxes />)} */}
    </>
  );
};

export default Day;
