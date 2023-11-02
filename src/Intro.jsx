import { Map } from "./Map";
import { IntroClouds } from "./IntroClouds";
import Onboarding from "./components/OnBoarding";
import React, { useEffect, useState } from "react";

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

  const removeIntro = () => {
    setVisible(false);
  };

  // test
  // useEffect(() => {
  //   playIntro();
  // }, []);

  if (!visible) return null;

  return (
    <div className="intro">
      <Onboarding />
      <div className="intro__map">
        <Map removeIntro={removeIntro} start={hasPlayed} />
      </div>
      <IntroClouds playIntro={playIntro} />
    </div>
  );
};

export default Intro;
