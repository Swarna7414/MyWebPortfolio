import React from "react";
import Carousel from "./ProfessionalScreen";
import AndN from "./Professional/AandN";
import AcademicCarrier from "./Professional/AcademicCarrier";
import Professional from "./Professional/Professioalcarrier";

const ProfessionalCareer: React.FC = () => {
  return (
    <Carousel>
      <AndN />
      <AcademicCarrier />
      <Professional />
    </Carousel>
  );
};

export default ProfessionalCareer;
