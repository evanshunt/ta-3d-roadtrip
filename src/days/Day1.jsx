import React from "react";
import ImagePin from "../models/ImagePin";
import LocationPin from "../models/final/LocationPin";

const Day1 = ({ positions }) => {
  return (
    <>
      <LocationPin
        imageSrc={"/images/cave-and-basin-national-historic-site.png"}
        scale={0.2}
        name={"Cave and Basin National Historic Site"}
        position={positions.caveAndBasin}
      />
      {/* <ImagePin
        imageSrc={"/images/cave-and-basin-national-historic-site.png"}
        scale={0.2}
        name={"Cave and Basin National Historic Site"}
        position={positions.caveAndBasin}
      />
      <ImagePin
        imageSrc={"/images/banff-gondola.png"}
        scale={0.2}
        name={"Banff Gondola"}
        position={positions.gondola}
      />
      <ImagePin
        imageSrc={"/images/sky-bistro.png"}
        scale={0.2}
        name={"Sky Bistro"}
        position={positions.gondola}
      />
      <ImagePin
        imageSrc={"/images/banff-upper-hot-springs.png"}
        scale={0.2}
        name={"Banff Upper Hot Springs"}
        position={positions.banffUpperHotSprings}
      />
      <ImagePin
        imageSrc={"/images/fairmont-banff-springs-hotel.png"}
        scale={0.2}
        name={"Fairmont Banff Springs Hotel"}
        position={positions.fairmontBanffSpringsHotel}
      /> */}
    </>
  );
};

export default Day1;
