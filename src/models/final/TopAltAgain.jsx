/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { isMobile } from "react-device-detect";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
// import { useControls } from "leva";

const TopAltAgain = (props) => {
  const { nodes } = useGLTF("/glb/final/NEW-FILE-remap-lower-rez.glb");
  // const texture = useTexture("/textures/final/baked-new-dark.webp");
  const texture = isMobile
    ? useTexture("/textures/final/baked-new-dark-mobile copy.webp")
    : useTexture("/textures/final/baked-new-dark (1) copy.webp");
  // const textureMobile = useTexture("/textures/final/baked-new-dark.webp");

  // const {
  //   posX,
  //   posY,
  //   posZ,
  //   rotX,
  //   rotY,
  //   rotZ,
  //   scaleX,
  //   scaleY,
  //   scaleZ,
  //   textureImg,
  // } = useControls({
  //   posX: {
  //     value: -0.25,
  //     min: -1,
  //     max: 2,
  //     step: 0.001,
  //   },
  //   posY: {
  //     value: 0.925,
  //     min: 0,
  //     max: 2,
  //     step: 0.001,
  //   },
  //   posZ: {
  //     value: 0.675,
  //     min: 0,
  //     max: 3,
  //     step: 0.001,
  //   },
  //   rotX: {
  //     value: 0,
  //     min: 0,
  //     max: Math.PI * 2,
  //     step: 0.1,
  //   },
  //   rotY: {
  //     value: 4.71,
  //     min: 0,
  //     max: Math.PI * 3,
  //     step: 0.001,
  //   },
  //   rotZ: {
  //     value: 0,
  //     min: 0,
  //     max: Math.PI * 2,
  //     step: 0.1,
  //   },
  //   scaleX: {
  //     value: 0.63,
  //     min: 0,
  //     max: 1,
  //     step: 0.01,
  //   },
  //   scaleY: {
  //     value: 0.175,
  //     min: 0,
  //     max: 1,
  //     step: 0.01,
  //   },
  //   scaleZ: {
  //     value: 0.62,
  //     min: 0,
  //     max: 1,
  //     step: 0.01,
  //   },
  // });
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EXPORT_GOOGLE_SAT_WM.geometry}
        // position={[0.02, 0.925, 0.45]}
        // position={[-0.25, 0.925, 0.675]}
        position={[-0.21, 0.925, 0.77]}
        // -0.28, 0.93, 0.76
        // position={[-0.28, 0.9275, 0.72]}
        // rotation={[0, Math.PI * 1.5, 0]}
        rotation={[0, Math.PI * 1.5, 0]}
        scale={[0.635, 0.175, 0.635]}
        // scale={[0.64, 0.2, 0.635]}
        // -0.03, 0.92, 0.58
      >
        <meshStandardMaterial
          roughness={1}
          metalness={0}
          map={texture}
          map-flipY={false}
          map-generateMipmaps={true}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload("/glb/final/NEW-FILE-remap-low-rez.glb");

export default TopAltAgain;