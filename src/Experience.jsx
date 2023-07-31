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
  Stage,
  TransformControls,
} from "@react-three/drei";

import Lights from "./Lights.jsx";
import IceFields from "./models/IceFields.jsx";
import imageSource from "/hover-icon.png";
import Road from "./models/Road.jsx";

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
  const positions = {
    banffUpperHotSprings: [5.3, 0.45, 5.81261631018495],
    caveAndBasin: [4.803562672316764, 0.38, 5.51583179169875],
    discoverBanffTours: [4.957273213327903, 0.25, 5.254568637726107],
    gondola: [5.358368436662257, 0.33, 5.634275247444896],
    minnewankaCruise: [5.499478426406048, 0.33, 4.519515423876151],
  };
  return (
    <Canvas
      shadows
      camera={{
        position: [5, 7, 9],
        fov: 50,
      }}
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

      <LocationPin
        castShadow
        name={"Banff Upper Hot Springs"}
        position={positions.banffUpperHotSprings}
      />

      <LocationPin
        name={"Cave and Basin National Historic Site"}
        castShadow
        position={positions.caveAndBasin}
      />

      {/* <TransformControls
        onObjectChange={(e) => console.log(e.target.object.position)}
        mode={"translate"}
        position={positions.discoverBanffTours}
      > */}
      <LocationPin
        name={"Discover Banff Tours"}
        castShadow
        position={positions.discoverBanffTours}
      />
      {/* </TransformControls> */}

      <LocationPin
        name={"Banff Gondola"}
        castShadow
        position={positions.gondola}
      />

      <LocationPin
        name={"Lake Minnewanka Cruise"}
        castShadow
        position={positions.minnewankaCruise}
      />

      <Road />
      <IceFields />

      {/* <TiltShiftEffects /> */}
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
