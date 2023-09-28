import React from "react";
import { editable as e } from "@theatre/r3f";
import "./scss/intro.scss";
import Onboarding from "./components/OnBoarding";

const Intro = ({ hasStarted }) => {
  const playIntro = () => {
    const intro = document.querySelector(".cloud-intro");
    intro.classList.add("cloud-intro--play");
  };

  if (hasStarted) {
    playIntro();
  }

  return (
    <>
      <Onboarding />
      <div className="cloud-intro" onClick={playIntro}>
        <div className="cloud-intro__image">
          <img src="/images/cloud04.webp" alt="" />
        </div>
        <div className="cloud-intro__image">
          <img src="/images/cloud05.webp" alt="" />
        </div>
        <div className="cloud-intro__image">
          <img src="/images/cloud06.webp" alt="" />
        </div>
        <div className="cloud-intro__image">
          <img src="/images/cloud04.webp" alt="" />
        </div>
        <div className="cloud-intro__image">
          <img src="/images/cloud05.webp" alt="" />
        </div>
        <div className="cloud-intro__image">
          <img src="/images/cloud06.webp" alt="" />
        </div>
        <div className="cloud-intro__image">
          <img src="/images/cloud04.webp" alt="" />
        </div>
        <div className="cloud-intro__image">
          <img src="/images/cloud05.webp" alt="" />
        </div>
        <div className="cloud-intro__background"></div>
      </div>
    </>
  );
};

export default Intro;
