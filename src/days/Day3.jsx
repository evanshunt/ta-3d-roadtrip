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
  const nightLightsRef3 = useRef();
  const nightTexture = useTexture("./textures/final/Jasper_Lights2.webp");

  return (
    <>
      {!isMobile && (
        <>
          <InfoBox
            imageSrc={"/images/info-boxes/athabasca-falls.png"}
            name={"Mt. Athabasca"}
            position={[1.1, 1.2, -3]}
            width={1.86}
          />
          <InfoBox
            imageSrc={"/images/info-boxes/marmot-basin.png"}
            name={"Marmot Basin"}
            position={[4.8, 1.2, -6.2]}
            width={1.86}
          />
          <InfoBox
            imageSrc={"/images/info-boxes/pyramid-lake.png"}
            name={"Pyramid Lake"}
            position={[5.6, 1.1, -6.0]}
            width={1.86}
          />
        </>
      )}

      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        hidden={true}
        imageSrc={columbiaIcefieldSkywalkImageSrc}
        index={12}
        isMobile={isMobile}
        material={material}
        name={"Spacer"}
        position={positions.columbiaIcefieldSkywalk}
        scale={0.2}
        setHoverIndex={setHoverIndex}
        setIndex={setIndex}
        setPinRefs={setPinRefs}
      />

      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={columbiaIcefieldSkywalkImageSrc}
        index={13}
        isMobile={isMobile}
        material={material}
        name={"Columbia Icefield Skywalk"}
        position={positions.columbiaIcefieldSkywalk}
        scale={0.2}
        setHoverIndex={setHoverIndex}
        setIndex={setIndex}
        setPinRefs={setPinRefs}
      />
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={maligneCanyonImageSrc}
        index={14}
        isMobile={isMobile}
        material={material}
        name={"Maligne Canyon"}
        position={positions.maligneCanyon}
        scale={0.2}
        setHoverIndex={setHoverIndex}
        setIndex={setIndex}
        setPinRefs={setPinRefs}
      />
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={jasperSkyTramImageSrc}
        index={15}
        isMobile={isMobile}
        material={material}
        name={"Jasper SkyTram"}
        position={positions.jasperSkyTram}
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
        imageSrc={fairmontJasperParkLodgeImageSrc}
        index={16}
        isMobile={isMobile}
        material={material}
        name={"Fairmont Jasper Park Lodge"}
        position={positions.fairmontJasperParkLodge}
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
        imageSrc={jasperPlanetariumImageSrc}
        index={17}
        isMobile={isMobile}
        material={material}
        name={"Jasper Planetarium"}
        position={positions.jasperPlanetarium}
        scale={0.2}
        setAttractionsOpen={setAttractionsOpen}
        setHoverIndex={setHoverIndex}
        setIndex={setIndex}
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
        position={positions.fairmontJasperParkLodge}
      />
    </>
  );
};

export default Day3;
