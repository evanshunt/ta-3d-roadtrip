import React from "react";

import { DrivingInfo } from "./DrivingInfo";
import Stop from "./Stop";

const Day = ({
  animateHover,
  animateOut,
  currDestination,
  description,
  drivingInfo,
  handleIndex,
  hideAttraction,
  index,
  name,
  number,
  showAttraction,
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
              animateHover={animateHover}
              animateOut={animateOut}
              handleIndex={handleIndex}
              index={index}
              key={index}
              currDestination={currDestination}
              showAttraction={showAttraction}
              stop={stop}
            />
          </>
        ))}
      </ul>
      <hr className="itinerary__divider" />
    </li>
  );
};

export default Day;
