import Canmore from "./models/Canmore.jsx";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  CameraControls,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
  Sky,
  Stage,
  useScroll,
} from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

const Experience = () => {
  const cameraControls = useRef();

  const { lightIntensity } = useControls("light", {
    lightIntensity: { value: 0.75, min: 0, max: 10 },
  });

  const logCameraDetails = () => {
    console.log(cameraControls.current);
    console.log("asdasd");
  };

  return (
    <Canvas
      shadows
      camera={{ fov: 45, near: 0.1, far: 2000, position: [0, 4, 10] }}
    >
      <color args={["#111"]} attach={"background"} />
      <Perf position="top-left" />
      {/* <OrbitControls makeDefault={true} /> */}
      <CameraControls ref={cameraControls} />
      {/* <Stage adjustCamera={true} ref={stage}> */}
      <ambientLight intensity={lightIntensity} />
      <Environment background={false} files={"/env.hdr"} />
      <Canmore castShadow receiveShadow />
      {/* </Stage> */}
    </Canvas>
  );
};

export default Experience;
