import React from "react";
import InfoBox from "../components/InfoBox";

export const Day2InfoBoxes = () => (
  <>
    <InfoBox
      imageSrc={"/images/info-boxes/moraine-lake.png"}
      name={"Moraine Lake"}
      position={[-3.79, 1.2, 0.42]}
      width={1.93}
    />

    <InfoBox
      imageSrc={"/images/info-boxes/bow-peak.png"}
      name={"Bow Peak"}
      position={[-1.99, 1.2, -0.13]}
      width={1.86}
    />
  </>
);
