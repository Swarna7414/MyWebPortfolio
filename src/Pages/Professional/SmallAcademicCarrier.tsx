import React from "react";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaGraduationCap, FaCalendarCheck } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const AcademicCarrier: React.FC = () => {
  const education = [
    {
      title: "The Arctic University of Norway",
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
      title: "Khwopa Engineering College",
      location: "Bhaktapur, Nepal",
      subtitle: "Bachelor's in ECE",
      duration: "2008–2013",
    },
    {
      title: "Birat Science Campus",
      location: "Koshi, Nepal",
      subtitle: "High School",
      duration: "2006–2008",
    },
  ];

  return (
    <section className="p-6 px-12 h-screen pt-[79px] sm:p-8 md:p-10 lg:p-12 block lg:hidden">
      <div className="flex flex-col h-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold hover:text-blue-500 duration-300 cursor-pointer text-center mt-2 pb-5">
          Academic Background
        </h1>

        <div className="space-y-4">
          {education.map((item, index) => (
            <ul
              key={index}
              className="bg-blue-100 border border-blue-400 px-6 sm:px-8 py-4 rounded-lg shadow text-black space-y-2 hover:shadow-md hover:shadow-blue-400 transition duration-300 group cursor-pointer"
            >
              {/* Title – responsive text */}
              <li className="flex items-center gap-2 text-md md:text-lg">
                <LiaUniversitySolid className="text-blue-700 group-hover:text-blue-800" />
                <span className="font-semibold">{item.title}</span>
              </li>

              {/* Location */}
              <li className="flex items-center gap-2 text-sm">
                <IoLocation className="text-red-500" />
                <span>{item.location}</span>
              </li>

              {/* Degree */}
              <li className="flex items-center gap-2 text-sm">
                <FaGraduationCap />
                <span>{item.subtitle}</span>
              </li>

              {/* Duration */}
              <li className="flex items-center gap-2 text-sm">
                <FaCalendarCheck className="text-emerald-500 group-hover:text-green-700" />
                <span>{item.duration}</span>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicCarrier;
