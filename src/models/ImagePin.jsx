import React, { useRef } from "react";
import { Billboard, Image } from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import { types } from "@theatre/core";
import { useFrame } from "@react-three/fiber";
// import { useControls } from "leva";

const ImagePin = ({ active, imageSrc, position, name, scale }) => {
  const [imageOpacity, setImageOpacity] = React.useState(0);
  const [theatreObject, setTheatreObject] = React.useState(null);
  const imageRef = useRef();
  const stemRef = useRef();
  const backgroundHaloRef = useRef();
  const backgroundRef = useRef();
  // const tl = gsap.timeline({ paused: true, repeat: -1, yoyo: true });

  useFrame(({ clock }) => {
    theatreObject.onValuesChange((newValues) => {
      setImageOpacity(newValues.opacity);
    });
  });

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
    // Clean up this nastiness
    <Billboard
      position={[position[0], position[1], position[2]]}
      // scale={scale}
    >
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
          transparent
          url={imageSrc}
          opacity={imageOpacity}
          // opacity={0}
          // scale={1.33}
        />
      </e.group>

      <e.mesh
        castShadow
        position={[0, -1.14, -0.0305]}
        ref={stemRef}
        theatreKey={`Pins / ${name} / Stem ${name}`}
        scale={[0.075, 0.2, 0.075]}
      >
        {/* <planeGeometry args={[0.05, 2]} position={[0, -3, -0.02]} /> */}
        <cylinderGeometry args={[0.02, 0.02, 2.5, 6]} />
        <meshBasicMaterial color={0x9c0f00} />
      </e.mesh>
      <e.mesh
        ref={backgroundRef}
        position-z={-0.02}
        // position-y={position[1] + 0.05}
        // position-y={1.25}
        castShadow
        theatreKey={`Pins / ${name} / Background ${name}`}
        scale={0.02}
      >
        <circleGeometry args={[0.8, 32]} />
        <meshBasicMaterial color={0x9c0f00} />
      </e.mesh>
      <e.mesh
        ref={backgroundHaloRef}
        position-z={-0.02}
        // position-y={position[1] + 0.05}
        // position-y={1.25}
        castShadow
        theatreKey={`Pins / ${name} / Background Halo ${name}`}
        scale={0.03}
      >
        <circleGeometry args={[0.8, 32]} />
        <meshStandardMaterial
          transparent={true}
          color={0x9c0f00}
          opacity={0.4}
        />
      </e.mesh>
    </Billboard>
  );
};

export default ImagePin;
