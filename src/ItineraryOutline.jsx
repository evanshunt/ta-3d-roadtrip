import React, { useState } from "react";
import "core-js/actual";
import ItineraryDay from "./ItineraryDay";
import "./scss/itinerary-outline.scss";

const ItineraryOutline = ({ destinations }) => {
  const [open, setOpen] = useState(false);
  // console.log(destinations);
  // const days = destinations.map((destination) => destination.day);
  // console.log(days);
  const days = Object.groupBy(destinations, (destination) => destination.day);

  const toggleOpen = () => {
    setOpen(!open);
  };

  if (!destinations.length) return null;

  return (
    <div
      className={`${
        open ? "itinerary-outline itinerary-outline--open" : "itinerary-outline"
      }`}
    >
      <button onClick={toggleOpen}>See Itinerary Days</button>
      <ul className="itinerary-outline__items">
        {Object.keys(days).map((day) => {
          console.log(day);
          const stopDays = days[day];

          if (day === "0") return null;
          return (
            <li className="itinerary-outline__item">
              <span className="itinerary-outline__item__day">
                {days[day][0].day}
              </span>
              {/* write a list of stops with the name of each one, remove comments */}
              <ul className="itinerary-outline__item__stops">
                {stopDays.map((stopDay) => {
                  return (
                    <li className="itinerary-outline__item__stop">
                      <ItineraryDay day={stopDay} />
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItineraryOutline;
