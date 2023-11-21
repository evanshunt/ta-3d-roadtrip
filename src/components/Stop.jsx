import React from "react";
import caretImage from "../images/caret-right.svg";
import { isMobile } from "react-device-detect";

const Stop = ({
  animateHover,
  animateOut,
  currDestination,
  handleIndex,
  index,
  showAttraction,
  stop,
}) => {
  if (stop.hideFromItinerary || !currDestination) return null;

  return (
    <li
      className={`${
        currDestination?.details?.title === stop.details.title
          ? "itinerary__stop itinerary__stop--active"
          : "itinerary__stop"
      } ${stop.visited ? "itinerary__stop--visited" : ""}`}
    >
      <div
        onMouseEnter={() => {
          animateHover(null, index);
        }}
        onMouseOut={() => {
          animateOut(null, index);
        }}
        onClick={() => {
          showAttraction();
          handleIndex("next", stop.stop);
        }}
        className="itinerary__stop__wrap"
      >
        {stop.details?.image && (
          <img
            className="itinerary__stop__image"
            src={stop.details.image}
            alt=""
          />
        )}
        <strong className="itinerary__stop__name">{stop.details.title} </strong>

        <img src={caretImage} alt="" />
      </div>
    </li>
  );
};

export default Stop;
