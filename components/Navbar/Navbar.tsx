"use client";

import React, { useContext } from "react";
import Spline from "@splinetool/react-spline";
import "./navbar.scss";
import Toggle from "@/utils/toggle/Toggle";
import ThemeContext from "@/context/ThemeContext";
import { motion } from "framer-motion";

interface NavbarProps {
  onToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggle }) => {
  const navlinks = [
    { title: "Home" },
    { title: "Skills" },
    { title: "Projects" },
    { title: "Experience" },
    { title: "Contact Me" },
  ];

  const theme = useContext(ThemeContext);

  return (
    <motion.div
      className={`${theme}-nav nav-container justify-between`}
      initial={{ y: "-10vh", opacity: 0, boxShadow: "0 2px 15px #0000002a" }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="logo-and-links align-center">
        <div className="logo-container">
          <Spline scene="https://prod.spline.design/awVG2GNVQpJvqcvy/scene.splinecode" />
        </div>
        <ul className="navlinks-container flex">
          {navlinks.map((e) => (
            <li key={e.title}>{e.title}</li>
          ))}
        </ul>
      </div>

      <div className="toggle-container">
        <Toggle onToggle={onToggle} />
      </div>
    </motion.div>
  );
};

export default Navbar;
