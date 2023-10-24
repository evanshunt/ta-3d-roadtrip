import React, { useState, useRef, useEffect } from "react";
import Arrow from "./Arrow";
import arrowBack from "../images/arrow-back.svg";
import arrowUp from "../images/arrow-up.svg";
import arrowLeft from "../images/arrow-left.svg";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useSwipeable } from "react-swipeable";
import slugify from "../utils/slugify";
import selfGuidedTour from "../images/types/self-guided-tour.svg";
import clock from "../images/clock.svg";
import price from "../images/price.svg";
import external from "../images/external-link.svg";

const Attraction = ({
  attractionsOpen,
  currDestination,
  handleIndex,
  index,
  maxLength,
  showInfo,
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
      <SwitchTransition>
        <CSSTransition classNames="fade" timeout={750} key={index}>
          <div className="attraction__wrapper">
            <div className="attraction__buttons">
              <button
                className="attraction__back"
                label={"Back to itinerary"}
                onClick={() => {
                  showInfo();
                  setOpen(false);
                }}
              >
                <img src={arrowBack} alt="" />
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
                      <img src={selfGuidedTour} />{" "}
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
              {/* @TODO:  */}
              {currDestination?.details?.title && (
                <div className="attraction__info__images">
                  <img
                    src={`images/${slug}/${slug}-1.jpg`}
                    alt=""
                    className="attraction__info__image"
                  />

                  <img
                    src={`images/${slug}/${slug}-2.jpg`}
                    alt=""
                    className="attraction__info__image"
                  />

                  <img
                    src={`images/${slug}/${slug}-3.jpg`}
                    alt=""
                    className="attraction__info__image"
                  />

                  <img
                    src={`images/${slug}/${slug}-4.jpg`}
                    alt=""
                    className="attraction__info__image"
                  />
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
                  {currDestination.details.links.map((link, index) => {
                    return (
                      <li key={index}>
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
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default Attraction;
