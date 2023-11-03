import React from "react";
import ImagePin from "../models/ImagePin";
import { useControls } from "leva";

const Day2 = ({ geometry, material, positions, setIndex }) => {
  // const { carterRyanGalleryX, carterRyanGalleryY, carterRyanGalleryZ } =
  //   useControls({
  //     carterRyanGalleryX: {
  //       value: positions.carterRyanGallery[0],
  //       min: -10,
  //       max: 10,
  //     },
  //     carterRyanGalleryY: {
  //       value: positions.carterRyanGallery[1],
  //       min: -10,
  //       max: 10,
  //     },
  //     carterRyanGalleryZ: {
  //       value: positions.carterRyanGallery[2],
  //       min: -10,
  //       max: 10,
  //     },
  //   });
  return (
    <>
      <ImagePin
        geometry={geometry}
        imageSrc={"/images/carter-ryan-gallery.png"}
        index={6}
        material={material}
        name={"Carter Ryan Gallery"}
        position={positions.carterRyanGallery}
        scale={0.2}
        setIndex={setIndex}
      />
      <ImagePin
        geometry={geometry}
        imageSrc={"/images/johnston-canyon.png"}
        index={7}
        material={material}
        name={"Johnston Canyon"}
        position={positions.johnstonCanyon}
        scale={0.2}
        setIndex={setIndex}
      />
      <ImagePin
        imageSrc={"/images/lake-louise-gondola.png"}
        scale={0.2}
        name={"Lake Louise Gondola"}
        position={positions.lakeLouiseGondola}
      />
      <ImagePin
        imageSrc={"/images/fairmont-chateau-lake-louise.png"}
        scale={0.2}
        name={"Fairmont Chateau Lake Louise"}
        position={positions.fairmontChateauLakeLouise}
      />
      <ImagePin
        imageSrc={"/images/fairview.png"}
        scale={0.2}
        name={"Fairview"}
        position={positions.fairview}
      />
    </>
  );
};

export default Day2;
