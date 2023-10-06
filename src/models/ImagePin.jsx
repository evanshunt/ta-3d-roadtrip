import React, { useEffect } from "react";
import { Billboard, Image } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";

const ImagePin = ({ imageSrc, index, position, name, scale, stop }) => {
  const [active, setActive] = React.useState(false);

  useEffect(() => {
    if (index === stop) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <group>
      {/* {active && (
        <e.mesh
          theatreKey={`${name}: line`}
          castShadow
          position={[position[0], position[1] - 0.1666, position[2] - 0.02]}
        >
          <cylinderGeometry args={[0.005, 0.005, 0.5, 6]} />
          <meshBasicMaterial color={0x9c0f00} />
        </e.mesh>
      )} */}

      <e.group
        theatreKey={name}
        position={[position[0], position[1] - 0.1, position[2]]}
        // position={
        //   active
        //     ? [position[0], position[1], position[2]]
        //     : [position[0], position[1] - 0.1, position[2]]
        // }
        scale={scale}
        // scale={active ? 0.2 : 0.075}
      >
        <Billboard>
          <Image
            transparent
            position-y={position[1] + 0.05}
            url={imageSrc}
            scale={2}
          />

          <mesh position-z={-0.02} position-y={position[1] + 0.05} castShadow>
            <circleGeometry args={[1.1, 32]} />
            <meshBasicMaterial color={active ? 0x9c0f00 : 0xb6b6b6} />
          </mesh>
        </Billboard>
      </e.group>
    </group>
  );
};

export default ImagePin;
