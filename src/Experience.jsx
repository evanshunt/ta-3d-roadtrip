import Canmore from "./models/Canmore.jsx";
import React, { useRef, useState } from "react";
import { Environment, OrbitControls, Sky, Stage } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

const Experience = () => {
  const { sunPosition } = useControls("sky", {
    sunPosition: { value: [1, 2, 3] },
  });
  const { lightIntensity } = useControls("light", {
    lightIntensity: { value: 0.75, min: 0, max: 10 },
  });

  return (
    <>
      <Sky distance={450000} sunPosition={sunPosition} />
      <Perf position="top-left" />
      <OrbitControls makeDefault={true} />
      <Stage adjustCamera={true}>
        <ambientLight />
        <directionalLight
          castShadow
          intensity={lightIntensity}
          position={sunPosition}
          shadow-mapSize={[1024, 1024]}
          shadow-camera-near={1}
          shadow-camera-far={10}
          shadow-camera-top={5}
          shadow-camera-right={5}
          shadow-camera-bottom={-5}
          shadow-camera-left={-5}
        >
          <Environment background={false} files={"/env.hdr"} />
          <Canmore castShadow receiveShadow />
        </directionalLight>
      </Stage>
    </>
  );
};

export default Experience;
