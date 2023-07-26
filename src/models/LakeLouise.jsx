/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { Cloud, useGLTF, useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

export default function LakeLouise(props) {
  const mountainTexture = useTexture("/textures/mountain-texture.jpg");

  // mountainTexture.colorSpace = "sRGBEncoding";
  const { nodes, materials } = useGLTF("/glb/subdivided-medium.glb");
  mountainTexture.flipY = false;
  return (
    <group {...props} dispose={null}>
      <mesh
        // castShadow
        // receiveShadow
        rotation={[0, Math.PI * 1.5, 0]}
        geometry={nodes.EXPORT_GOOGLE_SAT_WM.geometry}
        // material={meshStandardMaterial}
        position={[0, 0, 0]}
        scale={[1, 1, 1]}
      >
        <meshBasicMaterial
          map={mountainTexture}
          side={THREE.DoubleSide}
          // map-flipY={false}
          // map-transparent={false}
          map-colorSpace={"sRGBEncoding"}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/glb/subdivided-medium.glb");
