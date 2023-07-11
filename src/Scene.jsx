import Canmore from "./models/Canmore.jsx";
import {
  Billboard,
  Environment,
  Image,
  Text,
  useScroll,
} from "@react-three/drei";
import LocationPin from "./models/LocationPin.jsx";
import React, { useState } from "react";
import { PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";
import { useFrame } from "@react-three/fiber";
import { val } from "@theatre/core";
import imageSource from "/hover-icon.png";

const Scene = () => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();
  const [active, setActive] = useState(false);

  useFrame(({ clock }) => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment background={false} files={"/env.hdr"} />
      <Billboard
        position={active ? [0, 2, 0] : [0, 1.5, 0]}
        scale={active ? 1 : 0.5}
        onClick={(e) => setActive(!active)}
      >
        <Image transparent url={imageSource} />
      </Billboard>
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
