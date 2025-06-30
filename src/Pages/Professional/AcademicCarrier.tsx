import React from "react";
import { FaUniversity } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import { FaCalendarCheck } from "react-icons/fa";

const education = [
  {
    title: "UiT- The Arctic University of Norway",
    location: "Tromsø, Norway",
    subtitle: "Ph.D, Computer Science",
    duration: "2018–2021",
  },
  {
    title: "Chosun University",
    location: "Gwangju, South Korea",
    subtitle: "Master's in Information Technology",
    duration: "2015–2017",
  },
  {
    title: "Khwopa Engineering College (Purbanchal University)",
    location: "Bhaktapur, Nepal",
    subtitle: "Bachelor's in Electrical and Communication Engineering",
    duration: "2008–2013",
  },
  {
    title: "Birat Science Campus",
    location: "Koshi, Nepal",
    subtitle: "High School",
    duration: "2006–2008",
  },
];

const AcademicCarrier: React.FC = () => {
  return (
    <section className="min-h-screen px-12 pt-[200px] pb-12">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 text-black hover:text-blue-500 transition-all duration-300 cursor-pointer hover:underline-offset-2 hover:underline">
        Educational Background
      </h1>

      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {education.map((item, index) => (
          <div
            key={index}
            className="w-full bg-blue-100 border border-blue-300 rounded-lg p-4 shadow-md hover:shadow-md hover:shadow-blue-400 duration-300 cursor-pointer"
          >
            <h2 className="text-lg sm:text-md lg:text-xl font-semibold text-black flex flex-row items-center">
              <FaUniversity className="text-blue-500"/> <span className="ml-1.5">{item.title}</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 flex flex-row items-center"><IoLocationOutline className="mr-2 text-red-400"/><span>{item.location}</span></p>
            <p className="mt-1 text-sm sm:text-base text-gray-800 flex flex-row items-center"><GiGraduateCap className="mr-2"/>{item.subtitle}</p>
            <p className="mt-1 text-sm sm:text-base text-gray-600 font-medium flex flex-row items-center"><FaCalendarCheck className="mr-2 text-green-600"/>{item.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicCarrier;
