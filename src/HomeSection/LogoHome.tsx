import React from 'react';
import "../Styles/Home.css";
import "../Styles/animation.css";
import logo from "../assets/Home0.png";
import {Github,Clarivate,Orcid,Dblb,ResearchGate,Semanticscholar,GoogleScholr} from "../Services/Calls";
import { FaGithub} from 'react-icons/fa';
import { FaGoogleScholar } from 'react-icons/fa6';
import {
  SiResearchgate,
  SiSemanticscholar,
  SiDblp,
  SiOrcid,
  SiClarivate,
} from 'react-icons/si';


const LogoHome: React.FC = () => {

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title group-hover-wrapper">
            Hello, I'm <br />
            <span className="name-hover-group">
               Debesh Jha <span className="wave-on-hover">👋</span>
            </span>
          </h1>
          <h2 className="hero-subtitle">Visiting Professor, AI Researcher & Medical Imaging Scientist</h2>
          <div className="responsive-padding">
            <p className="hero-description">
             I'm a top-ranked AI researcher developing advanced models and datasets like Colon-SegNet and Kvasir-SEG to enhance medical imaging, 
             diagnostics, and real-world healthcare. Recognized among the world’s top 2% scientists and a 2024 Top Scholar by ScholarGPS, my work 
             supports radiologists through intelligent, ethical technologies.</p>
          </div>
          <div className="social-icons">
            <IconBox Icon={FaGoogleScholar} onClick={GoogleScholr} />
            <IconBox Icon={FaGithub} onClick={Github} />
            <IconBox Icon={SiClarivate} onClick={Clarivate} />
            <IconBox Icon={SiOrcid} onClick={Orcid} />
            <IconBox Icon={SiDblp} onClick={Dblb} />
            <IconBox Icon={SiResearchgate} onClick={ResearchGate} />
            <IconBox Icon={SiSemanticscholar} onClick={Semanticscholar} />
          </div>

        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img src={logo} alt="Harshith Reddy" className="profile-img" />
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

export default LogoHome;