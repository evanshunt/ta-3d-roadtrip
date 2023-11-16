import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

export const NightLights = ({ position, isNight }) => {
  const pointLightRef1 = useRef();
  const pointLightRef2 = useRef();
  const pointLightRef3 = useRef();
  const pointLightRef4 = useRef();

  const animateLights = (dir) => {
    // pointLightRefs.current.forEach((light, i) => {

    gsap.to(
      pointLightRef1.current,

      {
        intensity: dir === "in" ? 0.8 : 0,
        duration: 2,
      }
    );
    gsap.to(
      pointLightRef2.current,

      {
        intensity: dir === "in" ? 0.3 : 0,
        duration: 2,
      }
    );
    gsap.to(
      pointLightRef3.current,

      {
        intensity: dir === "in" ? 0.25 : 0,
        duration: 2,
      }
    );
    gsap.to(
      pointLightRef4.current,

      {
        intensity: dir === "in" ? 0.85 : 0,
        duration: 2,
      }
    );
    // });
  };

  useEffect(() => {
    if (isNight) {
      animateLights("in");
    } else {
      animateLights("out");
    }
  }, [isNight]);

  return (
    <>
      <pointLight
        ref={pointLightRef1}
        color={0xf47d0f}
        intensity={0}
        position={position}
        decay={0.85}
        distance={0.4}
      />
      <pointLight
        ref={pointLightRef2}
        color={0xf3d07c}
        intensity={0}
        position={[
          position[0] + 0.0002,
          position[1] + 0.01,
          position[2] + 0.0002,
        ]}
        decay={0.85}
        distance={0.4}
      />
      <pointLight
        ref={pointLightRef3}
        color={0xfff7e2}
        intensity={0}
        position={[
          position[0] - 0.0002,
          position[1] + 0.01,
          position[2] - 0.0002,
        ]}
        decay={0.85}
        distance={0.4}
      />
      <pointLight
        ref={pointLightRef4}
        color={0xe1730b}
        intensity={0}
        position={[
          position[0] - 0.0001,
          position[1] + 0.01,
          position[2] + 0.0003,
        ]}
        decay={0.85}
        distance={0.4}
      />
    </>
  );
};
