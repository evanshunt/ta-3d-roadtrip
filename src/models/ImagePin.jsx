import React from "react";
import { Image } from "@react-three/drei";

const ImagePin = ({ imageSrc, position, name, scale }) => {
  return (
    // <Billboard position={position} scale={scale}>
    // Clean up this nastiness
    <Image position={[position[0], position[1] + 0.09 * 0.5, position[2]]} transparent url={imageSrc} scale={0.3 * 0.5} />
    // </Billboard>
  );
};

export default ImagePin;
