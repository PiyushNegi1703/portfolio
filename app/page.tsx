"use client";

import "./page.scss";
import Navbar from "@/components/Navbar/Navbar";
import { useState } from "react";
import ThemeContext from "@/context/ThemeContext";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  const [mode, setMode] = useState(false);

  function handleToggle() {
    setMode(!mode);
  }

  return (
    <ThemeContext.Provider value={mode ? "dark" : "light"}>
      <main className={`${mode ? "dark" : "light"}-main main-container`}>
        <Navbar onToggle={handleToggle} />
        <HeroSection />
      </main>
    </ThemeContext.Provider>
  );
}
