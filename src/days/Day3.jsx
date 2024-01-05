import { Day3InfoBoxes } from "./Day3InfoBoxes";
import React, { useRef } from "react";
import ImagePin from "../models/final/ImagePin";
import InfoBox from "../components/InfoBox";
import { NightImage } from "./NightImage";
import { NightLights } from "./NightLights";
import { useTexture } from "@react-three/drei";

import columbiaIcefieldSkywalkImageSrc from "/images/columbia-icefield-skywalk.webp";
import maligneCanyonImageSrc from "/images/maligne-canyon.webp";
import jasperSkyTramImageSrc from "/images/jasper-sky-tram.webp";
import fairmontJasperParkLodgeImageSrc from "/images/fairmont-jasper-park-lodge.webp";
import jasperPlanetariumImageSrc from "/images/jasper-planetarium.webp";

const Day3 = ({
  animateHover,
  animateOut,
  destinations,
  geometry,
  handleIndex,
  inBetweens,
  isMobile,
  isNight,
  material,
  setAttractionsOpen,
  setHoverIndex,
  setPinRefs,
}) => {
  const nightLightsRef3 = useRef();
  const nightTexture = useTexture("./textures/final/Jasper_Lights2.webp");

  return (
    <>
      {!isMobile && <Day3InfoBoxes />}

      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        destinations={destinations}
        geometry={geometry}
        handleIndex={handleIndex}
        hidden={true}
        imageSrc={columbiaIcefieldSkywalkImageSrc}
        inBetweens={inBetweens}
        index={12}
        isMobile={isMobile}
        material={material}
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
        imageSrc={columbiaIcefieldSkywalkImageSrc}
        inBetweens={inBetweens}
        index={13}
        isMobile={isMobile}
        material={material}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        handleIndex={handleIndex}
        setPinRefs={setPinRefs}
      />
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        destinations={destinations}
        geometry={geometry}
        imageSrc={maligneCanyonImageSrc}
        inBetweens={inBetweens}
        index={14}
        isMobile={isMobile}
        material={material}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        handleIndex={handleIndex}
        setPinRefs={setPinRefs}
      />
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        destinations={destinations}
        geometry={geometry}
        imageSrc={jasperSkyTramImageSrc}
        inBetweens={inBetweens}
        index={15}
        isMobile={isMobile}
        material={material}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        handleIndex={handleIndex}
        setPinRefs={setPinRefs}
      />
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        destinations={destinations}
        geometry={geometry}
        imageSrc={fairmontJasperParkLodgeImageSrc}
        index={16}
        isMobile={isMobile}
        inBetweens={inBetweens}
        material={material}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        handleIndex={handleIndex}
        setPinRefs={setPinRefs}
      />
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        destinations={destinations}
        geometry={geometry}
        imageSrc={jasperPlanetariumImageSrc}
        index={17}
        isMobile={isMobile}
        inBetweens={inBetweens}
        material={material}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        handleIndex={handleIndex}
        setPinRefs={setPinRefs}
      />

      <NightImage
        dims={0.3}
        isNight={isNight}
        nightLightsRef={nightLightsRef3}
        nLPosX={5.31}
        nLPosY={0.99}
        nLPosZ={-6.02}
        nLRotX={5.46}
        nLRotY={-0.07}
        nLRotZ={-1.55}
        nightTexture={nightTexture}
      />

      <NightLights
        isMobile={isMobile}
        isNight={isNight}
        position={destinations[17].details.position}
      />
    </>
  );
};

export default Day3;
