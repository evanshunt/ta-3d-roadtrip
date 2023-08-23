import { Canvas } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import React from "react";
import Scene from "./Scene";
import { ScrollControls } from "@react-three/drei";
import { SheetProvider } from "@theatre/r3f";
import * as THREE from "three";
import animation from "./animation-data/animation.json";
// import saved json if wanted
// const flyThroughState = null;

const Experience = () => {
  const sheet = getProject("TA Fly Through", { state: animation }).sheet(
    "Scene"
  );
  // const sheet = null;
  // uncomment to use saved data

  return (
    <Canvas
      shadows
      orthographic
      gl={{
        antialias: true,
        preserveDrawingBuffer: true,
        shadowMapEnabled: true,
        shadowMapType: THREE.PCFSoftShadowMap,
      }}
    >
      <ScrollControls pages={3}>
        <SheetProvider sheet={sheet}>
          <Scene />
        </SheetProvider>
      </ScrollControls>
    </Canvas>
  );
};

export default Experience;
