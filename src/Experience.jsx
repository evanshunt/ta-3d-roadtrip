import * as THREE from "three";
import { createRoot } from "react-dom/client";
import React, { useEffect, useRef, useState } from "react";
import { useControls } from "leva";
import {
  DepthOfField,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import TiltShiftEffects from "./shaders/tiltshift.jsx";
import LocationPin from "./models/LocationPin.jsx";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Billboard,
  Environment,
  Image,
  OrbitControls,
  PerspectiveCamera,
  Plane,
  Stage,
  TransformControls,
} from "@react-three/drei";

import Lights from "./Lights.jsx";
import IceFields from "./models/IceFields.jsx";
import imageSource from "/hover-icon.png";

const Camera = (props) => {
  const ref = useRef();
  const set = useThree((state) => state.set);
  useEffect(() => {
    void set({ camera: ref.current });
    ref.current.lookAt(0, 0, 0), [];
  });
  useFrame(() => ref.current.updateMatrixWorld());
  return (
    <perspectiveCamera
      ref={ref}
      {...props}
      manual={true}
      onUpdate={(c) => c.updateProjectionMatrix()}
    />
  );
};

const App = () => {
  const { cameraX, cameraY, cameraZ, cameraFOV } = useControls({
    cameraX: {
      min: -30,
      max: 30,
      value: 4.2,
    },
    cameraY: {
      min: -30,
      max: 30,
      value: 9.0,
    },
    cameraZ: {
      min: -30,
      max: 30,
      value: 8.4,
    },
  });
  // const { focusDistance, focalLength, bokehScale } = useControls({
  //   focusDistance: {
  //     min: 0,
  //     max: 4,
  //     value: 2,
  //   },
  //   focalLength: {
  //     min: 0,
  //     max: 1,
  //     value: 0.1,
  //   },
  //   bokehScale: {
  //     min: 0,
  //     max: 10,
  //     value: 2,
  //   },
  // });
  return (
    <Canvas
      shadows={"soft"}
      shadowMap
      gl={{
        shadowMap: true,
        // alpha: false,
        // ToneMapping: THREE.FilmicToneMapping,
      }}
      // camera={{
      //   position: [cameraX, cameraY, cameraZ],
      //   fov: 10,
      // }}
    >
      {/* <Camera position={[cameraX, cameraY, cameraZ]} /> */}

      {/* <directionalLight position={[2, 3, 4]} intensity={5.0} castShadow /> */}
      {/* <directionalLight castShadow /> */}
      <OrbitControls autoRotate={false} makeDefault={true} />
      <Lights />
      {/* <Stage adjustCamera={true}> */}
      {/* <Canmore /> */}
      {/* <LakeLouise /> */}
      {/* <TransformControls
        onObjectChange={(e) => console.log(e.target.object.position)}
        mode={"translate"}
        position={[0, 0.75, 0]}
      > */}
      <LocationPin
        name={"Banff"}
        position={[-0.38338213593290904, 0.5, 1.593643435102435]}
      />
      {/* <TransformControls
        onObjectChange={(e) => console.log(e.target.object.position)}
        mode={"translate"}
        position={[0, 0.75, 0]}
      > */}
      <LocationPin
        castShadow
        receiveShadow
        name={"Banff Gondola"}
        position={[-0.8333524591253359, 0.5, 1.3565714314121025]}
      />
      <LocationPin
        name={"Banff Upper Hot Springs"}
        position={[-0.2333524591253359, 0.5, 1.3565714314121025]}
      />
      {/* </TransformControls> */}
      {/* <Billboard position={[0, 0.75, 0]} scale={0.4}>
        <Image transparent url={imageSource} />
      </Billboard> */}
      <IceFields />
      {/* <Plane
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5}
        material={new THREE.MeshStandardMaterial({ color: 0xff0033 })}
        position={[0, 0, 0]}
      /> */}
      {/* <TiltShiftEffects /> */}
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
