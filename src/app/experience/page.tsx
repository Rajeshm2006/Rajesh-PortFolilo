"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { ArrowLeft, Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function ExperiencePage() {
  const edu = portfolioData.education;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Top Header with Back to Intro */}
      <div className="flex items-center justify-between pt-4 pb-8 border-b border-[#232B3B]">
        <span className="text-xs font-mono uppercase tracking-widest text-[#8892B0]">
          04 // BACKGROUND & CREDENTIALS
        </span>
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-xs font-medium text-[#8892B0] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to intro</span>
        </Link>
      </div>

      {/* Editorial Headline */}
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Experience & credentials.
          <span className="block text-[#8892B0] font-semibold">Proven foundation.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#8892B0] max-w-2xl leading-relaxed">
          Industry analytics experience at Thiranex, undergraduate coursework in AI & ML, and verified technical credentials.
        </p>
      </div>

      {/* 1. Industry Experience */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#8892B0]">
          <Briefcase className="w-4 h-4 text-white" />
          <span>Industry Experience</span>
        </div>

        {portfolioData.experience.map((exp, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-2xl border border-[#232B3B] bg-[#121720] space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#232B3B]">
              <div>
                <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                <p className="text-sm font-semibold text-emerald-400">{exp.company}</p>
              </div>
              <div className="flex items-center space-x-3 text-xs text-[#8892B0]">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-white" />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center space-x-1 pl-3 border-l border-[#232B3B]">
                  <Calendar className="w-3.5 h-3.5 text-white" />
                  <span>{exp.period}</span>
                </div>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-[#8892B0]">
              {exp.responsibilities.map((r, rIdx) => (
                <li key={rIdx} className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                  <span className="text-white/85 leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 2. Education */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#8892B0]">
          <GraduationCap className="w-4 h-4 text-white" />
          <span>Academic Degree</span>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl border border-[#232B3B] bg-[#121720] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#232B3B]">
            <div>
              <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
              <p className="text-sm font-medium text-white/90">{edu.institution}</p>
              <p className="text-xs text-[#8892B0]">{edu.status}</p>
            </div>
            <div className="flex items-center space-x-3 text-xs">
              <span className="px-3 py-1 bg-[#1A202C] border border-[#232B3B] rounded-full text-white font-semibold">
                CGPA: {edu.cgpa}
              </span>
              <span className="px-3 py-1 bg-[#1A202C] border border-[#232B3B] rounded-full text-[#8892B0]">
                {edu.expectedYear}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#8892B0]">
              Core Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
              {edu.coursework.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 text-xs font-medium text-white/85 bg-[#1A202C] border border-[#232B3B] rounded-lg"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Verified Certifications */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#8892B0]">
          <Award className="w-4 h-4 text-white" />
          <span>Verified Certifications</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioData.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-[#232B3B] bg-[#121720] space-y-3 flex flex-col justify-between hover:border-white/20 transition-all"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase text-[#8892B0]">
                  {cert.issuer}
                </span>
                <h4 className="text-sm font-bold text-white leading-snug">
                  {cert.title}
                </h4>
              </div>
              <div className="flex items-center justify-between text-xs text-[#8892B0] pt-2 border-t border-[#232B3B]">
                <div className="flex items-center space-x-1 text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-semibold">Verified</span>
                </div>
                <span className="text-[11px] font-mono text-white/80">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

