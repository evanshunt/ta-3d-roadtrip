import { Sparkles } from "@react-three/drei";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

export const NightLights = ({ position, isMobile, isNight }) => {
  const pointLightRef1 = useRef();
  const pointLightRef2 = useRef();
  const tl = gsap.timeline({});

  const animateLights = (dir) => {
    tl.to(
      pointLightRef1.current,

      {
        intensity: dir === "in" ? 0.8 : 0,
        duration: 2,
      }
    );
    tl.to(
      pointLightRef2.current,

      {
        intensity: dir === "in" ? 0.5 : 0,
        duration: 2,
      }
    );
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
      {isNight && (
        <>
          <Sparkles
            count={isMobile ? 50 : 125}
            color={0xffffff}
            position={position}
            scale={0.4}
            size={0.6}
            speed={0.1}
          />
          <Sparkles
            count={isMobile ? 50 : 125}
            color={0xf47d0f}
            position={position}
            speed={0.1}
            size={0.8}
            scale={0.4}
          />
        </>
      )}
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
    </>
  );
};
