import React from 'react';
import "../Styles/Home.css";
import "../Styles/animation.css";
import logo from "../assets/Home0.png";
import { useNavigate } from 'react-router-dom';

const LogoHome: React.FC = () => {
  const navigate=useNavigate();

  const HandleAbout=()=>{
    console.log("Redirecting towards Home Page")
    navigate('/home');
  }

  const HandleContact=()=>{
    console.log("Redirecting towards Contact Page")
    navigate('/contact')
  }

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
          <h2 className="hero-subtitle">AI Researcher & Medical Imaging Scientist</h2>
          <p className="hero-description">
             Top-ranked AI researcher developing advanced models and datasets to enhance medical imaging, 
             diagnostics, and real-world healthcare through intelligent, ethical technologies.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={HandleAbout}>
              About Me
            </button>
            <button className='btn btn-secondary' onClick={HandleContact}>
              Contact Me
            </button>
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

export default LogoHome;