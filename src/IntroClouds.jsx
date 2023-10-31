import React from "react";

export const IntroClouds = ({ playIntro }) => (
  <div className="cloud-intro" onClick={playIntro}>
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
    <div className="cloud-intro__background"></div>
  </div>
);
