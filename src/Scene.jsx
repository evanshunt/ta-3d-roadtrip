import React, { useRef } from "react";
import * as THREE from "three";
import { editable as e } from "@theatre/r3f";
import { Clouds, useTexture } from "@react-three/drei";

import { Cloud } from "./Clouds.jsx";
import EditableCamera from "./EditableCamera.jsx";
import Lights from "./Lights.jsx";
import RoadFinal from "./models/final/RoadFinal.jsx";
import Backdrop from "./models/final/Backdrop.jsx";
import TopAltFinal from "./models/final/TopAltFinal.jsx";
import Day1 from "./days/Day1.jsx";
import Day2 from "./days/Day2.jsx";
import Day3 from "./days/Day3.jsx";
import Day from "./days/Day.jsx";

// Reused geometries and materials
THREE.ColorManagement.legacyMode = false;
const circleGeom = new THREE.CircleGeometry(0.8, 32);
const redMaterial = new THREE.MeshBasicMaterial({
  color: 0x9c0f00,
});

const Scene = (props) => {
  const sceneRef = useRef();
  const nightTextures = [
    useTexture("./textures/final/Banff_Lights3.webp"),
    useTexture("./textures/final/LL_Lights2.webp"),
    useTexture("./textures/final/Jasper_Lights2.webp"),
  ];
  const groupOffset = [0.03, 0.0, 0.07];

  if (!props.destinations) return null;

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
      />

      {/* <Perf position="bottom-left" /> */}
      <e.group theatreKey="Scene" ref={sceneRef}>
        <group key={`day-1`} position={groupOffset}>
          <Day
            animateHover={props.animateHover}
            animateOut={props.animateOut}
            attractionsOpen={props.attractionsOpen}
            day={1}
            destinations={props.destinations}
            geometry={circleGeom}
            handleIndex={props.handleIndex}
            hoverIndex={props.hoverIndex}
            inBetweens={props.inBetweens}
            isMobile={props.isMobile}
            isNight={props.isNight}
            material={redMaterial}
            nightTextures={nightTextures}
            setAttractionsOpen={props.setAttractionsOpen}
            setHoverIndex={props.setHoverIndex}
            sceneIndex={props.index}
            setPinRefs={props.setPinRefs}
          />
        </group>
        {/* <group key={`day-2`} position={groupOffset}>
          <Day
            animateHover={props.animateHover}
            animateOut={props.animateOut}
            attractionsOpen={props.attractionsOpen}
            day={2}
            destinations={props.destinations}
            geometry={circleGeom}
            handleIndex={props.handleIndex}
            hoverIndex={props.hoverIndex}
            inBetweens={props.inBetweens}
            isMobile={props.isMobile}
            isNight={props.isNight}
            material={redMaterial}
            nightTextures={nightTextures}
            setAttractionsOpen={props.setAttractionsOpen}
            setHoverIndex={props.setHoverIndex}
            sceneIndex={props.index}
            setPinRefs={props.setPinRefs}
          />
        </group>
        <group key={`day-3`} position={groupOffset}>
          <Day
            animateHover={props.animateHover}
            animateOut={props.animateOut}
            attractionsOpen={props.attractionsOpen}
            day={3}
            destinations={props.destinations}
            geometry={circleGeom}
            handleIndex={props.handleIndex}
            hoverIndex={props.hoverIndex}
            inBetweens={props.inBetweens}
            isMobile={props.isMobile}
            isNight={props.isNight}
            material={redMaterial}
            nightTextures={nightTextures}
            setAttractionsOpen={props.setAttractionsOpen}
            setHoverIndex={props.setHoverIndex}
            sceneIndex={props.index}
            setPinRefs={props.setPinRefs}
          />
        </group> */}

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
