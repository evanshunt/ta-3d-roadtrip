import { gsap } from "gsap";
import React, { useEffect } from "react";

export const NightImage = ({
  dims,
  isNight,
  nightLightsRef,
  nLPosX,
  nLPosY,
  nLPosZ,
  nLRotX,
  nLRotY,
  nLRotZ,
  nightTexture,
}) => {
  const tl = gsap.timeline({});
  const animateLights = (direction) => {
    switch (direction) {
      case "in":
        tl.to(
          nightLightsRef.current.material,
          {
            opacity: 1,
            duration: 1,
          },
          "<"
        );
        break;
      case "out":
        tl.to(
          nightLightsRef.current.material,
          {
            opacity: 0,
            duration: 1,
          },
          "<"
        );
        break;
    }
  };

  useEffect(() => {
    if (isNight) {
      animateLights("in");
    } else {
      animateLights("out");
    }
  }, [isNight]);
  return (
    <mesh
      ref={nightLightsRef}
      position={[nLPosX, nLPosY, nLPosZ]}
      rotation={[nLRotX, nLRotY, nLRotZ]}
    >
      <planeGeometry args={[dims, dims]} />
      <meshStandardMaterial
        opacity={0}
        map={nightTexture}
        map-flipY={true}
        map-generateMipmaps={true}
        map-anisotropy={16}
        map-doubleSided={true}
        transparent
      />
    </mesh>
  );
};
