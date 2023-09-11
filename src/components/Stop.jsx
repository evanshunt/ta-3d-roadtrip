import React from "react";

const Stop = ({ currDestination, stop }) => {
  return (
    <li
      className={`${
        currDestination?.details?.title === stop.details.title
          ? "itinerary__stop itinerary__stop--active"
          : "itinerary__stop"
      }`}
    >
      <img
        className="itinerary__stop__image"
        src={stop.details.image || "https://via.placeholder.com/150"}
        alt=""
      />
      <strong className="itinerary__stop__name">{stop.details.title} </strong>
    </li>
  );
};

export default Stop;
