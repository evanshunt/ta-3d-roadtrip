import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export default function IceFieldsDecimated(props) {
  const { nodes } = useGLTF("/glb/ice-fields-no-edges-decimated.glb");
  const green4Redux = useTexture(
    "/textures/green/baked-green-4-redux-compressed.jpg"
  );



  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EXPORT_GOOGLE_SAT_WM002.geometry}
        position={[0, 0.157, 0]}
        scale={[4, 4, 4]}
      >
        <meshStandardMaterial
          map={green4Redux}
          roughness={1}
          metalness={0}
          map-flipY={false}
          map-generateMipmaps={true}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/glb/ice-fields-no-edges-decimated.glb");
