import React, { useRef } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";

const EditableCamera = ({ cameraRef }) => {
  return (
    <e.group theatreKey={"Camera"}>
      <PerspectiveCamera makeDefault zoom={2.5} far={95.0} ref={cameraRef} />
    </e.group>
  );
};

export default EditableCamera;
