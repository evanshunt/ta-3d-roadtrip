import React, { useCallback, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useSwipeable } from "react-swipeable";
import gsap from "gsap";
import * as THREE from "three";
import { AdaptiveDpr, Loader } from "@react-three/drei";

import { SheetProvider } from "@theatre/r3f";
import { getProject } from "@theatre/core";
import "core-js/actual/object/group-by";

import animation from "./animation-data/final.json";
import animationMobile from "./animation-data/final-mobile.json";
import compassImage from "./images/compass.svg";
import destinations from "./data/destinations.js";

import Scene from "./Scene";
import Attraction from "./components/Attraction";
import Itinerary from "./components/Itinerary";
import Onboarding from "./components/OnBoarding";
import Arrow from "./components/Arrow";
import Intro from "./Intro";

import closeImage from "./images/close.svg";
import mainNavImage from "/images/main-nav-mock.jpg";
import mainNavImageMobile from "/images/main-nav-mock-mobile.webp";

import "./scss/attraction.scss";
import "./scss/controls.scss";

import CloseDrawer from "./CloseDrawer";

let project = getProject("TA Fly Through", {
  state: window.innerWidth < 1024 ? animationMobile : animation,
});

const beforeAnim = 1.53333;

const determineAmount = (index) => {
  if (index < 1) return 0;

  return (Math.abs(index) / destinations.length) * 100;
};

