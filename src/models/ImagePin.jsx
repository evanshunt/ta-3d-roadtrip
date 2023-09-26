import React from "react";
import { Billboard, Image } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import { useControls } from "leva";

const ImagePin = ({ imageSrc, position, name, scale }) => {
  console.log(imageSrc, position, name, scale);
  //   const { positionX, positionY, positionZ } = useControls({
  //     positionX: {
  //       value: position[0],
  //       min: -8,
  //       max: 5,
  //       step: 0.025,
  //     },
  //     positionY: {
  //       value: position[1],
  //       min: 0,
  //       max: 5,
  //       step: 0.025,
  //     },
  //     positionZ: {
  //       value: position[2],
  //       min: -5,
  //       max: 5,
  //       step: 0.025,
  //     },
  //   });

  return (
    <Billboard position={position} scale={scale}>
      {/* <Billboard position={[positionX, positionY, positionZ]} scale={scale}> */}
      <group>
        {/* <mesh position-z={-0.02}>
          <circleGeometry args={[0.525, 32]} />
          <meshStandardMaterial color="white" metalness={0} roughness={1} />
        </mesh> */}
        <Image transparent url={imageSrc} scale={1.33} />
        <boxGeometry args={[0.8, 0.8, 0.1]} />
        <mesh position-z={-0.02} castShadow>
          <circleGeometry args={[0.8, 32]} />
          <meshBasicMaterial
            // castShadow

            // receiveShadow
            // color={0x00a79a}
            color={0x9c0f00}
            // metalness={0}
            // roughness={1}
          />
        </mesh>
      </group>
    </Billboard>
  );
};

export default ImagePin;
