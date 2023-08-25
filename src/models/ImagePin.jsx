import React from "react";
import { Billboard, Image } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import { useControls } from "leva";

const ImagePin = ({ imageSrc, position, name, scale }) => {
  // const { positionX, positionY, positionZ } = useControls({
  //   positionX: {
  //     value: position[0],
  //     min: -8,
  //     max: 5,
  //     step: 0.025,
  //   },
  //   positionY: {
  //     value: position[1],
  //     min: 0,
  //     max: 5,
  //     step: 0.025,
  //   },
  //   positionZ: {
  //     value: position[2],
  //     min: -5,
  //     max: 5,
  //     step: 0.025,
  //   },
  // });

  return (
    <Billboard position={position} scale={scale}>
      {/* // <Billboard position={[positionX, positionY, positionZ]} scale={scale}> */}
      <e.group theatreKey={name}>
        <mesh position-z={-0.01}>
          <circleGeometry args={[0.525, 32]}>
            <meshStandardMaterial
              castShadow
              // receiveShadow
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
