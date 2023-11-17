import { Map } from "./Map";
import { IntroClouds } from "./IntroClouds";
import Onboarding from "./components/OnBoarding";
import React, { useEffect, useState } from "react";

import "./scss/intro.scss";

const Intro = ({ hasStarted }) => {
  const [visible, setVisible] = useState(true);

  console.log(hasStarted);

  const playIntro = () => {
    const intro = document.querySelector(".cloud-intro");
    intro.classList.add("cloud-intro--play");
  };

  const removeIntro = () => {
    setVisible(false);
  };

  // useEffect(() => {
  //   console.log({ hasPlayed });
  // }, [hasPlayed]);

  // test
  // useEffect(() => {
  //   playIntro();
  // }, []);

  if (!visible) return null;

  return (
    <div className="intro">
      {/* <Onboarding /> */}
      <div className="intro__map">
        <Map removeIntro={removeIntro} start={hasStarted} />
      </div>
      <IntroClouds playIntro={playIntro} />
    </div>
  );
};

export default Intro;
