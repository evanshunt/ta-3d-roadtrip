import React from "react";
import { Billboard, Image } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";

const ImagePin = ({ imageSrc, position, name, scale }) => {
  return (
    <Billboard position={position} scale={scale}>
      <group>
        <Image transparent url={imageSrc} scale={1.33} />
        <boxGeometry args={[0.8, 0.8, 0.1]} />
        <mesh position-z={-0.02} castShadow>
          <circleGeometry args={[0.8, 32]} />
          <meshBasicMaterial color={0x9c0f00} />
        </mesh>
      </group>
    </Billboard>
  );
};

export default ImagePin;
