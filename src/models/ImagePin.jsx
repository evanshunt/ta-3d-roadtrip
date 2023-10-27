import React, { useRef } from "react";
import { Billboard, Image, useCursor } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import { gsap } from "gsap";
import * as THREE from "three";
import { types } from "@theatre/core";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import shadowImage from "../images/shadow.svg";

const ImagePin = ({
  active,
  geometry,
  imageSrc,
  index,
  material,
  name,
  position,
  scale,
  setIndex,
}) => {
  // const [imageOpacity, setImageOpacity] = React.useState(0);
  const [theatreObject, setTheatreObject] = React.useState(null);
  const imageRef = useRef();
  const stemRef = useRef();
  const backgroundHaloRef = useRef();
  const backgroundRef = useRef();
  // const tl = gsap.timeline({ paused: true, repeat: -1, yoyo: true });
  let opacity = 0;
  const tl = gsap.timeline();

  useFrame(({ state, delta }) => {
    theatreObject.onValuesChange((newValues) => {
      imageRef.current.children[0].material.opacity = newValues.opacity;
    });
  });

  const animateHover = () => {
    tl.to(backgroundHaloRef.current.scale, {
      x: 0.04,
      y: 0.04,
      z: 0.04,
      duration: 0.3,
      ease: "power2.in",
    });
  };

  const animateOut = () => {
    tl.to(backgroundHaloRef.current.scale, {
      x: 0.03,
      y: 0.03,
      z: 0.03,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  // const { posX, posY, posZ } = useControls({
  //   posX: {
  //     value: position[0],
  //     min: -5,
  //     max: 0,
  //     step: 0.05,
  //   },
  //   posY: {
  //     value: position[1],
  //     min: -2,
  //     max: 2,
  //     step: 0.005,
  //   },
  //   posZ: {
  //     value: position[2],
  //     min: 0,
  //     max: 4,
  //     step: 0.05,
  //   },
  // });

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     tl.to(imageRef.current.rotation, {
  //       y: Math.PI / 2,
  //       duration: 1,
  //       ease: "none",
  //       onUpdate: () => {
  //         // console.log(imageRef.current.rotation.y);
  //       },
  //       // repeatRefresh: true,
  //     });
  //     tl.play();
  //   }, imageRef); // <- scopes all selector text inside the context to this component (optional, default is document)

  //   return () => ctx.revert(); // cleanup!
  // }, []);
  return (
    // <Billboard position={position} scale={scale}>

    <Billboard
      position={[position[0], position[1], position[2]]}
      // position={[posX, posY, posZ]}
      // scale={scale}
    >
      <e.group theatreKey={`Pins / ${name} / Group`}>
        <e.group
          ref={imageRef}
          objRef={setTheatreObject}
          theatreKey={`Pins / ${name} / Pin ${name}`}
          scale={0}
          additionalProps={{
            opacity: types.number(0.5, { range: [0, 1.0] }),
          }}
        >
          <Image
            ref={imageRef}
            position={[0, 0, 0.1]}
            transparent
            url={imageSrc}
            opacity={opacity}
            // opacity={0}
            // scale={1.33}
          />
        </e.group>

        <e.mesh
          castShadow={true}
          position={[0, -1.15, -0.0305]}
          ref={stemRef}
          theatreKey={`Pins / ${name} / Stem ${name}`}
          scale={[0.075, 0.2, 0.075]}
          material={material}
        >
          <meshBasicMaterial color={0x9c0f00} />
          <cylinderGeometry args={[0.02, 0.02, 2.5, 6]} />
        </e.mesh>

        <mesh position={[0, 0, -0.0305]} castShadow>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshBasicMaterial colorWrite={false} depthWrite={false} />
        </mesh>

        <e.mesh
          castShadow
          ref={backgroundRef}
          name={name}
          onPointerEnter={() => {
            animateHover();
          }}
          onPointerLeave={() => {
            animateOut();
          }}
          onClick={(e) => {
            setIndex(index);
          }}
          position-z={-0.02}
          // position-y={position[1] + 0.05}
          // position-y={1.25}

          theatreKey={`Pins / ${name} / Background ${name}`}
          scale={0.02}
          material={material}
          geometry={geometry}
        />

        <e.mesh
          ref={backgroundHaloRef}
          castShadow
          position-z={-0.03}
          // position-y={position[1] + 0.05}
          // position-y={1.25}
          theatreKey={`Pins / ${name} / Background Halo ${name}`}
          scale={0.03}
          geometry={geometry}
        >
          <meshStandardMaterial
            transparent={true}
            metalness={0}
            roughness={1}
            color={0x9c0f00}
            opacity={0.4}
            // alphaTest={0.4}
          />
        </e.mesh>
      </e.group>
    </Billboard>
  );
};

export default ImagePin;
