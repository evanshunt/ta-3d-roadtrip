import React from "react";
import car from "../images/car.svg";

export const DrivingInfo = ({ copy, time }) => (
  <div className="itinerary-days__day__info">
    {/* @TODO: switch to SVGR? */}
    <p>{copy}</p>
    <img src={car} alt="" />
    <span>{time}</span>
  </div>
);
