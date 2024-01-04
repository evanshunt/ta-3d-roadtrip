import React, { useEffect, useRef, useState } from "react";
import ImagePin from "../models/final/ImagePin";
import InfoBox from "../components/InfoBox";
import { NightImage } from "./NightImage";
import { NightLights } from "./NightLights";
import { useTexture } from "@react-three/drei";
import gsap from "gsap";

import columbiaIcefieldSkywalkImageSrc from "/images/columbia-icefield-skywalk.webp";
import maligneCanyonImageSrc from "/images/maligne-canyon.webp";
import jasperSkyTramImageSrc from "/images/jasper-sky-tram.webp";
import fairmontJasperParkLodgeImageSrc from "/images/fairmont-jasper-park-lodge.webp";
import jasperPlanetariumImageSrc from "/images/jasper-planetarium.webp";

const Day3 = ({
  animateHover,
  animateOut,
  geometry,
  handleIndex,
  inBetweens,
  isMobile,
  isNight,
  material,
  positions,
  sceneIndex,
  setAttractionsOpen,
  setHoverIndex,
  setPinRefs,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const groupRef = useRef();
  const nightLightsRef3 = useRef();
  const nightTexture = useTexture("./textures/final/Jasper_Lights2.webp");

  const animateGroupOut = () => {
    const tl = gsap.timeline({});

    tl.to(groupRef.current.position, {
      y: -0.33,
      z: 0.06,
      x: 0.03,
      duration: 0.5,
      ease: "power3.in",
      onComplete: () => {
        setIsOpen(false);
      },
    });
  };

  const animateGroupIn = () => {
    const tl = gsap.timeline({});
    tl.to(groupRef.current.position, {
      y: 0.01,
      z: -0.02,
      x: 0.01,
      duration: 0.5,
      ease: "power3.out",
      onComplete: () => {
        setIsOpen(true);
      },
    });
  };

  useEffect(() => {
    if ((isOpen && sceneIndex < 12) || (isOpen && sceneIndex > 17)) {
      animateGroupOut();
    }

    if (!isOpen && sceneIndex > 11 && sceneIndex < 18) {
      animateGroupIn();
    }
  }, [sceneIndex]);

  return (
    <>
      {!isMobile && (
        <>
          <InfoBox
            imageSrc={"/images/info-boxes/athabasca-falls.png"}
            name={"Athabasca Falls"}
            position={[1.19, 1.18, -2.78]}
            width={1.86}
          />
          <InfoBox
            imageSrc={"/images/info-boxes/marmot-basin.png"}
            name={"Marmot Basin"}
            position={[4.8, 1.15, -6.2]}
            width={1.86}
          />
          <InfoBox
            imageSrc={"/images/info-boxes/pyramid-lake.png"}
            name={"Pyramid Lake"}
            position={[5.45, 1.13, -6.2]}
            width={1.86}
          />
        </>
      )}

      <group ref={groupRef} position={[0, -0.6, 0]}>
        <ImagePin
          animateHover={animateHover}
          animateOut={animateOut}
          geometry={geometry}
          handleIndex={handleIndex}
          hidden={true}
          imageSrc={columbiaIcefieldSkywalkImageSrc}
          inBetweens={inBetweens}
          index={12}
          isMobile={isMobile}
          material={material}
          name={"Spacer"}
          position={positions.columbiaIcefieldSkywalk}
          scale={0.2}
          setAttractionsOpen={setAttractionsOpen}
          setHoverIndex={setHoverIndex}
          setPinRefs={setPinRefs}
        />

        <ImagePin
          animateHover={animateHover}
          animateOut={animateOut}
          geometry={geometry}
          imageSrc={columbiaIcefieldSkywalkImageSrc}
          inBetweens={inBetweens}
          index={13}
          isMobile={isMobile}
          material={material}
          name={"Columbia Icefield Skywalk"}
          position={positions.columbiaIcefieldSkywalk}
          scale={0.2}
          setAttractionsOpen={setAttractionsOpen}
          setHoverIndex={setHoverIndex}
          handleIndex={handleIndex}
          setPinRefs={setPinRefs}
        />
        <ImagePin
          animateHover={animateHover}
          animateOut={animateOut}
          geometry={geometry}
          imageSrc={maligneCanyonImageSrc}
          inBetweens={inBetweens}
          index={14}
          isMobile={isMobile}
          material={material}
          name={"Maligne Canyon"}
          position={positions.maligneCanyon}
          scale={0.2}
          setAttractionsOpen={setAttractionsOpen}
          setHoverIndex={setHoverIndex}
          handleIndex={handleIndex}
          setPinRefs={setPinRefs}
        />
        <ImagePin
          animateHover={animateHover}
          animateOut={animateOut}
          geometry={geometry}
          imageSrc={jasperSkyTramImageSrc}
          inBetweens={inBetweens}
          index={15}
          isMobile={isMobile}
          material={material}
          name={"Jasper SkyTram"}
          position={positions.jasperSkyTram}
          scale={0.2}
          setAttractionsOpen={setAttractionsOpen}
          setHoverIndex={setHoverIndex}
          handleIndex={handleIndex}
          setPinRefs={setPinRefs}
        />
        <ImagePin
          animateHover={animateHover}
          animateOut={animateOut}
          geometry={geometry}
          imageSrc={fairmontJasperParkLodgeImageSrc}
          index={16}
          isMobile={isMobile}
          inBetweens={inBetweens}
          material={material}
          name={"Fairmont Jasper Park Lodge"}
          position={positions.fairmontJasperParkLodge}
          scale={0.2}
          setAttractionsOpen={setAttractionsOpen}
          setHoverIndex={setHoverIndex}
          handleIndex={handleIndex}
          setPinRefs={setPinRefs}
        />
        <ImagePin
          animateHover={animateHover}
          animateOut={animateOut}
          geometry={geometry}
          imageSrc={jasperPlanetariumImageSrc}
          index={17}
          isMobile={isMobile}
          inBetweens={inBetweens}
          material={material}
          name={"Jasper Planetarium"}
          position={positions.jasperPlanetarium}
          scale={0.2}
          setAttractionsOpen={setAttractionsOpen}
          setHoverIndex={setHoverIndex}
          handleIndex={handleIndex}
          setPinRefs={setPinRefs}
        />
      </group>

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
