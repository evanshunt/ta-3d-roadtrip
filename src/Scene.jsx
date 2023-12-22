import React, { useRef } from "react";
import * as THREE from "three";
import { Cloud } from "./Clouds.jsx";
// import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import { editable as e } from "@theatre/r3f";
import EditableCamera from "./EditableCamera.jsx";

import Lights from "./Lights.jsx";
// import { Perf } from "r3f-perf";
// import Road from "./models/final/Road.jsx";
import RoadFinal from "./models/final/RoadFinal.jsx";
import { OrbitControls } from "@react-three/drei";

import Backdrop from "./models/final/Backdrop.jsx";
import TopAltFinal from "./models/final/TopAltFinal.jsx";

import Day1 from "./days/Day1.jsx";
import Day2 from "./days/Day2.jsx";
import Day3 from "./days/Day3.jsx";
import { Clouds } from "@react-three/drei";
import { Banff } from "./models/final/Banff.jsx";
// import { useControls } from "leva";

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
  fairmontJasperParkLodge: [5.28, 1.08, -5.9],
  jasperPlanetarium: [5.31, 1.05, -5.86],
};

// Reused geometries and materials
THREE.ColorManagement.legacyMode = false;
const circleGeom = new THREE.CircleGeometry(0.8, 32);
const redMaterial = new THREE.MeshBasicMaterial({
  color: 0x9c0f00,
});

const Scene = (props) => {
  const sceneRef = useRef();

  return (
    <>
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
      {/* 
      <Backdrop
        scale={[scaleX, scaleY, scaleZ]}
        position={[posX, posY, posZ]}
        floor={0.25} // Stretches the floor segment, 0.25 by default
        segments={20} // Mesh-resolution, 20 by default
      >
        <meshStandardMaterial color="#073142" />
      </Backdrop> */}

      {!props.isMobile && <Backdrop />}

      <Lights
        index={props.index}
        isMobile={props.isMobile}
        isNight={props.isNight}
        debug={props.debug}
        positions={positions}
      />

      {/* <Perf position="bottom-left" /> */}
      <e.group theatreKey="Scene" ref={sceneRef}>
        <group position={[0.03, 0.0, 0.07]}>
          <Day1
            animateHover={props.animateHover}
            animateOut={props.animateOut}
            attractionsOpen={props.attractionsOpen}
            geometry={circleGeom}
            handleIndex={props.handleIndex}
            hoverIndex={props.hoverIndex}
            isMobile={props.isMobile}
            isNight={props.isNight}
            inBetweens={props.inBetweens}
            material={redMaterial}
            positions={positions}
            sceneIndex={props.index}
            setAttractionsOpen={props.setAttractionsOpen}
            setHoverIndex={props.setHoverIndex}
            setIndex={props.setIndex}
            setPinRefs={props.setPinRefs}
            // visible={props.currDay === 0 || props.currDay === 1}
          />
        </group>

        <group position={[0.03, 0.0, 0.07]}>
          <Day2
            animateHover={props.animateHover}
            animateOut={props.animateOut}
            geometry={circleGeom}
            handleIndex={props.handleIndex}
            inBetweens={props.inBetweens}
            isMobile={props.isMobile}
            isNight={props.isNight}
            material={redMaterial}
            positions={positions}
            sceneIndex={props.index}
            setAttractionsOpen={props.setAttractionsOpen}
            setHoverIndex={props.setHoverIndex}
            setIndex={props.setIndex}
            setPinRefs={props.setPinRefs}
          />
        </group>

        <group position={[0.03, 0.0, 0.07]}>
          <Day3
            animateHover={props.animateHover}
            animateOut={props.animateOut}
            geometry={circleGeom}
            handleIndex={props.handleIndex}
            inBetweens={props.inBetweens}
            isMobile={props.isMobile}
            isNight={props.isNight}
            material={redMaterial}
            positions={positions}
            sceneIndex={props.index}
            setAttractionsOpen={props.setAttractionsOpen}
            setHoverIndex={props.setHoverIndex}
            setIndex={props.setIndex}
            setPinRefs={props.setPinRefs}
          />
        </group>

        <Clouds isMobile={props.isMobile}>
          <e.group
            // position={[cloudPosX, cloudPosY, cloudPosZ]}
            position={[-3.8, 2, 3.5]}
            theatreKey="Cloud Banff"
          >
            <Cloud scale={0.055} />
          </e.group>

          <e.group
            theatreKey="Cloud Lake Louise 2"
            // position={[cloudPosX, cloudPosY, cloudPosZ]}
            position={[-5.76, 1.76, 0.26]}
          >
            <Cloud scale={0.075} />
          </e.group>

          <e.group theatreKey="Cloud Lake Louise" position={[-2.7, 0.85, 1.6]}>
            <Cloud scale={0.07} />
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
        {/* <Road /> */}
        <RoadFinal isMobile={props.isMobile} />

        {/* {altTop && <TopAlt />} */}
        {/* {!altTop && <Top />} */}

        {/* <TopAltAgain /> */}
        {/* <Banff /> */}
        <TopAltFinal isMobile={props.isMobile} />

        {/* <Sides /> */}
        {/* <Plane /> */}
      </e.group>

      {/* @TODO: animate this for the stops? this is causing issues with the translucent items */}

      {/* {!isMobile && (
        <EffectComposer>
          <DepthOfField
            focusDistance={0.1} // where to focus
            // focusDistance={focusDistance}
            focalLength={0.1} // focal length
            // focalLength={focalLength}
            bokehScale={5} // bokeh size
            // bokehScale={bokehScale}
          />
        </EffectComposer>
      )} */}
    </>
  );
};

export default Scene;
