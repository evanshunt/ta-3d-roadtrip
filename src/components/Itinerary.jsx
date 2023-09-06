import React, { useState } from "react";
import Day from "./Day";
import "../scss/itinerary.scss";

const Itinerary = ({ currDay, currDestination, days, grouped }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        aria-label="Toggle itinerary days list"
        className="itinerary__toggle"
        onClick={() => setOpen(!open)}
      >
        {currDay === 0 ? "List" : `Day ${currDay}`}
        <span className="itinerary__icon">v</span>
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
