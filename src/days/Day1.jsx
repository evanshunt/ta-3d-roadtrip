import React from "react";
import ImagePin from "../models/ImagePin";
import { useControls } from "leva";

const Day1 = ({ positions }) => {
  const { positionX, positionY, positionZ } = useControls({
    positionX: {
      value: positions.caveAndBasin[0],
      // value: 0,
      min: -8,
      max: 5,
      step: 0.025,
    },
    positionY: {
      value: positions.caveAndBasin[1],
      // value: 1.2,
      min: 0,
      max: 5,
      step: 0.025,
    },
    positionZ: {
      value: positions.caveAndBasin[2],
      // value: 0,
      min: -5,
      max: 5,
      step: 0.025,
    },
  });

  return (
    <>
      <ImagePin
        imageSrc={"/images/cave-and-basin-national-historic-site-cropped.png"}
        scale={0.2}
        name={"Cave and Basin National Historic Site"}
        position={positions.caveAndBasin}
      />
      <ImagePin
        imageSrc={"/images/banff-gondola-cropped.png"}
        scale={0.2}
        name={"Banff Gondola"}
        position={positions.gondola}
      />
      <ImagePin
        imageSrc={"/images/banff-gondola-cropped.png"}
        scale={0.2}
        name={"Sky Bistro"}
        position={positions.gondola}
      />
      <ImagePin
        imageSrc={"/images/banff-upper-hot-springs-cropped.png"}
        scale={0.2}
        name={"Banff Upper Hot Springs"}
        position={positions.banffUpperHotSprings}
      />
      <ImagePin
        imageSrc={"/images/banff-upper-hot-springs-cropped.png"}
        scale={0.2}
        name={"Fairmont Banff Springs Hotel"}
        position={positions.fairmontBanffSpringsHotel}
      />
    </>
  );
};

export default Day1;
