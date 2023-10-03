import React from "react";
import { Billboard, Image } from "@react-three/drei";

const ImagePin = ({ imageSrc, position, name, scale }) => {
  return (
    // <Billboard position={position} scale={scale}>
    // Clean up this nastiness
    <Billboard
      position={[position[0], position[1] - 0.02, position[2]]}
      scale={scale}
    >
      <group>
        <Image
          transparent
          position-y={position[1] + 0.05}
          url={imageSrc}
          scale={1.33}
        />

        <mesh castShadow position-y={position[1] - 1.4}>
          {/* <planeGeometry args={[0.05, 2]} position={[0, -3, -0.02]} /> */}
          <cylinderGeometry args={[0.02, 0.02, 1.5, 6]} />
          <meshBasicMaterial color={0x9c0f00} />
        </mesh>
        <mesh position-z={-0.02} position-y={position[1] + 0.05} castShadow>
          <circleGeometry args={[0.8, 32]} />
          <meshBasicMaterial color={0x9c0f00} />
        </mesh>
      </group>
    </Billboard>
  );
};

export default ImagePin;
