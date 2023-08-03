/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function FancyPin(props) {
  const { nodes } = useGLTF("/glb/sivriloc.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        position={[0, 0.2, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.15}
      >
        <meshStandardMaterial color={0x9c0f00} metalness={0} roughness={1} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/glb/sivriloc.glb");
