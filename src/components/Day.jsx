import React from "react";

import { DrivingInfo } from "./DrivingInfo";
import Stop from "./Stop";

const Day = ({ description, name, number, stops }) => {
  return (
    <li className="itinerary__day">
      <span>
        <strong>
          Day {number} <span>{name}</span>
        </strong>
      </span>
      <p className="itinerary__day__description">{description}</p>
      <DrivingInfo />
      <ul className="itinerary__day__stops">
        {stops.map((stop) => (
          <>
            <Stop stop={stop} />
          </>
        ))}
      </ul>
    </li>
  );
};

export default Day;
