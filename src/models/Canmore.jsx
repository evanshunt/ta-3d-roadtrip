/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/glb/canmore-compressed.glb");
  const texture = materials["rastMat.001"];
  texture.specularIntensity = 0;
  texture.envMapIntensity = 3.33;
  const sideTexture = materials["Material.001"];
  sideTexture.specularIntensity = 0;
  sideTexture.envMapIntensity = 0.5;

  return (
    <group {...props} dispose={null}>
      <group scale={0.25}>
        {/* MAP */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.EXPORT_GOOGLE_SAT_WM001.geometry}
          material={texture}
        />
        {/* SIDES */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.EXPORT_GOOGLE_SAT_WM001_1.geometry}
          material={sideTexture}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/glb/canmore-compressed.glb");
