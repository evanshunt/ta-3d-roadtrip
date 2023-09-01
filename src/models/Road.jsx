/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useCurrentSheet } from "@theatre/r3f";
import { extend, useFrame } from "@react-three/fiber";
import { shaderMaterial, useGLTF, useScroll } from "@react-three/drei";
import { val } from "@theatre/core";
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
    float diff = gl_FragCoord.x - vUv.x;
    strength = step(time, strength);  
    vec3 initialColor = vec3(1.0, 1.0, 1.0);
    vec3 otherColor = vec3(0.0, 0.0, 0.0);
    vec3 color = mix(otherColor, initialColor, step(time, 1.0 - vUv.x));
    // strength *= strength * time;   
    
    gl_FragColor = vec4(color, step(time, 1.0 - vUv.x));
    
  }
  `
);

extend({ FillMaterial });

const Road = (props) => {
  const { nodes, materials } = useGLTF("/glb/road.glb");
  const shaderRef = useRef();
  const sheet = useCurrentSheet();
  const scroll = useScroll();
  let pauseIndex = 0;
  let cachedPos = 0;
  let direction = "down";

  const checkPaused = (scrolled) => {
    if (scrolled < props.pauses[pauseIndex]) {
      return false;
    } else if (
      scrolled >= props.pauses[pauseIndex] &&
      scrolled < props.pauses[pauseIndex] + props.pauseDuration
    ) {
      return true;
    } else if (scrolled > props.pauses[pauseIndex] + props.pauseDuration) {
      cachedPos = props.pauses[pauseIndex];
      // props.scrollDirection === "down" ? pauseIndex++ : pauseIndex--;
      pauseIndex++;
      return false;
    }
    console.log(pauseIndex);
  };

  const offset = 0.0;

  useFrame(({ clock }) => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    // console.log(sheet.sequence.pointer, sheet.sequence.position);
    sheet.sequence.position = scroll.offset * sequenceLength;
    // console.log(scroll.offset);

    // this is a mess. rethink/rewrite. leaving for now as it works in one direction.
    const isPaused = checkPaused(scroll.offset);
    if (!isPaused) {
      if (cachedPos !== 0) {
        shaderRef.current.uniforms.time.value =
          1.0 - (scroll.offset - offset + -props.pauseDuration);
      } else {
        shaderRef.current.uniforms.time.value = 1.0 - scroll.offset - offset;
      }
    }
    // console.log(isPaused);
  });

  // Controls for testing
  // const { time } = useControls({
  //   time: {
  //     min: 0,
  //     max: 1,
  //     value: 0.0,
  //     step: 0.001,
  //   },
  // });
  // const { positionX, positionY, positionZ, scale } = useControls({
  //   positionX: {
  //     value: -3.6,
  //     min: -5,
  //     max: 5,
  //     step: 0.001,
  //   },
  //   positionY: {
  //     value: 0.01,
  //     min: 0,
  //     max: 1,
  //     step: 0.025,
  //   },
  //   positionZ: {
  //     value: -0.7,
  //     min: -5,
  //     max: 5,
  //     step: 0.001,
  //   },
  //   scale: {
  //     value: 0.1,
  //     min: 0.005,
  //     max: 1,
  //     step: 0.01,
  //   },
  // });

  // checkPaused();

  // const time = 0;
  // if (!shaderRef.current) return null;
  return (
    <group {...props} dispose={null} position={[-3.6, 0.01, -0.7]}>
      <mesh geometry={nodes.Road.geometry} scale={0.1}>
        {/* UVs are backwards so i'm flipping time here */}
        <fillMaterial transparent={true} time={0.0} ref={shaderRef} />
      </mesh>
    </group>
  );
};

useGLTF.preload("/glb/road.glb");

export default Road;
