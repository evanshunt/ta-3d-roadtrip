import React from "react";
import ImagePin from "../models/ImagePin";
import { useControls } from "leva";

const Day3 = ({ geometry, material, positions, setIndex }) => {
  // const { iceFieldPosX, iceFieldPosY, iceFieldPosZ } = useControls(
  //   "Icefield Skywalk",
  //   {
  //     iceFieldPosX: {
  //       value: positions.columbiaIcefieldSkywalk[0],
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //     },
  //     iceFieldPosY: {
  //       value: positions.columbiaIcefieldSkywalk[1],
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //     },
  //     iceFieldPosZ: {
  //       value: positions.columbiaIcefieldSkywalk[2],
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //     },
  //   }
  // );

  // const { maligneCanyonPosX, maligneCanyonPosY, maligneCanyonPosZ } =
  //   useControls("Maligne Canyon", {
  //     maligneCanyonPosX: {
  //       value: positions.maligneCanyon[0],
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //     },
  //     maligneCanyonPosY: {
  //       value: positions.maligneCanyon[1],
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //     },
  //     maligneCanyonPosZ: {
  //       value: positions.maligneCanyon[2],
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //     },
  //   });

  // const { jasperSkyTramPosX, jasperSkyTramPosY, jasperSkyTramPosZ } =
  //   useControls("Jasper SkyTram", {
  //     jasperSkyTramPosX: {
  //       value: positions.jasperSkyTram[0],
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //     },
  //     jasperSkyTramPosY: {
  //       value: positions.jasperSkyTram[1],
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //     },
  //     jasperSkyTramPosZ: {
  //       value: positions.jasperSkyTram[2],
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //     },
  //   });

  // const {
  //   fairmontJasperParkLodgePosX,
  //   fairmontJasperParkLodgePosY,
  //   fairmontJasperParkLodgePosZ,
  // } = useControls("Fairmont Jasper Park Lodge", {
  //   fairmontJasperParkLodgePosX: {
  //     value: positions.fairmontJasperParkLodge[0],
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   fairmontJasperParkLodgePosY: {
  //     value: positions.fairmontJasperParkLodge[1],
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   fairmontJasperParkLodgePosZ: {
  //     value: positions.fairmontJasperParkLodge[2],
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  // });

  // const {
  //   jasperPlanetariumPosX,
  //   jasperPlanetariumPosY,
  //   jasperPlanetariumPosZ,
  // } = useControls("Jasper Planetarium", {
  //   jasperPlanetariumPosX: {
  //     value: positions.jasperPlanetarium[0],
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   jasperPlanetariumPosY: {
  //     value: positions.jasperPlanetarium[1],
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   jasperPlanetariumPosZ: {
  //     value: positions.jasperPlanetarium[2],
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  // });

  return (
    <>
      <ImagePin
        geometry={geometry}
        imageSrc={"/images/columbia-icefield-skywalk.png"}
        index={11}
        material={material}
        name={"Columbia Icefield Skywalk"}
        position={positions.columbiaIcefieldSkywalk}
        scale={0.2}
        setIndex={setIndex}
      />
      <ImagePin
        geometry={geometry}
        imageSrc={"/images/maligne-canyon.png"}
        index={12}
        material={material}
        name={"Maligne Canyon"}
        position={positions.maligneCanyon}
        scale={0.2}
        setIndex={setIndex}
      />
      <ImagePin
        geometry={geometry}
        imageSrc={"/images/jasper-sky-tram.png"}
        index={13}
        material={material}
        name={"Jasper SkyTram"}
        position={positions.jasperSkyTram}
        scale={0.2}
        setIndex={setIndex}
      />
      <ImagePin
        geometry={geometry}
        imageSrc={"/images/fairmont-jasper-park-lodge.png"}
        index={14}
        material={material}
        name={"Fairmont Jasper Park Lodge"}
        position={positions.fairmontJasperParkLodge}
        scale={0.2}
        setIndex={setIndex}
      />
      <ImagePin
        geometry={geometry}
        imageSrc={"/images/jasper-planetarium.png"}
        index={15}
        material={material}
        name={"Jasper Planetarium"}
        position={positions.jasperPlanetarium}
        scale={0.2}
        setIndex={setIndex}
      />
    </>
  );
};

export default Day3;
