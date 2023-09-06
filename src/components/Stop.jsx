import React from "react";

const Stop = ({ stop }) => {
  // console.log(stop);
  return (
    <li className="itinerary__stop">
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
