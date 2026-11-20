"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B0E14] border-t border-[#232B3B] py-12 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Role */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <span className="w-2.5 h-2.5 bg-white rounded-full inline-block"></span>
            <p className="text-base font-extrabold text-white tracking-tight">
              {portfolioData.profile.name}
            </p>
          </div>
          <p className="text-xs text-[#8892B0]">
            {portfolioData.profile.title} &bull; {portfolioData.education.institution}
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center space-x-3">
          <a
            href={portfolioData.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-[#232B3B] bg-[#121720] rounded-lg text-[#8892B0] hover:text-white hover:border-white/30 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-[#232B3B] bg-[#121720] rounded-lg text-[#8892B0] hover:text-white hover:border-white/30 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolioData.profile.email}`}
            className="p-2 border border-[#232B3B] bg-[#121720] rounded-lg text-[#8892B0] hover:text-white hover:border-white/30 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to Top & Copyright */}
        <div className="flex items-center space-x-4 text-xs text-[#8892B0]">
          <span>&copy; {new Date().getFullYear()} {portfolioData.profile.name}</span>
          <button
            onClick={scrollToTop}
            className="p-2 border border-[#232B3B] bg-[#121720] rounded-lg text-[#8892B0] hover:text-white hover:border-white/30 transition-colors"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
