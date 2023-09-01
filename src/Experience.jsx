import { Canvas } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import React, { useEffect, useState } from "react";
import Scene from "./Scene";
import {
  PerformanceMonitor,
  ScrollControls,
  SoftShadows,
} from "@react-three/drei";
import { SheetProvider } from "@theatre/r3f";
import * as THREE from "three";
import animation from "./animation-data/animation.json";
import { useSwipeable } from "react-swipeable";

const Experience = () => {
  const project = getProject("TA Fly Through", { state: animation });
  const sheet = project.sheet("Scene");
  const [index, setIndex] = useState(0);
  // uncomment to use saved data

  const pauses = [0.385, 0.775]; // this will not be needed with the destination array provided

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

  const pauseDuration = 0.15; // not needed with destinations array

  const controlAnimation = () => {
    if (index > 0 && index <= maxLength) {
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
    }
  };

  useEffect(() => {
    project.ready.then(() => {
      controlAnimation();
    });
    return () => {};
  }, [index]);

  const handleIndex = (dir) => {
    if (dir === "next") {
      index === maxLength ? setIndex(maxLength) : setIndex(index + 1);
    } else {
      index === 0 ? setIndex(0) : setIndex(index - 1);
    }
  };

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      const dir = eventData.dir.toLowerCase();
      if (dir === "left") {
        handleIndex("next");
      } else {
        handleIndex("prev");
      }
    },
    // ...config
  });

  return (
    <>
      <Canvas
        {...handlers}
        shadows
        orthographic
        gl={{
          antialias: true,
          preserveDrawingBuffer: true,
          shadowMapEnabled: true,
          shadowMapType: THREE.PCFSoftShadowMap,
        }}
        frameloop="demand"
      >
        <PerformanceMonitor
          onIncline={() => setDpr(2)}
          onDecline={() => setDpr(1)}
        />
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
            handleIndex("prev");
          }}
        >
          Prev
        </button>
        <button
          disabled={index === maxLength}
          onClick={() => {
            handleIndex("next");
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Experience;
