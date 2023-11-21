import { NightLights } from "./NightLights";
import { gsap } from "gsap/dist/gsap";
import ImagePin from "../models/ImagePin";
import InfoBox from "../components/InfoBox";
import { useTexture } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
// import { useControls } from "leva";
import { isMobile } from "react-device-detect";
// import { EffectComposer, Bloom } from "@react-three/postprocessing";

const Day1 = ({
  animateHover,
  animateOut,
  isNight,
  geometry,
  material,

  positions,
  sceneIndex,
  setIndex,
  visible,
  wisps,
}) => {
  const nightTexture = useTexture("./textures/final/Banff_Lights.webp");
  const nightLightsRef = useRef();
  // const pointLightRef = useRef();

  // const { posX, posY, posZ, rotationX, rotationY, rotationZ, sizeX, sizeY } =
  //   useControls("Night", {
  //     posX: {
  //       value: -4.6,
  //       min: -6,
  //       max: -4,
  //       step: 0.01,
  //     },
  //     posY: {
  //       value: 1.05,
  //       min: -1,
  //       max: 2,
  //       step: 0.01,
  //     },
  //     posZ: {
  //       value: 2.93,
  //       min: 2,
  //       max: 4,
  //       step: 0.01,
  //     },
  //     rotationX: {
  //       value: -1.6,
  //       min: -Math.PI * 2,
  //       max: Math.PI * 2,
  //       step: 0.1,
  //     },
  //     rotationY: {
  //       value: 0,
  //       min: -Math.PI * 2,
  //       max: Math.PI * 2,
  //       step: 0.1,
  //     },
  //     rotationZ: {
  //       value: -2.8,
  //       min: -Math.PI,
  //       max: Math.PI,
  //       step: 0.1,
  //     },
  //     sizeX: {
  //       value: 0.15,
  //       min: 0,
  //       max: 1,
  //       step: 0.01,
  //     },
  //     sizeY: {
  //       value: 0.15,
  //       min: 0,
  //       max: 1,
  //       step: 0.01,
  //     },
  //   });

  const animateLights = (direction) => {
    const tl = gsap.timeline({});
    switch (direction) {
      case "in":
        tl.to(
          nightLightsRef.current.material,
          {
            opacity: 1,
            duration: 1,
          },
          "<"
        );

        break;
      case "out":
        tl.to(
          nightLightsRef.current.material,
          {
            opacity: 0,
            duration: 1,
          },
          "<"
        );

        break;
    }
  };

  // const { sunshineVillageX, sunshineVillageY, sunshineVillageZ } = useControls({
  //   sunshineVillageX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   sunshineVillageY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   sunshineVillageZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  // });

  // const { lightScale, lightPosX, lightPosY, lightPosZ, lightIntensity } =
  //   useControls("Sunlight", {
  //     lightIntensity: {
  //       value: 0.3,
  //       min: 0,
  //       max: 10,
  //       step: 0.1,
  //     },
  //     lightScale: {
  //       value: 0.2,
  //       min: 0,
  //       max: 1,
  //       step: 0.01,
  //     },
  //     lightPosX: {
  //       value: positions.fairmontBanffSpringsHotel[0],
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //     },
  //     lightPosY: {
  //       value: positions.fairmontBanffSpringsHotel[1],
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //     },
  //     lightPosZ: {
  //       value: positions.fairmontBanffSpringsHotel[2],
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //     },
  //   });

  // const { wispScale, wispPositionX, wispPositionY, wispPositionZ } =
  //   useControls({
  //     wispScale: {
  //       value: 0.2,
  //       min: 0,
  //       max: 1,
  //       step: 0.01,
  //     },
  //     wispPositionX: {
  //       value: positions.fairmontBanffSpringsHotel[0],
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //     },
  //     wispPositionY: {
  //       value: positions.fairmontBanffSpringsHotel[1],
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //     },
  //     wispPositionZ: {
  //       value: positions.fairmontBanffSpringsHotel[2],
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //     },
  //   });

  // const {
  //   pointLight1Intensity,
  //   pointLight2Intensity,
  //   pointLight3Intensity,
  //   pointLight4Intensity,
  // } = useControls({
  //   pointLight1Intensity: {
  //     value: 0.5,
  //     min: 0,
  //     max: 1,
  //     step: 0.01,
  //   },
  //   pointLight2Intensity: {
  //     value: 0.4,
  //     min: 0,
  //     max: 1,
  //     step: 0.01,
  //   },
  //   pointLight3Intensity: {
  //     value: 0.3,
  //     min: 0,
  //     max: 1,
  //     step: 0.01,
  //   },
  //   pointLight4Intensity: {
  //     value: 0.6,
  //     min: 0,
  //     max: 1,
  //     step: 0.01,
  //   },
  // });

  // if (!visible) return null;

  useEffect(() => {
    if (isNight) {
      animateLights("in");
    } else {
      animateLights("out");
    }
  }, [isNight]);

  return (
    <>
      {!isMobile && (
        <InfoBox
          imageSrc={"/images/info-boxes/sunshine-village.png"}
          position={[-5.2, 1.2, 2.4]}
          width={1.86}
        />
      )}
      <InfoBox
        imageSrc={"/images/info-boxes/cascade-mountain.png"}
        name="Cascade Mountain"
        position={[-4.3, 1.2, 2.7]}
        width={1.58}
      />
      {!isMobile && (
        <InfoBox
          imageSrc={"/images/info-boxes/lake-minnewanka.png"}
          name="Lake Minnewanka"
          position={[-4.2, 1.15, 3]}
          width={1.8}
        />
      )}

      <ImagePin
        active={sceneIndex === 0}
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={"/images/cave-and-basin-national-historic-site.webp"}
        material={material}
        scale={0.2}
        setIndex={setIndex}
        index={1}
        name={"Cave and Basin National Historic Site"}
        position={positions.caveAndBasin}
      />

      <ImagePin
        active={sceneIndex === 1}
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={"/images/banff-gondola.webp"}
        material={material}
        scale={0.2}
        setIndex={setIndex}
        index={2}
        name={"Banff Gondola"}
        position={positions.gondola}
      />

      <ImagePin
        active={sceneIndex === 2}
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={"/images/sky-bistro.webp"}
        material={material}
        scale={0.2}
        setIndex={setIndex}
        index={3}
        name={"Sky Bistro"}
        position={positions.skyBistro}
      />

      <ImagePin
        active={sceneIndex === 3}
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={"/images/banff-upper-hot-springs.webp"}
        material={material}
        scale={0.2}
        setIndex={setIndex}
        index={4}
        name={"Banff Upper Hot Springs"}
        position={positions.banffUpperHotSprings}
      />

      <ImagePin
        active={sceneIndex === 4}
        animateHover={animateHover}
        animateOut={animateOut}
        geometry={geometry}
        imageSrc={"/images/fairmont-banff-springs-hotel.webp"}
        material={material}
        scale={0.2}
        setIndex={setIndex}
        index={5}
        name={"Fairmont Banff Springs Hotel"}
        position={positions.fairmontBanffSpringsHotel}
      />

      <mesh
        ref={nightLightsRef}
        position={[-4.6, 1.05, 2.93]}
        // position={[posX, posY, posZ]}
        rotation={[-1.6, 0, -1.7]}
        // rotation={[rotationX, rotationY, rotationZ]}
      >
        <planeGeometry args={[0.15, 0.15]} />
        <meshStandardMaterial
          texture={nightTexture}
          opacity={0}
          map={nightTexture}
          map-flipY={true}
          map-generateMipmaps={true}
          map-anisotropy={16}
          transparent
        />
      </mesh>

      <NightLights
        isNight={isNight}
        position={positions.fairmontBanffSpringsHotel}
      />
    </>
  );
};

export default Day1;
