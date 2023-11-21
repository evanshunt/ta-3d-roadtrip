import arrowUp from "../images/arrow-up.svg";
import Day from "./Day";
import { isMobile } from "react-device-detect";
import React, { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "../scss/itinerary.scss";

const Itinerary = ({
  animateHover,
  animateOut,
  currDay,
  currDestination,
  days,
  grouped,
  handleIndex,
  inBetweens,
  index,
  isOpen,
  setIndex,
  showAttraction,
}) => {
  const [open, setOpen] = useState(false);
  const itineraryRef = useRef();

  const toggleDrawer = () => {
    setOpen(!open);
    console.log({ open });
  };

  useEffect(() => {
    if (isMobile || !currDestination) return;
    if (inBetweens.includes(index)) {
      // generalize this
      scrollItinerary(currDestination.day);
    } else {
      setOpen(false);
    }
  }, [index]);

  const listText = () => {
    if (currDay === 0) return "List";
    if (open) return "Close List";

    return `Day ${currDay}`;
  };

  const scrollItinerary = (stop) => {
    const offset = document.querySelector(
      `.itinerary__day:nth-child(${stop + 1})`
    );
    if (!offset) return;

    itineraryRef.current.scrollTo({
      top: offset.offsetTop - 40,
      behavior: "smooth",
    });
  };

  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      if (!currDestination.name) return;
    },
    onSwiped: (eventData) => {
      if (!currDestination.name) return;

      const { velocity, dir } = eventData;

      if (velocity < 0.8) {
        itineraryRef.current.classList.add("itinerary--bounce");
        setTimeout(() => {
          itineraryRef.current.classList.remove("itinerary--bounce");
        }, 500);
        return;
      }
      setOpen(dir === "Up" ? true : false);
    },

    // ...config
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <>
      <div
        ref={itineraryRef}
        className={`${
          isOpen ? "itinerary itinerary--open" : "itinerary" //@TODO: fix this
        }`}
      >
        <div
          className="itinerary__header__mobile"
          {...handlers}
          onClick={toggleDrawer}
        >
          <img
            hidden={currDestination?.details?.title ? false : true}
            className={`${
              open
                ? "itinerary__arrow itinerary__arrow--open"
                : "itinerary__arrow"
            }`}
            src={arrowUp}
          />
        </div>

        <ul className="itinerary__list">
          {grouped.map((day, index) => {
            return (
              <Day
                animateHover={animateHover}
                animateOut={animateOut}
                currDestination={currDestination}
                drivingInfo={{
                  copy: days[day][0]?.drivingInfo?.copy,
                  time: days[day][0]?.drivingInfo?.time,
                }}
                description={days[day][0].description}
                handleIndex={handleIndex}
                index={index}
                key={index}
                name={days[day][0].name}
                number={days[day][0].day}
                setIndex={setIndex}
                showAttraction={showAttraction}
                stops={days[day]}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Itinerary;
