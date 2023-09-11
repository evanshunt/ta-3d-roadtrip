import arrowDown from "../images/arrow-down-small.svg";
import React, { useState } from "react";
import Day from "./Day";
import "../scss/itinerary.scss";

const Itinerary = ({ currDay, currDestination, days, grouped }) => {
  const [open, setOpen] = useState(false);
  const listText = () => {
    if (currDay === 0) return "List";
    if (open) return "Close List";

    return `Day ${currDay}`;
  };
  return (
    <>
      <button
        aria-label="Toggle itinerary days list"
        className="itinerary__toggle"
        onClick={() => setOpen(!open)}
      >
        {listText()}
        <span className="itinerary__icon"></span>
        <img src={arrowDown} alt="Open List" className="itinerary__icon" />
      </button>
      <div className={`${open ? "itinerary itinerary--open" : "itinerary"}`}>
        <ul className="itinerary__list">
          {grouped.map((day) => {
            return (
              <Day
                key={day}
                currDestination={currDestination}
                description={days[day][0].description}
                name={days[day][0].name}
                number={days[day][0].day}
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
