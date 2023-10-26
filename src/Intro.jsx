import { Map } from "./Map";
import { IntroClouds } from "./IntroClouds";
import Onboarding from "./components/OnBoarding";
import React, { useState } from "react";

import "./scss/intro.scss";

const Intro = ({ hasStarted }) => {
  const [hasPlayed, setHasPlayed] = useState(false);
  const [visible, setVisible] = useState(true);

  const playIntro = () => {
    const intro = document.querySelector(".cloud-intro");
    intro.classList.add("cloud-intro--play");

    setTimeout(() => {
      setHasPlayed(true);
    }, 500);
  };

  if (hasStarted) {
    // playIntro();
  }

  const removeIntro = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="intro">
      <Onboarding />
      {/* @TODO: remove map after done playing */}
      <div className="intro__map">
        <Map removeIntro={removeIntro} start={hasPlayed} />
      </div>
      {/* @TODO: remove clouds after done playing */}
      <IntroClouds playIntro={playIntro} />
    </div>
  );
};

export default Intro;
