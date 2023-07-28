import React from "react";
import { useRef } from "react";
import { DirectionalLightHelper, SpotLightHelper } from "three";
import { useHelper } from "@react-three/drei";
import { useControls } from "leva";

const Lights = () => {
  const spotLight = useRef();
  const { posX, posY, posZ, scale } = useControls({
    posX: {
      min: -30,
      max: 30,
      value: -6.4,
    },
    posY: {
      min: -30,
      max: 30,
      value: 8.6,
    },
    posZ: {
      min: -30,
      max: 30,
      value: 26,
    },
    scale: {
      min: 0,
      max: 1,
      value: 0.015,
      step: 0.001,
    },
  });

  const { mapFar, mapNear } = useControls({
    mapFar: {
      min: 0,
      max: 1000000,
      value: 50,
    },
    mapNear: {
      min: 0,
      max: 100,
      value: 0.01,
      step: 0.001,
    },
  });

  return (
    <>
      <ambientLight intensity={0.4} color={0xffffff} />
      {/* <directionalLight
        ref={directionalLight}
        position={[posX, posY, posZ]}
        intensity={1}
        castShadow
        shadow-camera-visible={true}
        shadow-camera-left={-10}
        shadow-camera-right={10}
      /> */}
      <directionalLight
        ref={spotLight}
        position={[1, 30, 5]}
        scale={scale}
        intensity={0.7}
        castShadow
        shadow-camera-visible={true}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={mapFar}
        shadow-camera-near={mapNear}
      />
    </>
  );
};

export default Lights;
