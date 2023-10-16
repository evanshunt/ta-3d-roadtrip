import React from "react";
import { Billboard, Image } from "@react-three/drei";
import { useControls } from "leva";

const InfoBox = ({ imageSrc, position }) => {
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
    <Billboard position={position} scale={0.175}>
      <Image
        url={imageSrc}
        transparent={true}
        scale={[1.88, 0.5, 0.42]}
        castShadow={true}
      />
      <mesh
        castShadow={true}
        scale={[0.075, 0.2, 0.075]}
        position={[0, -0.7, 0]}
      >
        {/* <planeGeometry args={[0.05, 2]} position={[0, -3, -0.02]} /> */}
        <cylinderGeometry args={[0.1, 0.1, 4.5, 6]} />
        <meshBasicMaterial color={0xffffff} />
      </mesh>
    </Billboard>
  );
};

export default InfoBox;
