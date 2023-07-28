import * as THREE from "three";
import { createRoot } from "react-dom/client";
import React, { useEffect, useRef, useState } from "react";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
// import {
//   DepthOfField,
//   EffectComposer,
//   ToneMapping,
// } from "@react-three/postprocessing";
import TiltShiftEffects from "./shaders/tiltshift.jsx";
import LocationPin from "./models/LocationPin.jsx";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Billboard,
  Environment,
  Image,
  OrbitControls,
  PerspectiveCamera,
  Plane,
  Stage,
  TransformControls,
} from "@react-three/drei";

import Lights from "./Lights.jsx";
import IceFields from "./models/IceFields.jsx";
import imageSource from "/hover-icon.png";

const Camera = (props) => {
  const ref = useRef();
  const set = useThree((state) => state.set);
  useEffect(() => {
    void set({ camera: ref.current });
    ref.current.lookAt(0, 0, 0), [];
  });
  useFrame(() => ref.current.updateMatrixWorld());
  return (
    <perspectiveCamera
      ref={ref}
      {...props}
      fov={50}
      manual={false}
      onUpdate={(c) => c.updateProjectionMatrix()}
    />
  );
};

const App = () => {
  // const { cameraX, cameraY, cameraZ, fov } = useControls({
  //   cameraX: {
  //     min: -30,
  //     max: 30,
  //     value: 4.2,
  //   },
  //   cameraY: {
  //     min: -30,
  //     max: 30,
  //     value: 9.0,
  //   },
  //   cameraZ: {
  //     min: -30,
  //     max: 30,
  //     value: 8.4,
  //   },
  //   fov: {
  //     min: 0,
  //     max: 100,
  //     value: 50,
  //   },
  // });
  // const { focusDistance, focalLength, bokehScale } = useControls({
  //   focusDistance: {
  //     min: 0,
  //     max: 4,
  //     value: 2,
  //   },
  //   focalLength: {
  //     min: 0,
  //     max: 1,
  //     value: 0.1,
  //   },
  //   bokehScale: {
  //     min: 0,
  //     max: 10,
  //     value: 2,
  //   },
  // });
  return (
    <Canvas
      shadows
      gl={{
        antialias: true,
        shadowMapEnabled: true,
        shadowMapType: THREE.PCFSoftShadowMap,
        shadowMapDebug: true,
      }}
    >
      {/* <Camera position={[cameraX, cameraY, cameraZ]} fov={fov} /> */}

      <OrbitControls autoRotate={false} makeDefault={true} />
      <Lights />
      <Perf position="top-left" />
      {/* <Stage adjustCamera={true}> */}

      {/* <TransformControls
        onObjectChange={(e) => console.log(e.target.object.position)}
        mode={"translate"}
        position={[0, 0.75, 0]}
      > */}
      <LocationPin
        name={"Banff"}
        position={[-0.38338213593290904, 0.5, 1.593643435102435]}
      />

      <LocationPin
        castShadow
        receiveShadow
        name={"Banff Gondola"}
        position={[-0.8333524591253359, 0.5, 1.3565714314121025]}
      />
      <LocationPin
        name={"Banff Upper Hot Springs"}
        position={[-0.2333524591253359, 0.5, 1.3565714314121025]}
      />

      <IceFields />

      <TiltShiftEffects />
      {/* <EffectComposer>
        <DepthOfField
          focusDistance={focusDistance}
          focalLength={focalLength}
          bokehScale={bokehScale}
        />
      </EffectComposer> */}
      {/* </Stage> */}
    </Canvas>
  );
};

createRoot(document.getElementById("root")).render(<App />);
