"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, Download, MapPin, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#E5E5E5] bg-white"
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#E5E5E5] bg-[#F2F2F2] text-[#111111] text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-[#111111] animate-pulse"></span>
              <span>Available for Opportunities</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#111111]">
                {portfolioData.profile.heroTitle}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#777777] tracking-tight">
                {portfolioData.profile.heroSubtitle}
              </p>
            </div>

            {/* Professional Summary */}
            <p className="text-sm sm:text-base text-[#111111]/80 leading-relaxed max-w-xl font-normal">
              {portfolioData.profile.summary}
            </p>

            {/* Location & Social Icons */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#777777] pt-1">
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-[#111111]" />
                <span>{portfolioData.profile.location}</span>
              </div>
              <div className="flex items-center space-x-3 pl-2 border-l border-[#E5E5E5]">
                <a
                  href={portfolioData.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#777777] hover:text-[#111111] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#777777] hover:text-[#111111] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className="text-[#777777] hover:text-[#111111] transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#111111] text-white text-xs sm:text-sm font-semibold rounded-md hover:bg-[#333333] transition-all shadow-sm active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href={portfolioData.profile.resumeUrl}
                download
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white text-[#111111] border border-[#111111] text-xs sm:text-sm font-semibold rounded-md hover:bg-[#F2F2F2] transition-all active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Professional Profile Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-72 md:w-80 aspect-[4/4.5] rounded-3xl border border-[#232B3B] bg-[#121720] p-4 shadow-2xl">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/profile.jpg"
                  alt="Rajesh M"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

