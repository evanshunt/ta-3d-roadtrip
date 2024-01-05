import React, { useRef } from "react";
import * as THREE from "three";
import { editable as e } from "@theatre/r3f";

import { Cloud } from "./Clouds.jsx";
import EditableCamera from "./EditableCamera.jsx";
import Lights from "./Lights.jsx";
import RoadFinal from "./models/final/RoadFinal.jsx";

import Backdrop from "./models/final/Backdrop.jsx";
import TopAltFinal from "./models/final/TopAltFinal.jsx";
import Day1 from "./days/Day1.jsx";
import Day2 from "./days/Day2.jsx";
import Day3 from "./days/Day3.jsx";
import { Clouds } from "@react-three/drei";

// Reused geometries and materials
THREE.ColorManagement.legacyMode = false;
const circleGeom = new THREE.CircleGeometry(0.8, 32);
const redMaterial = new THREE.MeshBasicMaterial({
  color: 0x9c0f00,
});

const Scene = (props) => {
  const sceneRef = useRef();

  if (!props.destinations) return null;

  // const dayCount = props.destinations[props.destinations.length - 1].day; // not yet used, causing issues with theatrejs
  const groupOffset = [0.03, 0.0, 0.07];

  return (
    <>
      <EditableCamera theatreKey={"Camera"} getDirection={props.getDirection} />

      {!props.isMobile && <Backdrop />}

      <Lights
        index={props.index}
        isMobile={props.isMobile}
        isNight={props.isNight}
        debug={props.debug}
      />

      {/* <Perf position="bottom-left" /> */}
      <e.group theatreKey="Scene" ref={sceneRef}>
        <group position={groupOffset}>
          <Day1
            animateHover={props.animateHover}
            animateOut={props.animateOut}
            attractionsOpen={props.attractionsOpen}
            destinations={props.destinations}
            geometry={circleGeom}
            handleIndex={props.handleIndex}
            hoverIndex={props.hoverIndex}
            isMobile={props.isMobile}
            isNight={props.isNight}
            inBetweens={props.inBetweens}
            material={redMaterial}
            sceneIndex={props.index}
            setAttractionsOpen={props.setAttractionsOpen}
            setHoverIndex={props.setHoverIndex}
            setIndex={props.setIndex}
            setPinRefs={props.setPinRefs}
          />
        </group>

        <group position={groupOffset}>
          <Day2
            animateHover={props.animateHover}
            animateOut={props.animateOut}
            destinations={props.destinations}
            geometry={circleGeom}
            handleIndex={props.handleIndex}
            inBetweens={props.inBetweens}
            isMobile={props.isMobile}
            isNight={props.isNight}
            material={redMaterial}
            sceneIndex={props.index}
            setAttractionsOpen={props.setAttractionsOpen}
            setHoverIndex={props.setHoverIndex}
            setIndex={props.setIndex}
            setPinRefs={props.setPinRefs}
          />
        </group>

        <group position={groupOffset}>
          <Day3
            animateHover={props.animateHover}
            animateOut={props.animateOut}
            destinations={props.destinations}
            geometry={circleGeom}
            handleIndex={props.handleIndex}
            inBetweens={props.inBetweens}
            isMobile={props.isMobile}
            isNight={props.isNight}
            material={redMaterial}
            sceneIndex={props.index}
            setAttractionsOpen={props.setAttractionsOpen}
            setHoverIndex={props.setHoverIndex}
            setIndex={props.setIndex}
            setPinRefs={props.setPinRefs}
          />
        </group>

        <Clouds isMobile={props.isMobile} position={[0, 0.125, 0]}>
          <e.group position={[-3.8, 2, 3.5]} theatreKey="Cloud Banff">
            <Cloud scale={0.055} />
          </e.group>

          <e.group
            theatreKey="Cloud Lake Louise 2"
            position={[-5.76, 1.76, 0.26]}
          >
            <Cloud scale={0.075} />
          </e.group>

          <e.group theatreKey="Cloud Lake Louise" position={[-2.7, 0.85, 1.6]}>
            <Cloud scale={0.07} />
          </e.group>
        </Clouds>

        <RoadFinal isMobile={props.isMobile} />

        <TopAltFinal isMobile={props.isMobile} />
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
