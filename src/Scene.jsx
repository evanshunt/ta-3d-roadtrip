import Canmore from "./models/Canmore.jsx";
import { Environment, useScroll } from "@react-three/drei";
import LocationPin from "./models/LocationPin.jsx";
import React from "react";
import { PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";
import { useFrame } from "@react-three/fiber";
import { val } from "@theatre/core";

const Scene = () => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(({ clock }) => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment background={false} files={"/env.hdr"} />
      <LocationPin castShadow receiveShadow />
      <Canmore castShadow receiveShadow />
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        fov={45}
        near={0.1}
        far={2000}
        position={[0, 4, 10]}
      />
    </>
  );
};

export default Scene;
