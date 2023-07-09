import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import Scene from "./Scene.jsx";
// import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { getProject } from "@theatre/core";
import { SheetProvider } from "@theatre/r3f";
import flyThroughState from "../public/simple-animation.json";

const Experience = () => {
  const sheet = getProject("TA Fly Through", { state: flyThroughState }).sheet(
    "Scene"
  );

  return (
    <Canvas
      shadows
      gl={{
        preserveDrawingBuffer: true,
      }}
    >
      <color args={["#111"]} attach={"background"} />
      <Perf position="bottom-left" />
      {/* <OrbitControls makeDefault={true} /> */}
      {/* <CameraControls ref={cameraControls} /> */}

      <ScrollControls pages={3}>
        <SheetProvider sheet={sheet}>
          <Scene />
        </SheetProvider>
      </ScrollControls>
    </Canvas>
  );
};

export default Experience;
