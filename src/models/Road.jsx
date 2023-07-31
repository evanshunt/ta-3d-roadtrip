/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { extend } from "@react-three/fiber";
import { shaderMaterial, useGLTF } from "@react-three/drei";
import { useControls } from "leva";

// Shader that fills the road with a color
const FillMaterial = shaderMaterial(
  { time: 0 },
  /*glsl*/ `
  varying vec2 vUv;
  varying vec3 vNormal;

  void main() {
    vUv = uv;
    vNormal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
  // fragment shader
  /*glsl*/ `
  uniform float time;
  varying vec2 vUv;
  varying vec3 vNormal;
  // This works backwards, flip x UVs in blender and re-export.
  void main() {
    // vec2 st = gl_FragCoord.xy/vUv.xy;

    // float strength = mod(vUv.x * 1.0, 1.0);
    float strength = mod(1.0 - vUv.x * 1.0, 1.0);
    strength = step(time, strength);  
    // strength *= strength * time;   
    
    gl_FragColor = vec4(strength, strength, strength, 1.0);
    
  }
  `
);

extend({ FillMaterial });

const Road = (props) => {
  const { nodes, materials } = useGLTF("/glb/road.glb");

  // Controls for testing
  const { time } = useControls({
    time: {
      min: 0,
      max: 1,
      value: 0.5,
      step: 0.001,
    },
  });

  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Road.geometry} scale={0.1}>
        <fillMaterial time={time} />
      </mesh>
    </group>
  );
};

useGLTF.preload("/glb/road.glb");

export default Road;
