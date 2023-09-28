/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Sides(props) {
  const { nodes } = useGLTF("/glb/final/sides.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        scale={[0.25, 0.15, 0.25]}
        castShadow
        receiveShadow
        geometry={nodes.sides.geometry}
      >
        <meshStandardMaterial color={"#ffffff"} roughness={1} metalness={0} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/glb/final/sides.glb");