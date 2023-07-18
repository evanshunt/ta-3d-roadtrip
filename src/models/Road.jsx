/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { extend } from "@react-three/fiber";
import { shaderMaterial, useGLTF } from "@react-three/drei";

const ColorShiftMaterial = shaderMaterial(
  { time: 0 },
  // vertex shader
  /*glsl*/ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  /*glsl*/ `
    uniform float time;
    varying vec2 vUv;
    
    void main() {
      float strength = mod(vUv.x * 1.0, 1.0);
      strength = step(time, strength);
      gl_FragColor = vec4(strength, strength, strength, 1.0);
    }
  `
);

extend({ ColorShiftMaterial });

export default function Model(props) {
  const { nodes } = useGLTF("/glb/canmore-road.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        // material={nodes.Cube.material}
        scale={1}
      >
        <colorShiftMaterial time={0.501} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/glb/canmore-road.glb");
