import React, { useRef, useState } from "react";

import { Perf } from "r3f-perf";
// import {
//   DepthOfField,
//   EffectComposer,
//   ToneMapping,
// } from "@react-three/postprocessing";
import TiltShiftEffects from "./shaders/tiltshift.jsx";
import LocationPin from "./models/LocationPin.jsx";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, useScroll } from "@react-three/drei";
import { val } from "@theatre/core";
import { PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";
import { Cloud } from "./Clouds.jsx";
import Edges from "./models/Edges.jsx";
import Lights from "./Lights.jsx";
import IceFieldsDecimated from "./models/IceFieldsDecimated.jsx";
import Road from "./models/Road.jsx";
import FancyPin from "./models/FancyPin.jsx";
import { useControls } from "leva";
import PlaneDecimated from "./models/PlaneDecimated.jsx";
import { editable as e } from "@theatre/r3f";

const positions = {
  // Banff Pins:
  // banffUpperHotSprings: [5.3, 0.45, 5.81261631018495],
  banffUpperHotSprings: [1.8, 0.4, 4.8],
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

const Scene = () => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();
  const lookAtRef = useRef();

  useFrame(({ clock }) => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  // const { scale, positionX, positionY, positionZ } = useControls({
  //   scale: {
  //     value: 0.2,
  //     min: 0.1,
  //     max: 1,
  //     step: 0.1,
  //   },
  //   positionX: {
  //     value: -2,
  //     min: -5,
  //     max: 10,
  //     step: 0.25,
  //   },
  //   positionY: {
  //     value: 2.75,
  //     min: 0,
  //     max: 10,
  //     step: 0.25,
  //   },
  //   positionZ: {
  //     value: 3,
  //     min: -5,
  //     max: 10,
  //     step: 0.25,
  //   },
  // });

  // const {
  //   fov,
  //   positionX,
  //   positionY,
  //   positionZ,
  //   rotationX,
  //   rotationY,
  //   rotationZ,
  //   zoom,
  // } = useControls({
  //   fov: {
  //     value: 50,
  //     min: 0,
  //     max: 100,
  //     step: 1,
  //   },
  //   positionX: {
  //     value: 0.01,
  //     min: -20,
  //     max: 20,
  //     step: 0.025,
  //   },
  //   positionY: {
  //     value: 15,
  //     min: 0,
  //     max: 25,
  //     step: 0.025,
  //   },
  //   positionZ: {
  //     value: 0,
  //     min: -20,
  //     max: 20,
  //     step: 0.025,
  //   },
  //   zoom: {
  //     value: 162,
  //     min: -100,
  //     max: 2000,
  //     step: 1,
  //   },
  //   rotationX: {
  //     value: -0.59,
  //     min: -5,
  //     max: 10,
  //     step: 0.025,
  //   },
  //   rotationY: {
  //     value: 0.74,
  //     min: 0,
  //     max: 10,
  //     step: 0.025,
  //   },
  //   rotationZ: {
  //     value: 0.41,
  //     min: -5,
  //     max: 10,
  //     step: 0.025,
  //   },
  // });

  // const { cloudPositionX, cloudPositionY, cloudPositionZ, cloudScale } =
  //   useControls("Cloud1", {
  //     cloudPositionX: {
  //       value: -2,
  //       min: -5,
  //       max: 10,
  //       step: 0.25,
  //     },
  //     cloudPositionY: {
  //       value: 2.75,
  //       min: 0,
  //       max: 10,
  //       step: 0.25,
  //     },
  //     cloudPositionZ: {
  //       value: 3,
  //       min: -5,
  //       max: 10,
  //       step: 0.25,
  //     },
  //     cloudScale: {
  //       value: 0.2,
  //       min: 0.05,
  //       max: 1,
  //       step: 0.01,
  //     },
  //   });

  return (
    <>
      {/* Animating the terrain mesh may be the way to do this. E: NOPE */}
      <PerspectiveCamera
        makeDefault
        theatreKey={"Camera"}
        position={[0, 23, 0]}
        fov={55}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        // lookAt={lookAtRef}
        zoom={1}
      />

      {/* <OrthographicCamera
        makeDefault
        theatreKey={"Camera"}
        near={-100}
        zoom={162}
        // position={[1.25, 0.35, 0.23]}
        // position={[0.9344612217659182, 0.3561940392504276, 0.8589575259686614]}
        position={[0.95, -2, 0.85]}
        // rotation={[-0.3, 1, 0.23]}
        // rotation={[-0.3930986676881526, 0.7878538812997019, 0.285891145681874]}
        rotation={[-0.59, 0.74, 0.41]}
      /> */}

      {/* <OrbitControls
        autoRotate={false}
        makeDefault={false}
        onUpdate={(e) => console.log(e)}
      /> */}

      <Lights />

      <Perf position="bottom-right" />
      <e.group theatreKey="Scene">
        {/* Banff Pins */}
        <FancyPin
          castShadow
          name={"Banff Upper Hot Springs"}
          position={positions.banffUpperHotSprings}
          // position={[positionX, positionY, positionZ]}
        />

        {/* <FancyPin
          name={"Cave and Basin National Historic Site"}
          castShadow
          position={positions.caveAndBasin}
        />

        <FancyPin
          name={"Discover Banff Tours"}
          castShadow
          position={positions.discoverBanffTours}
        />

        <FancyPin
          name={"Banff Gondola"}
          castShadow
          position={positions.gondola}
        />

        <FancyPin
          name={"Lake Minnewanka Cruise"}
          castShadow
          position={positions.minnewankaCruise}
        /> */}

        {/* Lake Louise Pins */}
        {/* <FancyPin
          name={"Moraine Lake"}
          castShadow
          position={positions.moraineLake}
        />

        <FancyPin
          name={"Lake Agnes Tea House"}
          castShadow
          position={positions.lakeAgnesTeaHouse}
        />

        <FancyPin
          name={"Lake Louise Ski Resort"}
          castShadow
          position={positions.lakeLouiseSkiResort}
        />

        <FancyPin
          name={"Fairmont Chateau Lake Louise"}
          castShadow
          position={positions.fairmontChateauLakeLouise}
        /> */}

        {/* 3. Ice Fields Pins */}
        {/* <FancyPin
          name={"Columbia Icefield Glacier Adventure"}
          castShadow
          position={positions.columbiaIcefieldGlacierAdventure}
        />

        <FancyPin
          name={"Columbia Icefield Skywalk"}
          castShadow
          position={positions.columbiaIcefieldSkywalk}
        /> */}

        {/* <Cloud
        scale={cloudScale}
        position={[cloudPositionX, cloudPositionY, cloudPositionZ]}
      /> */}

        <Cloud scale={0.15} position={[4, 1.75, 3]} />

        <e.group theatreKey="Banff Cloud 1">
          <Cloud scale={0.08} position={[2, 1.5, 6]} />
        </e.group>

        <Road />

        <IceFieldsDecimated />

        <Edges />

        <PlaneDecimated />
      </e.group>

      <TiltShiftEffects />
      {/* <EffectComposer>
        <DepthOfField
          focusDistance={focusDistance}
          focalLength={focalLength}
          bokehScale={bokehScale}
        />
      </EffectComposer> */}
    </>
  );
};

export default Scene;
