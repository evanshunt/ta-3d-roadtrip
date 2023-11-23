import React, { useRef } from "react";
import * as THREE from "three";
import { Cloud } from "./Clouds.jsx";
// import {
//   DepthOfField,
//   EffectComposer,
//   TiltShift2,
// } from "@react-three/postprocessing";
import { editable as e } from "@theatre/r3f";
import EditableCamera from "./EditableCamera.jsx";
// import { Environment, Lightformer, OrbitControls } from "@react-three/drei";

import Lights from "./Lights.jsx";
// import { Perf } from "r3f-perf";
import Road from "./models/final/Road.jsx";
// import { types } from "@theatre/core";
// import { useFrame } from "@react-three/fiber";
// import { useControls } from "leva";

import TopAltAgain from "./models/final/TopAltAgain.jsx";

import Day1 from "./days/Day1.jsx";
import Day2 from "./days/Day2.jsx";
import Day3 from "./days/Day3.jsx";
import { Clouds } from "@react-three/drei";
// import HTMLInfo from "./components/HTMLInfo.jsx";

// @TODO: move this into the data json from Experience.jsx
const positions = {
  // Day 1:
  // caveAndBasin: [-4.4, 1.18, 2.75],
  caveAndBasin: [-4.5575, 1.05, 2.63],
  // gondola: [-4.7, 1.2, 2.88],
  gondola: [-4.69, 1.085, 2.859],
  // skyBistro: [-4.69, 1.13, 2.88],
  skyBistro: [-4.69, 1.13, 2.759],
  // banffUpperHotSprings: [-4.6, 1.2, 2.98],
  // banffUpperHotSprings: [-4.69, 1.08, 2.859],
  banffUpperHotSprings: [-4.63, 1.075, 2.83],
  // fairmontBanffSpringsHotel: [-4.5, 1.18, 2.8],
  fairmontBanffSpringsHotel: [-4.58, 1.075, 2.83],

  // Day 2:
  carterRyanGallery: [-4.55, 1.075, 2.83],
  johnstonCanyon: [-4.0, 1.16, 1.88],
  lakeLouiseGondola: [-3.05, 1.1, 0.73],
  fairmontChateauLakeLouise: [-3.2, 1.1, 0.61],
  fairview: [-3.2, 1.11, 0.57],

  // Day 3:
  columbiaIcefieldSkywalk: [1.65, 1.1, -3.2],
  maligneCanyon: [5.4, 1.05, -5.6],
  jasperSkyTram: [5.0, 1.05, -6.0],
  fairmontJasperParkLodge: [5.35, 1.08, -5.7],
  jasperPlanetarium: [5.4, 1.06, -5.65],
};

// Reused geometries and materials
THREE.ColorManagement.legacyMode = false;
const circleGeom = new THREE.CircleGeometry(0.8, 32);
const redMaterial = new THREE.MeshBasicMaterial({
  color: 0x9c0f00,
});

