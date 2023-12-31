/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useControls } from "leva";

const TopAlt = (props) => {
  const { nodes } = useGLTF("/glb/final/top-oct-30.glb");
  const texture = useTexture("/textures/final/atmosphere-real.jpg");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.top.geometry}
        position={[0, -0.065, 0]}
        scale={[0.25, 0.075, 0.25]}
      >
        <meshStandardMaterial
          map={texture}
          map-flipY={false}
          map-generateMipmaps={true}
          // map-anisotropy={16}
          // metalness={0}
          // roughness={1}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload("/glb/final/top-oct-30.glb");

export default TopAlt;
