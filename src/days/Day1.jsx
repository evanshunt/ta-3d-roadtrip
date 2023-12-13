import { NightImage } from "./NightImage";
import { useTexture } from "@react-three/drei";
import React, { useRef } from "react";
import ImagePin from "../models/final/ImagePin";
import InfoBox from "../components/InfoBox";
import { NightLights } from "./NightLights";

import banffGondolaImageSrc from "/images/banff-gondola.webp";
import banffUpperHotSpringsImageSrc from "/images/banff-upper-hot-springs.webp";
import caveAndBasinImageSrc from "/images/cave-and-basin-national-historic-site.webp";
import fairmontBanffSpringsHotelImageSrc from "/images/fairmont-banff-springs-hotel.webp";
import skyBistroImageSrc from "/images/sky-bistro.webp";

const Day1 = ({
  animateHover,
  animateOut,
  attractionsOpen,
  geometry,
  handleIndex,
  hoverIndex,
  isMobile,
  isNight,
  material,
  positions,
  setAttractionsOpen,
  setHoverIndex,
  sceneIndex,
  setIndex,
  setPinRefs,
}) => {
  const nightLightsRef = useRef();

  const nightTexture = useTexture("./textures/final/Banff_Lights3.webp");

  return (
    <>
      {!isMobile && (
        <>
          <InfoBox
            imageSrc={"/images/info-boxes/cascade-mountain.png"}
            name="Cascade Mountain"
            position={[-4.2, 1.18, 2.77]}
            width={1.58}
          />

          <InfoBox
            imageSrc={"/images/info-boxes/lake-minnewanka.png"}
            name="Lake Minnewanka"
            position={[-4.1, 1.15, 3.06]}
            width={1.8}
          />

          <InfoBox
            imageSrc={"/images/info-boxes/sunshine-village.png"}
            position={[-5.3, 1.15, 2.42]}
            width={1.86}
          />
        </>
      )}

      {/* This is just to keep the index aligned with the actual amount of stops */}
      <ImagePin
        active={sceneIndex === 0}
        animateHover={animateHover}
        animateOut={animateOut}
        attractionsOpen={attractionsOpen}
        geometry={geometry}
        handleIndex={handleIndex}
        hidden={true}
        imageSrc={fairmontBanffSpringsHotelImageSrc}
        index={6}
        isMobile={isMobile}
        material={material}
        name={"Spacer"}
        position={positions.fairmontBanffSpringsHotel}
        scale={0.2}
        setHoverIndex={setHoverIndex}
        setPinRefs={setPinRefs}
      />

      <ImagePin
        active={sceneIndex === 1}
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        handleIndex={handleIndex}
        hoverIndex={hoverIndex}
        imageSrc={caveAndBasinImageSrc}
        index={1}
        isMobile={isMobile}
        material={material}
        name={"Cave and Basin National Historic Site"}
        position={positions.caveAndBasin}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        setPinRefs={setPinRefs}
      />

      <ImagePin
        active={sceneIndex === 2}
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        handleIndex={handleIndex}
        imageSrc={banffGondolaImageSrc}
        index={2}
        isMobile={isMobile}
        material={material}
        name={"Banff Gondola"}
        position={positions.gondola}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        setPinRefs={setPinRefs}
      />

      <ImagePin
        active={sceneIndex === 3}
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        handleIndex={handleIndex}
        imageSrc={skyBistroImageSrc}
        index={3}
        isMobile={isMobile}
        material={material}
        name={"Sky Bistro"}
        position={positions.skyBistro}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        setPinRefs={setPinRefs}
      />

      <ImagePin
        active={sceneIndex === 4}
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        handleIndex={handleIndex}
        imageSrc={banffUpperHotSpringsImageSrc}
        index={4}
        isMobile={isMobile}
        material={material}
        name={"Banff Upper Hot Springs"}
        position={positions.banffUpperHotSprings}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        setPinRefs={setPinRefs}
      />

      <ImagePin
        active={sceneIndex === 5}
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        handleIndex={handleIndex}
        imageSrc={fairmontBanffSpringsHotelImageSrc}
        index={5}
        isMobile={isMobile}
        material={material}
        name={"Fairmont Banff Springs Hotel"}
        position={positions.fairmontBanffSpringsHotel}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        setPinRefs={setPinRefs}
      />

      {/* This is just to keep the index aligned with the actual amount of stops */}
      <ImagePin
        active={sceneIndex === 6}
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        handleIndex={handleIndex}
        hidden={true}
        imageSrc={fairmontBanffSpringsHotelImageSrc}
        index={6}
        isMobile={isMobile}
        material={material}
        name={"Spacer"}
        position={positions.fairmontBanffSpringsHotel}
        scale={0.2}
        setHoverIndex={setHoverIndex}
        setPinRefs={setPinRefs}
      />

      <NightImage
        dims={0.15}
        isNight={isNight}
        nightLightsRef={nightLightsRef}
        nLPosX={-4.48}
        nLPosY={1.04}
        nLPosZ={2.96}
        nLRotX={-1.2}
        nLRotY={0}
        nLRotZ={4.5}
        nightTexture={nightTexture}
      />

      <NightLights
        isMobile={isMobile}
        isNight={isNight}
        position={[-4.46, 1.09, 2.96]}
      />
    </>
  );
};

export default Day1;
