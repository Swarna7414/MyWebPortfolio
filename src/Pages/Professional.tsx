import React, { useEffect, useState } from "react";
import Carousel from "./ProfessionalScreen";
import AndN from "./Professional/AandN";
import AcademicCarrier from "./Professional/AcademicCarrier";
import Professional from "./Professional/Professioalcarrier";
import SmallAcademicCarrier from "./Professional/SmallAcademicCarrier";

const ProfessionalCareer: React.FC = () => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Tailwind's `lg` breakpoint = 1024px
    };

    checkScreen(); // Initial check
    window.addEventListener("resize", checkScreen); // Listen on resize

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <Carousel>
      <AndN />
      {isLargeScreen ? <AcademicCarrier /> : <SmallAcademicCarrier />}
      <Professional />
    </Carousel>
  );
};

export default ProfessionalCareer;
