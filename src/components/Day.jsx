import React from "react";

import { DrivingInfo } from "./DrivingInfo";
import Stop from "./Stop";

const Day = ({
  currDestination,
  description,
  drivingInfo,
  name,
  number,
  setIndex,
  showInfo,
  stops,
}) => {
  return (
    <li className="itinerary__day" key={name}>
      <strong className="itinerary__day__text">
        Day {number} <span>{name}</span>
      </strong>

      <p className="itinerary__day__description">{description}</p>
      <DrivingInfo {...drivingInfo} />
      <ul className="itinerary__day__stops">
        {stops.map((stop, index) => (
          <>
            <Stop
              index={index}
              key={index}
              currDestination={currDestination}
              setIndex={setIndex}
              stop={stop}
              showInfo={showInfo}
            />
          </>
        ))}
      </ul>
      <hr className="itinerary__divider" />
    </li>
  );
};

export default Day;
