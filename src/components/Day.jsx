import React from "react";

import { DrivingInfo } from "./DrivingInfo";
import Stop from "./Stop";

const Day = ({
  currDestination,
  description,
  name,
  number,
  showInfo,
  stops,
}) => {
  return (
    <li className="itinerary__day">
      <span>
        <strong className="itinerary__day__text">
          Day {number} <span>{name}</span>
        </strong>
      </span>
      <p className="itinerary__day__description">{description}</p>
      <DrivingInfo />
      <ul className="itinerary__day__stops">
        {stops.map((stop) => (
          <>
            <Stop
              currDestination={currDestination}
              stop={stop}
              showInfo={showInfo}
            />
          </>
        ))}
      </ul>
    </li>
  );
};

export default Day;
