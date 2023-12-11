import React, { useEffect } from "react";

export const IntroClouds = ({ isMobile, playIntro }) => {
  useEffect(() => {
    setTimeout(() => {
      playIntro();
    }, 2500 * 0.66);
  }, []);
  return (
    <div className="cloud-intro">
      <div className="cloud-intro__image">
        <img src="/images/cloud1.webp" alt="" pointerEvents="none" />
      </div>
      <div className="cloud-intro__image">
        {/* <img src="/images/cloud1.webp" alt="" pointer-events="none" /> */}
        <img src="/images/cloud3.webp" alt="" pointerEvents="none" />
      </div>
      <div className="cloud-intro__image">
        <img src="/images/cloud1.webp" alt="" pointerEvents="none" />
      </div>
      {!isMobile && (
        <>
          <div className="cloud-intro__image">
            <img src="/images/cloud2.webp" alt="" pointerEvents="none" />
          </div>
          <div className="cloud-intro__image">
            <img src="/images/cloud1.webp" alt="" pointerEvents="none" />
          </div>
          <div className="cloud-intro__image">
            <img src="/images/cloud2.webp" alt="" pointerEvents="none" />
          </div>
          <div className="cloud-intro__image">
            <img src="/images/cloud1.webp" alt="" pointerEvents="none" />
          </div>
          <div className="cloud-intro__image">
            <img src="/images/cloud3.webp" alt="" pointerEvents="none" />
          </div>
        </>
      )}
      <div className="cloud-intro__background"></div>
    </div>
  );
};
