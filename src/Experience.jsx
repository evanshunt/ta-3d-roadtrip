import * as THREE from "three";
import animation from "./animation-data/animation.json";
import { Canvas } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import "core-js/actual/object/group-by";
import React, { createRef, useEffect, useState } from "react";
import Scene from "./Scene";
import { SheetProvider } from "@theatre/r3f";
import {
  PerformanceMonitor,
  // ScrollControls,
  SoftShadows,
} from "@react-three/drei";
import { useSwipeable } from "react-swipeable";
import "./scss/attraction.scss";
import Attraction from "./components/Attraction";
import Itinerary from "./components/Itinerary";

const Experience = () => {
  const project = getProject("TA Fly Through", { state: animation });
  const sheet = project.sheet("Scene");
  const [index, setIndex] = useState(0);
  const [currDay, setCurrDay] = useState(0);
  const [currDestination, setCurrDestination] = useState(null);
  // uncomment to use saved data

  const pauses = [0.385, 0.775]; // this will not be needed with the destination array provided

  const destinations = [
    {
      name: "start",
      position: 0,
      day: 0,
      name: null,
    },
    {
      name: "gondola",
      position: 8.75,
      day: 1,
      name: "Banff",
      description:
        "Head to Banff, where you'll enjoy great food and the beatutiful Rocky Mountains.",
      details: {
        title: "Banff Gondola",
        image: "/images/banff-gondola-cropped.png",
        description:
          "The Banff Gondola is a gondola lift in the town of Banff, Alberta, Canada, which takes passengers up to the summit of Sulphur Mountain in the Banff National Park. The summit is home to several radio and television transmitters.",
      },
    },
    {
      name: "banffUpperHotSprings",
      position: 10.35,
      day: 1,
      name: "Banff",
      details: {
        title: "Banff Upper Hot Springs",
        image: "/images/banff-upper-hot-springs-cropped.png",
        description:
          "Banff Upper Hot Springs is a historic site of health and wellness for travelers to Banff National Park. The hot pool's water flows from Sulphur Mountain.",
      },
    },
    {
      name: "caveAndBasin",
      position: 12.25,
      day: 1,
      name: "Banff",
      details: {
        title: "Cave and Basin National Historic Site",
        image: "/images/cave-and-basin-national-historic-site-cropped.png",
        description:
          "Cave and Basin National Historic Site of Canada is located in the town of Banff, Alberta, within the Canadian Rocky Mountains, at the site of natural thermal mineral springs around which Canada's first national park, Banff National Park, was established.",
      },
    },
    {
      name: "lakeAgnesTeaHouse",
      position: 19.45,
      day: 2,
      name: "Lake Louise",
      description:
        "Head to Lake Louise, with a stop to learn about the beautiful Rockies that will soon surround you.",
      details: {
        title: "Lake Agnes Tea House",
        image: "/images/lake-agnes-tea-house-cropped.png",
        description:
          "The Lake Agnes Tea House is a tea house located in Lake Louise, Alberta, Canada. The tea house is situated on the eastern shore of Lake Agnes, at an elevation of 2,135 metres, in the Canadian Rockies. The Lake Agnes Tea House is a tea house located in Lake Louise, Alberta, Canada. The tea house is situated on the eastern shore of Lake Agnes, at an elevation of 2,135 metres, in the Canadian Rockies.",
      },
    },
    {
      name: "lakeLouise",
      position: 23.2,
      day: 2,
      name: "Lake Louise",
      details: {
        title: "Lake Louise",
        image: "/images/lake-louise-ski-resort-cropped.png",
        description:
          "Lake Louise is a ski resort. Whatever. The Lake Agnes Tea House is a tea house located in Lake Louise, Alberta, Canada. The tea house is situated on the eastern shore of Lake Agnes, at an elevation of 2,135 metres, in the Canadian Rockies.",
      },
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

    setCurrDay(determineDay(index));
    setCurrDestination(destinations[index]);
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

  const determineDay = (index) => {
    // get the length of the stops in each day and if beyond that, update the day
    const days = Object.groupBy(destinations, (destination) => destination.day);

    const daysParsed = dayKeys.filter((day) => {
      return day;
    });

    const stops = [];
    daysParsed.forEach((day) => {
      const stop = days[day];
      stops.push(...stop);
    });

    const currentDay = stops[index].day;

    return currentDay;
  };

  const days = Object.groupBy(destinations, (destination) => destination.day);
  const dayKeys = Object.keys(days);
  const daysParsed = dayKeys.filter((day) => {
    return day !== "0";
  });

  return (
    <>
      {days[1] && (
        <Itinerary
          currDestination={currDestination}
          currDay={currDay}
          days={days}
          grouped={daysParsed}
        />
      )}
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

      <Attraction currDestination={currDestination} />

      {/* <div className="controls">
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
      </div> */}
    </>
  );
};

export default Experience;
