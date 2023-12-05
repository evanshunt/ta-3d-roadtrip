import React from "react";
import ImagePin from "../models/final/ImagePin";
import InfoBox from "../components/InfoBox";
import { NightLights } from "./NightLights";

import carterRyanGalleryImageSrc from "/images/carter-ryan-gallery.webp";
import johnstonCanyonImageSrc from "/images/johnston-canyon.webp";
import lakeLouiseGondolaImageSrc from "/images/lake-louise-gondola.webp";
import fairmontChateauLakeLouiseImageSrc from "/images/fairmont-chateau-lake-louise.webp";
import fairviewImageSrc from "/images/fairview.webp";

const Day2 = ({
  animateHover,
  animateOut,
  geometry,
  isMobile,
  isNight,
  material,
  positions,
  setAttractionsOpen,
  setHoverIndex,
  setIndex,
  setPinRefs,
}) => {
  // const tl = gsap.timeline({});

  return (
    <>
      {!isMobile && (
        <>
          <InfoBox
            imageSrc={"/images/info-boxes/moraine-lake.png"}
            name={"Moraine Lake"}
            position={[-3.7, 1.2, 0.6]}
            width={1.93}
          />

          <InfoBox
            imageSrc={"/images/info-boxes/bow-peak.png"}
            name={"Bow Peak"}
            position={[-2.0, 1.2, 0.0]}
            width={1.86}
          />
        </>
      )}
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={carterRyanGalleryImageSrc}
        index={7}
        isMobile={isMobile}
        material={material}
        name={"Carter Ryan Gallery"}
        position={positions.carterRyanGallery}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        setIndex={setIndex}
        setPinRefs={setPinRefs}
      />
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={johnstonCanyonImageSrc}
        index={8}
        isMobile={isMobile}
        material={material}
        name={"Johnston Canyon"}
        position={positions.johnstonCanyon}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        setIndex={setIndex}
        setPinRefs={setPinRefs}
      />
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={lakeLouiseGondolaImageSrc}
        index={9}
        isMobile={isMobile}
        material={material}
        name={"Lake Louise Gondola"}
        position={positions.lakeLouiseGondola}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        setIndex={setIndex}
        setPinRefs={setPinRefs}
      />
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={fairmontChateauLakeLouiseImageSrc}
        index={10}
        isMobile={isMobile}
        material={material}
        name={"Fairmont Chateau Lake Louise"}
        position={positions.fairmontChateauLakeLouise}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        setIndex={setIndex}
        setPinRefs={setPinRefs}
      />
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={fairviewImageSrc}
        index={11}
        isMobile={isMobile}
        material={material}
        name={"Fairview"}
        position={positions.fairview}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        setIndex={setIndex}
        setPinRefs={setPinRefs}
      />

      {/* This is just to keep the index aligned with the actual amount of stops */}

      <NightLights
        isMobile={isMobile}
        isNight={isNight}
        position={positions.fairview}
      />
    </>
  );
};

export default Day2;
