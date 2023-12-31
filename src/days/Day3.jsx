import React from "react";
import ImagePin from "../models/ImagePin";
import InfoBox from "../components/InfoBox";
import { isMobile } from "react-device-detect";
import { NightLights } from "./NightLights";

import columbiaIcefieldSkywalkImageSrc from "/images/columbia-icefield-skywalk.webp";
import maligneCanyonImageSrc from "/images/maligne-canyon.webp";
import jasperSkyTramImageSrc from "/images/jasper-sky-tram.webp";
import fairmontJasperParkLodgeImageSrc from "/images/fairmont-jasper-park-lodge.webp";
import jasperPlanetariumImageSrc from "/images/jasper-planetarium.webp";

const Day3 = ({
  animateHover,
  animateOut,
  geometry,
  isNight,
  material,
  positions,
  setIndex,
  setPinRefs,
}) => {
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
        imageSrc={columbiaIcefieldSkywalkImageSrc}
        index={13}
        material={material}
        name={"Columbia Icefield Skywalk"}
        position={positions.columbiaIcefieldSkywalk}
        scale={0.2}
        setIndex={setIndex}
        setPinRefs={setPinRefs}
      />
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={maligneCanyonImageSrc}
        index={14}
        material={material}
        name={"Maligne Canyon"}
        position={positions.maligneCanyon}
        scale={0.2}
        setIndex={setIndex}
        setPinRefs={setPinRefs}
      />
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={jasperSkyTramImageSrc}
        index={15}
        material={material}
        name={"Jasper SkyTram"}
        position={positions.jasperSkyTram}
        scale={0.2}
        setIndex={setIndex}
        setPinRefs={setPinRefs}
      />
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={fairmontJasperParkLodgeImageSrc}
        index={16}
        material={material}
        name={"Fairmont Jasper Park Lodge"}
        position={positions.fairmontJasperParkLodge}
        scale={0.2}
        setIndex={setIndex}
        setPinRefs={setPinRefs}
      />
      <ImagePin
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={jasperPlanetariumImageSrc}
        index={17}
        material={material}
        name={"Jasper Planetarium"}
        position={positions.jasperPlanetarium}
        scale={0.2}
        setIndex={setIndex}
        setPinRefs={setPinRefs}
      />

      <NightLights
        isNight={isNight}
        position={positions.fairmontJasperParkLodge}
      />
    </>
  );
};

export default Day3;
