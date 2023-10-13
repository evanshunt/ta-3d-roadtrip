import * as THREE from "three";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useRef } from "react";
// import { useControls } from "leva";

const Lights = ({ index }) => {
  const spotLight = useRef();
  const tl = gsap.timeline({});

  const colors = {
    blue: new THREE.Color().setHex(0x70b2f5),
    orange: new THREE.Color().setHex(0xf5b170),
    white: new THREE.Color().setHex(0xffffff),
  };

  const animateSpotlight = (spotLight, tl, index) => {
    switch (index) {
      case 0:
        tl.to(spotLight.current.position, {
          x: -10,
          duration: 4,
        });
        break;
      case 1:
        tl.to(spotLight.current.position, {
          x: -5,
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
          x: 0,
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
          x: 5,
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
          x: 10,
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
          x: 35,
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
  }, []);

  useEffect(() => {
    animateSpotlight(spotLight, tl, index);
  }, [index]);

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

  return (
    <>
      <ambientLight intensity={0.2} color={0xffffff} />

      <directionalLight
        ref={spotLight}
        position={[-35.98, 12.2, 0.43]}
        // position={[positionX, positionY, positionZ]}

        // intensity={0.5}
        intensity={1.75}
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
