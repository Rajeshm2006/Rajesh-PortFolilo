"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { ArrowLeft, Brain, GraduationCap, Briefcase, CheckCircle2, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Top Header with Back to Intro */}
      <div className="flex items-center justify-between pt-4 pb-8 border-b border-[#232B3B]">
        <span className="text-xs font-mono uppercase tracking-widest text-[#8892B0]">
          01 // A LITTLE ABOUT ME
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
          Engineer by trade.
          <span className="block text-[#8892B0] font-semibold">Curious by default.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#8892B0] max-w-2xl leading-relaxed">
          Behind every model and dataset is a curiosity for why things happen, how systems scale, and how predictive intelligence solves real-world challenges.
        </p>
      </div>

      {/* Biography & Portrait Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Biography */}
        <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#8892B0] leading-relaxed">
          <p>
            I am a <strong className="text-white font-medium">Final-year B.Tech Artificial Intelligence and Machine Learning student</strong> at <strong className="text-white font-medium">Sri Shakthi Institute of Engineering and Technology, Coimbatore</strong> (CGPA: 7.18 / 10), with hands-on project experience in Python, SQL, Power BI, and Machine Learning.
          </p>
          <p>
            Throughout my academic and practical journey, I have focused on end-to-end data modeling — training Random Forest classification algorithms that achieve <strong className="text-white font-medium">85% accuracy and 0.82 AUC-ROC</strong>, and engineering Power BI analytical dashboards that <strong className="text-white font-medium">reduced reporting turnaround time by 40%</strong>.
          </p>
          <p>
            My industry exposure includes working as a <strong className="text-white font-medium">Data Analyst at Thiranex</strong>, where I developed reporting templates, extracted actionable insights from multi-source datasets, and collaborated with cross-functional teams.
          </p>

          {/* Career Objective Box */}
          <div className="p-6 rounded-2xl border border-[#232B3B] bg-[#121720] space-y-3 mt-6">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              <Brain className="w-4 h-4" />
              <span>CAREER OBJECTIVE</span>
            </div>
            <p className="text-sm text-white/90 leading-relaxed">
              {portfolioData.profile.careerObjective}
            </p>
          </div>
        </div>

        {/* Right Column: Profile Picture Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-sm rounded-3xl border border-[#232B3B] bg-[#121720] p-4 space-y-4 shadow-2xl">
            <div className="relative aspect-[4/4.8] w-full rounded-2xl overflow-hidden border border-[#232B3B] bg-[#1A202C]">
              <Image
                src="/images/profile.jpg"
                alt="Rajesh M"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent opacity-50"></div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                <span className="px-2.5 py-1 rounded-full bg-[#121720]/90 backdrop-blur-md text-white border border-[#232B3B] font-semibold text-[11px]">
                  Rajesh M
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-400 border border-emerald-500/30 font-mono text-[10px]">
                  Coimbatore, India
                </span>
              </div>
            </div>

            <div className="space-y-2 pt-1 text-xs text-[#8892B0]">
              <div className="flex items-center justify-between">
                <span>Degree</span>
                <span className="text-white font-medium text-[11px]">B.Tech AI & ML</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Academic Record</span>
                <span className="text-emerald-400 font-mono font-medium text-[11px]">CGPA: 7.18 / 10</span>
              </div>
              <div className="flex items-center justify-between">
                <span>College</span>
                <span className="text-white font-medium text-[11px]">Sri Shakthi IET</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Competencies & Key Focus Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {/* Core Competencies */}
        <div className="p-6 rounded-2xl border border-[#232B3B] bg-[#121720] space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#8892B0]">
            Core Competencies
          </h3>
          <div className="flex flex-wrap gap-2">
            {portfolioData.profile.coreCompetencies.map((comp) => (
              <span
                key={comp}
                className="px-3 py-1 text-xs font-medium text-white bg-[#1A202C] border border-[#232B3B] rounded-full"
              >
                {comp}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Interests */}
        <div className="p-6 rounded-2xl border border-[#232B3B] bg-[#121720] space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#8892B0]">
            Focus Areas
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#8892B0]">
            {portfolioData.profile.technicalInterests.map((interest, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-white/80">{interest}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
