import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Publications from "./Pages/Publications";
import Talks from "./Pages/Talks";
import ProfessionalCareer from "./Pages/Professional";
import DataSet from "./Pages/DataSet";
import MyWorks from "./Pages/Myworks";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Navbar from "./Route/Navbar";
import LogoHome from "./Pages/LogoHome";
import Home from "./Pages/Home";




const App: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Navbar/>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LogoHome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/publication" element={<Publications />} />
          <Route path="/workshop" element={<Talks />} />
          <Route path="/professional" element={<ProfessionalCareer />} />
          <Route path="/dataset" element={<DataSet />} />
          <Route path="/myworks" element={<MyWorks />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  );
};

export default App;