import React from "react";
import { LiaUniversitySolid } from "react-icons/lia";
import { MdWork } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";

const Professionalcarrier: React.FC = () => {
  interface Data {
    name:string,
    year:string,
    location:string,
    role:string,
    points:string[],
  }

  const experience:Data[]=[
    {
      name:"University of South Dakota",
      year:"AUG 2024 - Present",
      location:"Vermillion-South Dakota",
      role:" Visiting Assistant Professor",
      points:[
        "Taught AI-related courses like Machine Learning, Neural Networks, and Technical Seminar to 100+ students.",
        "Delivered Data Mining courses (CSC 586, CSC 486) to 160+ students in four sections.",
        "Achieved 4.3/5.0 teaching and 4.43/5.0 student satisfaction ratings.",
        "Designed complete course materials, including lectures, syllabi, and assessments.",
        "Secured external research funding through collaborative academic-industry grant proposals.",
        "Mentored students in research, academics, and graduate school preparation.",
        "Conducted AI and biomedical imaging research in academic and interdisciplinary teams."
      ]
    },

    {
      name:"Northwestern University",
      year:"JAN 2023 - AUG 2024",
      location:"Chicago-Illinois",
      role:"Senior Research Associate",
      points:[
        "Prepared interdisciplinary grant proposals for novel AI solutions in medical imaging.",
        "Built deep learning models for liver tumors and organs-at-risk segmentation.",
        "Developed AI tools for colon, lung, pancreas, and upper GI disease detection.",
        "Tackled key deep learning challenges like robustness and generalization.",
        "Focused on interpretability, data efficiency, domain adaptation, and model complexity.",
        "Researched uncertainty quantification and adversarial robustness in medical AI.",
        "Supervised Ph.D., postdoc, and master’s students in collaborative AI research."
      ]
    },

    {
      name:"Northwestern University",
      year:"JAN 2022- DEC 2022",
      location:"Chicago-Illinois",
      role:"Research Associate",
      points:[
        "Developed AI models for radiation oncology, dose prediction, and organ detection.",
        "Built deep learning tools for liver, prostate, pancreas, and GI tract analysis.",
        "Prepared interdisciplinary grant proposals for AI-driven medical imaging solutions.",
        "Collaborated with clinicians to release public datasets for open-access research.",
        "Designed interpretable and robust deep learning algorithms for image analysis.",
        "Published findings, patented novel techniques, and built research partnerships.",
        "Mentored graduate students, supervised research, and led weekly lab meetings."
      ]
    },

    {
      name:"UiT The Arctic University of Norway",
      year:"APR 2021 - JAN 2022",
      location:"Tromsø,Norway",
      role:"Researcher",
      points:[
        "Designed deep learning models for colorectal polyp detection and segmentation.",
        "Collaborated with gastroenterologists to collect and prepare endoscopy datasets.",
        "Organized international challenges on polyp segmentation and generalization issues.",
        "Benchmarked models to address reproducibility and information overload problems.",
        "Advanced trustworthy and robust AI solutions in gastrointestinal image analysis.",
        "Conducted AI research focused on robustness and generalization in medical imaging.",
        "Explored trustworthy AI methods for real-time gastrointestinal disease detection."
      ]
    },


    {
      name:"Simula Research Laboratory & UiT",
      year:" FEB 2018 - APR 2021",
      location:"Tromsø,Norway",
      role:"PhD Student",
      points:[
        "Developed deep learning models for GI disease detection and segmentation.",
        "Built novel architectures for accurate medical image segmentation tasks.",
        "Focused on polyp localization and endoscopic image understanding using AI.",
        "Collaborated with hospitals and endoscopists to build medical image datasets.",
        "Released open-access datasets to support reproducible and transparent research.",
        "Addressed segmentation challenges in endoscopy using tailored DL techniques.",
        "Advanced robust AI solutions for clinical decision support in gastroenterology."
      ]
    },


    {
      name:"Chosun University",
      year:" SEP 2015 - AUG 2017",
      location:"Gwangju,South Korea",
      role:"Graduate Research Assistant",
      points:[
        "Developed a machine learning pipeline for Alzheimer’s disease classification.",
        "Proposed novel feature extraction methods for analyzing MRI brain scans.",
        "Applied ML and DL models to classify neurological disease types and stages.",
        "Focused on Alzheimer’s, Glioma, and Huntington’s disease classification tasks.",
        "Distinguished between Healthy, MCI, and AD stages using MRI-based analysis.",
        "Improved classification accuracy through robust preprocessing and model tuning.",
        "Contributed to early diagnosis research in neurodegenerative disease progression."
      ]
    },


  ]



  return (
    <section className="p-10 h-screen pt-[79px]">
      <div className="flex flex-col h-full">
        <h1 className="self-center font-bold text-4xl hover:text-blue-500 cursor-pointer duration-300">
          Professional Background
        </h1>

        <div className="w-full px-4 mt-6">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {experience.map((item, index) => (
              <div key={index} className="w-full rounded-2xl shadow-md p-6 bg-blue-100 border-blue-400 border-1 hover:shadow-md transition-all cursor-pointer hover:shadow-blue-600 duration-300">
                <h2 className=" flex flex-row items-center text-xl font-semibold text-black mb-1">
                  <LiaUniversitySolid className="mt-1 mr-1 text-blue-600"/> {item.name}
                </h2>
                <div className="text-md flex flex-row">
                  <h1 className="flex flex-row items-center mr-2"><MdWork className="mr-1.5 text-amber-700"/> {item.role} <span className="text-lg">,</span></h1>
                  <h1 className="flex flex-row items-center"><IoLocation className="mr-1.5 text-red-500"/> {item.location}</h1>
                </div>
        <p className="text-sm text-black mb-4 flex flex-row items-center"><FaRegCalendarAlt className="mr-1.5"/>{item.year}</p>
        <ul className="space-y-2 mt-2">
          {item.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm group">
              <span className="text-black min-w-[1.25rem] group-hover:text-blue-500">{'\u276F'}</span>
              <span className="text-justify">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>



        </div>
    </section>
  );
};

export default Professionalcarrier;
