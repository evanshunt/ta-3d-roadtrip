import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";

const Backdrop = (props) => {
  const { nodes } = useGLTF("/glb/final/backdrop.glb");
  const texture = useTexture("/textures/final/backdrop-texture-small.webp");

  //   posX: {
  //     value: 1.3,
  //     min: -24,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   posY: {
  //     value: -0.1,
  //     min: -1,
  //     max: 1,
  //     step: 0.01,
  //   },
  //   posZ: {
  //     value: 17.7,
  //     min: 0,
  //     max: 50,
  //     step: 0.1,
  //   },
  //   scale: {
  //     value: 27,
  //     min: 0,
  //     max: 100,
  //     step: 1,
  //   },
  // });
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[1.25, -0.1, 17.7]}
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
