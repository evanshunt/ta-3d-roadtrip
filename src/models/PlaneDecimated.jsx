/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useControls } from "leva";
import { useGLTF, useTexture } from "@react-three/drei";

export default function PlaneDecimated(props) {
  const { nodes, materials } = useGLTF("/glb/plane-decimated.glb");
  const planeTexture = useTexture("/textures/baked-plane.jpg");
  // const { positionX, positionY, positionZ } = useControls("Plane", {
  //   positionX: {
  //     value: 0,
  //     min: -5,
  //     max: 10,
  //     step: 0.05,
  //   },
  //   positionY: {
  //     value: -0.137,
  //     min: -5,
  //     max: 5,
  //     step: 0.25,
  //   },
  //   positionZ: {
  //     value: 0,
  //     min: -5,
  //     max: 10,
  //     step: 0.05,
  //   },
  // });
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
        // position={[0.55, -1, 0.7]}
        // position={[positionX, positionY, positionZ]}
        position={[0.7, -1, -0.525]}
        rotation={[0, Math.PI / 2, 0]}
        scale={13.15 * 4}
      >
        <meshStandardMaterial
          map={planeTexture}
          // side={THREE.DoubleSide}
          roughness={1}
          metalness={0}
          map-flipY={false}
          // normalMap={iceFieldsTexture} // TODO: if needed
          map-anisotropy={32}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/glb/plane-decimated.glb");