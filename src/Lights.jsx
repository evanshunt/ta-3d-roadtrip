import * as THREE from "three";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useRef } from "react";
import { useControls } from "leva";

const Lights = ({ alt, debug, index, positions }) => {
  const spotLight = useRef();
  const tl = gsap.timeline({});

  const colors = {
    blue: new THREE.Color().setHex(0xafd3f8),
    orange: new THREE.Color().setHex(0xf5b170),
    white: new THREE.Color().setHex(0xffffff),
  };

  const sunPositions = {
    sunrise: [-15, 10, 13.5],
    morning: [-8.5, 10, 13.5],
    noon: [-6.5, 10, 13.5],
    afternoon: [-3, 10, 13.5],
    sunset: [1.5, 10, 13.5],
  };

  const animateSpotlight = (spotLight, tl, index) => {
    switch (index) {
      case 0:
        tl.to(spotLight.current.position, {
          x: sunPositions.sunrise[0],
          y: sunPositions.sunrise[1],
          z: sunPositions.sunrise[2],
          duration: 4,
        });
        break;
      case 1:
        tl.to(spotLight.current.position, {
          x: sunPositions.morning[0],
          y: sunPositions.morning[1],
          z: sunPositions.morning[2],
          duration: 4,
        });
        tl.to(
          spotLight.current.color,
          {
            r: colors.blue.r,
            g: colors.blue.g,
            b: colors.blue.b,
            duration: 4,
          },
          "<"
        );
        break;
      case 2:
        tl.to(spotLight.current.position, {
          x: sunPositions.noon[0],
          y: sunPositions.noon[1],
          z: sunPositions.noon[2],
          duration: 4,
        });
        tl.to(
          spotLight.current.color,
          {
            r: colors.white.r,
            g: colors.white.g,
            b: colors.white.b,
            duration: 4,
          },
          "<"
        );
        break;
      case 3:
        tl.to(spotLight.current.position, {
          x: sunPositions.noon[0],
          y: sunPositions.noon[1],
          z: sunPositions.noon[2],
          duration: 4,
        });
        tl.to(
          spotLight.current.color,
          {
            r: colors.white.r,
            g: colors.white.g,
            b: colors.white.b,
            duration: 4,
          },
          "<"
        );
        break;
      case 4:
        tl.to(spotLight.current.position, {
          x: sunPositions.afternoon[0],
          y: sunPositions.afternoon[1],
          z: sunPositions.afternoon[2],
          duration: 4,
        });
        tl.to(
          spotLight.current.color,
          {
            r: colors.blue.r,
            g: colors.blue.g,
            b: colors.blue.b,
            duration: 4,
          },
          "<"
        );
        break;
      case 5:
        tl.to(spotLight.current.position, {
          x: sunPositions.sunset[0],
          y: sunPositions.sunset[1],
          z: sunPositions.sunset[2],
          duration: 4,
        });
        tl.to(
          spotLight.current.color,
          {
            r: colors.orange.r,
            g: colors.orange.g,
            b: colors.orange.b,
            duration: 4,
          },
          "<"
        );
        break;
    }
  };

  useEffect(() => {
    gsap.set(spotLight.current.color, {
      r: colors.orange.r,
      g: colors.orange.g,
      b: colors.orange.b,
    });
    gsap.set(spotLight.current.position, {
      x: sunPositions.sunrise[0],
      y: sunPositions.sunrise[1],
      z: sunPositions.sunrise[2],
    });
  }, []);

  useEffect(() => {
    animateSpotlight(spotLight, tl, index);
  }, [index]);

  // const { positionX, positionY, positionZ, intensity } = useControls({
  //   positionX: {
  //     // value: 0,
  //     value: sunPositions.sunrise[0],
  //     min: -20,
  //     max: 20,
  //     step: 0.025,
  //   },
  //   positionY: {
  //     // value: 15,
  //     value: sunPositions.sunrise[1],
  //     min: 0,
  //     max: 25,
  //     step: 0.025,
  //   },
  //   positionZ: {
  //     value: sunPositions.sunrise[2],
  //     min: -20,
  //     max: 20,
  //     step: 0.025,
  //   },
  //   intensity: {
  //     // value: 0.3,
  //     value: 8.6,
  //     min: 0,
  //     max: 10,
  //     step: 0.025,
  //   },
  // });

  // oldpos [-35.98, 3.2, 0.43]

  return (
    <>
      {/* <ambientLight intensity={1.05} color={0xffffff} /> */}

      <directionalLight
        ref={spotLight}
        position={[-15, 10, 13.5]}
        // intensity={0.5}
        intensity={alt ? 1.75 : 2.5}
        // intensity={intensity}
        lookAt={positions[0]}
        castShadow
        shadow-mapSize-width={1024 * 5} // @TODO: test this on mobile, might have to use <SoftShadows />
        shadow-mapSize-height={1024 * 5}
      />
    </>
  );
};

export default Lights;
