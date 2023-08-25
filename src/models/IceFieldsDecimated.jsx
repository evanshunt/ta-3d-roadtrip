/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
// import { useControls } from "leva";

export default function IceFieldsDecimated(props) {
  const { nodes } = useGLTF("/glb/ice-fields-no-edges-decimated.glb");
  // const iceFieldsTexture = useTexture("/textures/baked-no-alpha.jpg");
  const iceFieldsTexture = useTexture("/textures/baked-8k-combined.jpg");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EXPORT_GOOGLE_SAT_WM002.geometry}
        position={[0, 0.157, 0]}
        scale={4}
      >
        <meshStandardMaterial
          map={iceFieldsTexture}
          // side={THREE.DoubleSide}
          roughness={1}
          metalness={0}
          map-flipY={false}
          // normalMap={iceFieldsTexture} // TODO: if needed
          // map-anisotropy={32}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/glb/ice-fields-no-edges-decimated.glb");
