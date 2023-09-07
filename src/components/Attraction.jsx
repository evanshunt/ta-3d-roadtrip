import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import arrowUp from "../images/arrow-up.svg";

const Attraction = ({ currDestination, ref }) => {
  const [open, setOpen] = useState(false);
  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      const dir = eventData.dir.toLowerCase();
      if (!currDestination?.details?.title) return;

      setOpen(dir === "up" ? true : false);
    },
    // ...config
  });

  return (
    <div
      className={`${open ? "attraction attraction--open" : "attraction"}
`}
    >
      <div className="attraction__header" {...handlers}>
        <img
          hidden={currDestination?.details?.title ? false : true}
          className={`${
            open
              ? "attraction__arrow attraction__arrow--open"
              : "attraction__arrow"
          }`}
          src={arrowUp}
        />

        <div className="attraction__meta">
          <img
            src={currDestination?.details?.image}
            className="attraction__image"
          />
          <span
            className={`${
              currDestination?.details?.title
                ? "attraction__name"
                : "attraction__name attraction__name--disabled"
            }`}
          >
            {currDestination?.details?.title ||
              "Swipe left to explore the attractions"}
          </span>
        </div>
      </div>

      <div className="attraction__info">
        <p className="attraction__description">
          {currDestination?.details?.description}
        </p>
        {/* @TODO:  */}
        {currDestination?.details?.title && (
          <div className="attraction__info__images">
            <img
              src={
                "images/cave-and-basin-national-hsitoric-site/cave-and-basin-national-historic-site-1.jpeg"
              }
              alt=""
              className="attraction__info__image"
            />
            <img
              src={
                "images/cave-and-basin-national-hsitoric-site/cave-and-basin-national-historic-site-2.jpeg"
              }
              alt=""
              className="attraction__info__image"
            />
            <img
              src={
                "images/cave-and-basin-national-hsitoric-site/cave-and-basin-national-historic-site-3.jpeg"
              }
              alt=""
              className="attraction__info__image"
            />
            <img
              src={
                "images/cave-and-basin-national-hsitoric-site/cave-and-basin-national-historic-site-4.jpeg"
              }
              alt=""
              className="attraction__info__image"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Attraction;
