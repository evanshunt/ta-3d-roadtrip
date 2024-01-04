import React from "react";
import InfoBox from "../components/InfoBox";

export const Day1InfoBoxes = () => (
  <>
    <InfoBox
      imageSrc={"/images/info-boxes/cascade-mountain.png"}
      name="Cascade Mountain"
      position={[-4.2, 1.18, 2.77]}
      width={1.58}
    />

    <InfoBox
      imageSrc={"/images/info-boxes/lake-minnewanka.png"}
      name="Lake Minnewanka"
      position={[-4.1, 1.15, 3.06]}
      width={1.8}
    />

    <InfoBox
      imageSrc={"/images/info-boxes/sunshine-village.png"}
      position={[-5.3, 1.15, 2.42]}
      width={1.86}
    />
  </>
);
