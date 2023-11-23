import React, { useRef } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import { useFrame } from "@react-three/fiber";

const EditableCamera = ({ getDirection }) => {
  const cameraRef = useRef();
  useFrame(() => {
    getDirection(cameraRef?.current);
  });
  return (
    <e.group theatreKey={"Camera"} ref={cameraRef}>
      <PerspectiveCamera makeDefault zoom={2.5} far={35.0} />
    </e.group>
  );
};

export default EditableCamera;
