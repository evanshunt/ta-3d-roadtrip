import React from "react";
import car from "../images/car.svg";

export const DrivingInfo = () => (
  <div className="itinerary-days__day__drive-info">
    <img src={car} alt="" />
    {/* @TODO: switch to SVGR? */}
    <span>1 hr 23 min drive from Calgary</span>
  </div>
);