const Experience = () => {
  const [clicked, setClicked] = useState(false);
  const [currDay, setCurrDay] = useState(0);
  const [currDestination, setCurrDestination] = useState(null);
  const [debug, setDebug] = useState(false);
  const [direction, setDirection] = useState("forward");
  const [drawerOpen, setDrawerOpen] = useState(
    window.innerWidth < 1024 ? false : true
  );
  const [hasStarted, setHasStarted] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isNight, setIsNight] = useState(false);
  const [itineraryOpen, setItineraryOpen] = useState(isMobile ? false : true);
  const [lastRef, setLastRef] = useState(null);
  const [nextDestination, setNextDestination] = useState(null);
  const [pinRefs, setPinRefs] = useState([]);

  // the below is only really used on desktop
  const [attractionsOpen, setAttractionsOpen] = useState(false);

  const previousIndexRef = useRef(0);
  const compassRef = useRef();

  const sheet = project.sheet("Scene");

  const inBetweens = [];
  // uncomment to use saved data
  destinations.forEach((destination) => {
    if (destination.hideFromItinerary) {
      inBetweens.push(destination.stop);
    }
  });

  const animDuration = 6.3;

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

  const handleIndex = (dir, jumpTo = false) => {
    previousIndexRef.current = index;

    if (!jumpTo) {
      if (dir === "up" || dir === "down") return;

      if (dir === "next") {
        if (!hasStarted) {
          setHasStarted(true);
          // setClicked(true); // comment out when the intro is added back in
        }
        index === maxLength ? setIndex(maxLength) : setIndex(index + 1);
      } else {
        index <= 1 ? setIndex(1) : setIndex(index - 1);
      }
    } else {
      setIndex(jumpTo);
    }
  };

  useEffect(() => {
    if (hoverIndex !== null && pinRefs[hoverIndex]) {
      animateHover(pinRefs[hoverIndex], hoverIndex, true);
      setLastRef(pinRefs[hoverIndex]);
    }
    if (hoverIndex === null && lastRef) {
      animateOut(lastRef, hoverIndex, true);
    }
  }, [hoverIndex]);

  useEffect(() => {
    destinations[index].visited = true;
    setCurrDay(determineDay(index));
    setCurrDestination(destinations[index]);

    if (destinations[index + 1]?.details.title) {
      setNextDestination(destinations[index + 1]);
    } else {
      setNextDestination(destinations[index + 2]);
    }

    if (inBetweens.includes(index)) {
      if (!isMobile) {
        setAttractionsOpen(true);
      }
    }
    return () => {};
  }, [index]);

  useEffect(() => {
    // @TODO: determine how this gets wired up
    if (index === 0 && clicked) {
      setTimeout(() => {
        sheet.sequence.play({
          range: [5.8, 9.5],
          direction: "normal",
        });
      }, animDuration * 1000);
    }
  }, [clicked]);

  const start = () => {
    setHasStarted(true);
    setClicked(true);
    ``;
  };

  useEffect(() => {
    let timeoutId;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 1024);
      }, 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const startMobile = useSwipeable({
    onSwiped: (eventData) => {
      const dir = eventData.dir.toLowerCase();
      if (dir === "left") {
        start();
        handleIndex("next");
      }
    },
  });

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      const dir = eventData.dir.toLowerCase();
      if (dir === "left") {
        setDirection("forward");
        handleIndex("next");
      } else {
        setDirection("backward");
        handleIndex("prev");
      }
    },
    // ...config
  });

  const toggleDrawer = () => {};

  const toggleItinerary = () => {
    setItineraryOpen(!itineraryOpen);
  };

  const showItinerary = () => {
    setItineraryOpen(true);
  };

  const hideItinerary = () => {
    setItineraryOpen(false);
  };

  const showAttraction = () => {
    setAttractionsOpen(true);
  };

  const hideAttraction = () => {
    setAttractionsOpen(false);
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

  const drawerClass = drawerOpen
    ? "drawer-wrapper drawer-wrapper--open"
    : "drawer-wrapper drawer-wrapper--closed";

  const days = Object.groupBy(destinations, (destination) => destination.day);
  const dayKeys = Object.keys(days);
  const daysParsed = dayKeys.filter((day) => {
    return day !== "0";
  });

  useEffect(() => {
    if (!isMobile) {
      // reenable the itinerary on day start
      if (destinations[index].hideFromItinerary) {
        hideAttraction();
      } else {
        setTimeout(() => {
          showAttraction();
        }, 250);
      }
    }

    // if (destinations[index].hideFromItinerary && index > 0) {
    //   setIsNight(true);
    // } else {
    //   setIsNight(false);
    // }
    if (
      (inBetweens.includes(index + 1) && index > 0) ||
      index === destinations.length - 1
    ) {
      setIsNight(true);
    } else {
      setIsNight(false);
    }

    // if jumping more than one stop, jump to the right spot in the sequence
    if (Math.abs(index - previousIndexRef.current) > 1) {
      sheet.sequence.position = destinations[index].position - beforeAnim;
    }

    project.ready.then(() => {
      controlAnimation();
    });
  }, [index]);

  useEffect(() => {
    // const debug = window.location.search.includes("debug");
    // setDebug(debug);
    // setHasStarted(true); // uncomment for testing
  }, []);

  let dir = new THREE.Vector3(),
    sph = new THREE.Spherical();

  const getDirection = useCallback((ref) => {
    ref.getWorldDirection(dir);
    sph.setFromVector3(dir);
    // console.log(THREE.MathUtils);
    compassRef.current.style.transform = `rotate(${THREE.MathUtils.radToDeg(
      sph.theta
    )}deg)`;
  }, []);

  const animateHover = useCallback((el = null, index = 0, override = false) => {
    gsap.to(el.current.scale, {
      x: 0.04,
      y: 0.04,
      z: 0.04,
      duration: 0.15,
      ease: "power2.out",
    });
  }, []);

  const animateOut = useCallback(
    (el = null, index = false, override = false) => {
      gsap.to(el.current.scale, {
        x: 0.03,
        y: 0.03,
        z: 0.03,
        duration: 0.15,
        ease: "power2.in",
      });
    },
    []
  );

  return (
    <div className="experience">
      {/* <picture>
        <source media="(max-width: 420px)" srcSet={mainNavImageMobile} />
        <source media="(min-width: 420px)" src={mainNavImage} alt="" />
        <img src={mainNavImage} alt="" className="main-nav-image" />
      </picture> */}

      <div className="wrapper">
        <div onClick={start} {...startMobile}>
          <Intro hasStarted={hasStarted} />
        </div>

        <a className="close-tour" href="">
          <img
            src={closeImage}
            alt="/trip-ideas/road-trips-itineraries/badlands-road-trip"
          />
          Close the 3D Tour
        </a>
        <Loader
          containerStyles={{
            backgroundColor: "#ffffff",
          }}
          innerStyles={{
            backgroundColor: "#ffffff",
            border: "2px solid #9C0F00",
            height: "1rem",
            border: "2px solid #9C0F00",
          }}
          barStyles={{
            backgroundColor: "#9C0F00",
            height: "0.8rem",
          }} // Loading-bar styles
          dataStyles={{
            color: "#9C0F00",
            marginTop: "1rem",
          }} // Text styles
        />
        <Canvas
          dpr={isMobile ? 1.25 : window.devicePixelRatio * 0.9}
          shadows={isMobile ? "soft" : true}
          gl={{
            antialias: true,
            preserveDrawingBuffer: false,
            powerPreference: "high-performance",
          }}
          frameloop={inBetweens.includes(index - 1) ? "always" : "demand"}
          {...handlers}
        >
          <AdaptiveDpr />
          {/* <ScrollControls pages={3}> */}
          <SheetProvider sheet={sheet}>
            <Scene
              animDuration={animDuration}
              animateHover={animateHover}
              animateOut={animateOut}
              attractionsOpen={attractionsOpen}
              currDay={currDay}
              debug={debug}
              destinations={destinations}
              getDirection={getDirection}
              hoverIndex={hoverIndex}
              index={index}
              isMobile={isMobile}
              isNight={isNight}
              project={project}
              setAttractionsOpen={setAttractionsOpen}
              setHoverIndex={setHoverIndex}
              setIndex={setIndex}
              setPinRefs={setPinRefs}
              started={start}
            />
          </SheetProvider>
          {/* </ScrollControls> */}
        </Canvas>

        {isMobile ? (
          <>
            <Attraction
              attractionsOpen={attractionsOpen}
              currDestination={currDestination}
              direction={direction}
              handleIndex={handleIndex}
              hideAttraction={hideAttraction}
              inBetweens={inBetweens}
              index={index}
              isMobile={isMobile}
              maxLength={maxLength}
              nextDestination={nextDestination}
              setIndex={setIndex}
              showItinerary={showItinerary}
              toggleItinerary={toggleItinerary}
            />
            {days[1] && (
              <Itinerary
                animateHover={animateHover}
                animateOut={animateOut}
                currDestination={currDestination}
                currDay={currDay}
                days={days}
                direction={direction}
                grouped={daysParsed}
                handleIndex={handleIndex}
                hideItinerary={hideItinerary}
                hoverIndex={hoverIndex}
                inBetweens={inBetweens}
                index={index}
                isOpen={itineraryOpen}
                nextDestination={nextDestination}
                setHoverIndex={setHoverIndex}
                setPinRefs={setPinRefs}
                showAttraction={showAttraction}
                stopCount={destinations.length - 1}
                toggleItinerary={toggleItinerary}
              />
            )}
          </>
        ) : (
          <div className={drawerClass}>
            <Attraction
              attractionsOpen={attractionsOpen}
              currDestination={currDestination}
              direction={direction}
              handleIndex={handleIndex}
              hideAttraction={hideAttraction}
              inBetweens={inBetweens}
              index={index}
              isMobile={isMobile}
              maxLength={maxLength}
              nextDestination={nextDestination}
              setIndex={setIndex}
              showItinerary={showItinerary}
              toggleItinerary={toggleItinerary}
            />
            {days[1] && (
              <Itinerary
                animateHover={animateHover}
                animateOut={animateOut}
                currDestination={currDestination}
                currDay={currDay}
                days={days}
                direction={direction}
                grouped={daysParsed}
                handleIndex={handleIndex}
                hideItinerary={hideItinerary}
                hoverIndex={hoverIndex}
                inBetweens={inBetweens}
                index={index}
                isOpen={itineraryOpen}
                nextDestination={nextDestination}
                setHoverIndex={setHoverIndex}
                setPinRefs={setPinRefs}
                showAttraction={showAttraction}
                stopCount={destinations.length - 1}
                toggleItinerary={toggleItinerary}
              />
            )}
          </div>
        )}

        <div className="controls">
          <button
            aria-label={"Previous destination"}
            disabled={index < 2}
            className="controls__button controls__button--prev"
            onClick={() => {
              handleIndex("prev");
            }}
          >
            <Arrow dir={"prev"} active={index > 1} />
          </button>

          <button
            aria-label={"Next destination"}
            disabled={index === maxLength}
            className="controls__button controls__button--next"
            onClick={() => {
              handleIndex("next");
            }}
          >
            <Arrow dir={"next"} active={index !== maxLength} />
          </button>

          <div className="controls__progress">
            <ul className="controls__list__days">
              {Object.keys(days).map((day, i) => {
                if (i === 0) return null;
                return (
                  <span key={`${day}-i`} className="controls__list__day">
                    Day {i}
                  </span>
                );
              })}
            </ul>

            <ul className="controls__list">
              <progress
                className="controls__list__progress"
                value={determineAmount(index)}
                max="95"
              />

              {Object.keys(days).map((day, i) => {
                // if (day === "0") return;

                return (
                  <React.Fragment key={i}>
                    {destinations.map((destination, i) => {
                      if (destination.day === parseInt(day)) {
                        return (
                          <li key={i}>
                            <button
                              className={`${
                                i <= index
                                  ? "controls__pip controls__pip--active"
                                  : "controls__pip"
                              }
                                ${
                                  destination.hideFromItinerary
                                    ? "controls__pip--hidden"
                                    : ""
                                }
                                  `}
                              onClick={() => {
                                if (i !== 0) {
                                  handleIndex("next", destination.stop);
                                }
                              }}
                              aria-label={`Navigate to ${destination?.details.title}`}
                            ></button>
                          </li>
                        );
                      }
                    })}
                  </React.Fragment>
                );
              })}
            </ul>
          </div>

          <div className="day-info">
            <span>{destinations[index].details.blurb}</span>
          </div>
        </div>
      </div>
      <div className="compass-container">
        <img src={compassImage} ref={compassRef} className="compass" />
      </div>
    </div>
  );
};

export default Experience;
