/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import * as THREE from "three";
import React, { useRef } from "react";
import { Plane, useGLTF, useTexture } from "@react-three/drei";

export default function IceFields(props) {
  const iceFieldsTexture = useTexture("/textures/ice-fields-plain.jpg");
  const scene = useGLTF("/glb/ice-fields-normals.glb");

  return (
    <group receiveShadow {...props} dispose={null}>
      {/* <Plane receiveShadow scale={5} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial receiveShadow color={0xff0099} />
      </Plane> */}
      <mesh
        receiveShadow
        geometry={scene.nodes.EXPORT_GOOGLE_SAT_WM.geometry}
        scale={0.1}
      >
        <meshStandardMaterial
          map={iceFieldsTexture}
          side={THREE.DoubleSide}
          map-flipY={false}
          color={0x303030}
          // metalness={0.5}
          // map-transparent={true}
          // map-wrapS={THREE.RepeatWrapping}
          // map-wrapT={THREE.RepeatWrapping}
          // map-repeat={[1, 1]}
          map-anisotropy={32}
          // map-colorSpace={"sRGBEncoding"}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/glb/ice-fields.glb");
