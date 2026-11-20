"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Briefcase, Brain, CheckCircle2, Star } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E5E5E5] bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-[#777777] font-semibold">
            01 // Profile
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            About Me
          </h2>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Biography */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base text-[#111111] leading-relaxed">
              I am a <strong className="font-semibold">Final-year B.Tech Artificial Intelligence and Machine Learning student</strong> at Sri Shakthi Institute of Engineering and Technology, Coimbatore (CGPA: 7.18 / 10), with hands-on project experience in Python, SQL, Power BI, and Machine Learning.
            </p>
            <p className="text-sm sm:text-base text-[#111111]/80 leading-relaxed">
              I have developed end-to-end machine learning models achieving <strong className="font-semibold text-[#111111]">85% accuracy and 0.82 AUC-ROC</strong>, along with interactive Power BI dashboards that <strong className="font-semibold text-[#111111]">reduced reporting turnaround time by 40%</strong>. Skilled in exploratory data analysis (EDA), predictive modeling, dashboard development, and KPI reporting.
            </p>
            <p className="text-sm sm:text-base text-[#111111]/80 leading-relaxed">
              My technical background includes practical experience as a <strong className="font-semibold text-[#111111]">Data Analyst at Thiranex</strong>, transforming raw operational datasets into actionable business intelligence.
            </p>

            {/* Career Objective Box */}
            <div className="p-5 border border-[#E5E5E5] rounded-lg bg-[#F2F2F2]/50 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#111111]">
                <Brain className="w-4 h-4 text-[#111111]" />
                <span>Career Objective</span>
              </div>
              <p className="text-xs sm:text-sm text-[#111111]/85 leading-relaxed">
                {portfolioData.profile.careerObjective}
              </p>
            </div>

            {/* Core Competencies */}
            <div className="space-y-2 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.profile.coreCompetencies.map((comp) => (
                  <span
                    key={comp}
                    className="px-3 py-1 text-xs font-medium text-[#111111] bg-white border border-[#E5E5E5] rounded-md shadow-sm"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Side Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Education Highlight Card */}
            <div className="p-5 border border-[#E5E5E5] rounded-lg bg-white space-y-2 hover:border-[#111111] transition-colors">
              <div className="flex items-center space-x-2 text-[#111111]">
                <GraduationCap className="w-4 h-4" />
                <h3 className="text-sm font-bold">Academic Background</h3>
              </div>
              <p className="text-xs font-semibold text-[#111111]">
                {portfolioData.education.degree}
              </p>
              <p className="text-xs text-[#777777]">
                {portfolioData.education.institution}
              </p>
              <div className="flex items-center justify-between text-xs text-[#777777] pt-1 border-t border-[#E5E5E5]">
                <span>{portfolioData.education.expectedYear}</span>
                <span className="font-semibold text-[#111111]">CGPA: {portfolioData.education.cgpa}</span>
              </div>
            </div>

            {/* Experience Highlight Card */}
            <div className="p-5 border border-[#E5E5E5] rounded-lg bg-white space-y-2 hover:border-[#111111] transition-colors">
              <div className="flex items-center space-x-2 text-[#111111]">
                <Briefcase className="w-4 h-4" />
                <h3 className="text-sm font-bold">Industry Experience</h3>
              </div>
              <p className="text-xs font-semibold text-[#111111]">
                Data Analyst &bull; Thiranex
              </p>
              <p className="text-xs text-[#777777]">
                Coimbatore, Tamil Nadu, India
              </p>
            </div>

            {/* Technical Interests */}
            <div className="p-5 border border-[#E5E5E5] rounded-lg bg-white space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                Key Focus Areas
              </h3>
              <ul className="space-y-2 text-xs text-[#111111]/80">
                {portfolioData.profile.technicalInterests.map((interest, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#111111] mt-0.5 shrink-0" />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
