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
  // Billboard,
  // Environment,
  // Image,
  OrbitControls,
  OrthographicCamera,
  Stage,
  // TransformControls,
} from "@react-three/drei";

import Lights from "./Lights.jsx";
import IceFields from "./models/IceFields.jsx";
import Road from "./models/Road.jsx";

const positions = {
  // Banff Pins:
  banffUpperHotSprings: [5.3, 0.45, 5.81261631018495],
  caveAndBasin: [4.803562672316764, 0.38, 5.51583179169875],
  discoverBanffTours: [4.957273213327903, 0.25, 5.254568637726107],
  gondola: [5.358368436662257, 0.33, 5.634275247444896],
  minnewankaCruise: [5.499478426406048, 0.33, 4.519515423876151],
  // Lake Louise Pins:
  moraineLake: [1.7, 0.4, 3.3],
  lakeAgnesTeaHouse: [1.4, 0.5, 3.1],
  lakeLouiseSkiResort: [1.9, 0.4, 2.8],
  fairmontChateauLakeLouise: [1.5, 0.4, 3.15],
  // Icefields Pins:
  columbiaIcefieldGlacierAdventure: [-2.8, 0.4, -3.2],
  columbiaIcefieldSkywalk: [-2.75, 0.35, -3.25],
};

const Camera = (props) => {
  const ref = useRef();
  const set = useThree((state) => state.set);
  useEffect(() => {
    void set({ camera: ref.current });
    ref.current.updateMatrixWorld();
    ref.current.lookAt(positions.caveAndBasin); //@TODO: function to look at different pins as we scroll
    // @TODO: function to tweak the tiltshift as we scroll
    // ref.current.lookAt(0, 0, -20);
    // ref.current.lookAt(0, 0, 0), [];
  }, []);
  useFrame(() => {
    ref.current.updateMatrixWorld();
    // ref.current.lookAt(0, 0, -20);
  });
  return (
    <orthographicCamera
      ref={ref}
      makeDefault
      zoom={fov}
      {...props}
      position={[0, 0, 100]}
      onUpdate={(c) => c.updateProjectionMatrix()}
    />
    // <perspectiveCamera
    //   ref={ref}
    //   {...props}
    //   // fov={50}
    //   manual={false}
    //   // makeDefault={true}
    //   onUpdate={(c) => c.updateProjectionMatrix()}
    // />
  );
};

const App = () => {
  // const {
  //   cameraX,
  //   cameraY,
  //   cameraZ,
  //   fov,
  //   top,
  //   left,
  //   bottom,
  //   right,
  //   near,
  //   far,
  // } = useControls({
  //   cameraX: {
  //     min: -20,
  //     max: 20,
  //     value: 10,
  //   },
  //   cameraY: {
  //     min: 0,
  //     max: 20,
  //     value: 8,
  //   },
  //   cameraZ: {
  //     min: -20,
  //     max: 20,
  //     value: 10,
  //   },
  //   fov: {
  //     min: 0,
  //     max: 180,
  //     value: 50,
  //   },
  //   top: {
  //     min: -2,
  //     max: 2,
  //     value: 1,
  //     step: 0.1,
  //   },
  //   bottom: {
  //     min: -2,
  //     max: 2,
  //     value: -1,
  //     step: 0.1,
  //   },
  //   left: {
  //     min: -2,
  //     max: 2,
  //     value: -1,
  //   },
  //   right: {
  //     min: -2,
  //     max: 2,
  //     value: 1,
  //   },
  //   near: {
  //     min: -1,
  //     max: 1,
  //     value: 0.1,
  //   },
  //   far: {
  //     min: 0,
  //     max: 20,
  //     value: 10,
  //   },
  //   z: {
  //     min: -2,
  //     max: 2,
  //     value: 1,
  //     step: 0.01,
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
      orthographic
      // camera={{
      //   position: [5, 7, 9],
      //   fov: 50,
      // }}
      gl={{
        antialias: true,
        shadowMapEnabled: true,
        shadowMapType: THREE.PCFSoftShadowMap,
        shadowMapDebug: true,
      }}
    >
      {/* <Camera
        // position={[10, 3, 7.5]}
        // position={[cameraX, cameraY, cameraZ]}
        // fov={fov}
        top={top}
        bottom={bottom}
        left={left}
        right={right}
        near={near}
        far={far}
      /> */}
      <OrthographicCamera
        makeDefault
        // left={-2}
        // right={2}
        // top={2}
        // bottom={-2}
        near={-10}
        // far={50}
        zoom={125}
        // position={[7.5, 2.25, 2.5]}
        position={[10, 2.5, 7]}
        onUpdate={(c) => c.updateProjectionMatrix()}
      />

      <OrbitControls
        autoRotate={false}
        makeDefault={false}
        onUpdate={(e) => console.log(e)}
      />
      <Lights />
      <Perf position="top-left" />
      {/* <Stage adjustCamera={true}> */}

      {/* Banff Pins */}
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

      <LocationPin
        name={"Discover Banff Tours"}
        castShadow
        position={positions.discoverBanffTours}
      />

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

      {/* Lake Louise Pins */}
      <LocationPin
        name={"Moraine Lake"}
        castShadow
        position={positions.moraineLake}
      />

      <LocationPin
        name={"Lake Agnes Tea House"}
        castShadow
        position={positions.lakeAgnesTeaHouse}
      />

      <LocationPin
        name={"Lake Louise Ski Resort"}
        castShadow
        position={positions.lakeLouiseSkiResort}
      />

      <LocationPin
        name={"Fairmont Chateau Lake Louise"}
        castShadow
        position={positions.fairmontChateauLakeLouise}
      />

      {/* 3. Ice Fields Pins */}
      <LocationPin
        name={"Columbia Icefield Glacier Adventure"}
        castShadow
        position={positions.columbiaIcefieldGlacierAdventure}
      />

      <LocationPin
        name={"Columbia Icefield Skywalk"}
        castShadow
        position={positions.columbiaIcefieldSkywalk}
      />

      <Road />
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
