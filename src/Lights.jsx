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

  useHelper(spotLight, SpotLightHelper);
  return (
    <>
      <ambientLight intensity={3} />

      <spotLight
        ref={spotLight}
        position={[posX, posY, posZ]}
        intensity={1.5}
        castShadow
      />
    </>
  );
};

export default Lights;
