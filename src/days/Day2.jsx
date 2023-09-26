import React from "react";
import ImagePin from "../models/ImagePin";

const Day2 = ({ positions }) => {
  return (
    <>
      <ImagePin
        imageSrc={"/images/carter-ryan-gallery.png"}
        scale={0.2}
        name={"Carter Ryan Gallery"}
        position={positions.carterRyanGallery}
      />
      <ImagePin
        imageSrc={"/images/johnston-canyon.png"}
        scale={0.2}
        name={"Johnston Canyon"}
        position={positions.johnstonCanyon}
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
