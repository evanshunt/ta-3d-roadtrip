import React from "react";
import car from "../images/car.svg";

export const DrivingInfo = () => (
  <div className="itinerary-days__day__info">
    {/* @TODO: switch to SVGR? */}
    <p>
      Head from Calgary to Banff, the birthplace of Canada’s national parks
      system.
    </p>
    <img src={car} alt="" />
    <span>1 hr 23 min drive from Calgary</span>
  </div>
);
