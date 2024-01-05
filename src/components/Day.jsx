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
  hoverIndex,
  index,
  name,
  number,
  setHoverIndex,
  setPinRefs,
  showAttraction,
  stops,
}) => {
  const renderStops = () => {
    return stops.map((stop, index) => (
      <Stop
        animateHover={animateHover}
        animateOut={animateOut}
        handleIndex={handleIndex}
        hoverIndex={hoverIndex}
        index={stop.stop}
        key={`${name}-${index}`}
        currDestination={currDestination}
        setPinRefs={setPinRefs}
        setHoverIndex={setHoverIndex}
        showAttraction={showAttraction}
        stop={stop}
      />
    ));
  };

  return (
    <li className="itinerary__day" key={stops[index].stop}>
      <strong className="itinerary__day__text">
        Day {number} <span>{name}</span>
      </strong>
      <p className="itinerary__day__description">{description}</p>
      <DrivingInfo {...drivingInfo} />
      <ul className="itinerary__day__stops">{renderStops()}</ul>
      <hr className="itinerary__divider" />
    </li>
  );
};

export default Day;
