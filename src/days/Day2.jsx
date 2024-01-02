import React, { useRef } from "react";
import ImagePin from "../models/final/ImagePin";
import InfoBox from "../components/InfoBox";
import { NightImage } from "./NightImage";
import { NightLights } from "./NightLights";
import { useTexture } from "@react-three/drei";

import carterRyanGalleryImageSrc from "/images/carter-ryan-gallery.webp";
import johnstonCanyonImageSrc from "/images/johnston-canyon.webp";
import lakeLouiseGondolaImageSrc from "/images/lake-louise-gondola.webp";
import fairmontChateauLakeLouiseImageSrc from "/images/fairmont-chateau-lake-louise.webp";
import fairviewImageSrc from "/images/fairview.webp";

const Day2 = ({
  animateHover,
  animateOut,
  destinations,
  geometry,
  handleIndex,
  inBetweens,
  isMobile,
  isNight,
  material,
  positions,
  setAttractionsOpen,
  setHoverIndex,
  setPinRefs,
}) => {
  const nightTexture = useTexture("./textures/final/LL_Lights2.webp");
  const nightLightsRef2 = useRef();

  return (
    <>
      {!isMobile && (
        <>
          <InfoBox
            imageSrc={"/images/info-boxes/moraine-lake.png"}
            name={"Moraine Lake"}
            position={[-3.79, 1.2, 0.42]}
            width={1.93}
          />

          <InfoBox
            imageSrc={"/images/info-boxes/bow-peak.png"}
            name={"Bow Peak"}
            position={[-1.99, 1.2, -0.13]}
            width={1.86}
          />
        </>
      )}
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        destinations={destinations}
        handleIndex={handleIndex}
        imageSrc={carterRyanGalleryImageSrc}
        inBetweens={inBetweens}
        index={7}
        isMobile={isMobile}
        material={material}
        // name={"Carter Ryan Gallery"}
        // position={positions.carterRyanGallery}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        setPinRefs={setPinRefs}
      />
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        destinations={destinations}
        geometry={geometry}
        handleIndex={handleIndex}
        imageSrc={johnstonCanyonImageSrc}
        inBetweens={inBetweens}
        index={8}
        isMobile={isMobile}
        material={material}
        // name={"Johnston Canyon"}
        // position={positions.johnstonCanyon}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        setPinRefs={setPinRefs}
      />
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        destinations={destinations}
        geometry={geometry}
        handleIndex={handleIndex}
        imageSrc={lakeLouiseGondolaImageSrc}
        inBetweens={inBetweens}
        index={9}
        isMobile={isMobile}
        material={material}
        // name={"Lake Louise Gondola"}
        // position={positions.lakeLouiseGondola}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        setPinRefs={setPinRefs}
      />
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        destinations={destinations}
        geometry={geometry}
        handleIndex={handleIndex}
        imageSrc={fairmontChateauLakeLouiseImageSrc}
        inBetweens={inBetweens}
        index={10}
        isMobile={isMobile}
        material={material}
        // name={"Fairmont Château Lake Louise"}
        // position={positions.fairmontChateauLakeLouise}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        setPinRefs={setPinRefs}
      />
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        destinations={destinations}
        geometry={geometry}
        handleIndex={handleIndex}
        imageSrc={fairviewImageSrc}
        inBetweens={inBetweens}
        index={11}
        isMobile={isMobile}
        material={material}
        // name={"Fairview"}
        // position={positions.fairview}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        setPinRefs={setPinRefs}
      />

      {/* This is just to keep the index aligned with the actual amount of stops */}

      <NightImage
        dims={0.2}
        isNight={isNight}
        nightLightsRef={nightLightsRef2}
        // nLPosX={3.17}
        // nLPosY={1.11}
        // nLPosZ={0.77}
        // nLRotX={1.35}
        // nLRotY={3.41}
        // nLRotZ={1.63}
        nLPosX={-3.14}
        nLPosY={1.04}
        nLPosZ={0.7}
        nLRotX={1.53}
        nLRotY={3.41}
        nLRotZ={0.88}
        nightTexture={nightTexture}
      />

      <NightLights
        isMobile={isMobile}
        isNight={isNight}
        position={[-3.14, 1.15, 0.66]}
      />
    </>
  );
};

export default Day2;
