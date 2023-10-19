import React, { useEffect, useRef, useState } from "react";

import { Perf } from "r3f-perf";
import {
  DepthOfField,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import TiltShiftEffects from "./shaders/tiltshift.jsx";

// import { useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";
import { PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";
// import { OrthographicCamera } from "@react-three/drei";
import { Cloud } from "./Clouds.jsx";
import Day1 from "./days/Day1.jsx";
import Lights from "./Lights.jsx";

import Road from "./models/final/Road.jsx";
import { editable as e } from "@theatre/r3f";

import { useControls } from "leva";
import { Top } from "./models/final/Top.jsx";
import { Sides } from "./models/final/Sides.jsx";
import { Plane } from "./models/final/Plane.jsx";

import Day2 from "./days/Day2.jsx";
import Day3 from "./days/Day3.jsx";

// cam pos
// [-4.95, 3.216, 10.292]

const sequencePositions = {
  caveAndBasin: "3.16f",
};

const cloudTimeline = gsap.timeline({
  repeat: -1,
});

const animateCloud = (cloudRef, tl, cloudIndex) => {
  const info = {
    // Cloud 1
    1: {
      x: 1.7,
      y: 0.85,
      z: 1.3,
      duration: 35,
    },
  };

  tl.to(cloudRef.current.position, {
    x: info[cloudIndex].x,
    y: info[cloudIndex].y,
    z: info[cloudIndex].z,
    duration: info[cloudIndex].duration,
    ease: "none",
  });
};

const positions = {
  // Day 1:
  // caveAndBasin: [-4.4, 1.18, 2.75],
  caveAndBasin: [-4.5575, 1.05, 2.63],
  // gondola: [-4.7, 1.2, 2.88],
  gondola: [-4.69, 1.08, 2.859],
  // skyBistro: [-4.69, 1.13, 2.88],
  skyBistro: [-4.72, 1.13, 2.759],
  // banffUpperHotSprings: [-4.6, 1.2, 2.98],
  banffUpperHotSprings: [-4.69, 1.08, 2.859],
  // fairmontBanffSpringsHotel: [-4.5, 1.18, 2.8],
  fairmontBanffSpringsHotel: [-4.58, 1.05, 2.83],

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
  const cloudRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();

  const { focusDistance, focalLength, bokehScale } = useControls({
    focusDistance: {
      value: 0.0019,
      min: 0,
      max: 0.004,
      step: 0.0001,
    },
    focalLength: {
      value: 0.0013,
      min: 0,
      max: 0.004,
      step: 0.0001,
    },
    bokehScale: {
      value: 10,
      min: 0,
      max: 10,
      step: 0.1,
    },
  });

  useEffect(() => {
    if (props.index === 0 && props.started) {
      setTimeout(() => {
        animateCloud(cloudRef, cloudTimeline, 1);
      }, props.animDuration + 4 * 1000);
    }
  }, [props.index, props.started]);

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
  //     step: 0.01,
  //   },
  //   cloudPosY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //     step: 0.01,
  //   },
  //   cloudPosZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //     step: 0.01,
  //   },
  // });

  // const { cloudScale } = useControls({
  //   cloudScale: {
  //     value: 0.1,
  //     min: 0,
  //     max: 1,
  //     step: 0.01,
  //   },
  // });

  // const { fov } = useControls({
  //   fov: {
  //     value: 55,
  //     min: 0,
  //     max: 100,
  //   },
  // });

  /*
  camera stop 1
  position: -4.76148947700402, 4.028310067018445, 9.902280289701652
  rotation: -0.8278370080610934, -0.2551005789449138, -0.35099999999999976
  -4.949944894060301, 3.2146815523137304, 10.292633697035237
  -0.6078282406989428, -0.3810426971585241, 0.025860845931176678
  
  */

  return (
    <>
      <Environment
        background
        files={"/textures/industrial_sunset_02_puresky_4k.hdr"}
        intensity={2}
      />
      {/* <OrbitControls
        autoRotate={false}
        // position={cameraPosition}
        position={[0, 93, 5]}
        // rotation={cameraRotation}
        rotation={[-1.5707963267948966, 0, 0]}
        makeDefault={true}
        onChange={(e) => {
          const camera = e.target?.object;
          if (!camera) return;
          console.log(camera.position.toArray());
          console.log(camera.rotation.toArray());
        }}
      /> */}
      <PerspectiveCamera
        makeDefault={true}
        // ref={cameraRef}
        theatreKey={"Camera"}
        // position={cameraPosition}
        // position={[-5.556886117263388, 2.2545368113625175, 4.006921809660271]}

        position={[-5.163108645819346, 1.8345992465293988, 3.97]}
        rotation={[
          -0.7210839965680563, -0.5792947129698445, -0.448484711027097,
        ]}
        // rotation={[
        //   -0.9008592132041057, -0.7267918559588127, -0.6979696508548812,
        // ]}
        // position={[cameraPositionX, cameraPositionY, cameraPositionZ]}
        // rotation={cameraRotation}
        // lookAt={lookAtRef}

        zoom={1}
      />

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

      <Lights index={props.index} />

      <Perf position="bottom-left" />
      <e.group theatreKey="Scene" ref={sceneRef}>
        {/* Day 1 */}
        <Day1 positions={positions} sceneIndex={props.index} />

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
        */}

        <e.group theatreKey="Banff Cloud 2" ref={cloudRef}>
          <Cloud
            // works scale = -0.03
            // works position = [-2.7, 0.85, 2.30]
            //
            scale={0.03}
            // scale={cloudScale}
            //  position={[-0.8, 1.5, 2.6]}
            position={[-2.7, 0.85, 2.3]}
            // position={[cloudPosX, cloudPosY, cloudPosZ]}
          />
        </e.group>

        <e.group theatreKey="Banff Cloud 1">
          <Cloud scale={0.08} position={[-4.8, 1.6, 5.4]} />
        </e.group>

        {/* <e.group time={0} ref={roadRef} theatreKey="MIKE TEST"> */}
        {/* <Road
          currDay={props.currDay}
          // pauses={props.pauses}
          // pauseDuration={props.pauseDuration}
          // destinations={props.destinations}
          project={props.project}
        /> */}
        {/* </e.group> */}
        {/* <LocationPin index={index} /> */}
        <Road />
        <Top />
        <Sides />
        <Plane />
      </e.group>
      <EffectComposer>
        <DepthOfField
          focusDistance={focusDistance} // where to focus
          focalLength={focalLength} // focal length
          bokehScale={bokehScale} // bokeh size
        />
      </EffectComposer>
    </>
  );
};

export default Scene;
