import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Billboard, Image } from "@react-three/drei";

const ImagePin = ({ active, imageSrc, position, name, scale }) => {
  const imageRef = useRef();
  const stemRef = useRef();
  const backgroundRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(imageRef.current.rotation, {
        duration: 1,
        ease: "none",
        // repeatRefresh: true,
      });
      tl.play();
    }, imageRef); // <- scopes all selector text inside the context to this component (optional, default is document)

    return () => ctx.revert(); // cleanup!
  }, []);
  return (
    // <Billboard position={position} scale={scale}>
    // Clean up this nastiness
    <Billboard
      position={[position[0], position[1] - 0.02, position[2]]}
      scale={scale}
    >
      <group>
        <Image
          ref={imageRef}
          transparent
          position-y={position[1] + 0.05}
          url={imageSrc}
          scale={1.33}
        />

        <mesh castShadow position-y={position[1] - 1.4} ref={stemRef}>
          {/* <planeGeometry args={[0.05, 2]} position={[0, -3, -0.02]} /> */}
          <cylinderGeometry args={[0.02, 0.02, 1.5, 6]} />
          <meshBasicMaterial color={0x9c0f00} />
        </mesh>
        <mesh
          ref={backgroundRef}
          position-z={-0.02}
          position-y={position[1] + 0.05}
          castShadow
        >
          <circleGeometry args={[0.8, 32]} />
          <meshBasicMaterial color={0x9c0f00} />
        </mesh>
      </group>
    </Billboard>
  );
};

export default ImagePin;
