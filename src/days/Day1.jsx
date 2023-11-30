import { gsap } from "gsap/dist/gsap";
import { useTexture } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import ImagePin from "../models/ImagePin";
import InfoBox from "../components/InfoBox";
import { isMobile } from "react-device-detect";
import { NightLights } from "./NightLights";

import banffGondolaImageSrc from "/images/banff-gondola.webp";
import banffUpperHotSpringsImageSrc from "/images/banff-upper-hot-springs.webp";
import caveAndBasinImageSrc from "/images/cave-and-basin-national-historic-site.webp";
import fairmontBanffSpringsHotelImageSrc from "/images/fairmont-banff-springs-hotel.webp";
import skyBistroImageSrc from "/images/sky-bistro.webp";

const Day1 = ({
  animateHover,
  animateOut,
  geometry,
  hoverIndex,
  isNight,
  material,
  positions,
  setHoverIndex,
  sceneIndex,
  setIndex,
  setPinRefs,
}) => {
  const nightLightsRef = useRef();
  const tl = gsap.timeline({});
  const nightTexture = useTexture("./textures/final/Banff_Lights.webp");

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

          <InfoBox
            imageSrc={"/images/info-boxes/sunshine-village.png"}
            position={[-5.2, 1.2, 2.4]}
            width={1.86}
          />
        </>
      )}

      <ImagePin
        active={sceneIndex === 0}
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        hoverIndex={hoverIndex}
        imageSrc={caveAndBasinImageSrc}
        index={1}
        material={material}
        name={"Cave and Basin National Historic Site"}
        position={positions.caveAndBasin}
        scale={0.2}
        setHoverIndex={setHoverIndex}
        setIndex={setIndex}
        setPinRefs={setPinRefs}
      />

      <ImagePin
        active={sceneIndex === 1}
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={banffGondolaImageSrc}
        index={2}
        material={material}
        name={"Banff Gondola"}
        position={positions.gondola}
        scale={0.2}
        setHoverIndex={setHoverIndex}
        setIndex={setIndex}
        setPinRefs={setPinRefs}
      />

      <ImagePin
        active={sceneIndex === 2}
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={skyBistroImageSrc}
        index={3}
        material={material}
        name={"Sky Bistro"}
        position={positions.skyBistro}
        scale={0.2}
        setHoverIndex={setHoverIndex}
        setIndex={setIndex}
        setPinRefs={setPinRefs}
      />

      <ImagePin
        active={sceneIndex === 3}
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={banffUpperHotSpringsImageSrc}
        index={4}
        material={material}
        name={"Banff Upper Hot Springs"}
        position={positions.banffUpperHotSprings}
        scale={0.2}
        setHoverIndex={setHoverIndex}
        setIndex={setIndex}
        setPinRefs={setPinRefs}
      />

      <ImagePin
        active={sceneIndex === 4}
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={fairmontBanffSpringsHotelImageSrc}
        index={5}
        material={material}
        name={"Fairmont Banff Springs Hotel"}
        position={positions.fairmontBanffSpringsHotel}
        scale={0.2}
        setHoverIndex={setHoverIndex}
        setIndex={setIndex}
        setPinRefs={setPinRefs}
      />

      <mesh
        ref={nightLightsRef}
        position={[-4.6, 1.05, 2.93]}
        rotation={[-1.6, 0, -1.7]}
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
