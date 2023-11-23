import React from "react";
import ImagePin from "../models/ImagePin";
import InfoBox from "../components/InfoBox";
import { NightLights } from "./NightLights";
import { isMobile } from "react-device-detect";

import carterRyanGalleryImageSrc from "/images/carter-ryan-gallery.webp";
import johnstonCanyonImageSrc from "/images/johnston-canyon.webp";
import lakeLouiseGondolaImageSrc from "/images/lake-louise-gondola.webp";
import fairmontChateauLakeLouiseImageSrc from "/images/fairmont-chateau-lake-louise.webp";
import fairviewImageSrc from "/images/fairview.webp";

const Day2 = ({
  animateHover,
  animateOut,
  geometry,
  isNight,
  material,
  positions,
  setIndex,
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
        material={material}
        name={"Carter Ryan Gallery"}
        position={positions.carterRyanGallery}
        scale={0.2}
        setIndex={setIndex}
      />
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={johnstonCanyonImageSrc}
        index={8}
        material={material}
        name={"Johnston Canyon"}
        position={positions.johnstonCanyon}
        scale={0.2}
        setIndex={setIndex}
      />
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={lakeLouiseGondolaImageSrc}
        index={9}
        material={material}
        scale={0.2}
        name={"Lake Louise Gondola"}
        position={positions.lakeLouiseGondola}
        setIndex={setIndex}
      />
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={fairmontChateauLakeLouiseImageSrc}
        index={10}
        material={material}
        name={"Fairmont Chateau Lake Louise"}
        scale={0.2}
        position={positions.fairmontChateauLakeLouise}
        setIndex={setIndex}
      />
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={fairviewImageSrc}
        index={11}
        material={material}
        name={"Fairview"}
        position={positions.fairview}
        scale={0.2}
        setIndex={setIndex}
      />

      <NightLights isNight={isNight} position={positions.fairview} />
    </>
  );
};

export default Day2;
