import React from "react";
import caretImage from "../images/caret-right.svg";

const Stop = ({
  currDestination,
  index,
  setIndex,
  showInfo,
  stop,
  visited,
}) => {
  if (stop.hideFromItinerary) return null;
  return (
    <li
      className={`${
        currDestination?.details?.title === stop.details.title
          ? "itinerary__stop itinerary__stop--active"
          : "itinerary__stop"
      } ${visited.includes(index) ? "itinerary__stop--visited" : ""}`}
    >
      <div
        onClick={() => {
          setIndex(index + 1);
          showInfo();
        }}
        className="itinerary__stop__wrap"
      >
        <img
          className="itinerary__stop__image"
          src={stop.details.image || "https://via.placeholder.com/150"}
          alt=""
        />
        <strong className="itinerary__stop__name">{stop.details.title} </strong>
      </div>

      <img src={caretImage} alt="" />
    </li>
  );
};

export default Stop;
