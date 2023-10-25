import React from "react";
import caretImage from "../images/caret-right.svg";

const Stop = ({ currDestination, index, setIndex, showInfo, stop }) => {
  return (
    <li
      className={`${
        currDestination?.details?.title === stop.details.title
          ? "itinerary__stop itinerary__stop--active"
          : "itinerary__stop"
      }`}
    >
      <div
        onClick={() => {
          setIndex(index + 1);
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
      <button
        label={"View stop details"}
        className="itinerary__stop__button"
        onClick={showInfo}
      >
        <img src={caretImage} alt="" />
      </button>
    </li>
  );
};

export default Stop;
