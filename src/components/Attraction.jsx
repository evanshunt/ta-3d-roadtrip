import React, { useState, useRef, useEffect } from "react";
import Arrow from "./Arrow";
import arrowUp from "../images/arrow-up.svg";
import arrowLeft from "../images/arrow-left.svg";
import { useSwipeable } from "react-swipeable";

const Attraction = ({
  attractionsOpen,
  currDestination,
  handleIndex,
  index,
  maxLength,
  showInfo,
}) => {
  const [open, setOpen] = useState(false);

  const attractionRef = useRef();
  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      if (!currDestination.name) return;
    },
    onSwiped: (eventData) => {
      if (!currDestination.name) return;

      const { velocity, dir } = eventData;
      if (velocity < 0.8) {
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

  useEffect(() => {
    setOpen(attractionsOpen);
  }, [attractionsOpen]);

  return (
    <div
      ref={attractionRef}
      className={`${open ? "attraction attraction--open" : "attraction"}
`}
    >
      <div className="attraction__buttons">
        <button
          label={"Back to itinerary"}
          onClick={() => {
            showInfo();
            setOpen(false);
          }}
        >
          <img src={arrowLeft} alt="" />
          Back to itinerary
        </button>
        <button
          disabled={index <= 1}
          className="controls__button controls__button--prev"
          onClick={() => {
            handleIndex("prev");
          }}
        >
          <Arrow dir={"prev"} active={index >= 1} />
        </button>
        <button
          disabled={index === maxLength}
          className="controls__button controls__button--next"
          onClick={() => {
            handleIndex("next");
          }}
        >
          <Arrow dir={"next"} active={index !== maxLength} />
        </button>
      </div>
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
                "images/cave-and-basin-national-historic-site/cave-and-basin-national-historic-site-1.jpeg"
              }
              alt=""
              className="attraction__info__image"
            />
            <img
              src={
                "images/cave-and-basin-national-historic-site/cave-and-basin-national-historic-site-2.jpeg"
              }
              alt=""
              className="attraction__info__image"
            />
            <img
              src={
                "images/cave-and-basin-national-historic-site/cave-and-basin-national-historic-site-3.jpeg"
              }
              alt=""
              className="attraction__info__image"
            />
            <img
              src={
                "images/cave-and-basin-national-historic-site/cave-and-basin-national-historic-site-4.jpeg"
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
