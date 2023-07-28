import React from "react";
import { useRef } from "react";
import { SpotLightHelper } from "three";
import { useHelper } from "@react-three/drei";
import { useControls } from "leva";

const Lights = () => {
  const spotLight = useRef();
  const { posX, posY, posZ } = useControls({
    posX: {
      min: -30,
      max: 30,
      value: 2,
    },
    posY: {
      min: -30,
      max: 30,
      value: 2,
    },
    posZ: {
      min: -30,
      max: 30,
      value: 2,
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

  useHelper(spotLight, SpotLightHelper, 0x000000);
  return (
    <>
      <ambientLight intensity={3} />

      <spotLight
        ref={spotLight}
        position={[posX, posY, posZ]}
        intensity={10.5}
        castShadows
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
