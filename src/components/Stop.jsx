import React, { useEffect } from "react";
import caretImage from "../images/caret-right.svg";

const Stop = ({
  currDestination,
  handleIndex,
  hoverIndex,
  setHoverIndex,
  showAttraction,
  stop,
}) => {
  if (stop.hideFromItinerary || !currDestination) return null;

  return (
    <li
      className={`${
        currDestination?.details?.title === stop.details.title ||
        hoverIndex === stop.stop
          ? "itinerary__stop itinerary__stop--active"
          : "itinerary__stop"
      } ${stop.visited ? "itinerary__stop--visited" : ""}`}
      key={stop.stop}
    >
      <button
        aria-label={`View ${stop.details.title} on map`}
        onClick={() => {
          showAttraction();
          handleIndex("next", stop.stop, false);
        }}
        className="itinerary__stop__wrap"
        onMouseOver={() => {
          if (hoverIndex !== stop.stop) setHoverIndex(stop.stop);
        }}
        onMouseLeave={() => {
          setHoverIndex(null);
        }}
      >
        {stop.details?.image && (
          <img
            className="itinerary__stop__image"
            src={stop.details.image}
            alt={stop.details?.altText}
          />
        )}
        <strong className="itinerary__stop__name">{stop.details.title} </strong>

        <img src={caretImage} alt="" />
      </button>
    </li>
  );
};

export default Stop;
