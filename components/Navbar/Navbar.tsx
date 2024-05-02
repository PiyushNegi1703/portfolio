"use client";

import React from "react";
import Spline from "@splinetool/react-spline";
import "./navbar.scss";

const Navbar = () => {
  const navlinks = [
    { title: "Home" },
    { title: "Skills" },
    { title: "Projects" },
    { title: "Experience" },
    { title: "Contact Me" },
  ];

  return (
    <div className="nav-container justify-between">
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

      <div>Toggle</div>
    </div>
  );
};

export default Navbar;
