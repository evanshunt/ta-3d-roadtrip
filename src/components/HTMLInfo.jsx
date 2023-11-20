import React from "react";
import { Billboard, Html } from "@react-three/drei";
import "../scss/infobox.scss";

const HTMLInfo = ({ position }) => {
  return (
    <Billboard position={position}>
      <Html center scale={0.175} wrapperClass="infobox">
        <span className="title">Hello</span>
        <span className="description">world</span>
      </Html>
    </Billboard>
  );
};

export default HTMLInfo;
