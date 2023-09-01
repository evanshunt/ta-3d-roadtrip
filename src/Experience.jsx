import { Canvas } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import React from "react";
import Scene from "./Scene";
import { ScrollControls, SoftShadows } from "@react-three/drei";
import { SheetProvider } from "@theatre/r3f";
import * as THREE from "three";
import animation from "./animation-data/animation.json";

// import saved json if wanted
// const animation = null;

const Experience = () => {
  const sheet = getProject("TA Fly Through", { state: animation }).sheet(
    "Scene"
  );
  // const sheet = null;
  // uncomment to use saved data

  const pauses = [0.385, 0.775];

  const pauseDuration = 0.15;
  // let scrollDirection = "down";

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
      <SoftShadows size={2.5} focus={0.8} samples={10} />
      <ScrollControls pages={3}>
        <SheetProvider sheet={sheet}>
          <Scene pauses={pauses} pauseDuration={pauseDuration} />
        </SheetProvider>
      </ScrollControls>
    </Canvas>
  );
};

export default Experience;