const Scene = (props) => {
  const sceneRef = useRef();

  // const { altTop } = useControls({
  //   altTop: {
  //     value: false,
  //   },
  // });

  // const { focusDistance, focalLength, bokehScale } = useControls({
  //   focusDistance: {
  //     value: 0.12,
  //     min: 0.08,
  //     max: 0.15,
  //     step: 0.001,
  //   },
  //   focalLength: {
  //     value: 0.085,
  //     min: 0,
  //     max: 0.15,
  //     step: 0.001,
  //   },
  //   bokehScale: {
  //     value: 10,
  //     min: 0,
  //     max: 10,
  //     step: 0.1,
  //   },
  // });

  // useFrame((e) => {
  //   if (e.clock.elapsedTime > props.animDuration - 0.75) {
  //     setAddEffect(true);
  //   }
  // });

  // useEffect(() => {
  //   if (addEffect) return;

  //   setTimeout(() => {
  //     setAddEffect(true);
  //     gsap.to(dofProps, {
  //       bokehScale: 6,
  //       duration: 6,
  //     });
  //     console.log("hickup here?");
  //   }, props.animDuration + 4 * 1000);
  // }, [hasStarted]);

  // useFrame((e) => {
  //   // if (e.clock.elapsedTime > props.animDuration) {
  //   //   setAddEffect(true);
  //   // }
  //   if (hasStarted) return;

  //   if (e.clock.elapsedTime > props.animDuration - 1) {
  //     setHasStarted(true);
  //     animateCloud(cloudRef, cloudTimeline, 1);
  //   }
  //   //@TODO: use e.clock.elapsedTime to start the animation
  //   // if (props.index === 0 && props.started) {
  //   //   setTimeout(() => {
  //   //     console.log("im firing the cloud timeout");

  //   //   }, props.animDuration + 4 * 1000);
  //   // }
  // });

  // const { day1PosX, day1PosY, day1PosZ } = useControls({
  //   day1PosX: {
  //     value: 0,
  //     min: -1,
  //     max: 1,
  //     step: 0.01,
  //   },
  //   day1PosY: {
  //     value: 0,
  //     min: -1,
  //     max: 1,
  //     step: 0.01,
  //   },
  //   day1PosZ: {
  //     value: 0,
  //     min: -1,
  //     max: 1,
  //     step: 0.01,
  //   },
  // });

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

  //-4.8, 1.6, 5.4]
  // -3.1, 1.76, 2.07
  // const { cloudPosX, cloudPosY, cloudPosZ, cloudScale } = useControls(
  //   "Cloud Lake Louise",
  //   {
  //     cloudPosX: {
  //       value: -3.1,
  //       min: -10,
  //       max: 10,
  //       step: 0.01,
  //     },
  //     cloudPosY: {
  //       value: 1.76,
  //       min: -10,
  //       max: 10,
  //       step: 0.01,
  //     },
  //     cloudPosZ: {
  //       value: 2.07,
  //       min: -10,
  //       max: 10,
  //       step: 0.01,
  //     },
  //     cloudScale: {
  //       value: 0.1,
  //       min: 0.01,
  //       max: 0.3,
  //       step: 0.01,
  //     },
  //   }
  // );

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

  return (
    <>
      {/* <Environment
        background
        files={"/textures/industrial_sunset_02_puresky_4k.hdr"}
        // preset={props.isNight ? "night" : "park"}
        // intensity={props.isNight ? 0 : 2}
      /> */}
      {/* <OrbitControls
        autoRotate={false}
        // position={cameraPosition}
        position={[0, 93, 5]}
        // rotation={cameraRotation}
        rotation={[-1.5707963267948966, 0, 0]}
        makeDefault={true}
        // ref={cameraRef}
        onChange={(e) => {
          const camera = e.target?.object;
          if (!camera) return;
        }}
      /> */}
      <EditableCamera theatreKey={"Camera"} getDirection={props.getDirection} />
      {/* <PerspectiveCamera
        makeDefault
        ref={cameraRef}
        theatreKey={"Camera"}
        // position={cameraPosition}
        // position={[-5.556886117263388, 2.2545368113625175, 4.006921809660271]}

        // position={[-5.163108645819346, 1.8345992465293988, 3.97]}
        // rotation={[
        //   -0.7210839965680563, -0.5792947129698445, -0.448484711027097,
        // ]}
        // rotation={[
        //   -0.9008592132041057, -0.7267918559588127, -0.6979696508548812,
        // ]}
        // position={[cameraPositionX, cameraPositionY, cameraPositionZ]}
        // rotation={cameraRotation}
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

      <Lights
        index={props.index}
        isNight={props.isNight}
        debug={props.debug}
        positions={positions}
      />

      {/* <Perf position="bottom-left" /> */}
      <e.group theatreKey="Scene" ref={sceneRef}>
        {/* <HTMLInfo position={positions.caveAndBasin} /> */}
        <group position={[0.03, 0.0, 0.07]}>
          <Day1
            animateHover={props.animateHover}
            animateOut={props.animateOut}
            isNight={props.isNight}
            positions={positions}
            sceneIndex={props.index}
            setIndex={props.setIndex}
            visible={true}
            // visible={props.currDay === 0 || props.currDay === 1}
            geometry={circleGeom}
            material={redMaterial}
          />
        </group>

        <group position={[0.03, 0.0, 0.07]}>
          <Day2
            animateHover={props.animateHover}
            animateOut={props.animateOut}
            isNight={props.isNight}
            positions={positions}
            sceneIndex={props.index}
            setIndex={props.setIndex}
            visible={true}
            // visible={props.currDay === 0 || props.currDay === 1}
            geometry={circleGeom}
            material={redMaterial}
          />
        </group>

        <group position={[0.03, 0.0, 0.07]}>
          <Day3
            animateHover={props.animateHover}
            animateOut={props.animateOut}
            positions={positions}
            isNight={props.isNight}
            sceneIndex={props.index}
            setIndex={props.setIndex}
            visible={true}
            // visible={props.currDay === 0 || props.currDay === 1}
            geometry={circleGeom}
            material={redMaterial}
          />
        </group>

        {/* <e.group theatreKey="Lake Louise Cloud 2">
          <Cloud scale={0.2} position={[-2, 3.1, 3]} />
        </e.group>

      */}
        <Clouds>
          <e.group
            // position={[cloudPosX, cloudPosY, cloudPosZ]}
            position={[-3.8, 1.75, 3.5]}
            theatreKey="Cloud Banff"
          >
            <Cloud scale={0.075} />
          </e.group>

          <e.group
            theatreKey="Cloud Lake Louise 2"
            // position={[cloudPosX, cloudPosY, cloudPosZ]}
            position={[-5.76, 1.76, 0.26]}
          >
            <Cloud scale={0.075} />
          </e.group>

          <e.group theatreKey="Cloud Lake Louise" position={[-2.7, 0.85, 1.6]}>
            <Cloud
              // works scale = -0.03
              // works position = [-2.7, 0.85, 2.30]
              //
              scale={0.07}
              // scale={cloudScale}
              //  position={[-0.8, 1.5, 2.6]}

              // position={[cloudPosX, cloudPosY, cloudPosZ]}
            />
          </e.group>
        </Clouds>

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

        {/* {altTop && <TopAlt />} */}
        {/* {!altTop && <Top />} */}

        <TopAltAgain />

        {/* <Sides /> */}
        {/* <Plane /> */}
      </e.group>

      {/* @TODO: animate this for the stops? this is causing issues with the translucent items */}
      {/* {addEffect && ( */}

      {/* <EffectComposer>
      <DepthOfField 
          focusDistance={0.12} // where to focus
          // focusDistance={focusDistance}
          focalLength={0.09} // focal length
          // focalLength={focalLength}
          bokehScale={2.5} // bokeh size
          // bokehScale={bokehScale}
        /> 
      </EffectComposer> */}

      {/* )} */}
    </>
  );
};

export default Scene;
