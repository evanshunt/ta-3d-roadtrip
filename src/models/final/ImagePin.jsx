import { gsap } from "gsap/gsap-core";
import React, { useEffect, useRef } from "react";
import { Billboard, Image } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import { types } from "@theatre/core";

const ImagePin = ({
  geometry,
  handleIndex,
  hidden,
  imageSrc,
  inBetweens,
  index,
  isMobile,
  material,
  name,
  pinRefs,
  position,
  sceneIndex,
  setAttractionsOpen,
  setHoverIndex,
  setPinRefs,
}) => {
  if (!index) return null;

  const [theatreObject, setTheatreObject] = React.useState(null);
  const groupRef = useRef();
  const imageRef = useRef();
  const stemRef = useRef();
  const backgroundHaloRef = useRef();

  const setupPositions = (pinRef) => {
    if (!pinRef.current) return;
    const image = pinRef.current.children[0].children[0];
    const stem = pinRef.current.children[1];
    const background = pinRef.current.children[3];
    const backgroundHalo = pinRef.current.children[4];

    // gsap.set(pinRef.current.position, {
    //   y: 1,
    // });

    // if (stem) {
    //   gsap.set(stem.position, {
    //     y: -1.15,
    //   });
    // }

    // if (image) {
    //   gsap.set(image.material, {
    //     opacity: 0,
    //     scale: 0.03,
    //   });
    // }
    if (background) {
      gsap.set(background.position, {
        y: -1,
      });
      gsap.set(backgroundHalo.position, {
        y: -1,
      });
    }
    // gsap.set(imageRef.position, {
    //   y: -1,
    // });
    gsap.set(imageRef.scale, {
      x: 0.03,
      y: 0.03,
      z: 0.03,
    });
    if (backgroundHalo) {
      // gsap.set(backgroundHalo.position, {
      //   y: 0,
      // });
    }
  };

  const animateGroup = (pinRef, dir = "next") => {
    if (inBetweens && !inBetweens.includes(index)) return;

    const inTL = gsap.timeline();
    const outTL = gsap.timeline();

    // determine parts
    if (dir === "next") {
      inTL.to(pinRef.position, {
        y: -2,
      });
    }
  };

  const animatePin = (pinRef, dir = "next") => {
    if (!pinRef.current) return;

    const inTL = gsap.timeline();
    const outTL = gsap.timeline();

    const image = pinRef.current.children[0].children[0];
    const stem = pinRef.current.children[1];
    const shadow = pinRef.current.children[2];
    const background = pinRef.current.children[3];
    const backgroundHalo = pinRef.current.children[4];

    // image:
    // - opacity: all: 0 -> 1
    // - scale: all: 0.03 -> 0.25 roughly 0.5s
    // - stem: y: -0.25 -> 0.11
    // - shadow: y: 0 -> 0.345, scale: 1 -> 2.75
    // - background: y: 0 -> 0.345, scale: 0.02 -> 0.175
    // - halo: y: 0 -> 0.345, scale blip: 0.03 -> 0.05 -> 0.03
    // - group: whatever, it just needs to hide

    // animate parts
    if (stem && dir === "next") {
      inTL.to(
        backgroundHalo.scale,
        {
          x: 0.05,
          y: 0.05,
          z: 0.05,
          duration: 0.2,
        },
        "blip"
      );
      inTL.to(backgroundHalo.scale, {
        x: 0.02,
        y: 0.02,
        z: 0.02,
        duration: 0.2,
      });
      inTL.to(stem.position, {
        y: -1,
        duration: 0.5,
      });
      inTL.to(
        backgroundHalo.position,
        {
          y: -0.745,
          duration: 0.5,
        },
        "<"
      );
      inTL.to(
        background.position,
        {
          duration: 0.5,
          y: -0.745,
        },
        "<"
      );
      inTL.to(
        shadow.position,
        {
          duration: 0.5,
          y: -0.745,
        },
        "<"
      );
      inTL.to(
        image.position,
        {
          y: -0.745,
        },
        "<"
      );
      inTL.to(
        background.scale,
        {
          x: 0.25,
          y: 0.25,
          z: 0.25,
          duration: 0.5,
        },
        "bg"
      );
      inTL.to(
        shadow.scale,
        {
          x: 0.25,
          y: 0.25,
          z: 0.25,
          duration: 0.5,
        },
        "bg"
      );
      inTL.to(
        image.material,
        {
          opacity: 1,
          duration: 0.75,
        },
        "bg"
      );
      inTL.to(
        image.scale,
        {
          x: 0.25,
          y: 0.25,
          z: 0.25,
          duration: 0.5,
        },
        "bg"
      );
    } else if (stem && dir === "prev") {
      outTL.to(
        background.scale,
        {
          x: 0.02,
          y: 0.02,
          z: 0.02,
        },
        "scale"
      );
      outTL.to(
        shadow.scale,
        {
          x: 0.03,
          y: 0.03,
          z: 0.03,
        },
        "scale"
      );
      outTL.to(
        image.scale,
        {
          x: 0.03,
          y: 0.03,
          z: 0.03,
        },
        "scale"
      );
      outTL.to(
        image.material,
        {
          opacity: 0,
        },
        "scale"
      );
      outTL.to(
        stem.position,
        {
          duration: 0.5,
          y: -1.15,
        },
        "down"
      );
      outTL.to(
        backgroundHalo.position,
        {
          duration: 0.5,
          y: -1.15,
        },
        "down"
      );
      outTL.to(
        [shadow.position, background.position],
        {
          duration: 0.5,
          y: -1,
        },
        "down"
      );
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setupPositions(groupRef);
      // this will run during the intro animation
    }, 500);
    setPinRefs((prevRefs) => [...prevRefs, groupRef]);

    return () => {
      setPinRefs((prevRefs) => prevRefs.filter((ref) => ref !== groupRef));
    };
  }, []);

  useEffect(() => {
    if (!sceneIndex) return;

    animatePin(pinRefs[sceneIndex], "next");
    animatePin(pinRefs[sceneIndex - 1], "prev");

    if (inBetweens.includes(sceneIndex)) {
      animateGroup(pinRefs[sceneIndex - 1], "next");
    }
  }, [sceneIndex]);

  if (hidden) return null;

  // useFrame(() => {
  //   theatreObject.onValuesChange((newValues) => {
  //     if (!imageRef.current) return;
  //     imageRef.current.children[0].material.opacity = newValues.opacity;
  //   });
  // });

  return (
    <Billboard position={[position[0], position[1], position[2]]}>
      <e.group theatreKey={`Pins / ${name} / Group`} ref={groupRef}>
        <e.group
          ref={imageRef}
          objRef={setTheatreObject}
          name={`Pin ${name}`}
          theatreKey={`Pins / ${name} / Pin ${name}`}
          scale={0}
          additionalProps={{
            opacity: types.number(0.5, { range: [0, 1.0] }),
          }}
        >
          <Image
            castShadow={false}
            ref={imageRef}
            // position={[0, 0, 0.1]}
            transparent
            url={imageSrc}
            // opacity={opacity}
            opacity={0}
            scale={0.03}
            position={[0, -1, 0.1]}
            receiveShadow={false}
            onClick={() => {
              if (!inBetweens) return;
              if (isMobile && !inBetweens.includes(index + 1)) {
                setAttractionsOpen(true);
              }
            }}
          />
        </e.group>

        <e.mesh
          castShadow={true}
          position={[0, -1.25, -0.0305]}
          ref={stemRef}
          theatreKey={`Pins / ${name} / Stem ${name}`}
          scale={[0.075, 0.2, 0.075]}
          material={material}
          name={`Stem ${name}`}
          receiveShadow={false}
        >
          <meshBasicMaterial color={0x9c0f00} />
          <cylinderGeometry args={[0.03, 0.03, 2.5, 2]} />
        </e.mesh>

        <e.mesh
          position={[0, 0, -0.0305]}
          castShadow
          receiveShadow={false}
          theatreKey={`Pins / ${name} / Shadow ${name}`}
          name={`Shadow ${name}`}
        >
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshBasicMaterial colorWrite={false} depthWrite={false} />
        </e.mesh>

        <e.mesh
          castShadow
          onClick={() => {
            handleIndex("next", index, false);
          }}
          position-z={-0.02}
          theatreKey={`Pins / ${name} / Background ${name}`}
          scale={0.02}
          material={material}
          name={`Background ${name}`}
          receiveShadow={false}
          geometry={geometry}
        />

        {/* This is to help with the touch area on mobile */}
        {isMobile && (
          <mesh
            position-z={-0.02}
            onPointerUp={() => {
              handleIndex("next", index, false);
            }}
          >
            <circleGeometry args={[0.05, 16]} />

            <meshBasicMaterial depthWrite={false} colorWrite={false} />
          </mesh>
        )}

        <e.mesh
          onPointerEnter={() => {
            setHoverIndex(index);
          }}
          onPointerLeave={(e) => {
            setHoverIndex(null);
          }}
          ref={backgroundHaloRef}
          castShadow
          name={`Background Halo ${name}`}
          position-z={-0.03}
          theatreKey={`Pins / ${name} / Background Halo ${name}`}
          scale={0.03}
          geometry={geometry}
          receiveShadow={false}
        >
          <meshStandardMaterial
            transparent={true}
            color={0x9c0f00}
            opacity={0.4}
          />
        </e.mesh>
      </e.group>
    </Billboard>
  );
};

export default ImagePin;
