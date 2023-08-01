import React from "react";
import { useRef } from "react";

const Lights = () => {
  const spotLight = useRef();

  return (
    <>
      <ambientLight intensity={0.4} color={0xffffff} />

      <directionalLight
        ref={spotLight}
        position={[0, 30, 0]}
        intensity={0.6}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
    </>
  );
};

export default Lights;
