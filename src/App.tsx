import React from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Publications from "@/sections/Publications";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";
import MouseGlow from "@/components/MouseGlow";
import Education from "@/sections/Education";
import ScrollIndicator from "@/components/ScrollIndicator";
import { THEME } from "@/data/theme";

export default function App() {
  return (
    <div
      className="relative min-h-screen antialiased"
      style={{ backgroundColor: THEME.bg, color: THEME.text }}
    >
      {/* Glow that follows cursor */}
      <MouseGlow />

      {/* Site header */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <About />
        <ScrollIndicator />
        <Projects />
        <Experience />
        <Education />
        <Publications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}