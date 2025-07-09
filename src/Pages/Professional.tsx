import React, { useEffect, useState } from "react";
import Carousel from "./ProfessionalScreen";
import AndN from "./Professional/AandN";
import AcademicCarrier from "./Professional/AcademicCarrier";
import Professional from "./Professional/Professioalcarrier";
import SmallAcademicCarrier from "./Professional/SmallAcademicCarrier";
import SmallProfessioalcarrier from "./Professional/SmallProfessioalcarrier";
import SmallAandN from "./Professional/SmallAandN";


const ProfessionalCareer: React.FC = () => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <Carousel>
      {isLargeScreen ? <AndN /> : <SmallAandN/> }
      {isLargeScreen ? <AcademicCarrier /> : <SmallAcademicCarrier />}
      {isLargeScreen ? <Professional /> : <SmallProfessioalcarrier/>}
    </Carousel>
  );
};

export default ProfessionalCareer;
