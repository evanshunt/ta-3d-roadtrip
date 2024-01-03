import * as THREE from "three";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useRef } from "react";

const Lights = ({ index, isMobile, isNight }) => {
  const spotLight = useRef();
  const hemisphereLightRef = useRef();
  const tl = gsap.timeline({});

  const colors = {
    blue: new THREE.Color().setHex(0xc7d3e3),
    yellow: new THREE.Color().setHex(0xf7efc9),
    orange: new THREE.Color().setHex(0xf7e0c9),
    white: new THREE.Color().setHex(0xffffff),
  };

  const sunPositions = {
    sunrise: [1.5, 6, 9.5],
    morning: [-3, 7, 9.5],
    noon: [-6.5, 10, 6.5],
    afternoon: [-8.75, 7, 9.5],
    sunset: [-15, 4, 13.5],
  };

  const animateSpotlight = (spotLight, tl, index) => {
    switch (index % 6) {
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
          duration: 2,
        });
        // tl.to(
        //   spotLight.current,
        //   {
        //     intensity: 1.5,
        //     duration: 2,
        //   },
        //   "<"
        // );
        tl.to(
          spotLight.current.color,
          {
            r: colors.yellow.r,
            g: colors.yellow.g,
            b: colors.yellow.b,
            duration: 2,
          },
          "<"
        );
        break;
      case 2:
        tl.to(spotLight.current.position, {
          x: sunPositions.noon[0],
          y: sunPositions.noon[1],
          z: sunPositions.noon[2],
          duration: 2,
        });
        tl.to(
          spotLight.current,
          {
            intensity: 1.75,
            duration: 2,
          },
          "<"
        );
        // tl.to(
        //   spotLight.current,
        //   {
        //     intensity: 1.75,
        //     duration: 2,
        //   },
        //   "<"
        // );
        // tl.to(
        //   spotLight.current.color,
        //   {
        //     r: colors.blue.r,
        //     g: colors.blue.g,
        //     b: colors.blue.b,
        //     duration: 2,
        //   },
        //   "<"
        // );
        break;
      case 3:
        tl.to(spotLight.current.position, {
          x: sunPositions.noon[0],
          y: sunPositions.noon[1],
          z: sunPositions.noon[2],
          duration: 4,
        });
        // tl.to(
        //   spotLight.current,
        //   {
        //     intensity: 2,
        //     duration: 2,
        //   },
        //   "<"
        // );
        tl.to(
          spotLight.current.color,
          {
            r: colors.blue.r,
            g: colors.blue.g,
            b: colors.blue.b,
            duration: 2,
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
          spotLight.current,
          {
            intensity: 1,
            duration: 2,
          },
          "<"
        );
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

  const exitLight = (spotLight, tl) => {
    tl.to(
      hemisphereLightRef.current,
      {
        intensity: 4,
        duration: 1,
      },
      "<"
    );
    tl.to(
      spotLight.current,
      {
        intensity: 0.1,
        duration: 1,
      },
      "<"
    );
  };

  const enterLight = (spotLight, tl) => {
    tl.to(
      spotLight.current,
      {
        intensity: 1.25,
        duration: 2,
      },
      "<"
    );
    tl.to(
      hemisphereLightRef.current,
      {
        intensity: 0,
        duration: 2,
      },
      "<"
    );
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

  useEffect(() => {
    if (isNight) {
      exitLight(spotLight, tl);
    } else {
      enterLight(spotLight, tl);
    }
  }, [isNight]);

  return (
    <>
      <hemisphereLight
        color={0x252a3c}
        intensity={0}
        groundColor={0x2d474c}
        position={[0, 10, 0]}
        ref={hemisphereLightRef}
      />

      <directionalLight
        ref={spotLight}
        position={[-15, 10, 13.5]}
        lookAt={[0, 0, 0]}
        castShadow
        intensity={1.25}
        shadow-mapSize-width={isMobile ? 1024 * 1.5 : 1024 * 4}
        shadow-mapSize-height={isMobile ? 1024 * 1.5 : 1024 * 4}
      />
    </>
  );
};

export default Lights;
