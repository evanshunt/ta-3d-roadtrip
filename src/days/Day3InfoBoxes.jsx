import React from "react";
import InfoBox from "../components/InfoBox";

export const Day3InfoBoxes = () => (
  <>
    <InfoBox
      imageSrc={"/images/info-boxes/athabasca-falls.png"}
      name={"Athabasca Falls"}
      position={[1.19, 1.18, -2.78]}
      width={1.86}
    />
    <InfoBox
      imageSrc={"/images/info-boxes/marmot-basin.png"}
      name={"Marmot Basin"}
      position={[4.8, 1.15, -6.2]}
      width={1.86}
    />
    <InfoBox
      imageSrc={"/images/info-boxes/pyramid-lake.png"}
      name={"Pyramid Lake"}
      position={[5.45, 1.13, -6.2]}
      width={1.66}
      height={1.25}
    />
  </>
);
