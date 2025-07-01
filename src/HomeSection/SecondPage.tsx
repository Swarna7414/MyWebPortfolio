import React from "react";
import HomeScreenImage from "../assets/Home/image.png";
import SmallScreen from "../assets/SmallPicture.png";
import {Clarivate,Dblb,Github,GoogleScholr,Linkedin,Orcid,ResearchGate,Semanticscholar,Twitter,} from '../Services/Calls';
import { FaGoogleScholar } from 'react-icons/fa6';
import {
  SiResearchgate,
  SiSemanticscholar,
  SiDblp,
  SiOrcid,
  SiClarivate,
} from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';

const SecondPage: React.FC = () => {
  return (
    <section className="min-h-screen w-full p-5">
      <div className="h-full w-full flex flex-col lg:flex-row items-center justify-between">
        <div className="w-1/2 sm:w-[70%] lg:w-1/3 h-[83%] flex items-center justify-center ml-0 lg:ml-16">
          
          <img
            src={SmallScreen}
            alt="HomeImage"
            className="block lg:hidden w-64 h-60 mt-6 rounded-full object-cover shadow-lg shadow-blue-500 duration-300 hover:scale-105"
          />

          
          <img
            src={HomeScreenImage}
            alt="Home Image"
            className="hidden lg:block w-full h-full rounded-4xl hover:rounded-2xl object-cover duration-300 cursor-pointer hover:shadow-2xl hover:shadow-blue-500"
          />
          
        </div>

        <div className="lg:w-3/5 sm:w-full h-[83%] rounded-2xl px-5 flex flex-col">
            <h1 className="text-justify text-xl font-medium cursor-default">
                I'm Debesh, a Visiting Assistant Professor in the Department of Computer Science at the University of South Dakota. My research focuses on AI-driven tools for medical imaging and diagnostics. 
                I’ve developed models like ColonSegNet and contributed to datasets such as Kvasir-SEG, HyperKvasir, and PolypGen. Recognized among the world’s top 2% scientists by Stanford and Elsevier, I aim to build reliable systems 
                that support radiologists in diagnosing faster and more accurately. My work spans gastrointestinal imaging, tumor analysis, and predictive modeling for radiation therapy, as well as vision-language models, anomaly detection, 
                and surgical AI. I’m honored to be named a 2024 Top Scholar by ScholarGPS, ranking in the top 0.5% of scholars worldwide, including #51 in Image Segmentation and #1,201 in Medical Imaging, based on productivity, impact, and quality.
            </h1>
            <div className="mt-auto lg:self-end sm:self-center flex flex-row-reverse sm:gap-8 gap-1.5 text-4xl mb-4">
                <IconBox Icon={RiTwitterXLine} onClick={Twitter} />
                <IconBox Icon={FaLinkedin} onClick={Linkedin} />
                <IconBox Icon={FaGithub} onClick={Github} />
                <IconBox Icon={SiClarivate} onClick={Clarivate} />
                <IconBox Icon={SiOrcid} onClick={Orcid} />
                <IconBox Icon={SiDblp} onClick={Dblb} />
                <IconBox Icon={SiResearchgate} onClick={ResearchGate} />
                <IconBox Icon={SiSemanticscholar} onClick={Semanticscholar} />
                <IconBox Icon={FaGoogleScholar} onClick={GoogleScholr} />
            </div>
        </div>
      </div>
    </section>
  );
};

const IconBox = ({
  Icon,
  onClick,
}: {
  Icon: any;
  onClick: () => void;
}) => (
  <div className="border rounded-full hover:border-blue-500 hover:shadow-sm hover:shadow-blue-500">
    <Icon
      className="text-4xl p-2 text-black rounded-full duration-300 hover:bg-blue-500 cursor-pointer"
      onClick={onClick}
    />
  </div>
);

export default SecondPage;