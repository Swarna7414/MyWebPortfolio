import React from "react";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaGraduationCap } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaCalendarCheck } from "react-icons/fa";

const AcademicCarrier: React.FC = () => {
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
          title: "Khwopa Engineering College",
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


  return (
    <section className="p-10 px-12 h-screen pt-[79px]">
      <div className="flex flex-col h-full">
        <h1 className="text-4xl font-semibold hover:text-blue-500 duration-300 cursor-pointer text-center mt-2 pb-5">Academic Background</h1>
        <div className="h-full flex flex-col justify-between">
          {education.map((item, index) => (
              <ul key={index} className="bg-blue-100 border-1 border-blue-400 px-10 lg:pr-20 py-3 mb-3 rounded-lg shadow-md text-black space-y-2 hover:shadow-md hover:shadow-blue-400 duration-300 group cursor-pointer">
                  <li className="flex items-center gap-2 lg:text-2xl sm:text-sm">
                    <LiaUniversitySolid className="text-blue-700 group-hover:text-blue-800 transition-all duration-300"/>
                    <span className="font-semibold">{item.title}</span>
                  </li>
                  <li className="flex items-center gap-2 sm:text-sm">
                    <IoLocation className="text-red-500 lg:text-xl group-hover:text-red-600"/>
                    <span>{item.location}</span>
                  </li>
                  <li className="flex items-center gap-2 sm:text-sm">
                    <FaGraduationCap className="lg:text-xl"/>
                    <span>{item.subtitle}</span>
                  </li>
                  <li className="flex items-center gap-2 sm:text-sm">
                    <FaCalendarCheck className="text-emerald-500 lg:text-xl group-hover:text-green-700"/>
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
