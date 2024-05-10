import Spline from "@splinetool/react-spline";
import React, { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";
import './heroSection.scss'

const HeroSection = () => {
    const theme = useContext(ThemeContext)

  return (
    <div className={`${theme}-wrapper wrapper`}>
      <div className="container">
        <div className="text-container">
          <div className="heading-container">
            <h1>Piyush <br /> Singh Negi</h1>
            <h4>Full-Stack Developer <br /> driven by a passion for <br /> facing challenges to <br /> improve himself.</h4>
          </div>
          <div className="subtext-container"></div>
        </div>
        <div className="spline-container">
          <Spline scene="https://prod.spline.design/eCPoPkHwFOqBMUgT/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
