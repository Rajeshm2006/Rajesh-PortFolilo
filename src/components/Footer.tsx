"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-[#1E2330] py-10 px-4 sm:px-6 lg:px-8 mt-auto relative z-10 bg-[#0A0D14]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#8A94A6]">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <span className="font-mono text-base font-bold text-white tracking-tight">rajesh.</span>
        </div>

        {/* Center: Navigation Links (Matching hxndev.com footer in frame 00:17) */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <button onClick={() => scrollTo("home")} className="hover:text-white transition-colors">Home</button>
          <button onClick={() => scrollTo("about")} className="hover:text-white transition-colors">About</button>
          <button onClick={() => scrollTo("experience")} className="hover:text-white transition-colors">Experience</button>
          <button onClick={() => scrollTo("education")} className="hover:text-white transition-colors">Education</button>
          <button onClick={() => scrollTo("projects")} className="hover:text-white transition-colors">Projects</button>
          <button onClick={() => scrollTo("certifications")} className="hover:text-white transition-colors">Courses</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-white transition-colors">Contact</button>
          <a
            href={portfolioData.profile.resumeUrl}
            download
            className="inline-flex items-center space-x-0.5 hover:text-white transition-colors text-white/90"
          >
            <span>Résumé</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Right: Copyright */}
        <div>
          <span>&copy; {new Date().getFullYear()} {portfolioData.profile.name}</span>
        </div>
      </div>
    </footer>
  );
};
