import { Canvas } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import React, { useEffect, useState } from "react";
import Scene from "./Scene";
import { ScrollControls, SoftShadows } from "@react-three/drei";
import { SheetProvider } from "@theatre/r3f";
import * as THREE from "three";
import animation from "./animation-data/animation.json";

// import saved json if wanted
// const animation = null;

const Experience = () => {
  const project = getProject("TA Fly Through", { state: animation });
  const sheet = project.sheet("Scene");
  const [index, setIndex] = useState(0);
  // const sheet = null;
  // uncomment to use saved data

  const pauses = [0.385, 0.775];

  const destinations = [
    {
      name: "start",
      position: 0,
    },
    {
      name: "gondola",
      position: 8.75,
    },
    {
      name: "banffUpperHotSprings",
      position: 10.35,
    },
    {
      name: "caveAndBasin",
      position: 12.25,
    },
    {
      name: "lakeAgnesTeaHouse",
      position: 19.45,
    },
    {
      name: "lakeLouise",
      position: 23.2,
    },
  ];

  const maxLength = destinations.length - 1;

  const pauseDuration = 0.15;
  // let scrollDirection = "down";

  useEffect(() => {
    project.ready.then(() => {
      if (index > 0) {
        console.log(index);
        sheet.sequence.play({
          range: [sheet.sequence.position, destinations[index].position],
        });
      }
    });
    console.log(index);

    return () => {};
  }, [index]);

  return (
    <>
      <Canvas
        shadows
        orthographic
        gl={{
          antialias: true,
          preserveDrawingBuffer: true,
          shadowMapEnabled: true,
          shadowMapType: THREE.PCFSoftShadowMap,
        }}
      >
        <SoftShadows size={2.5} focus={0.8} samples={10} />
        {/* <ScrollControls pages={3}> */}
        <SheetProvider sheet={sheet}>
          <Scene
            pauses={pauses}
            destinations={destinations}
            pauseDuration={pauseDuration}
            project={project}
          />
        </SheetProvider>
        {/* </ScrollControls> */}
      </Canvas>
      <div className="controls">
        <button
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Experience;
