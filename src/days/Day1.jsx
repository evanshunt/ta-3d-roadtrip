import { NightLights } from "./NightLights";
import { gsap } from "gsap/dist/gsap";
import ImagePin from "../models/ImagePin";
import InfoBox from "../components/InfoBox";

import React, { useEffect, useRef } from "react";
import { useControls } from "leva";
import { isMobile } from "react-device-detect";

const Day1 = ({
  isNight,
  geometry,
  material,
  positions,
  sceneIndex,
  setIndex,
  visible,
  wisps,
}) => {
  // const pointLightRef = useRef();

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

  // const { lightScale, lightPosX, lightPosY, lightPosZ, lightIntensity } =
  //   useControls("Sunlight", {
  //     lightIntensity: {
  //       value: 0.3,
  //       min: 0,
  //       max: 10,
  //       step: 0.1,
  //     },
  //     lightScale: {
  //       value: 0.2,
  //       min: 0,
  //       max: 1,
  //       step: 0.01,
  //     },
  //     lightPosX: {
  //       value: positions.fairmontBanffSpringsHotel[0],
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //     },
  //     lightPosY: {
  //       value: positions.fairmontBanffSpringsHotel[1],
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //     },
  //     lightPosZ: {
  //       value: positions.fairmontBanffSpringsHotel[2],
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //     },
  //   });

  // const { wispScale, wispPositionX, wispPositionY, wispPositionZ } =
  //   useControls({
  //     wispScale: {
  //       value: 0.2,
  //       min: 0,
  //       max: 1,
  //       step: 0.01,
  //     },
  //     wispPositionX: {
  //       value: positions.fairmontBanffSpringsHotel[0],
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //     },
  //     wispPositionY: {
  //       value: positions.fairmontBanffSpringsHotel[1],
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //     },
  //     wispPositionZ: {
  //       value: positions.fairmontBanffSpringsHotel[2],
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //     },
  //   });

  // const {
  //   pointLight1Intensity,
  //   pointLight2Intensity,
  //   pointLight3Intensity,
  //   pointLight4Intensity,
  // } = useControls({
  //   pointLight1Intensity: {
  //     value: 0.5,
  //     min: 0,
  //     max: 1,
  //     step: 0.01,
  //   },
  //   pointLight2Intensity: {
  //     value: 0.4,
  //     min: 0,
  //     max: 1,
  //     step: 0.01,
  //   },
  //   pointLight3Intensity: {
  //     value: 0.3,
  //     min: 0,
  //     max: 1,
  //     step: 0.01,
  //   },
  //   pointLight4Intensity: {
  //     value: 0.6,
  //     min: 0,
  //     max: 1,
  //     step: 0.01,
  //   },
  // });

  // if (!visible) return null;

  return (
    <>
      {!isMobile && (
        <InfoBox
          imageSrc={"/images/info-boxes/sunshine-village.png"}
          position={[-5.2, 1.2, 2.4]}
          width={1.86}
        />
      )}
      <InfoBox
        imageSrc={"/images/info-boxes/cascade-mountain.png"}
        name="Cascade Mountain"
        position={[-4.3, 1.2, 2.7]}
        width={1.58}
      />
      {!isMobile && (
        <InfoBox
          imageSrc={"/images/info-boxes/lake-minnewanka.png"}
          name="Lake Minnewanka"
          position={[-4.2, 1.15, 3]}
          width={1.8}
        />
      )}

      <ImagePin
        active={sceneIndex === 0}
        geometry={geometry}
        imageSrc={"/images/cave-and-basin-national-historic-site.webp"}
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
        imageSrc={"/images/banff-gondola.webp"}
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
        imageSrc={"/images/sky-bistro.webp"}
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
        imageSrc={"/images/banff-upper-hot-springs.webp"}
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
        imageSrc={"/images/fairmont-banff-springs-hotel.webp"}
        material={material}
        scale={0.2}
        setIndex={setIndex}
        index={5}
        name={"Fairmont Banff Springs Hotel"}
        position={positions.fairmontBanffSpringsHotel}
      />

      <NightLights
        isNight={isNight}
        position={positions.fairmontBanffSpringsHotel}
      />
    </>
  );
};

export default Day1;
