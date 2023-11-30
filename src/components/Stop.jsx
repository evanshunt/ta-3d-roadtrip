import React, { useEffect } from "react";
import caretImage from "../images/caret-right.svg";

const Stop = ({
  currDestination,
  handleIndex,
  hoverIndex,
  index,
  setHoverIndex,
  showAttraction,
  stop,
}) => {
  if (stop.hideFromItinerary || !currDestination) return null;

  return (
    <li
      className={`${
        currDestination?.details?.title === stop.details.title ||
        hoverIndex === index
          ? "itinerary__stop itinerary__stop--active"
          : "itinerary__stop"
      } ${stop.visited ? "itinerary__stop--visited" : ""}`}
    >
      <div
        onClick={() => {
          showAttraction();
          handleIndex("next", stop.stop);
        }}
        className="itinerary__stop__wrap"
        onMouseOver={() => {
          if (hoverIndex !== index) setHoverIndex(index);
        }}
        onMouseLeave={() => {
          setHoverIndex(null);
        }}
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
