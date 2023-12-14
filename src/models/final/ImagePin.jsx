import { gsap } from "gsap/gsap-core";
import React, { useEffect, useRef } from "react";
import { Billboard, Image } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import { types } from "@theatre/core";
import { useFrame } from "@react-three/fiber";

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
  const imageRef = useRef();
  const stemRef = useRef();
  const backgroundHaloRef = useRef();

  const tl = gsap.timeline();

  let opacity = 0;

  const animatePin = (pinRef, dir) => {
    if (!pinRef.current) return;
    // this is working in theory, pin refs only contain halos tho
    console.log(pinRef.current);
    // determine parts

    const image = pinRef.current.children[0];
    const stem = pinRef.current.children[1];
    const shadow = pinRef.current.children[2];
    const background = pinRef.current.children[3];
    const backgroundHalo = pinRef.current.children[4];

    // animate parts
    tl.to(stem.position, {
      duration: 0.5,
      y: 0.11,
    });
    tl.to(
      [shadow.position, background.position],
      {
        duration: 0.5,
        y: 0.11,
      },
      "<"
    );
  };

  useEffect(() => {
    setPinRefs((prevRefs) => [...prevRefs, backgroundHaloRef]);

    return () => {
      setPinRefs((prevRefs) =>
        prevRefs.filter((ref) => ref !== backgroundHaloRef)
      );
    };
  }, []);

  useEffect(() => {
    console.log("sceneIndex", sceneIndex);
    if (!sceneIndex) return;

    animatePin(pinRefs[sceneIndex], "next");
  }, [sceneIndex]);

  if (hidden) return null;

  useFrame(() => {
    theatreObject.onValuesChange((newValues) => {
      if (!imageRef.current) return;
      imageRef.current.children[0].material.opacity = newValues.opacity;
    });
  });

  return (
    <Billboard position={[position[0], position[1], position[2]]}>
      <e.group theatreKey={`Pins / ${name} / Group`}>
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
            position={[0, 0, 0.1]}
            transparent
            url={imageSrc}
            opacity={opacity}
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
          position={[0, -1.15, -0.0305]}
          ref={stemRef}
          theatreKey={`Pins / ${name} / Stem ${name}`}
          scale={[0.075, 0.2, 0.075]}
          material={material}
          name={`Stem ${name}`}
          receiveShadow={false}
        >
          <meshBasicMaterial color={0x9c0f00} />
          <cylinderGeometry args={[0.03, 0.03, 2.5, 6]} />
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
          name={name}
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
