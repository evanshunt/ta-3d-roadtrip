import React from "react";
import ImagePin from "../models/ImagePin";
import InfoBox from "../components/InfoBox";
import { NightLights } from "./NightLights";

const Day2 = ({ geometry, isNight, material, positions, setIndex }) => {
  // const { lakeLouiseGondolaX, lakeLouiseGondolaY, lakeLouiseGondolaZ } =
  //   useControls("Lake Louise Gondola", {
  //     lakeLouiseGondolaX: {
  //       value: positions.lakeLouiseGondola[0],
  //       min: -5,
  //       max: 0,
  //       step: 0.1,
  //     },
  //     lakeLouiseGondolaY: {
  //       value: positions.lakeLouiseGondola[1],
  //       min: 0,
  //       max: 2,
  //       step: 0.1,
  //     },
  //     lakeLouiseGondolaZ: {
  //       value: positions.lakeLouiseGondola[2],
  //       min: -2,
  //       max: 5,
  //       step: 0.1,
  //     },
  //   });

  // const {
  //   fairmontChateauLakeLouiseX,
  //   fairmontChateauLakeLouiseY,
  //   fairmontChateauLakeLouiseZ,
  // } = useControls("Fairmont Chateau Lake Louise", {
  //   fairmontChateauLakeLouiseX: {
  //     value: positions.fairmontChateauLakeLouise[0],
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   fairmontChateauLakeLouiseY: {
  //     value: positions.fairmontChateauLakeLouise[1],
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   fairmontChateauLakeLouiseZ: {
  //     value: positions.fairmontChateauLakeLouise[2],
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  // });

  // const { fairviewX, fairviewY, fairviewZ } = useControls("Fairview", {
  //   fairviewX: {
  //     value: positions.fairview[0],
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   fairviewY: {
  //     value: positions.fairview[1],
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   fairviewZ: {
  //     value: positions.fairview[2],
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  // });

  // const { moraineLakeX, moraineLakeY, moraineLakeZ } = useControls(
  //   "Moraine Lake",
  //   {
  //     moraineLakeX: {
  //       value: positions.lakeLouiseGondola[0],
  //       min: -5,
  //       max: 0,
  //       step: 0.1,
  //     },
  //     moraineLakeY: {
  //       value: positions.lakeLouiseGondola[1],
  //       min: 0,
  //       max: 2,
  //       step: 0.1,
  //     },
  //     moraineLakeZ: {
  //       value: positions.lakeLouiseGondola[2],
  //       min: -2,
  //       max: 5,
  //       step: 0.1,
  //     },
  //   }
  // );

  // const { castleMountainX, castleMountainY, castleMountainZ } = useControls(
  //   "Castle Mountain",
  //   {
  //     castleMountainX: {
  //       value: positions.lakeLouiseGondola[0],
  //       min: -5,
  //       max: 0,
  //       step: 0.1,
  //     },
  //     castleMountainY: {
  //       value: positions.lakeLouiseGondola[1],
  //       min: 0,
  //       max: 2,
  //       step: 0.1,
  //     },
  //     castleMountainZ: {
  //       value: positions.lakeLouiseGondola[2],
  //       min: -2,
  //       max: 5,
  //       step: 0.1,
  //     },
  //   }
  // );

  // const { morantsCurveX, morantsCurveY, morantsCurveZ } = useControls(
  //   "Morant's Curve",
  //   {
  //     morantsCurveX: {
  //       value: positions.lakeLouiseGondola[0],
  //       min: -5,
  //       max: 0,
  //       step: 0.1,
  //     },
  //     morantsCurveY: {
  //       value: positions.lakeLouiseGondola[1],
  //       min: 0,
  //       max: 2,
  //       step: 0.1,
  //     },
  //     morantsCurveZ: {
  //       value: positions.lakeLouiseGondola[2],
  //       min: -2,
  //       max: 5,
  //       step: 0.1,
  //     },
  //   }
  // );

  return (
    <>
      <InfoBox
        imageSrc={"/images/info-boxes/sunshine-village.png"}
        name={"Moraine Lake"}
        position={[-3.7, 1.2, 0.6]}
        width={1.86}
      />
      <InfoBox
        imageSrc={"/images/info-boxes/sunshine-village.png"}
        name={"Hector Lake"}
        position={[-2.25, 1.2, 0.0]}
        width={1.86}
      />
      <InfoBox
        imageSrc={"/images/info-boxes/sunshine-village.png"}
        name={"Morant's Curve"}
        position={[-3.3, 1.1, 0.8]}
        width={1.86}
      />
      <ImagePin
        geometry={geometry}
        imageSrc={"/images/carter-ryan-gallery.webp"}
        index={6}
        material={material}
        name={"Carter Ryan Gallery"}
        position={positions.carterRyanGallery}
        scale={0.2}
        setIndex={setIndex}
      />
      <ImagePin
        geometry={geometry}
        imageSrc={"/images/johnston-canyon.webp"}
        index={7}
        material={material}
        name={"Johnston Canyon"}
        position={positions.johnstonCanyon}
        scale={0.2}
        setIndex={setIndex}
      />
      <ImagePin
        geometry={geometry}
        imageSrc={"/images/lake-louise-gondola.webp"}
        index={8}
        material={material}
        scale={0.2}
        name={"Lake Louise Gondola"}
        position={positions.lakeLouiseGondola}
        setIndex={setIndex}
      />
      <ImagePin
        geometry={geometry}
        imageSrc={"/images/fairmont-chateau-lake-louise.webp"}
        index={9}
        material={material}
        name={"Fairmont Chateau Lake Louise"}
        scale={0.2}
        position={positions.fairmontChateauLakeLouise}
        setIndex={setIndex}
      />
      <ImagePin
        geometry={geometry}
        imageSrc={"/images/fairview.webp"}
        index={10}
        material={material}
        name={"Fairview"}
        position={positions.fairview}
        scale={0.2}
        setIndex={setIndex}
      />

      <NightLights isNight={isNight} position={positions.fairview} />
    </>
  );
};

export default Day2;
