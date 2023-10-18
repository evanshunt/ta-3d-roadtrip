import React from "react";
import ImagePin from "../models/ImagePin";

const Day3 = ({ positions }) => {
  return (
    <>
      <ImagePin
        imageSrc={"/images/columbia-icefield-skywalk.png"}
        scale={0.2}
        name={"Columbia Icefield Skywalk"}
        position={positions.columbiaIcefieldSkywalk}
      />
      <ImagePin
        imageSrc={"/images/maligne-canyon.png"}
        scale={0.2}
        name={"Maligne Canyon"}
        position={positions.maligneCanyon}
      />
      <ImagePin
        imageSrc={"/images/jasper-sky-tram.png"}
        scale={0.2}
        name={"Jasper SkyTram"}
        position={positions.jasperSkyTram}
      />
      <ImagePin
        imageSrc={"/images/fairmont-jasper-park-lodge.png"}
        scale={0.2}
        name={"Fairmont Jasper Park Lodge"}
        position={positions.fairmontJasperParkLodge}
      />
      <ImagePin
        imageSrc={"/images/jasper-planetarium.png"}
        scale={0.2}
        name={"Jasper Planetarium"}
        position={positions.jasperPlanetarium}
      />
    </>
  );
};

export default Day3;
