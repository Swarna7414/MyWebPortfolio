import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Talks from "./Pages/Talks";
import ProfessionalCareer from "./Pages/Professional";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Navbar from "./Route/Navbar";
import LogoHome from "./Pages/LogoHome";
import DevelopPublication from "./Pages/DevelopPublications";
import ResponivePublications from "./Route/ReponivePublications";
import DataViewer from "./Pages/DataSetViewer";
import WorkViewer from "./Pages/WorksViewer";




const App: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Navbar/>
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<LogoHome/>}/>
          <Route path="/" element={<LogoHome />} />
          <Route path="/home" element={<LogoHome />} />
          <Route path="/publication" element={<ResponivePublications />} />
          <Route path="/workshop" element={<Talks />} />
          <Route path="/professional" element={<ProfessionalCareer />} />
          <Route path="/dataset" element={<DataViewer />} />
          <Route path="/myworks" element={<WorkViewer />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/developpublications" element={<DevelopPublication/>}/>
        </Routes>
    </>
  );
};

export default App;