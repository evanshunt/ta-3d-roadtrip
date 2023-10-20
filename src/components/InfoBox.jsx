import React from "react";
import { Html } from "@react-three/drei";
import { useControls } from "leva";
import "../scss/infobox.scss";

const InfoBox = ({ name, description, position }) => {
  // const { posX, posY, posZ } = useControls({
  //   posX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   posY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   posZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  // });
  // const { scaleX, scaleY, scaleZ } = useControls({
  //   scaleX: {
  //     value: 0.5,
  //     min: 0,
  //     max: 2,
  //   },
  //   scaleY: {
  //     value: 0.5,
  //     min: 0,
  //     max: 2,
  //   },
  //   scaleZ: {
  //     value: 0.5,
  //     min: 0,
  //     max: 2,
  //   },
  // });

  return (
    <Html center position={position} scale={0.175} wrapperClass="infobox">
      <span className="title">{name}</span>
      <span className="description">{description}</span>
    </Html>
  );
};

export default InfoBox;
