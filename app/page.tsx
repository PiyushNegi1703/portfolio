"use client";

import "./page.scss";
import Navbar from "@/components/Navbar/Navbar";
import { useState } from "react";
import ThemeContext from "@/context/ThemeContext";

export default function Home() {
  const [mode, setMode] = useState(false);

  function handleToggle() {
    setMode(!mode);
  }

  return (
    <ThemeContext.Provider value={mode ? "dark" : "light"}>
      <main className="main">
        <Navbar onToggle={handleToggle} />
      </main>
    </ThemeContext.Provider>
  );
}
