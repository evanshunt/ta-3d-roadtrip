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
import Onboarding from "./components/OnBoarding";
import "./scss/controls.scss";
import Arrow from "./components/Arrow";
import Intro from "./Intro";

const Experience = () => {
  const project = getProject("TA Fly Through", { state: animation });
  const [dpr, setDpr] = useState(1);
  const sheet = project.sheet("Scene");
  const [index, setIndex] = useState(0);
  const [currDay, setCurrDay] = useState(0);
  const [currDestination, setCurrDestination] = useState(null);
  const [hasStarted, setHasStarted] = useState(false);
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
      name: "caveAndBasin",
      position: 12.25,
      day: 1,

      details: {
        title: "Cave and Basin National Historic Site",
        image: "/images/cave-and-basin-national-historic-site.png",
        description:
          "This site has held significance for Indigenous Peoples since time immemorial. Three railway workers stumbled upon it in 1883, and the events that followed resulted in Canada’s first national park. It’s now a gathering place to connect visitors to the land and share stories of conservation.",
      },
    },
    {
      name: "banffGondola",
      position: 8.75,
      day: 1,
      // name: "Banff",
      description:
        "Head to Banff, where you'll enjoy great food and the beatutiful Rocky Mountains.",
      details: {
        title: "Banff Gondola",
        image: "/images/banff-gondola.png",
        description:
          "Experience a world of adventure and beauty at the summit of Banff’s Sulphur Mountain. Exploration abounds at the gondola, from a theatre and interpretive centre inside to epic snowy views from the rooftop deck and mountain boardwalk outside.",
      },
    },
    {
      name: "skyBistro",
      position: 8.75,
      day: 1,
      // name: "Sky Bistro",
      description: "Description here",
      details: {
        title: "Lunch at Sky Bistro",
        image: "/images/sky-bistro.png",
        description:
          "Overlooking Banff on the summit of Sulphur Mountain, Sky Bistro serves locally inspired cuisine paired with panoramic views of six Rocky Mountain ranges. Ride to the top aboard the Banff Gondola before enjoying dishes inspired by Canadian culinary traditions, made from fresh regional ingredients.",
      },
    },
    {
      name: "banffUpperHotSprings",
      position: 10.35,
      day: 1,
      // name: "Banff Upper Hot Springs",
      details: {
        title: "Banff Upper Hot Springs",
        image: "/images/banff-upper-hot-springs.png",
        description:
          "Visit Banff Upper Hot Springs on your trip to the UNESCO World Heritage Site of Banff National Park. The natural hot mineral springs are among the top attractions in the Canadian Rockies. Banff Upper Hot Springs offers a splendid historic bathhouse in Banff National Park.",
      },
    },
    {
      name: "fairmontBanffSpringsHotel",
      position: 10.35,
      day: 1,
      // name: "Fairmont Banff Springs Hotel",
      details: {
        title: "Fairmont Banff Springs Hotel",
        image: "/images/fairmont-banff-springs-hotel.png",
        description:
          'Located in the heart of Banff National Park, a UNESCO World Heritage Site, the world-famous Fairmont Banff Springs hotel stands as a landmark in the picturesque alpine town of Banff, Alberta. Canada\'s "Castle in the Rockies", has been providing legendary hospitality to our guests for more than 130 years.',
      },
    },
    {
      name: "carterRyanGallery",
      position: 19.45,
      day: 2,
      // name: "Carter-Ryan Gallery and Live Art Venue",
      details: {
        title: "Carter-Ryan Gallery and Live Art Venue",
        image: "/images/carter-ryan-gallery.png",
        description:
          "With another location in Canmore, Carter-Ryan Gallery bills itself as a place where visual art and theatre coexist under one roof. Both locations are co-owned by Indigenous visual artist Jason Carter. Here you’ll find vibrant, modern paintings of animals and nature scenes, and bold soapstone carvings by day, and theatrical performances by local directors and actors by night.",
      },
    },
    {
      name: "johnstonCanyon",
      position: 19.45,
      day: 2,
      // name: "Johnston Canyon",
      details: {
        title: "Johnston Canyon",
        image: "/images/johnston-canyon.png",
        description:
          "Banff National Park's most popular hiking destination takes you into the depths of a canyon along catwalks and amongst spectacular waterfalls. See the impressive lower falls and walk through a tunnel to get an even closer look at the powerful effects of water. An early morning start may help you avoid the crowds.",
      },
    },
    {
      name: "lakeLouiseGondola",
      position: 23.2,
      day: 2,
      details: {
        title: "Lake Louise Gondola",
        image: "/images/lake-louise-gondola.png",
        description:
          "Lake Louise Gondola. Ascend to one of Banff National Park’s most incredible views where grizzly bears and other local wildlife are seen almost daily. From the top, at 2,088m (6,850ft) the gondola ride is only the start of your adventure. Make your way to the viewing platform for a panoramic view that will take your breath away.",
      },
    },
    {
      name: "fairmontChateauLakeLouise",
      position: 23.2,
      day: 2,
      details: {
        title: "Fairmont Chateau Lake Louise",
        image: "/images/fairmont-chateau-lake-louise.png",
        description:
          "On the shore of Lake Louise, surrounded by soaring mountain peaks and the majestic Victoria Glacier, sits the Fairmont Chateau Lake Louise. This spectacular mountain resort in the heart of Banff National Park and the Canadian Rockies offers elegant guest rooms, world-class dining, an award-winning spa, and an endless array of outdoor recreational activities.",
      },
    },
    {
      name: "fairview",
      position: 23.2,
      day: 2,
      details: {
        title: "Fairview",
        image: "/images/fairview.png",
        description:
          "Savor the very best in contemporary Canadian cuisine at Fairview, where their talented culinary team’s deft touch allows the food to shine. Stylish décor, spectacular views, and attentive service create the perfect ambiance for a memorable dining experience at Fairview. Wine Spectator has awarded their master wine list with its “Award of Excellence”.",
      },
    },
    {
      name: "columbiaIcefieldSkywalk",
      position: 23.2,
      day: 3,
      details: {
        title: "Colombia Icefield Skywalk",
        image: "/images/columbia-icefield-skywalk.png",
        description:
          "Go beyond nature's edge and immerse yourself in an awe-inspiring interpretive experience in one of the most unique ecosystems in the world. Explore the immense powers of glaciology from a fully accessible, cliff-edge walkway that leads to a glass-floored observation platform 280 m (918 ft) above the Sunwapta Valley.",
      },
    },
    {
      name: "maligneCanyon",
      position: 23.2,
      day: 3,
      details: {
        title: "Maligne Canyon",
        image: "/images/maligne-canyon.png",
        description:
          "Turquoise, glacial waters, and startling canyon walls grow ever more impressive along this short trail. Multiple bridges span the narrow gorge, crossing several times for spine-tingling views of the river below. Watch for fuchsia fireweed and mountain bluebirds in a landscape shaped by fire, erosion, and mountain building.",
      },
    },
    {
      name: "jasperSkytram",
      position: 23.2,
      day: 3,
      details: {
        title: "Jasper SkyTram",
        image: "/images/jasper-sky-tram.png",
        description:
          "The Jasper SkyTram whisks you up Whistlers Mountain to an elevation of 2,263 m, providing stunning vistas of mountain ranges. On a clear day, you can even see the white pyramid of Mount Robson in nearby British Columbia. Interpretive panels explain the alpine environment, and a 1.4 km hiking trail leads you to the summit of the mountain.",
      },
    },
    {
      name: "fairmontJasperParkLodge",
      position: 23.2,
      day: 3,
      details: {
        title: "Fairmont Jasper Park Lodge",
        image: "/images/fairmont-jasper-park-lodge.png",
        description:
          "Spread out over 700 acres, this year-round luxury mountain resort wraps around the shores of pristine Lac Beauvert and Canada's #1 Golf Resort. Choose from private Signature Cabins (featuring your own kitchen, living space, patio, and more) or one of their many quaint cabin-style rooms throughout the expansive property.",
      },
    },
    {
      name: "jasperPlanetarium",
      position: 23.2,
      day: 3,
      details: {
        title: "Jasper Planetarium",
        image: "/images/jasper-planetarium.png",
        description:
          "Enter The Jasper Planetarium's 40-seat domed planetarium theatre and tour the world's largest accessible dark sky preserve with a live guide during this interactive, world-exclusive, indoor Planetarium Experience. Or sign up for the full tour which starts in the planetarium, then head outside for the chance to tour the largest telescope in the Rockies.",
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
    if (dir === "up" || dir === "down") return;

    if (dir === "next") {
      index === maxLength ? setIndex(maxLength) : setIndex(index + 1);
      if (!hasStarted) {
        setHasStarted(true);
      }
    } else {
      index <= 1 ? setIndex(1) : setIndex(index - 1);
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
    <div {...handlers} className="wrapper">
      <Intro hasStarted={hasStarted} />

      {days[1] && (
        <Itinerary
          currDestination={currDestination}
          currDay={currDay}
          days={days}
          grouped={daysParsed}
        />
      )}
      {/* <Onboarding /> */}
      <Canvas
        shadows
        dpr={dpr}
        gl={{
          antialias: false,
          preserveDrawingBuffer: true,
          shadowMapEnabled: true,
          shadowMapType: THREE.PCFSoftShadowMap,
        }}
        frameloop="demand"
      >
        <PerformanceMonitor
          onIncline={() => {
            setDpr(2);
            console.log("perf increase");
          }}
          onDecline={() => {
            setDpr(1);
            console.log("perf decrease");
          }}
        />
        <SoftShadows size={2.5} focus={0.8} samples={12} />
        {/* <ScrollControls pages={3}> */}
        <SheetProvider sheet={sheet}>
          <Scene
            currDay={currDay}
            pauses={pauses}
            destinations={destinations}
            pauseDuration={pauseDuration}
            project={project}
          />
        </SheetProvider>
        {/* </ScrollControls> */}
      </Canvas>

      <Attraction currDestination={currDestination} />

      <div className="controls">
        <button
          disabled={index <= 1}
          className="controls__button controls__button--prev"
          onClick={() => {
            handleIndex("prev");
          }}
        >
          <Arrow dir={"prev"} active={index >= 1} />
        </button>

        <ul className="controls__list">
          {Object.keys(days).map((day, i) => {
            if (day === "0") return;
            return (
              <ul className="controls__list__list">
                {destinations.map((destination, i) => {
                  if (destination.day === parseInt(day)) {
                    return (
                      <li
                        key={i}
                        className={
                          i === index
                            ? "controls__pip controls__pip--active"
                            : "controls__pip"
                        }
                        onClick={() => {
                          setIndex(i);
                        }}
                      >
                        o
                      </li>
                    );
                  }
                })}
              </ul>
            );
          })}
        </ul>
        <button
          disabled={index === maxLength}
          className="controls__button controls__button--next"
          onClick={() => {
            handleIndex("next");
          }}
        >
          <Arrow dir={"next"} active={index !== maxLength} />
        </button>
      </div>
    </div>
  );
};

export default Experience;
