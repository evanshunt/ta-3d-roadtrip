import { NightLights } from "./NightLights";
import { gsap } from "gsap/dist/gsap";
import ImagePin from "../models/ImagePin";
import InfoBox from "../components/InfoBox";
import { useTexture } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
// import { useControls } from "leva";
import { isMobile } from "react-device-detect";
// import { EffectComposer, Bloom } from "@react-three/postprocessing";

import caveAndBasinImageSrc from "/images/cave-and-basin-national-historic-site.webp";
import banffGondolaImageSrc from "/images/banff-gondola.webp";
import skyBistroImageSrc from "/images/sky-bistro.webp";
import banffUpperHotSpringsImageSrc from "/images/banff-upper-hot-springs.webp";
import fairmontBanffSpringsHotelImageSrc from "/images/fairmont-banff-springs-hotel.webp";

const Day1 = ({
  animateHover,
  animateOut,
  isNight,
  geometry,
  material,
  positions,
  sceneIndex,
  setIndex,
}) => {
  const nightTexture = useTexture("./textures/final/Banff_Lights.webp");
  const nightLightsRef = useRef();
  const tl = gsap.timeline({});
  // const pointLightRef = useRef();

  // const { posX, posY, posZ, rotationX, rotationY, rotationZ, sizeX, sizeY } =
  //   useControls("Night", {
  //     posX: {
  //       value: -4.6,
  //       min: -6,
  //       max: -4,
  //       step: 0.01,
  //     },
  //     posY: {
  //       value: 1.05,
  //       min: -1,
  //       max: 2,
  //       step: 0.01,
  //     },
  //     posZ: {
  //       value: 2.93,
  //       min: 2,
  //       max: 4,
  //       step: 0.01,
  //     },
  //     rotationX: {
  //       value: -1.6,
  //       min: -Math.PI * 2,
  //       max: Math.PI * 2,
  //       step: 0.1,
  //     },
  //     rotationY: {
  //       value: 0,
  //       min: -Math.PI * 2,
  //       max: Math.PI * 2,
  //       step: 0.1,
  //     },
  //     rotationZ: {
  //       value: -2.8,
  //       min: -Math.PI,
  //       max: Math.PI,
  //       step: 0.1,
  //     },
  //     sizeX: {
  //       value: 0.15,
  //       min: 0,
  //       max: 1,
  //       step: 0.01,
  //     },
  //     sizeY: {
  //       value: 0.15,
  //       min: 0,
  //       max: 1,
  //       step: 0.01,
  //     },
  //   });
  const animateLights = (direction) => {
    switch (direction) {
      case "in":
        tl.to(
          nightLightsRef.current.material,
          {
            opacity: 1,
            duration: 1,
          },
          "<"
        );

        break;
      case "out":
        tl.to(
          nightLightsRef.current.material,
          {
            opacity: 0,
            duration: 1,
          },
          "<"
        );

        break;
    }
  };

  useEffect(() => {
    if (isNight) {
      animateLights("in");
    } else {
      animateLights("out");
    }
  }, [isNight]);

  return (
    <>
      {!isMobile && (
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
        </>
      )}

      <ImagePin
        active={sceneIndex === 0}
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={caveAndBasinImageSrc}
        material={material}
        scale={0.2}
        setIndex={setIndex}
        index={1}
        name={"Cave and Basin National Historic Site"}
        position={positions.caveAndBasin}
      />

      <ImagePin
        active={sceneIndex === 1}
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={banffGondolaImageSrc}
        material={material}
        scale={0.2}
        setIndex={setIndex}
        index={2}
        name={"Banff Gondola"}
        position={positions.gondola}
      />

      <ImagePin
        active={sceneIndex === 2}
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={skyBistroImageSrc}
        material={material}
        scale={0.2}
        setIndex={setIndex}
        index={3}
        name={"Sky Bistro"}
        position={positions.skyBistro}
      />

      <ImagePin
        active={sceneIndex === 3}
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={banffUpperHotSpringsImageSrc}
        material={material}
        scale={0.2}
        setIndex={setIndex}
        index={4}
        name={"Banff Upper Hot Springs"}
        position={positions.banffUpperHotSprings}
      />

      <ImagePin
        active={sceneIndex === 4}
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={fairmontBanffSpringsHotelImageSrc}
        material={material}
        scale={0.2}
        setIndex={setIndex}
        index={5}
        name={"Fairmont Banff Springs Hotel"}
        position={positions.fairmontBanffSpringsHotel}
      />

      <mesh
        ref={nightLightsRef}
        position={[-4.6, 1.05, 2.93]}
        // position={[posX, posY, posZ]}
        rotation={[-1.6, 0, -1.7]}
        // rotation={[rotationX, rotationY, rotationZ]}
      >
        <planeGeometry args={[0.15, 0.15]} />
        <meshStandardMaterial
          texture={nightTexture}
          opacity={0}
          map={nightTexture}
          map-flipY={true}
          map-generateMipmaps={true}
          map-anisotropy={16}
          transparent
        />
      </mesh>

      <NightLights
        isNight={isNight}
        position={positions.fairmontBanffSpringsHotel}
      />
    </>
  );
};

export default Day1;
