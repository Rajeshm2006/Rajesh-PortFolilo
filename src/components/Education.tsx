"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, MapPin, Award, BookOpen, Calendar } from "lucide-react";

export const Education: React.FC = () => {
  const edu = portfolioData.education;

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E5E5E5] bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-[#777777] font-semibold">
            05 // Academics
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Education
          </h2>
          <p className="text-sm text-[#777777] max-w-2xl">
            Undergraduate degree in Artificial Intelligence and Machine Learning.
          </p>
        </div>

        {/* Education Card */}
        <div className="border border-[#E5E5E5] rounded-xl p-6 sm:p-8 bg-white hover:border-[#111111] transition-all space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5E5E5] pb-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-[#111111]" />
                <h3 className="text-lg sm:text-xl font-bold text-[#111111]">
                  {edu.degree}
                </h3>
              </div>
              <p className="text-sm font-medium text-[#111111]">
                {edu.institution}
              </p>
              <p className="text-xs text-[#777777]">{edu.status}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center space-x-1.5 px-3 py-1 bg-[#F2F2F2] border border-[#E5E5E5] rounded-md text-xs font-semibold text-[#111111]">
                <Award className="w-3.5 h-3.5" />
                <span>CGPA: {edu.cgpa}</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-[#777777] px-2.5 py-1 bg-[#F2F2F2] border border-[#E5E5E5] rounded-md">
                <Calendar className="w-3.5 h-3.5 text-[#111111]" />
                <span>{edu.expectedYear}</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-[#777777]">
                <MapPin className="w-3.5 h-3.5 text-[#111111]" />
                <span>{edu.location}</span>
              </div>
            </div>
          </div>

          {/* Key Coursework */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#111111]">
              <BookOpen className="w-4 h-4" />
              <span>Core Coursework & Foundations</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {edu.coursework.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 text-xs font-medium text-[#111111] bg-[#F2F2F2] border border-[#E5E5E5] rounded-md"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
