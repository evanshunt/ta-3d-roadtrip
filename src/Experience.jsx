import Canmore from "./models/Canmore.jsx";
import React, { useRef, useState } from "react";
import {
  Environment,
  OrbitControls,
  Scroll,
  ScrollControls,
  Sky,
  Stage,
  useScroll,
} from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { useFrame } from "@react-three/fiber";

const Experience = () => {
  const { lightIntensity } = useControls("light", {
    lightIntensity: { value: 0.75, min: 0, max: 10 },
  });

  return (
    <>
      <Perf position="top-left" />
      {/* <OrbitControls makeDefault={true} /> */}
      <ScrollControls damping={0.1}>
        <Stage adjustCamera={true}>
          <ambientLight intensity={lightIntensity} />
          <Environment background={false} files={"/env.hdr"} />
          <Canmore castShadow receiveShadow />
        </Stage>
      </ScrollControls>
    </>
  );
};

export default Experience;
