import React from "react";
import ImagePin from "../models/ImagePin";
// import LocationPin from "../models/final/LocationPin";
// import InfoPanel from "../models/final/InfoPanel";
import { useControls } from "leva";

const Day1 = ({ index, positions }) => {
  // const { positionX, positionY, positionZ } = useControls({
  //   positionX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  // });

  return (
    <>
      {/* <LocationPin
        imageSrc={"/images/cave-and-basin-national-historic-site.png"}
        scale={0.075}
        name={"Cave and Basin National Historic Site"}
        position={positions.caveAndBasin}
      /> */}
      {/* <InfoPanel
        // imageSrc={"/images/cave-and-basin-national-historic-site.png"}
        position={positions.gondola}
      /> */}

      <ImagePin
        imageSrc={"/images/cave-and-basin-national-historic-site.png"}
        index={index}
        scale={0.075}
        stop={1}
        name={"Cave and Basin National Historic Site"}
        position={positions.caveAndBasin}
        // position={[positionX, positionY, positionZ]}
        // -4.575
        // 1.2,
        // - 2.875
      />

      <ImagePin
        imageSrc={"/images/banff-gondola.png"}
        index={index}
        scale={0.075}
        stop={2}
        name={"Banff Gondola"}
        position={positions.gondola}
      />

      <ImagePin
        imageSrc={"/images/sky-bistro.png"}
        index={index}
        scale={0.075}
        stop={3}
        name={"Sky Bistro"}
        position={positions.skyBistro}
      />
      <ImagePin
        imageSrc={"/images/banff-upper-hot-springs.png"}
        index={index}
        scale={0.075}
        stop={4}
        name={"Banff Upper Hot Springs"}
        position={positions.banffUpperHotSprings}
      />
      <ImagePin
        imageSrc={"/images/fairmont-banff-springs-hotel.png"}
        index={index}
        scale={0.075}
        stop={5}
        name={"Fairmont Banff Springs Hotel"}
        position={positions.fairmontBanffSpringsHotel}
      />
    </>
  );
};

export default Day1;
