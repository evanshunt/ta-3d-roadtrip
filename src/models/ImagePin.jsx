import React from "react";
import { Billboard, Image } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import { useControls } from "leva";

const ImagePin = ({ imageSrc, position, name, scale }) => {
  const { positionX, positionY, positionZ } = useControls({
    positionX: {
      value: position[0],
      min: -5,
      max: 5,
      step: 0.025,
      // onChange: (value) => {
      //   console.log("positionX", value);
      // },
    },
    positionY: {
      value: position[1],
      min: 0,
      max: 5,
      step: 0.025,
      // onChange: (value) => {
      //   console.log("positionY", value);
      // },
    },
    positionZ: {
      value: position[2],
      min: -5,
      max: 5,
      step: 0.025,
      // onChange: (value) => {
      //   console.log("positionZ", value);
      // },
    },
  });

  return (
    <Billboard position={position} scale={0.25}>
      {/* <Billboard position={[positionX, positionY, positionZ]} scale={scale}> */}
      <e.group theatreKey={name}>
        <mesh position-z={-0.01}>
          <circleGeometry args={[0.525, 32]}>
            <meshStandardMaterial
              castShadow
              color="white"
              metalness={0}
              roughness={1}
            />
          </circleGeometry>
        </mesh>
        <Image transparent url={imageSrc} />
      </e.group>
    </Billboard>
  );
};

export default ImagePin;
