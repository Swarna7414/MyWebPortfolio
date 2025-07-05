import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../Styles/component.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `block px-2.5 py-2 rounded-sm font-medium transition-all duration-200 transform hover:scale-105 hover:bg-gray-100 hover:text-black hover:shadow-sm hover:shadow-blue-200 hover:underline decoration-blue-300 underline-offset-12 ${
    isActive ? "bg-white" : "text-black"
  }`;

  return (
    <div>
      
      <header className="w-full p-5 fixed top-0 z-50 flex flex-row items-center justify-between bg-blue-400 backdrop-blur-sm shadow-sm">
        
      <div className="group">
        <NavLink to="/" className="text-black text-4xl font-cursive hover:cursor-pointer transition-all duration-300 group-hover:font-bold italic cursive-vibes">
        <span className="transition-all duration-300 group-hover:text-blue-600 text-blue-500 font-semibold">D</span>
        ebesh{" "}
        <span className="transition-all duration-300 group-hover:text-blue-600 text-blue-500 font-semibold">J</span>
        ha
      </NavLink>
    </div>

        
        <div className="hidden xl:flex flex-row gap-8 text-md">
          <NavLink to="/home" className={navLinkClasses}>Home</NavLink>
          <NavLink to="/publication" className={navLinkClasses}>Publications</NavLink>
          <NavLink to="/workshop" className={navLinkClasses}>Professional Talks</NavLink>
          <NavLink to="/professional" className={navLinkClasses}>Professional Career</NavLink>
          <NavLink to="/dataset" className={navLinkClasses}>DataSet</NavLink>
          <NavLink to="/myworks" className={navLinkClasses}>MyWorks</NavLink>
          <NavLink to="/contact" className="shadow-sm shadow-blue-500 px-2.5 py-2 rounded-md font-medium hover:scale-105 hover:shadow-blue-500 text-black hover:text-white duration-300">Contact Me</NavLink>
        </div>
        
        <div className="xl:hidden">
          <button
            className="text-black text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      
      <div
        className={`fixed top-0 right-0 h-full w-2/3 max-w-xs z-40 transform transition-transform duration-300 ease-in-out xl:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }` }
      >
        <div className="flex flex-col gap-4 text-black text-md p-6 pt-[85px] bg-blue-200/30 h-full backdrop-blur-xl z-50">
          <NavLink to="/home" className={navLinkClasses}>Home</NavLink>  
          <NavLink to="/publication" className={navLinkClasses}>Publications</NavLink>
          <NavLink to="/workshop" className={navLinkClasses}>Professional Talks</NavLink>
          <NavLink to="/professional" className={navLinkClasses}>Professional Career</NavLink>
          <NavLink to="/dataset" className={navLinkClasses}>DataSet</NavLink>
          <NavLink to="/myworks" className={navLinkClasses}>MyWorks</NavLink>
          <NavLink to="/contact" className={navLinkClasses}>Contact Me</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;