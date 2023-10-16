import { Map } from "./Map";
import { IntroClouds } from "./IntroClouds";
import Onboarding from "./components/OnBoarding";
import React from "react";

import "./scss/intro.scss";

const Intro = ({ hasStarted }) => {
  const playIntro = () => {
    const intro = document.querySelector(".cloud-intro");
    intro.classList.add("cloud-intro--play");
  };

  if (hasStarted) {
    playIntro();
  }

  return (
    <div className="intro">
      <Onboarding />
      <div className="intro__map">
        <Map undefined />
      </div>
      {/* <IntroClouds playIntro={playIntro} /> */}
    </div>
  );
};

export default Intro;
