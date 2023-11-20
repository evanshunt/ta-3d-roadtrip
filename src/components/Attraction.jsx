import Arrow from "./Arrow";
import arrowBack from "../images/arrow-back.svg";
import arrowLeft from "../images/arrow-left.svg";
import arrowUp from "../images/arrow-up.svg";
import caretImage from "../images/caret-right.svg";
import clock from "../images/clock.svg";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import external from "../images/external-link.svg";
import { isMobile } from "react-device-detect";
import price from "../images/price.svg";
import React, { useState, useRef, useEffect } from "react";
import selfGuidedTour from "../images/types/self-guided-tour.svg";
import accommodation from "../images/types/accommodation.svg";
import food from "../images/types/food.svg";
import slugify from "../utils/slugify";
import { useSwipeable } from "react-swipeable";

const Attraction = ({
  attractionsOpen,
  currDestination,
  handleIndex,
  hideAttraction,
  inBetweens,
  index,
  maxLength,
  nextDestination,
  setIndex,
  showItinerary,
}) => {
  const [open, setOpen] = useState(false);
  const slug = slugify(currDestination?.details?.title);
  const attractionRef = useRef();
  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      if (!currDestination.name) return;
    },
    onSwiped: (eventData) => {
      if (!currDestination.name) return;

      const { velocity, dir } = eventData;
      if (velocity < 0.2) {
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
    if (isMobile) {
      setOpen(attractionsOpen);
    } else {
      setTimeout(() => {
        setOpen(attractionsOpen);
      }, 500);
    }
  }, [attractionsOpen]);

  useEffect(() => {
    if (inBetweens.includes(index)) {
      setOpen(false);
    }
  }, [index]);

  const determineType = (type) => {
    if (type === "Accommodation") {
      return accommodation;
    } else if (type === "Dining") {
      return food;
    } else {
      return selfGuidedTour;
    }
  };

  return (
    <div
      ref={attractionRef}
      className={`${open ? "attraction attraction--open" : "attraction"}
`}
    >
      <SwitchTransition>
        <CSSTransition classNames="fade" timeout={750} key={index}>
          <>
            <div className="attraction__wrapper">
              <div className="attraction__header__mobile" {...handlers}>
                <img
                  hidden={currDestination?.details?.title ? false : true}
                  className={`${
                    open
                      ? "attraction__arrow attraction__arrow--open"
                      : "attraction__arrow"
                  }`}
                  src={arrowUp}
                />
                <span
                  className={`${
                    currDestination?.details?.title
                      ? "attraction__name"
                      : "attraction__name attraction__name--disabled"
                  }`}
                >
                  {currDestination?.details?.blurb}
                </span>
              </div>

              <div className="attraction__buttons">
                <button
                  className="attraction__back"
                  label={"Back to itinerary"}
                  onClick={() => {
                    // showInfo();
                    setOpen(false);
                    hideAttraction();
                    showItinerary(); // this only really does anything visual on mobile
                  }}
                >
                  <img src={arrowBack} alt="" />
                  Back to itinerary
                </button>
                <button
                  disabled={index <= 1}
                  className="controls__button controls__button--attraction controls__button--prev"
                  onClick={() => {
                    handleIndex("prev");
                  }}
                >
                  <Arrow dir={"prev"} active={index >= 1} />
                </button>
                <button
                  disabled={index === maxLength}
                  className="controls__button controls__button--attraction controls__button--next"
                  onClick={() => {
                    handleIndex("next");
                  }}
                >
                  <Arrow dir={"next"} active={index !== maxLength} />
                </button>
              </div>
              <div className="attraction__header">
                <strong className="attraction__day">
                  Day {currDestination?.day} - {currDestination?.name}
                </strong>

                <div className="attraction__meta">
                  <img
                    width="105"
                    height="105"
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

                <div className="attraction__info__details">
                  {currDestination?.details?.type && (
                    <>
                      <span className="attraction__type">
                        <img
                          src={determineType(currDestination.details.type)}
                        />{" "}
                        {currDestination.details.type}
                      </span>
                    </>
                  )}
                  {currDestination?.details?.price && (
                    <>
                      <span className="attraction__price">
                        <img src={price} /> {currDestination.details.price}
                      </span>
                    </>
                  )}
                  {currDestination?.details?.duration && (
                    <>
                      <span className="attraction__duration">
                        <img src={clock} /> {currDestination.details.duration}
                      </span>
                    </>
                  )}
                </div>
                {currDestination?.details?.assets?.length && (
                  <div className="attraction__info__images">
                    {currDestination.details.assets.map((asset) => {
                      if (asset.type === "image") {
                        return (
                          <img
                            src={asset.url}
                            alt=""
                            className="attraction__info__media"
                          />
                        );
                      } else if (asset.type === "video") {
                        return (
                          <video
                            src={asset.url}
                            muted
                            autoPlay
                            loop
                            className="attraction__info__media"
                          />
                        );
                      }
                    })}
                  </div>
                )}
              </div>

              <div className="attraction__links">
                {currDestination?.details?.links && (
                  <strong className="attraction__links__title">
                    Learn more about this attraction
                  </strong>
                )}
              </div>
              <ul className="attraction__links__links">
                {currDestination?.details?.links && (
                  <>
                    {currDestination.details.links.map((link, i) => {
                      return (
                        <li key={i}>
                          <img src={link.image} alt={link.title} />
                          <div className="attraction__links__link-wrapper">
                            <strong>{link.text}</strong>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`attraction__links__link ${
                                link.external
                                  ? "attraction__links__link--external"
                                  : ""
                              }`}
                            >
                              {link.linkText}
                              {link.external && (
                                <img src={external} alt="External link" />
                              )}
                            </a>
                          </div>
                        </li>
                      );
                    })}
                  </>
                )}
              </ul>
              {nextDestination && (
                <>
                  <h3>Next attraction</h3>

                  <li className="itinerary__stop">
                    <div
                      onClick={() => {
                        if (inBetweens.includes(index + 1)) {
                          setIndex(index + 2);
                        } else {
                          setIndex(index + 1);
                        }
                        // showInfo();
                      }}
                      className="itinerary__stop__wrap"
                    >
                      <img
                        className="itinerary__stop__image"
                        src={
                          nextDestination.details.image ||
                          "https://via.placeholder.com/150"
                        }
                        alt=""
                      />
                      <strong className="itinerary__stop__name">
                        {nextDestination.details.title}{" "}
                      </strong>
                    </div>

                    <img src={caretImage} alt="" />
                  </li>
                </>
              )}
            </div>
          </>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Attraction;
