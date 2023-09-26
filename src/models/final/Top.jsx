/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useControls } from "leva";

export function Top(props) {
  const { nodes } = useGLTF("/glb/final/top-new.glb");
  const texture = useTexture("/textures/final/baked-combined-8k.jpg");
  // const { scale } = useControls({
  //   scale: {
  //     value: 0.25,
  //     min: 0,
  //     max: 2,
  //     step: 0.1,
  //   },
  // });

  return (
    <group {...props} dispose={null}>
      <mesh
        scale={[0.25, 0.15, 0.25]}
        castShadow
        receiveShadow
        geometry={nodes.top.geometry}
      >
        <meshStandardMaterial
          map={texture}
          map-flipY={false}
          map-generateMipmaps={true}
          map-anisotropy={16}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/glb/final/top-new.glb");
