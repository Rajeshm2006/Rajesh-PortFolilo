"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2, Edit3 } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E5E5E5] bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-[#777777] font-semibold">
            04 // Career
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Professional Experience
          </h2>
          <p className="text-sm text-[#777777] max-w-2xl">
            Practical industry work and analytical roles.
          </p>
        </div>

        {/* Experience Timeline / Cards */}
        <div className="space-y-6">
          {portfolioData.experience.map((exp, idx) => (
            <div
              key={idx}
              className="border border-[#E5E5E5] rounded-xl p-6 sm:p-8 bg-white hover:border-[#111111] transition-all space-y-6"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5E5E5] pb-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-4 h-4 text-[#111111]" />
                    <h3 className="text-lg font-bold text-[#111111]">{exp.role}</h3>
                  </div>
                  <p className="text-sm font-semibold text-[#777777]">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-[#777777]">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-[#111111]" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center space-x-1 pl-2 border-l border-[#E5E5E5]">
                    <Calendar className="w-3.5 h-3.5 text-[#111111]" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                  Key Responsibilities & Contributions
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#111111]/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#111111] mt-1 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Editable Placeholder Notice */}
              {exp.isEditablePlaceholder && (
                <div className="flex items-center space-x-2 p-3 bg-[#F2F2F2] rounded-lg border border-[#E5E5E5] text-[11px] text-[#777777]">
                  <Edit3 className="w-3.5 h-3.5 shrink-0 text-[#111111]" />
                  <span>
                    Note: Company duration dates and specific team metrics are editable in <code className="text-[#111111] font-mono">src/data/portfolioData.ts</code> once you confirm exact dates.
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

