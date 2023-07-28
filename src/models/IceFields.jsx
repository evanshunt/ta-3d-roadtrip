/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export default function IceFields(props) {
  const iceFieldsTexture = useTexture("/textures/ice-fields.jpg");
  const { nodes, materials } = useGLTF("/glb/ice-fields.glb");
  console.log(materials);

  return (
    <group {...props} dispose={null}>
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.EXPORT_GOOGLE_SAT_WM.geometry}
        // material={nodes.EXPORT_GOOGLE_SAT_WM.material}
        scale={0.1}
      >
        <meshStandardMaterial
          // map={iceFieldsTexture}
          color={0xcccccc}
          // side={THREE.DoubleSide}
          // map-flipY={false}

          // map-transparent={false}
          // map-colorSpace={"sRGBEncoding"}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/glb/ice-fields.glb");
