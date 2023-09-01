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

  const maxLength = destinations.length - 1; // don't include start

  const pauseDuration = 0.15;
  // let scrollDirection = "down";

  useEffect(() => {
    project.ready.then(() => {
      // reverse animation
      // sheet.sequence.play({ direction: 'reverse' })
      // plays the sequence from the current position to sequence.length
      // sequence.play

      if (index > 0 && index <= maxLength) {
        // if (sheet.sequence.position > destinations[index].position) {
        //   //handle reverse
        //   handleReverse();
        // } else {
        sheet.sequence.play({
          range:
            sheet.sequence.position > destinations[index].position
              ? [destinations[index].position, sheet.sequence.position]
              : [sheet.sequence.position, destinations[index].position],
          direction:
            sheet.sequence.position > destinations[index].position
              ? "reverse"
              : "normal",
        });
        // }
      }
    });

    return () => {};
  }, [index]);

  const handleReverse = () => {
    sheet.sequence.play({
      direction: "reverse",
      range: [destinations[index].position, sheet.sequence.position],
    });
  };

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
          disabled={index <= 1}
          onClick={() => {
            index === 0 ? setIndex(0) : setIndex(index - 1);
          }}
        >
          Prev
        </button>
        <button
          disabled={index === maxLength}
          onClick={() => {
            index === maxLength ? setIndex(maxLength) : setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Experience;
