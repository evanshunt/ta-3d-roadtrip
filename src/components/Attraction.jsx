import Arrow from "./Arrow";
import arrowUp from "../images/arrow-up.svg";
import clock from "../images/clock.svg";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import external from "../images/external-link.svg";
import price from "../images/price.svg";
import React, { useState, useRef, useEffect } from "react";
import selfGuidedTour from "../images/types/self-guided-tour.svg";
import Stop from "./Stop";
import accommodation from "../images/types/accommodation.svg";
import food from "../images/types/food.svg";
import { useSwipeable } from "react-swipeable";

const Attraction = ({
  animateHover,
  animateOut,
  attractionsOpen,
  currDestination,
  direction,
  handleIndex,
  hideAttraction,
  hideItinerary,
  hoverIndex,
  inBetweens,
  index,
  isMobile,
  maxLength,
  nextDestination,
  setAttractionsOpen,
  setHoverIndex,
  setIndex,
  setPinRefs,
  showAttraction,
  showItinerary,
  toggleItinerary,
}) => {
  const [open, setOpen] = useState(attractionsOpen);
  const attractionRef = useRef();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleAttractionHeaderClick = () => {
    if (isMobile) {
      if (currDestination && currDestination.hideFromItinerary) {
        toggleItinerary();
      } else {
        setAttractionsOpen(!attractionsOpen);
        hideItinerary();
        setOpen(!open);
      }
    } else {
      currDestination?.hideFromItinerary ? toggleItinerary() : toggleDrawer();
    }
  };

  const innerSwipeHanders = useSwipeable({
    onSwiped: (eventData) => {
      if (!isMobile) return;
      if (!currDestination.name) return;

      const { velocity, dir } = eventData;
      if (velocity > 1.5 && dir === "Down") {
        setAttractionsOpen(false);
        hideItinerary();
        setTimeout(() => {
          attractionRef.current.scrollTop = 0;
        }, 50);
      }
    },
  });

  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      if (!currDestination.name) return;
    },
    onSwiped: (eventData) => {
      if (!isMobile) return;
      if (!currDestination.name) return;

      const { velocity, dir } = eventData;
      if (velocity < 0.66) {
        attractionRef.current.classList.add("attraction--bounce");
        setTimeout(() => {
          attractionRef.current.classList.remove("attraction--bounce");
        }, 500);
        return;
      }

      if (inBetweens.includes(index)) {
        showItinerary();
      } else {
        setAttractionsOpen(dir === "Up" ? true : false);
        if (dir === "Down") {
          hideItinerary();
        }
      }
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
        attractionRef.current
          .querySelectorAll(".attraction__buttons")[0]
          .setAttribute("tabindex", "0");
      }, 500);
      setTimeout(() => {
        if (attractionsOpen) {
          attractionRef.current
            .querySelectorAll(".attraction__buttons")[0]
            .focus();
        }
      }, 550);
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

  const links = currDestination?.details?.links;

  return (
    <div
      ref={attractionRef}
      className={`${
        open ? "attraction attraction--open" : "attraction attraction--closed"
      }`}
    >
      <>
        <button
          aria-label="Open itinerary"
          className="attraction__header__mobile"
          onClick={handleAttractionHeaderClick}
          {...handlers}
        >
          <img
            hidden={currDestination?.details?.title ? false : true}
            className={`${
              open
                ? "attraction__arrow attraction__arrow--open"
                : "attraction__arrow"
            }`}
            src={arrowUp}
            alt=""
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
        </button>

        <div className="attraction__buttons">
          <button
            className="attraction__back"
            label="Back to Itinerary"
            onClick={() => {
              setOpen(false);
              hideAttraction();
              showItinerary();
            }}
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
            >
              <path
                d="M.00664139 8.98237c.0004406-.17025.03693961-.33847.10708961-.4936.070151-.15512.172362-.29363.299908-.4064l4.589501-4.4195c.14438-.1182.32902-.17572.51499-.16045.18596.01526.35874.10213.48192.24229.12317.14016.18712.32267.17837.50906-.00875.18638-.08951.3621-.22528.4901l-3.3185 3.3c-.01894.0168-.03233.03896-.0384.06354-.00606.02458-.00453.05043.00442.07412.00894.02368.02487.04409.04567.05853.0208.01444.04549.02222.07081.02231H17.2741c.191 0 .3741.07586.5092.21088.135.13503.2108.31816.2108.50912 0 .19096-.0758.37409-.2108.50912-.1351.13502-.3182.21088-.5092.21088H2.71864c-.02531.00024-.04995.00813-.07069.02263-.02075.0145-.03662.03494-.04554.05862-.00893.02369-.01048.04952-.00446.0741.00602.02458.01933.04677.03819.06365l3.3185 3.30003c.07553.061.13794.1366.18347.2224.04554.0857.07327.1798.08152.2765.00825.0967-.00315.1941-.03351.2864-.03036.0922-.07906.1773-.14317.2502-.0641.0729-.14229.1321-.22986.174-.08757.0419-.18271.0657-.2797.0699-.097.0042-.19384-.0112-.2847-.0454-.09087-.0342-.17388-.0864-.24405-.1535L.414139 9.88237c-.127688-.11268-.230026-.25116-.300268-.4063-.0702423-.15513-.10678901-.3234-.10722961-.4937Z"
                fill="#000"
              />
            </svg>
            Back to Itinerary
          </button>
          <button
            aria-label="Previous attraction"
            disabled={index < 2}
            className="controls__button controls__button--attraction controls__button--prev"
            onClick={() => {
              handleIndex("prev");
            }}
          >
            <Arrow dir="prev" active={index > 1} />
          </button>
          <button
            aria-label="Next attraction"
            disabled={index === maxLength}
            className="controls__button controls__button--attraction controls__button--next"
            onClick={() => {
              handleIndex("next");
            }}
          >
            <Arrow dir="next" active={index !== maxLength} />
          </button>
        </div>
        <SwitchTransition>
          <CSSTransition
            classNames={`fade-${direction}`}
            timeout={500}
            key={index}
          >
            <div className={`fade attraction__wrapper`}>
              {!currDestination?.hideFromItinerary && (
                <div className="attraction__header">
                  <strong className="attraction__day">
                    Day {currDestination?.day} - {currDestination?.name}
                  </strong>
                  <div className="attraction__meta">
                    <img
                      width="105"
                      height="105"
                      src={currDestination?.details?.image}
                      alt={currDestination?.details?.altText}
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
              )}

              <div className="attraction__info" {...innerSwipeHanders}>
                <p className="attraction__description">
                  {currDestination?.details?.description}
                </p>
                {!currDestination?.hideFromItinerary && (
                  <div className="attraction__info__details">
                    {currDestination?.details?.type && (
                      <>
                        <span className="attraction__type">
                          <img
                            src={determineType(currDestination.details.type)}
                            alt=""
                          />{" "}
                          {currDestination.details.type}
                        </span>
                      </>
                    )}
                    {currDestination?.details?.price && (
                      <>
                        <span className="attraction__price">
                          <img src={price} alt="" />{" "}
                          {currDestination.details.price}
                        </span>
                      </>
                    )}
                    {currDestination?.details?.duration && (
                      <>
                        <span className="attraction__duration">
                          <img src={clock} alt="" />{" "}
                          {currDestination.details.duration}
                        </span>
                      </>
                    )}
                  </div>
                )}
                {currDestination?.details?.assets?.length && (
                  <div className="attraction__info__images">
                    {currDestination.details.assets.map((asset, i) => {
                      if (asset.type === "image") {
                        return (
                          <img
                            key={i}
                            src={asset.url}
                            alt={asset.altText || ""}
                            className="attraction__info__media"
                          />
                        );
                      } else if (asset.type === "video") {
                        return (
                          <video
                            key={i}
                            src={asset.url}
                            muted
                            autoPlay
                            playsInline
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
                {links && (
                  <strong className="attraction__links__title">
                    Learn more about this attraction
                  </strong>
                )}
              </div>
              <ul className="attraction__links__links">
                {links && (
                  <>
                    <li>
                      {links[0].image && (
                        <img src={links[0].image} alt={links[0]?.altText} />
                      )}
                      <div className="attraction__links__link-wrapper">
                        <strong>{links[0].text}</strong>
                        {links[1] && <p>{links[1].linkText}</p>}
                        {links[1] && (
                          <>
                            <a
                              href={links[1].url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`attraction__links__link ${
                                links[1].external
                                  ? "attraction__links__link--external"
                                  : ""
                              }`}
                            >
                              {links[1].text}
                              {links[1].external && (
                                <img src={external} alt="External link" />
                              )}
                            </a>
                            <br />
                          </>
                        )}
                        <a
                          href={links[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`attraction__links__link ${
                            links[0].external
                              ? "attraction__links__link--external"
                              : ""
                          }`}
                        >
                          {links[0].linkText}
                          <svg
                            className="arrow-right"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.00664139 8.98237C0.00708199 8.81212 0.043581 8.6439 0.113731 8.48877C0.183882 8.33365 0.286093 8.19514 0.413639 8.08237L5.00314 3.66287C5.14752 3.54467 5.33216 3.48715 5.51813 3.50242C5.70409 3.51768 5.87687 3.60455 6.00005 3.74471C6.12322 3.88487 6.18717 4.06738 6.17842 4.25377C6.16967 4.44015 6.08891 4.61587 5.95314 4.74387L2.63464 8.04387C2.6157 8.06067 2.60231 8.08283 2.59624 8.10741C2.59018 8.13199 2.59171 8.15784 2.60066 8.18153C2.6096 8.20521 2.62553 8.22562 2.64633 8.24006C2.66713 8.2545 2.69182 8.26228 2.71714 8.26237H17.2741C17.4651 8.26237 17.6482 8.33823 17.7833 8.47325C17.9183 8.60828 17.9941 8.79141 17.9941 8.98237C17.9941 9.17333 17.9183 9.35646 17.7833 9.49149C17.6482 9.62651 17.4651 9.70237 17.2741 9.70237H2.71864C2.69333 9.70261 2.66869 9.7105 2.64795 9.725C2.6272 9.7395 2.61133 9.75994 2.60241 9.78362C2.59348 9.80731 2.59193 9.83314 2.59795 9.85772C2.60397 9.8823 2.61728 9.90449 2.63614 9.92137L5.95464 13.2214C6.03017 13.2824 6.09258 13.358 6.13811 13.4438C6.18365 13.5295 6.21138 13.6236 6.21963 13.7203C6.22788 13.817 6.21648 13.9144 6.18612 14.0067C6.15576 14.0989 6.10706 14.184 6.04295 14.2569C5.97885 14.3298 5.90066 14.389 5.81309 14.4309C5.72552 14.4728 5.63038 14.4966 5.53339 14.5008C5.43639 14.505 5.33955 14.4896 5.24869 14.4554C5.15782 14.4212 5.07481 14.369 5.00464 14.3019L0.414139 9.88237C0.286451 9.76969 0.184113 9.63121 0.113871 9.47607C0.0436287 9.32094 0.00708199 9.15267 0.00664139 8.98237Z"
                              fill="#9c0f00"
                            />
                          </svg>
                        </a>
                      </div>
                    </li>
                  </>
                )}
              </ul>
              {nextDestination && (
                <a
                  aria-label={`View ${nextDestination?.details.title} on map`}
                  className="attraction__next"
                  onClick={() => {
                    if (inBetweens.includes(index + 1)) {
                      setIndex(index + 2);
                    } else {
                      setIndex(index + 1);
                    }
                    setTimeout(() => {
                      attractionRef.current.scrollTop = 0;
                    }, 600); // slightly longer than animout
                  }}
                >
                  <h3>Next attraction</h3>

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
                    stop={nextDestination}
                  />
                </a>
              )}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </>
    </div>
  );
};

export default Attraction;
