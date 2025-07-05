import React from "react";
import "../Styles/global.css";
import "../Styles/animation.css";
import HomeScreenImage from "../assets/Home/image2.png";
import SmallScreen from "../assets/SmallPicture.png";
import cursorImage from "../assets/cursor.png";
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
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate=useNavigate();
  const RedirecttoHome=()=>{
    console.log("Redirecting to Logo Home")
    navigate('/')
  }
  return (
    <section className="h-screen w-full p-5 pt-[90px] custom-cursor" style={{ cursor: `url(${cursorImage}) 16 16, auto` }}>
      <div className="h-full w-full flex flex-col xl:flex-row items-center justify-between">
        <div className="w-1/2 sm:w-[70%] xl:w-1/3 h-[83%] flex items-center justify-center ml-0 lg:ml-16">
          
          <img
            src={SmallScreen}
            alt="HomeImage"
            className="block xl:hidden w-50 h-50 md:w-64 md:h-64 mt-6 rounded-full object-cover shadow-md shadow-blue-500 duration-300 hover:scale-105"
           onClick={RedirecttoHome}/>

          
          <img
            src={HomeScreenImage}
            alt="Home Image"
            className="hidden xl:block w-full h-full rounded-4xl hover:rounded-2xl object-cover hover:scale-101 duration-300 hover:shadow-2xl hover:shadow-blue-500"
           onClick={RedirecttoHome}/>
        </div>

          <div className="xl:w-3/5 sm:w-full h-[83%] rounded-2xl px-5 flex flex-col">
            <h1 className="block lg:hidden text-transparent">{""}This is Debash</h1>
            <h1 className="hidden xl:block text-4xl font-semibold mb-2 group">This is {" "}<span className="group-hover:text-blue-500 text-5xl cursor-pointer transition-all duration-300 font-bold relative">Debesh Jha <span className="hidden lg:inline-block lg:group-hover:inline-block ml-2 animate-pulse group-hover:animate-bounce">🤖</span></span></h1>
            <div className="flex flex-col self-center sm:px-3">
              <h1 className="text-justify text-xl font-medium w-full max-w-4xl xl:mt-12">
                I'm Visiting Assistant Professor in the Department of Computer Science at the University of South Dakota. My research focuses on AI-driven tools for medical imaging and diagnostics. 
                I’ve developed models like ColonSegNet and contributed to datasets such as Kvasir-SEG, HyperKvasir, and PolypGen. Recognized among the world’s top 2% scientists by Stanford and Elsevier, I aim to build reliable systems 
                that support radiologists in diagnosing faster and more accurately. My work spans gastrointestinal imaging, tumor analysis, and predictive modeling for radiation therapy, as well as vision-language models, anomaly detection, 
                and surgical AI. I’m honored to be named a 2024 Top Scholar by ScholarGPS, ranking in the top 0.5% of scholars worldwide, including #51 in Image Segmentation and #1,201 in Medical Imaging, based on productivity, impact, and quality.
            </h1>
            </div>
            <div className="mt-6 sm:mt-0 lg:mt-auto lg:self-end sm:self-center flex flex-row-reverse sm:gap-8 gap-1.5 text-4xl mb-4">
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
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
}) => (
  <div className="border rounded-full hover:border-blue-500 hover:shadow-sm hover:shadow-blue-500">
    <Icon
      className="text-4xl p-2 text-black rounded-full duration-300 hover:bg-blue-500 hover:text-white cursor-pointer"
      onClick={onClick}
    />
  </div>
);


export default Home;