import { Day1InfoBoxes } from "./Day1InfoBoxes";
import { NightImage } from "./NightImage";
import { useTexture } from "@react-three/drei";
import React, { useRef } from "react";
import ImagePin from "../models/final/ImagePin";
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

  const nightTexture = useTexture("./textures/final/Banff_Lights3.webp");

  return (
    <>
      {!isMobile && <Day1InfoBoxes />}

      {/* This is just to keep the index aligned with the actual amount of stops */}
      <ImagePin
        active={sceneIndex === 0}
        animateHover={animateHover}
        animateOut={animateOut}
        attractionsOpen={attractionsOpen}
        destinations={destinations}
        geometry={geometry}
        handleIndex={handleIndex}
        hidden={true}
        inBetweens={inBetweens}
        index={6}
        isMobile={isMobile}
        material={material}
        name={"Spacer"}
        scale={0.2}
        setHoverIndex={setHoverIndex}
        setPinRefs={setPinRefs}
      />

      <ImagePin
        active={sceneIndex === 1}
        animateHover={animateHover}
        animateOut={animateOut}
        destinations={destinations}
        geometry={geometry}
        handleIndex={handleIndex}
        hoverIndex={hoverIndex}
        inBetweens={inBetweens}
        index={1}
        isMobile={isMobile}
        material={material}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        setPinRefs={setPinRefs}
      />

      <ImagePin
        active={sceneIndex === 2}
        animateHover={animateHover}
        animateOut={animateOut}
        destinations={destinations}
        geometry={geometry}
        handleIndex={handleIndex}
        inBetweens={inBetweens}
        index={2}
        isMobile={isMobile}
        material={material}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        setPinRefs={setPinRefs}
      />

      <ImagePin
        active={sceneIndex === 3}
        animateHover={animateHover}
        animateOut={animateOut}
        destinations={destinations}
        geometry={geometry}
        handleIndex={handleIndex}
        inBetweens={inBetweens}
        index={3}
        isMobile={isMobile}
        material={material}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        setPinRefs={setPinRefs}
      />

      <ImagePin
        active={sceneIndex === 4}
        animateHover={animateHover}
        animateOut={animateOut}
        destinations={destinations}
        geometry={geometry}
        handleIndex={handleIndex}
        inBetweens={inBetweens}
        index={4}
        isMobile={isMobile}
        material={material}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        setPinRefs={setPinRefs}
      />

      <ImagePin
        active={sceneIndex === 5}
        animateHover={animateHover}
        animateOut={animateOut}
        destinations={destinations}
        geometry={geometry}
        handleIndex={handleIndex}
        inBetweens={inBetweens}
        index={5}
        isMobile={isMobile}
        material={material}
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
        destinations={destinations}
        handleIndex={handleIndex}
        hidden={true}
        inBetweens={inBetweens}
        index={6}
        isMobile={isMobile}
        material={material}
        name={"Spacer"}
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
