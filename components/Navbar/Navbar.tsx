"use client";

import React, { useContext } from "react";
import Spline from "@splinetool/react-spline";
import "./navbar.scss";
import Toggle from "@/utils/toggle/Toggle";
import ThemeContext from "@/context/ThemeContext";

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
    <div className={`${theme}-nav nav-container justify-between`}>
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
    </div>
  );
};

export default Navbar;
