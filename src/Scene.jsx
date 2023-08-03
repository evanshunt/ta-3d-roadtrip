import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
// import { useControls } from "leva";
import { Perf } from "r3f-perf";
// import {
//   DepthOfField,
//   EffectComposer,
//   ToneMapping,
// } from "@react-three/postprocessing";
import TiltShiftEffects from "./shaders/tiltshift.jsx";
import LocationPin from "./models/LocationPin.jsx";
import { useFrame } from "@react-three/fiber";
import {
  // Billboard,
  // Environment,
  // Image,
  OrbitControls,
  Stage,
  useScroll,
  // TransformControls,
} from "@react-three/drei";
import { val } from "@theatre/core";
import { OrthographicCamera, useCurrentSheet } from "@theatre/r3f";
import Lights from "./Lights.jsx";
import IceFields from "./models/IceFields.jsx";
import Plane from "./models/Plane.jsx";
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

  // useEffect(() => {
  //   void set({ camera: ref.current });
  //   ref.current.updateMatrixWorld();
  //   ref.current.lookAt(positions.caveAndBasin); //@TODO: function to look at different pins as we scroll
  //   // @TODO: function to tweak the tiltshift as we scroll
  //   // ref.current.lookAt(0, 0, -20);
  //   // ref.current.lookAt(0, 0, 0), [];
  // }, []);
  // useFrame(() => {
  //   ref.current.updateMatrixWorld();
  //   // ref.current.lookAt(0, 0, -20);
  // });

  return (
    <orthographicCamera
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

const Scene = () => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(({ clock }) => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  return (
    <>
      {/* Animating the terrain mesh may be the way to do this */}
      <OrthographicCamera
        makeDefault
        theatreKey={"Camera"}
        near={-100}
        zoom={115}
        position={[1.25, 0.35, 0.23]}
        // rotation={[-0.3, 1, 0.23]}
      />

      <OrbitControls
        autoRotate={false}
        makeDefault={false}
        onUpdate={(e) => console.log(e)}
      />

      <Lights />

      <Perf position="bottom-right" />

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

      <Plane />

      <TiltShiftEffects />
      {/* <EffectComposer>
        <DepthOfField
          focusDistance={focusDistance}
          focalLength={focalLength}
          bokehScale={bokehScale}
        />
      </EffectComposer> */}
      {/* </Stage> */}
    </>
  );
};

export default Scene;
