import React, { useEffect } from "react";
import ImagePin from "../models/ImagePin";
// import { useControls } from "leva";
import InfoBox from "../components/InfoBox";

const Day1 = ({
  geometry,
  material,
  positions,
  sceneIndex,
  setIndex,
  visible,
}) => {
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

  if (!visible) return null;

  return (
    <>
      <InfoBox
        imageSrc={"/images/info-boxes/sunshine-village.png"}
        position={[-5.2, 1.2, 2.4]}
        width={1.86}
      />
      <InfoBox
        imageSrc={"/images/info-boxes/cascade-mountain.png"}
        name="Cascade Mountain"
        position={[-4.3, 1.2, 2.7]}
        width={1.58}
      />
      <InfoBox
        imageSrc={"/images/info-boxes/lake-minnewanka.png"}
        name="Lake Minnewanka"
        position={[-4.2, 1.15, 3]}
        width={1.8}
      />

      <ImagePin
        active={sceneIndex === 0}
        geometry={geometry}
        imageSrc={"/images/cave-and-basin-national-historic-site.png"}
        material={material}
        scale={0.2}
        setIndex={setIndex}
        index={1}
        name={"Cave and Basin National Historic Site"}
        position={positions.caveAndBasin}
      />

      <ImagePin
        active={sceneIndex === 1}
        geometry={geometry}
        imageSrc={"/images/banff-gondola.png"}
        material={material}
        scale={0.2}
        setIndex={setIndex}
        index={2}
        name={"Banff Gondola"}
        position={positions.gondola}
      />

      <ImagePin
        active={sceneIndex === 2}
        geometry={geometry}
        imageSrc={"/images/sky-bistro.png"}
        material={material}
        scale={0.2}
        setIndex={setIndex}
        index={3}
        name={"Sky Bistro"}
        position={positions.skyBistro}
      />

      <ImagePin
        active={sceneIndex === 3}
        geometry={geometry}
        imageSrc={"/images/banff-upper-hot-springs.png"}
        material={material}
        scale={0.2}
        setIndex={setIndex}
        index={4}
        name={"Banff Upper Hot Springs"}
        position={positions.banffUpperHotSprings}
      />

      <ImagePin
        active={sceneIndex === 4}
        geometry={geometry}
        imageSrc={"/images/fairmont-banff-springs-hotel.png"}
        material={material}
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
