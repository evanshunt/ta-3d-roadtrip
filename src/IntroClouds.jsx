import { isDesktop } from "react-device-detect";
import React from "react";
import { useSwipeable } from "react-swipeable";

export const IntroClouds = ({ playIntro }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => playIntro(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  return (
    <div className="cloud-intro" onClick={playIntro} {...handlers}>
      <div className="cloud-intro__image">
        <img src="/images/cloud1.webp" alt="" />
      </div>
      <div className="cloud-intro__image">
        {/* <img src="/images/cloud1.webp" alt="" /> */}
        <img src="/images/cloud3.webp" alt="" />
      </div>
      <div className="cloud-intro__image">
        <img src="/images/cloud1.webp" alt="" />
      </div>
      {isDesktop && (
        <>
          <div className="cloud-intro__image">
            <img src="/images/cloud2.webp" alt="" />
          </div>
          <div className="cloud-intro__image">
            <img src="/images/cloud1.webp" alt="" />
          </div>
          <div className="cloud-intro__image">
            <img src="/images/cloud2.webp" alt="" />
          </div>
          <div className="cloud-intro__image">
            <img src="/images/cloud1.webp" alt="" />
          </div>
          <div className="cloud-intro__image">
            <img src="/images/cloud3.webp" alt="" />
          </div>
        </>
      )}
      <div className="cloud-intro__background"></div>
    </div>
  );
};
