import { Map } from "./Map";
import { IntroClouds } from "./IntroClouds";
import Onboarding from "./components/OnBoarding";
import React, { useState } from "react";

import "./scss/intro.scss";

const Intro = ({ hasStarted }) => {
  const [hasPlayed, setHasPlayed] = useState(false);

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

  return (
    <div className="intro">
      <Onboarding />
      <div className="intro__map">
        <Map start={hasPlayed} />
      </div>
      <IntroClouds playIntro={playIntro} />
    </div>
  );
};

export default Intro;
