import React from "react";
import { useRef } from "react";
import { useControls } from "leva";

const Lights = () => {
  const spotLight = useRef();

  // const { positionX, positionY, positionZ, intensity } = useControls({
  //   positionX: {
  //     value: 0,
  //     min: -20,
  //     max: 20,
  //     step: 0.025,
  //   },
  //   positionY: {
  //     value: 15,
  //     min: 0,
  //     max: 25,
  //     step: 0.025,
  //   },
  //   positionZ: {
  //     value: 0,
  //     min: -20,
  //     max: 20,
  //     step: 0.025,
  //   },
  //   intensity: {
  //     value: 0.3,
  //     min: 0,
  //     max: 1,
  //     step: 0.025,
  //   },
  // });

  // const { color } = useControls({
  //   color: {
  //     value: "#ffffff",
  //     label: "Color",
  //   },
  // });

  return (
    <>
      <ambientLight intensity={0.4} color={0xffffff} />

      <directionalLight
        ref={spotLight}
        position={[-15.98, 12.2, 0.43]}
        // position={[positionX, positionY, positionZ]}

        // color={color}
        intensity={0.5}
        // intensity={intensity}
        lookAt={[0, 0, 0]}
        castShadow
        // shadow-mapSize-width={1024}
        // shadow-mapSize-height={1024}
      />
    </>
  );
};

export default Lights;
