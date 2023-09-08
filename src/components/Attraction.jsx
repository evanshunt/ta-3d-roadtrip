import React, { useState, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import arrowUp from "../images/arrow-up.svg";

const Attraction = ({ currDestination, ref }) => {
  const [open, setOpen] = useState(false);
  const attractionRef = useRef();
  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      if (!currDestination.name) return;
    },
    onSwiped: (eventData) => {
      if (!currDestination.name) return;
      console.log(eventData);
      const { velocity, dir } = eventData;
      if (velocity < 0.45) {
        attractionRef.current.classList.add("attraction--bounce");
        setTimeout(() => {
          attractionRef.current.classList.remove("attraction--bounce");
        }, 500);
        return;
      }
      setOpen(dir === "Up" ? true : false);
    },

    // ...config
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <div
      ref={attractionRef}
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
          {...handlers}
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
