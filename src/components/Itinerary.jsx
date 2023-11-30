import React, { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import arrowUp from "../images/arrow-up.svg";
import Day from "./Day";
import "../scss/itinerary.scss";

const Itinerary = ({
  animateHover,
  animateOut,
  backgroundRefs,
  currDay,
  currDestination,
  days,
  grouped,
  handleIndex,
  hideItinerary,
  hoverIndex,
  inBetweens,
  index,
  isOpen,
  setHoverIndex,
  setPinRefs,
  setIndex,
  showAttraction,
  toggleItinerary,
}) => {
  const [open, setOpen] = useState(false);
  const itineraryRef = useRef();

  useEffect(() => {
    if (currDay === 0) return;
    if (inBetweens.includes(index)) {
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
      setOpen(dir === "Up");
      if (dir === "Down") {
        hideItinerary();
      }
    },
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <div
      ref={itineraryRef}
      className={`itinerary ${
        isOpen ? "itinerary--open" : "itinerary--closed"
      }`}
    >
      <div
        className="itinerary__header__mobile"
        {...handlers}
        onClick={toggleItinerary}
      >
        <img
          className={`itinerary__arrow ${open ? "itinerary__arrow--open" : ""}`}
          src={arrowUp}
          alt="Arrow"
        />
      </div>
      <ul className="itinerary__list">
        {grouped.map((day, index) => (
          <Day
            animateHover={animateHover}
            animateOut={animateOut}
            currDestination={currDestination}
            drivingInfo={days[day][0]?.drivingInfo}
            description={days[day][0].description}
            handleIndex={handleIndex}
            hoverIndex={hoverIndex}
            index={index}
            key={`${day}-${index}`}
            name={days[day][0].name}
            number={days[day][0].day}
            setIndex={setIndex}
            setPinRefs={setPinRefs}
            setHoverIndex={setHoverIndex}
            showAttraction={showAttraction}
            stops={days[day]}
          />
        ))}
      </ul>
    </div>
  );
};

export default Itinerary;
