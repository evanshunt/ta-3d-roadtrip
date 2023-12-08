import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";

const Backdrop = (props) => {
  const { nodes } = useGLTF("/glb/final/backdrop.glb");
  const texture = useTexture("/textures/final/backdrop.jpg");

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[1.3, -0.42, 17.7]}
        rotation={[0, -Math.PI * 1.5, 0]}
        scale={27}
      >
        <meshStandardMaterial
          roughness={1}
          metalness={0}
          map={texture}
          map-flipY={false}
          map-generateMipmaps={true}
          map-anisotropy={props.isMobile ? 1 : 8}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload("/glb/final/backdrop.glb");

export default Backdrop;
