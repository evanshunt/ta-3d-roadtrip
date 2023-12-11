import { Map } from "./Map";
import { IntroClouds } from "./IntroClouds";
import React, { useEffect, useState } from "react";

import "./scss/intro.scss";

const Intro = ({ hasStarted, isMobile, setIntroComplete }) => {
  const [visible, setVisible] = useState(true);
  const [cloudsGone, setCloudsGone] = useState(false);

  const playIntro = () => {
    const intro = document.querySelector(".cloud-intro");
    intro.classList.add("cloud-intro--play");
  };

  const removeIntro = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (!visible && !cloudsGone) {
      setTimeout(() => {
        setCloudsGone(true);
      }, 2500 * 0.66);
    }
  }, [visible]);

  return (
    <div className="intro">
      {/* <Onboarding /> */}
      {visible && (
        <div className="intro__map">
          <Map
            removeIntro={removeIntro}
            start={hasStarted}
            setIntroComplete={setIntroComplete}
          />
        </div>
      )}
      {!cloudsGone && <IntroClouds isMobile={isMobile} playIntro={playIntro} />}
    </div>
  );
};

export default Intro;
