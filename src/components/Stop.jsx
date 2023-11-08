import React from "react";
import caretImage from "../images/caret-right.svg";

const Stop = ({ currDestination, handleIndex, index, showInfo, stop }) => {
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
        onClick={() => {
          handleIndex("next", stop.stop);
          showInfo(true, false);
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
