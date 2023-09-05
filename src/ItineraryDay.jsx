import React from "react";

const ItineraryDay = ({ day }) => {
  const activity = day.details;

  return (
    <div className="itinerary-activity">
      <span className="itinerary-activity__title">{activity.title}</span>
      <p className="itinerary-activity__description">{activity.description}</p>
    </div>
  );
};

export default ItineraryDay;
