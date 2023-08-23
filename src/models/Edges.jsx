import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Edges(props) {
  const { nodes, materials } = useGLTF("/glb/edges-decimated.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        receiveShadow
        geometry={nodes.EXPORT_GOOGLE_SAT_WM001.geometry}
        position={[0, 0.157, 0]}
        scale={4}
      >
        <meshStandardMaterial
          color={"#efefef"}
          // side={THREE.DoubleSide}
          roughness={1}
          metalness={0}

          // normalMap={iceFieldsTexture} // TODO: if needed
          // map-anisotropy={32}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/glb/edges-decimated.glb");
