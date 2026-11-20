"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Award, CheckCircle } from "lucide-react";

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E5E5E5] bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-[#777777] font-semibold">
            06 // Credentials
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Verified Certifications
          </h2>
          <p className="text-sm text-[#777777] max-w-2xl">
            Professional certifications, coursework, and technical skill development programs.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="border border-[#E5E5E5] rounded-xl p-6 bg-white hover:border-[#111111] transition-all flex flex-col justify-between space-y-4 hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)]"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[#777777]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                    {cert.issuer}
                  </span>
                  <Award className="w-4 h-4 text-[#111111]" />
                </div>
                <h3 className="text-sm font-bold text-[#111111] tracking-tight leading-snug">
                  {cert.title}
                </h3>
              </div>

              <div className="flex items-center justify-between text-xs text-[#777777] pt-3 border-t border-[#E5E5E5]">
                <div className="flex items-center space-x-1 text-[#111111]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span className="font-medium">Verified</span>
                </div>
                <span className="px-2 py-0.5 bg-[#F2F2F2] rounded text-[11px] font-semibold text-[#111111] border border-[#E5E5E5]">
                  {cert.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
