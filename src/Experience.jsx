import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { useControls } from "leva";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import TiltShiftEffects from "./shaders/tiltshift.jsx";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

import Canmore from "./models/Canmore.jsx";
import LakeLouise from "./models/LakeLouise.jsx";

const App = () => {
  const { focusDistance, focalLength, bokehScale } = useControls({
    focusDistance: {
      min: 0,
      max: 4,
      value: 2,
    },
    focalLength: {
      min: 0,
      max: 1,
      value: 0.1,
    },
    bokehScale: {
      min: 0,
      max: 10,
      value: 2,
    },
  });
  return (
    <Canvas
      camera={{
        position: [-3, 8, 15],
        fov: 40,
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} intensity={0.2} />
      <OrbitControls autoRotate={false} makeDefault={true} />
      {/* <Stage adjustCamera={true}> */}
      {/* <Canmore /> */}
      <LakeLouise />
      <TiltShiftEffects />
      {/* <EffectComposer>
        <DepthOfField
          focusDistance={focusDistance}
          focalLength={focalLength}
          bokehScale={bokehScale}
        />
      </EffectComposer> */}
      {/* </Stage> */}
    </Canvas>
  );
};

createRoot(document.getElementById("root")).render(<App />);
