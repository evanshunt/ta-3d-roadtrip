import { NightImage } from "./NightImage";
import { useTexture } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import ImagePin from "../models/final/ImagePin";
import InfoBox from "../components/InfoBox";
import { NightLights } from "./NightLights";
import gsap from "gsap";

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
  inBetweens,
  isMobile,
  isNight,
  material,
  pinRefs,
  positions,
  setAttractionsOpen,
  setHoverIndex,
  sceneIndex,
  setIndex,
  setPinRefs,
}) => {
  const groupRef = useRef();
  const nightLightsRef = useRef();

  const nightTexture = useTexture("./textures/final/Banff_Lights3.webp");

  const animateGroupOut = () => {
    const tl = gsap.timeline({});

    tl.to(groupRef.current.position, {
      y: -0.33,
      z: 0.06,
      x: 0.03,
      duration: 0.5,
      ease: "power3.in",
    });
  };

  //
  const animateGroupIn = () => {
    const tl = gsap.timeline({});
    tl.to(groupRef.current.position, {
      y: 0.01,
      z: 0.0,
      x: 0.0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  useEffect(() => {
    if (inBetweens.includes(sceneIndex) && sceneIndex > 0) {
      animateGroupOut();
    }
    console.log(sceneIndex);
    if (inBetweens.includes(sceneIndex + 1) && sceneIndex < 6) {
      console.log("animate group in");
      animateGroupIn();
    }
  }, [sceneIndex]);

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
      <group ref={groupRef} scale={1} position={[0, 0.01, 0]}>
        <ImagePin
          active={sceneIndex === 0}
          animateHover={animateHover}
          animateOut={animateOut}
          attractionsOpen={attractionsOpen}
          geometry={geometry}
          handleIndex={handleIndex}
          hidden={true}
          imageSrc={fairmontBanffSpringsHotelImageSrc}
          inBetweens={inBetweens}
          index={6}
          isMobile={isMobile}
          material={material}
          name={"Spacer"}
          pinRefs={pinRefs}
          position={positions.fairmontBanffSpringsHotel}
          scale={0.2}
          sceneIndex={sceneIndex}
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
          inBetweens={inBetweens}
          index={1}
          isMobile={isMobile}
          material={material}
          name={"Cave and Basin National Historic Site"}
          pinRefs={pinRefs}
          position={positions.caveAndBasin}
          scale={0.2}
          sceneIndex={sceneIndex}
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
          inBetweens={inBetweens}
          index={2}
          isMobile={isMobile}
          material={material}
          name={"Banff Gondola"}
          pinRefs={pinRefs}
          position={positions.gondola}
          scale={0.2}
          sceneIndex={sceneIndex}
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
          inBetweens={inBetweens}
          index={3}
          isMobile={isMobile}
          material={material}
          name={"Sky Bistro"}
          pinRefs={pinRefs}
          position={positions.skyBistro}
          scale={0.2}
          sceneIndex={sceneIndex}
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
          inBetweens={inBetweens}
          index={4}
          isMobile={isMobile}
          material={material}
          name={"Banff Upper Hot Springs"}
          pinRefs={pinRefs}
          position={positions.banffUpperHotSprings}
          scale={0.2}
          sceneIndex={sceneIndex}
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
          inBetweens={inBetweens}
          index={5}
          isMobile={isMobile}
          material={material}
          name={"Fairmont Banff Springs Hotel"}
          pinRefs={pinRefs}
          position={positions.fairmontBanffSpringsHotel}
          scale={0.2}
          sceneIndex={sceneIndex}
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
          inBetweens={inBetweens}
          index={6}
          isMobile={isMobile}
          material={material}
          name={"Spacer"}
          position={positions.fairmontBanffSpringsHotel}
          scale={0.2}
          setHoverIndex={setHoverIndex}
          setPinRefs={setPinRefs}
        />
      </group>

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
