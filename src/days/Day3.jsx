import React from "react";
import ImagePin from "../models/ImagePin";
import InfoBox from "../components/InfoBox";
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

  // const { posXAthabasca, posYAthabasca, posZAthabasca } = useControls({
  //   posXAthabasca: {
  //     value: 1.1,
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   posYAthabasca: {
  //     value: 1.2,
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   posZAthabasca: {
  //     value: -3,
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  // });

  // const { posXMarmotBasin, posYMarmotBasin, posZMarmotBasin } = useControls({
  //   posXMarmotBasin: {
  //     value: positions.maligneCanyon[0],
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   posYMarmotBasin: {
  //     value: positions.maligneCanyon[1],
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   posZMarmotBasin: {
  //     value: positions.maligneCanyon[2],
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  // });

  // const { posXPyramidLake, posYPyramidLake, posZPyramidLake } = useControls({
  //   posXPyramidLake: {
  //     value: positions.maligneCanyon[0],
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   posYPyramidLake: {
  //     value: positions.maligneCanyon[1],
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  //   posZPyramidLake: {
  //     value: positions.maligneCanyon[2],
  //     min: -10,
  //     max: 10,
  //     step: 0.1,
  //   },
  // });

  return (
    <>
      <InfoBox
        imageSrc={"/images/info-boxes/sunshine-village.png"}
        name={"Mt. Athabasca"}
        position={[1.1, 1.2, -3]}
        width={1.86}
      />
      <InfoBox
        imageSrc={"/images/info-boxes/sunshine-village.png"}
        name={"Marmot Basin"}
        position={[4.8, 1.2, -6.2]}
        width={1.86}
      />
      <InfoBox
        imageSrc={"/images/info-boxes/sunshine-village.png"}
        name={"Pyramid Lake"}
        position={[5.6, 1.1, -6.0]}
        width={1.86}
      />
      <ImagePin
        geometry={geometry}
        imageSrc={"/images/columbia-icefield-skywalk.webp"}
        index={11}
        material={material}
        name={"Columbia Icefield Skywalk"}
        position={positions.columbiaIcefieldSkywalk}
        scale={0.2}
        setIndex={setIndex}
      />
      <ImagePin
        geometry={geometry}
        imageSrc={"/images/maligne-canyon.webp"}
        index={12}
        material={material}
        name={"Maligne Canyon"}
        position={positions.maligneCanyon}
        scale={0.2}
        setIndex={setIndex}
      />
      <ImagePin
        geometry={geometry}
        imageSrc={"/images/jasper-sky-tram.webp"}
        index={13}
        material={material}
        name={"Jasper SkyTram"}
        position={positions.jasperSkyTram}
        scale={0.2}
        setIndex={setIndex}
      />
      <ImagePin
        geometry={geometry}
        imageSrc={"/images/fairmont-jasper-park-lodge.webp"}
        index={14}
        material={material}
        name={"Fairmont Jasper Park Lodge"}
        position={positions.fairmontJasperParkLodge}
        scale={0.2}
        setIndex={setIndex}
      />
      <ImagePin
        geometry={geometry}
        imageSrc={"/images/jasper-planetarium.webp"}
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
