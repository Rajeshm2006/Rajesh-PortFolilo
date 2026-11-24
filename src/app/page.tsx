"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  Github, 
  Linkedin, 
  Mail, 
  FolderGit2, 
  User, 
  Cpu, 
  Briefcase, 
  Send
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      {/* Editorial Hero (Intro) */}
      <section className="pt-8 sm:pt-16 pb-8 border-b border-[#E5E5E5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#E5E5E5] bg-[#F8F9FA] text-xs font-medium text-[#666666]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Full-Time & Internship Opportunities</span>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-[#777777]">
                00 // INTRO
              </p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#111111] leading-[1.08]">
                {portfolioData.profile.heroTitle}.
                <span className="block text-[#666666] text-2xl sm:text-4xl md:text-5xl font-semibold mt-2">
                  AI/ML Engineer & Data Scientist.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#555555] max-w-2xl leading-relaxed font-normal">
              Final-year B.Tech AI & ML student at <strong className="text-[#111111] font-medium">Sri Shakthi Institute of Engineering and Technology</strong>. Practical experience in Python, SQL, Power BI, and predictive modeling — building models with <strong className="text-[#111111] font-medium">85% accuracy</strong> and reducing dashboard reporting turnaround by <strong className="text-[#111111] font-medium">40%</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#666666] pt-2">
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-[#111111]" />
                <span>{portfolioData.profile.location}</span>
              </div>
              <div className="flex items-center space-x-3 pl-3 border-l border-[#E5E5E5]">
                <a
                  href={portfolioData.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#111111] transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#111111] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className="hover:text-[#111111] transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Link
                href="/projects"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#111111] text-white text-xs sm:text-sm font-bold rounded-full hover:bg-[#333333] transition-all shadow-sm active:scale-[0.98]"
              >
                <span>Explore Workbench</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white text-[#111111] border border-[#E5E5E5] text-xs sm:text-sm font-semibold rounded-full hover:bg-[#F8F9FA] hover:border-[#111111] transition-all active:scale-[0.98]"
              >
                <span>About My Journey</span>
              </Link>

              <a
                href={portfolioData.profile.resumeUrl}
                download
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#F8F9FA] text-[#666666] hover:text-[#111111] border border-[#E5E5E5] text-xs sm:text-sm font-semibold rounded-full transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Right Card: Professional Portrait */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-3xl border border-[#E5E5E5] bg-white p-4 sm:p-5 space-y-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative group">
              <div className="relative aspect-[4/4.5] w-full rounded-2xl overflow-hidden border border-[#E5E5E5] bg-[#F8F9FA]">
                <Image
                  src="/images/profile.jpg"
                  alt="Rajesh M - AI/ML Engineer & Data Scientist"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#111111] border border-white/40 font-semibold text-[11px] shadow-sm">
                    Rajesh M
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-white font-mono text-[10px] font-semibold shadow-sm">
                    CGPA 7.18
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 pt-1 text-xs text-[#666666]">
                <div className="flex items-center justify-between">
                  <span>Specialization</span>
                  <span className="text-[#111111] font-medium text-right text-[11px]">B.Tech AI & ML</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Institution</span>
                  <span className="text-[#111111] font-medium text-right text-[11px]">Sri Shakthi IET</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Experience</span>
                  <span className="text-[#111111] font-medium text-[11px]">Data Analyst &bull; Thiranex</span>
                </div>
              </div>

              <div className="p-3 bg-[#F8F9FA] rounded-xl border border-[#E5E5E5] text-[11px] text-[#666666]">
                <span className="text-[#111111] font-semibold block mb-0.5">Quick Stat</span>
                Developed customer churn model with 85% accuracy and 0.82 AUC-ROC over 7,000+ records.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Preview Grid */}
      <section className="space-y-8">
        <div className="space-y-1">
          <p className="text-xs font-mono uppercase tracking-widest text-[#777777]">
            EXPLORE PORTFOLIO
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Dedicated Views
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: About */}
          <Link
            href="/about"
            className="group p-6 rounded-2xl border border-[#E5E5E5] bg-white hover:border-[#111111] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[#777777]">
                <span className="text-xs font-mono">01 // PROFILE</span>
                <User className="w-4 h-4 text-[#111111]" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] group-hover:underline transition-colors">
                About Me &rarr;
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Engineer by trade. Curious by default. Academic foundation, analytical mindset, and career objective.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#111111] inline-flex items-center space-x-1">
              <span>Read story</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          {/* Card 2: Skills */}
          <Link
            href="/skills"
            className="group p-6 rounded-2xl border border-[#E5E5E5] bg-white hover:border-[#111111] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[#777777]">
                <span className="text-xs font-mono">02 // TOOLKIT</span>
                <Cpu className="w-4 h-4 text-[#111111]" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] group-hover:underline transition-colors">
                Technical Skills &rarr;
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Python, SQL, Scikit-learn, Power BI, DAX, Generative AI, LLMs, and database architectures.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#111111] inline-flex items-center space-x-1">
              <span>View capabilities</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          {/* Card 3: Projects */}
          <Link
            href="/projects"
            className="group p-6 rounded-2xl border border-[#E5E5E5] bg-white hover:border-[#111111] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[#777777]">
                <span className="text-xs font-mono">03 // WORKBENCH</span>
                <FolderGit2 className="w-4 h-4 text-[#111111]" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] group-hover:underline transition-colors">
                Featured Projects &rarr;
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Customer Churn (85% accuracy), AI Interview Coach with Gemini AI, and House Price Prediction.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#111111] inline-flex items-center space-x-1">
              <span>Enter workbench</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          {/* Card 4: Experience & Education */}
          <Link
            href="/experience"
            className="group p-6 rounded-2xl border border-[#E5E5E5] bg-white hover:border-[#111111] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[#777777]">
                <span className="text-xs font-mono">04 // JOURNEY</span>
                <Briefcase className="w-4 h-4 text-[#111111]" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] group-hover:underline transition-colors">
                Experience & Credentials &rarr;
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Data Analyst at Thiranex, B.Tech at Sri Shakthi Institute, and 6 verified certifications.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#111111] inline-flex items-center space-x-1">
              <span>View credentials</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          {/* Card 5: Contact */}
          <Link
            href="/contact"
            className="group p-6 rounded-2xl border border-[#E5E5E5] bg-white hover:border-[#111111] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all flex flex-col justify-between space-y-6 md:col-span-2 lg:col-span-2"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[#777777]">
                <span className="text-xs font-mono">05 // DISPATCH</span>
                <Send className="w-4 h-4 text-[#111111]" />
              </div>
              <h3 className="text-xl font-bold text-[#111111] group-hover:underline transition-colors">
                Get in Touch &rarr;
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                A direct line. None of the noise. Reach me directly via email ({portfolioData.profile.email}) or phone ({portfolioData.profile.phone}).
              </p>
            </div>
            <span className="text-xs font-semibold text-[#111111] inline-flex items-center space-x-1">
              <span>Send direct dispatch</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
