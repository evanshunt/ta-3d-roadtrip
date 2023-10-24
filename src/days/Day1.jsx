import React, { useEffect } from "react";
import ImagePin from "../models/ImagePin";
// import { useControls } from "leva";
import InfoBox from "../components/InfoBox";

const Day1 = ({ positions, sceneIndex, setIndex, visible }) => {
  // const { sunshineVillageX, sunshineVillageY, sunshineVillageZ } = useControls({
  //   sunshineVillageX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   sunshineVillageY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   sunshineVillageZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  // });
  console.log({ visible });
  if (!visible) return null;

  return (
    <>
      <InfoBox
        position={[-5.2, 1.2, 2.4]}
        imageSrc={"/images/info-boxes/sunshine-village.png"}
      />
      <InfoBox
        position={[-4.3, 1.2, 2.7]}
        name="Cascade Mountain"
        imageSrc={"/images/info-boxes/cascade-mountain.png"}
      />
      <InfoBox
        position={[-4.2, 1.15, 3]}
        name="Lake Minnewanka"
        imageSrc={"/images/info-boxes/lake-minnewanka.png"}
      />

      <ImagePin
        active={sceneIndex === 0}
        imageSrc={"/images/cave-and-basin-national-historic-site.png"}
        scale={0.2}
        setIndex={setIndex}
        index={1}
        name={"Cave and Basin National Historic Site"}
        position={positions.caveAndBasin}
      />

      <ImagePin
        active={sceneIndex === 1}
        imageSrc={"/images/banff-gondola.png"}
        scale={0.2}
        setIndex={setIndex}
        index={2}
        name={"Banff Gondola"}
        position={positions.gondola}
      />

      <ImagePin
        active={sceneIndex === 2}
        imageSrc={"/images/sky-bistro.png"}
        scale={0.2}
        setIndex={setIndex}
        index={3}
        name={"Sky Bistro"}
        position={positions.skyBistro}
      />

      <ImagePin
        active={sceneIndex === 3}
        imageSrc={"/images/banff-upper-hot-springs.png"}
        scale={0.2}
        setIndex={setIndex}
        index={4}
        name={"Banff Upper Hot Springs"}
        position={positions.banffUpperHotSprings}
      />

      <ImagePin
        active={sceneIndex === 4}
        imageSrc={"/images/fairmont-banff-springs-hotel.png"}
        scale={0.2}
        setIndex={setIndex}
        index={5}
        name={"Fairmont Banff Springs Hotel"}
        position={positions.fairmontBanffSpringsHotel}
      />
    </>
  );
};

export default Day1;
