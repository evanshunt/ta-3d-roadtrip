import arrowDown from "../images/arrow-down-small.svg";
import React, { useEffect, useRef, useState } from "react";
import Day from "./Day";
import "../scss/itinerary.scss";

const Itinerary = ({
  currDay,
  currDestination,
  days,
  grouped,
  index,
  showInfo,
  setIndex,
  visited,
}) => {
  const [open, setOpen] = useState(false);
  const itineraryRef = useRef();

  // @TODO: this is just hacked in for demo
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

  return (
    <>
      <button
        aria-label="Toggle itinerary days list"
        className="itinerary__toggle"
        // On desktop, this should be hidden
        onClick={() => setOpen(!open)}
      >
        {listText()}
        <span className="itinerary__icon"></span>
        <img src={arrowDown} alt="Open List" className="itinerary__icon" />
      </button>
      <div
        ref={itineraryRef}
        className={`${open ? "itinerary itinerary--open" : "itinerary"}`}
      >
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
                index={index}
                key={day}
                name={days[day][0].name}
                number={days[day][0].day}
                setIndex={setIndex}
                showInfo={showInfo}
                stops={days[day]}
                visited={visited}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Itinerary;
