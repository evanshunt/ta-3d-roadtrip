import arrowUp from "../images/arrow-up.svg";
import Day from "./Day";
import React, { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "../scss/itinerary.scss";

const Itinerary = ({
  currDay,
  currDestination,
  days,
  grouped,
  handleIndex,
  index,
  isOpen,
  setIndex,
  showAttraction,
}) => {
  const [open, setOpen] = useState(false);
  const itineraryRef = useRef();

  // @TODO: this is just hacked in for demo USE INBETWEENS
  useEffect(() => {
    if (index === 6) {
      // generalize this
      scrollItinerary(6);
    }
    if (index === 7) {
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
      `.itinerary__day:nth-child(2)`
    ).offsetTop;
    itineraryRef.current.scrollTo({
      top: offset - 40,
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
      console.log(velocity, dir);
      if (velocity < 0.8) {
        itineraryRef.current.classList.add("itinerary--bounce");
        setTimeout(() => {
          itineraryRef.current.classList.remove("itinerary--bounce");
        }, 500);
        return;
      }
      setOpen(dir === "Up" ? true : false);
      console.log(open);
    },

    // ...config
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <>
      {/* <button
        aria-label="Toggle itinerary days list"
        className="itinerary__toggle"
        // On desktop, this should be hidden
        onClick={() => setOpen(!open)}
      >
        {listText()}
        <span className="itinerary__icon"></span>
        <img src={arrowDown} alt="Open List" className="itinerary__icon" />
      </button> */}
      <div
        ref={itineraryRef}
        className={`${
          isOpen ? "itinerary itinerary--open" : "itinerary" //@TODO: fix this
        }`}
      >
        <div className="itinerary__header__mobile" {...handlers}>
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
