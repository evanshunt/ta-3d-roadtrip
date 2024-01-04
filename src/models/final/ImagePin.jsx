import { gsap } from "gsap/gsap-core";
import React, { useEffect, useRef } from "react";
import { Billboard, Image } from "@react-three/drei";

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

  // const [theatreObject, setTheatreObject] = React.useState(null);
  const groupRef = useRef();
  const imageRef = useRef();
  const stemRef = useRef();
  const backgroundHaloRef = useRef();

  const setupPositions = (pinRef) => {
    if (!pinRef.current) return;
    const image = pinRef.current.children[0].children[0];

    const background = pinRef.current.children[2];

    gsap.set(pinRef.current.position, {
      y: 1,
    });

    gsap.set(background.position, {
      y: -1,
    });

    gsap.set(image.scale, {
      x: 0.03,
      y: 0.03,
      z: 0.03,
    });
  };

  const animatePin = (pinRef, dir = "next") => {
    if (!pinRef.current) return;

    const inTL = gsap.timeline();
    const outTL = gsap.timeline();

    const image = pinRef.current.children[0].children[0];
    const stem = pinRef.current.children[1];
    const background = pinRef.current.children[2];
    const backgroundHalo = pinRef.current.children[3];

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
          duration: 0.3,
          ease: "power3.in",
        },
        "blip"
      );
      inTL.to(backgroundHalo.scale, {
        x: 0.02,
        y: 0.02,
        z: 0.02,
        ease: "power3.out",
        duration: 0.4,
      });
      inTL.to(stem.position, {
        y: -0.95,
        duration: 0.5,
        ease: "power3.in",
      });
      inTL.to(
        backgroundHalo.position,
        {
          y: -0.745,
          duration: 0.5,
          ease: "power3.in",
        },
        "<"
      );
      inTL.to(
        background.position,
        {
          duration: 0.5,
          y: -0.745,
          ease: "power3.in",
        },
        "<"
      );

      inTL.to(
        image.position,
        {
          y: -0.745,
          duration: 0.5,
          ease: "power3.in",
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
          ease: "power3.in",
        },
        "bg"
      );

      inTL.to(
        image.material,
        {
          opacity: 1,
          duration: 0.75,
          ease: "power3.in",
        },
        "bg"
      );
      inTL.to(
        image.scale,
        {
          x: 0.35,
          y: 0.35,
          z: 0.35,
          duration: 0.5,
          ease: "power3.in",
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
          duration: 0.5,
          ease: "power3.out",
        },
        "scale"
      );

      outTL.to(
        image.scale,
        {
          x: 0.03,
          y: 0.03,
          z: 0.03,
          duration: 0.5,
          ease: "power3.out",
        },
        "scale"
      );
      outTL.to(
        image.material,
        {
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "scale"
      );
      outTL.to(
        stem.position,
        {
          duration: 0.5,
          y: -1.2,
          ease: "power3.out",
        },
        "down"
      );
      outTL.to(
        backgroundHalo.position,
        {
          duration: 0.5,
          y: -1,
          ease: "power3.out",
        },
        "down"
      );
      outTL.to(
        background.position,
        {
          duration: 0.5,
          y: -1,
          ease: "power3.out",
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
    animatePin(pinRefs[sceneIndex + 1], "prev");
  }, [sceneIndex]);

  if (hidden) return null;

  return (
    <Billboard position={[position[0], position[1], position[2]]}>
      <group ref={groupRef}>
        <group ref={imageRef} name={`Pin ${name}`}>
          <Image
            castShadow={false}
            ref={imageRef}
            transparent
            url={imageSrc}
            opacity={0}
            scale={0.03}
            position={[0, -1, 0.005]}
            receiveShadow={false}
            onClick={() => {
              if (!inBetweens) return;
              if (isMobile && !inBetweens.includes(index + 1)) {
                setAttractionsOpen(true);
              }
            }}
          />
        </group>

        <mesh
          castShadow={true}
          position={[0, -1.2, -0.0305]}
          ref={stemRef}
          scale={[0.075, 0.2, 0.075]}
          material={material}
          name={`Stem ${name}`}
          receiveShadow={false}
        >
          <meshBasicMaterial color={0x9c0f00} />
          <cylinderGeometry args={[0.03, 0.03, 2, 6]} />
        </mesh>

        <mesh
          castShadow
          onClick={() => {
            handleIndex("next", index, false);
          }}
          position-z={-0.02}
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

        <mesh
          onPointerEnter={() => {
            setHoverIndex(index);
          }}
          onPointerLeave={(e) => {
            setHoverIndex(null);
          }}
          ref={backgroundHaloRef}
          castShadow
          name={`Background Halo ${name}`}
          position={[0, -1, -0.03]}
          scale={0.03}
          geometry={geometry}
          receiveShadow={false}
        >
          <meshStandardMaterial
            transparent={true}
            color={0x9c0f00}
            opacity={0.4}
          />
        </mesh>
      </group>
    </Billboard>
  );
};

export default ImagePin;
