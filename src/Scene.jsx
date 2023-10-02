import React, { useRef, useState } from "react";

import { Perf } from "r3f-perf";
// import {
//   DepthOfField,
//   EffectComposer,
//   ToneMapping,
// } from "@react-three/postprocessing";
import TiltShiftEffects from "./shaders/tiltshift.jsx";

// import { useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useScroll } from "@react-three/drei";
import { val } from "@theatre/core";
import { PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";
// import { OrthographicCamera } from "@react-three/drei";
import { Cloud } from "./Clouds.jsx";
import Day1 from "./days/Day1.jsx";
import Lights from "./Lights.jsx";
import Road from "./models/Road.jsx";
import RoadThicc from "./models/final/Road.jsx";
import { editable as e } from "@theatre/r3f";
import ImagePin from "./models/ImagePin.jsx";
import { useControls } from "leva";
import { Top } from "./models/final/Top.jsx";
import { Sides } from "./models/final/Sides.jsx";
import { Plane } from "./models/final/Plane.jsx";
import FancyPin from "./models/final/FancyPin.jsx";
import Day2 from "./days/Day2.jsx";
import Day3 from "./days/Day3.jsx";
import LocationPin from "./models/final/LocationPin.jsx";

const positions = {
  // Day 1:
  caveAndBasin: [-4.4, 1.18, 2.75],
  gondola: [-4.7, 1.2, 2.88],
  skyBistro: [-4.7, 1.2, 2.88],
  banffUpperHotSprings: [-4.6, 1.2, 2.98],
  fairmontBanffSpringsHotel: [-4.5, 1.18, 2.8],

  // Day 2:
  carterRyanGallery: [-4.3, 1.16, 2.88],
  johnstonCanyon: [-4.0, 1.16, 1.88],
  lakeLouiseGondola: [-2.9, 1.2, 0.73],
  fairmontChateauLakeLouise: [-3.1, 1.18, 0.57],
  fairview: [-3.1, 1.18, 0.57],

  // Day 3:
  columbiaIcefieldSkywalk: [1.63, 1.25, -2.9],
  maligneCanyon: [5.3, 1.14, -5.5],
  jasperSkyTram: [5.18, 1.13, -6.1],
  fairmontJasperParkLodge: [5.4, 1.15, -5.6],
  jasperPlanetarium: [5.4, 1.15, -5.6],
};

const Scene = (props) => {
  const [cameraPosition, setCameraPosition] = useState([0, 93, 5]);
  const [cameraRotation, setCameraRotation] = useState([-Math.PI / 2, 0, 0]);

  const sceneRef = useRef();
  const cameraRef = useRef();

  // const { cameraPositionX, cameraPositionY, cameraPositionZ } = useControls({
  //   cameraPositionX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   cameraPositionY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   cameraPositionZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  // });

  // const { cloudPosX, cloudPosY, cloudPosZ } = useControls({
  //   cloudPosX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   cloudPosY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   cloudPosZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  // });

  const { fov } = useControls({
    fov: {
      value: 55,
      min: 0,
      max: 100,
    },
  });

  /*
  camera stop 1
  position: -4.76148947700402, 4.028310067018445, 9.902280289701652
  rotation: -0.8278370080610934, -0.2551005789449138, -0.35099999999999976
  
  */

  return (
    <>
      <Environment
        background
        files={"/textures/industrial_sunset_02_puresky_4k.hdr"}
        intensity={2}
      />
      <OrbitControls
        autoRotate={false}
        position={cameraPosition}
        rotation={cameraRotation}
        makeDefault={true}
        // onChange={(e) => {
        //   const camera = e.target?.object;
        //   if (!camera) return;

        //   setCameraPosition(camera.position.toArray());
        //   setCameraRotation(camera.rotation.toArray());
        //   console.log(cameraPosition, cameraRotation);
        // }}
      />
      {/* <PerspectiveCamera
        makeDefault={true}
        // ref={cameraRef}
        theatreKey={"Camera"}
        position={cameraPosition}
        // position={[cameraPositionX, cameraPositionY, cameraPositionZ]}
        fov={fov}
        rotation={cameraRotation}
        // lookAt={lookAtRef}
        zoom={1}
      /> */}

      {/* <OrthographicCamera
        makeDefault
        // theatreKey={"Camera"}
        near={-100}
        zoom={162}
        ref={cameraRef}
        // position={[1.25, 0.35, 0.23]}
        // position={[0.9344612217659182, 0.3561940392504276, 0.8589575259686614]}
        position={[0.95, -2, 0.85]}
        // rotation={[-0.3, 1, 0.23]}
        // rotation={[-0.3930986676881526, 0.7878538812997019, 0.285891145681874]}
        rotation={[-0.59, 0.74, 0.41]}
      /> */}

      <Lights />

      {/* <Perf position="bottom-right" /> */}
      <e.group theatreKey="Scene" ref={sceneRef}>
        {/* Day 1 */}
        <Day1 positions={positions} />

        {/* Day 2 */}
        {/* <Day2 positions={positions} /> */}

        {/* Day 3 */}
        {/* <Day3 positions={positions} /> */}

        {/* <e.group theatreKey="Lake Louise Cloud 2">
          <Cloud scale={0.2} position={[-2, 3.1, 3]} />
        </e.group>

        <e.group theatreKey="Lake Louise Cloud">
          <Cloud scale={0.3} position={[2, 3, -4.75]} />
        </e.group>

        <e.group theatreKey="Banff Cloud 2">
          <Cloud scale={0.1} position={[-0.8, 1.5, 2.6]} />
        </e.group>

        <e.group theatreKey="Banff Cloud 1">
          <Cloud scale={0.08} position={[-4.8, 1.6, 5.4]} />
        </e.group> */}

        {/* <e.group time={0} ref={roadRef} theatreKey="MIKE TEST"> */}
        {/* <Road
          currDay={props.currDay}
          // pauses={props.pauses}
          // pauseDuration={props.pauseDuration}
          // destinations={props.destinations}
          project={props.project}
        /> */}
        {/* </e.group> */}
        <LocationPin />
        <RoadThicc />
        <Top />
        <Sides />
        <Plane />
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
