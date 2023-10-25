import * as THREE from "three";
// import animation from "./animation-data/animation.json";
// import animation from "./animation-data/animation-new-pins.json";
// import animation from "./animation-data/animation-new-pins-left-offset.json";
// import animation from "./animation-data/new-animation-t-s.json";
import animation from "./animation-data/animation-higher-pin.json";
import { Canvas, useFrame } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import React, { createRef, useEffect, useState } from "react";
import "core-js/actual/object/group-by";
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
import { CSSTransition, SwitchTransition } from "react-transition-group";
import closeImage from "./images/close.svg";
import mainNavImage from "/images/main-nav-mock.jpg";

const Experience = () => {
  const project = getProject("TA Fly Through", { state: animation });
  // const project = getProject("TA Fly Through");
  const [clicked, setClicked] = useState(false);
  const [debug, setDebug] = useState(false);
  const [dpr, setDpr] = useState(1);
  const sheet = project.sheet("Scene");
  const [index, setIndex] = useState(0);
  const [currDay, setCurrDay] = useState(0);
  const [currDestination, setCurrDestination] = useState(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [lastIndex, setLastIndex] = useState(0);
  // the below is only really used on desktop
  const [attractionsOpen, setAttractionsOpen] = useState(false);
  // uncomment to use saved data

  const animDuration = 3;

  const destinations = [
    {
      name: "start",
      position: 0,
      day: 0,
      name: null,
      details: {
        blurb:
          "Use left and right arrows to start and move between attractions",
      },
    },
    {
      name: "Banff",
      position: 7.866,
      day: 1,

      details: {
        title: "Cave and Basin National Historic Site",
        image: "/images/cave-and-basin-national-historic-site.jpg",
        blurb:
          "Your trip begins at the birthplace of the national parks in Canada",
        description:
          "This site has held significance for Indigenous Peoples since time immemorial. Three railway workers stumbled upon it in 1883, and the events that followed resulted in Canada’s first national park. It’s now a gathering place to connect visitors to the land and share stories of conservation.",
        duration: "1 - 3 hr",
        price: "Free - $8.50 CAD",
        type: "Self-guided tour",
        links: [
          {
            text: "Cave and Basin National Historic Site",
            image: "/images/info/cave-and-basin-national-historic-site.jpg",
            url: "https://www.travelalberta.com/listings/cave-and-basin-national-historic-site-1190/",
            linkText: "View More Details",
            external: false,
          },
          {
            text: "View on Google Maps",
            image: "/images/maps/cave-and-basin-national-historic-site.jpg",
            url: "https://www.travelalberta.com/listings/cave-and-basin-national-historic-site-1190/",
            linkText: "311 Cave Avenue, Banff, AB T1L 1K2",
            external: true,
          },
        ],
      },
    },
    {
      name: "Banff",
      position: 10.133,
      day: 1,
      // name: "Banff",
      description:
        "Head to Banff, where you'll enjoy great food and the beatutiful Rocky Mountains.",
      details: {
        title: "Banff Gondola",
        image: "/images/banff-gondola.jpg",
        blurb: "Gondole your bowl.",
        description:
          "Experience a world of adventure and beauty at the summit of Banff’s Sulphur Mountain. Exploration abounds at the gondola, from a theatre and interpretive centre inside to epic snowy views from the rooftop deck and mountain boardwalk outside.",
      },
    },
    {
      name: "Banff",
      position: 12.333,
      day: 1,
      // name: "Sky Bistro",
      description: "Description here",
      details: {
        title: "Lunch at Sky Bistro",
        blurb: "Grab some lunch at the top.",
        image: "/images/lunch-at-sky-bistro.jpg",
        description:
          "Overlooking Banff on the summit of Sulphur Mountain, Sky Bistro serves locally inspired cuisine paired with panoramic views of six Rocky Mountain ranges. Ride to the top aboard the Banff Gondola before enjoying dishes inspired by Canadian culinary traditions, made from fresh regional ingredients.",
      },
    },
    {
      name: "Banff",
      position: 14.333,
      day: 1,
      // name: "Banff Upper Hot Springs",
      details: {
        title: "Banff Upper Hot Springs",
        image: "/images/banff-upper-hot-springs.jpg",
        blurb: "Bubble, bubble no toil no trouble.",
        description:
          "Visit Banff Upper Hot Springs on your trip to the UNESCO World Heritage Site of Banff National Park. The natural hot mineral springs are among the top attractions in the Canadian Rockies. Banff Upper Hot Springs offers a splendid historic bathhouse in Banff National Park.",
      },
    },
    {
      name: "Banff",
      position: 16.233,
      day: 1,
      // name: "Fairmont Banff Springs Hotel",
      details: {
        title: "Fairmont Banff Springs Hotel",
        blurb: "I stayed here once and it smelled of cheese.",
        image: "/images/fairmont-banff-springs-hotel.jpg",
        description:
          'Located in the heart of Banff National Park, a UNESCO World Heritage Site, the world-famous Fairmont Banff Springs hotel stands as a landmark in the picturesque alpine town of Banff, Alberta. Canada\'s "Castle in the Rockies", has been providing legendary hospitality to our guests for more than 130 years.',
      },
    },
    {
      name: "Lake Louise",
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
      name: "Lake Louise",
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
      name: "Lake Louise",
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
      name: "Lake Louise",
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
      name: "Lake Louise",
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
      name: "Jasper",
      position: 23.2,
      day: 3,
      details: {
        title: "Columbia Icefield Skywalk",
        image: "/images/columbia-icefield-skywalk.png",
        description:
          "Go beyond nature's edge and immerse yourself in an awe-inspiring interpretive experience in one of the most unique ecosystems in the world. Explore the immense powers of glaciology from a fully accessible, cliff-edge walkway that leads to a glass-floored observation platform 280 m (918 ft) above the Sunwapta Valley.",
      },
    },
    {
      name: "Jasper",
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
      name: "Jasper",
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
      name: "Jasper",
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
      name: "Jasper",
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
    const debug = window.location.search.includes("debug");
    setDebug(debug);
  });

  useEffect(() => {
    project.ready.then(() => {
      controlAnimation();
    });

    setCurrDay(determineDay(index));
    setCurrDestination(destinations[index]);
    return () => {};
  }, [index]);

  // useEffect(() => {
  //   if (index !== 0) return;
  //   if (index === 0 && clicked) {
  //     setTimeout(() => {
  //       sheet.sequence.play({
  //         range: [0, 6.15],
  //         direction: "normal",
  //       });
  //     }, animDuration * 1000);
  //   }
  // });

  useEffect(() => {
    // @TODO: determine how this gets wired up
    if (index === 0 && clicked) {
      // setTimeout(() => {
      sheet.sequence.play({
        range: [0, 6.15],
        direction: "normal",
      });
      // }, animDuration * 1000);
    }
  }, [clicked]);

  const handleIndex = (dir) => {
    if (dir === "up" || dir === "down") return;
    setLastIndex(index);

    if (dir === "next") {
      if (!hasStarted) {
        setHasStarted(true);
        // setClicked(true); // comment out when the intro is added back in
      }
      index === maxLength ? setIndex(maxLength) : setIndex(index + 1);
    } else {
      index <= 1 ? setIndex(1) : setIndex(index - 1);
    }
  };

  const start = () => {
    setClicked(true);
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

  const showInfo = () => {
    setAttractionsOpen(!attractionsOpen);
  };

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

  const inBetweens = [0, 5];

  useEffect(() => {
    if (inBetweens.includes(index)) return;
    //@TODO: this will have to close it out as well
    setTimeout(() => {
      setAttractionsOpen(true);
    }, 250);
  }, [index]);

  return (
    <div className="experience">
      <img src={mainNavImage} alt="" className="main-nav-image" />
      <div className="wrapper">
        <div onClick={start}>
          <Intro hasStarted={hasStarted} />
        </div>

        {days[1] && (
          <Itinerary
            currDestination={currDestination}
            currDay={currDay}
            days={days}
            grouped={daysParsed}
            handleIndex={handleIndex}
            setIndex={setIndex}
            showInfo={showInfo}
          />
        )}

        <button className="close-tour">
          <img src={closeImage} alt="" />
          Close the 3D Tour
        </button>

        <Canvas
          dpr={window.devicePixelRatio} // decreasing to 1.5 smooths things out a bit
          shadows={true}
          gl={{
            antialias: true,
            preserveDrawingBuffer: false,
            shadowMapType: THREE.PCFSoftShadowMap,
            shadowMapEnabled: true,
          }}

          // frameloop="demand"
        >
          {/* <PerformanceMonitor
          onIncline={() => {
            setDpr(2);
            console.log("perf increase");
          }}
          onDecline={() => {
            setDpr(1);
            console.log("perf decrease");
          }}
        /> */}
          {/* <SoftShadows size={1.3} focus={9} samples={6} /> */}
          {/* <ScrollControls pages={3}> */}
          <SheetProvider sheet={sheet}>
            <Scene
              animDuration={animDuration}
              currDay={currDay}
              debug={debug}
              destinations={destinations}
              index={index}
              project={project}
              setIndex={setIndex}
              started={start}
            />
          </SheetProvider>
          {/* </ScrollControls> */}
        </Canvas>

        <Attraction
          attractionsOpen={attractionsOpen}
          currDestination={currDestination}
          handleIndex={handleIndex}
          index={index}
          maxLength={maxLength}
          showInfo={showInfo}
        />

        <div className="controls">
          {/* {index > 0 && ( */}

          {/* )} */}
          <div className="controls__buttons">
            <button
              disabled={index <= 1}
              className="controls__button controls__button--prev"
              onClick={() => {
                handleIndex("prev");
              }}
            >
              <Arrow dir={"prev"} active={index >= 1} />
            </button>

            <div className="day-info">
              <span>{destinations[index].details.blurb}</span>
            </div>

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

          <ul className="controls__list__days">
            {Object.keys(days).map((day, i) => {
              if (i === 0) return null;
              return <span className="controls__list__day">Day {i}</span>;
            })}
          </ul>

          <ul className="controls__list">
            <progress
              className="controls__list__progress"
              value={(index / (destinations.length - 1)) * 100 - 5}
              max="100"
            />

            {Object.keys(days).map((day, i) => {
              if (day === "0") return;

              return (
                <>
                  {destinations.map((destination, i) => {
                    if (destination.day === parseInt(day)) {
                      return (
                        <li
                          key={i}
                          className={
                            i <= index
                              ? "controls__pip controls__pip--active"
                              : "controls__pip"
                          }
                          onClick={() => {
                            setIndex(i);
                          }}
                        ></li>
                      );
                    }
                  })}
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
