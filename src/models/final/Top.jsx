/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { gsap } from "gsap";
import { isMobile } from "react-device-detect";
import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useControls } from "leva";

export function Top(props) {
  const materialRef = useRef();
  const { nodes } = useGLTF("/glb/final/top-new.glb");
  // const { nodes } = useGLTF("/glb/final/top-oct-30.glb");
  const texture = isMobile
    ? useTexture(
        "/textures/final/baked-combined-8k-compressed-with-lake-mobile-with-banff.webp"
      )
    : useTexture("/textures/final/baked-combined-8k-lakes.webp");

  // const texture = useTexture("/textures/final/baked-short-dark-no-slope.jpg");
  // const texture = useTexture("/textures/final/baked-tall-alt.jpg");
  // const { scale } = useControls({
  //   scale: {
  //     value: 0.25,
  //     min: 0,
  //     max: 2,
  //     step: 0.1,
  //   },
  // });

  const exitLight = () => {
    gsap.to(materialRef.current, {
      envMapIntensity: 0.2,
      duration: 2,
    });
  };

  const enterLight = () => {
    gsap.to(materialRef.current, {
      envMapIntensity: 1,
      duration: 2,
    });
  };

  useEffect(() => {
    if (props.isNight) {
      exitLight();
    } else {
      enterLight();
    }
  }, [props.isNight]);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow={false}
        geometry={nodes.top.geometry}
        receiveShadow={true}
        scale={[0.25, 0.1, 0.25]}
        position={[0, 0.333, 0]}
      >
        <meshStandardMaterial
          ref={materialRef}
          map={texture}
          map-flipY={false}
          map-generateMipmaps={true}
          transparent={true}
          opacity={0.5}

          // map-anisotropy={16}
          // metalness={0}
          // roughness={1}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/glb/final/top-new.glb");
