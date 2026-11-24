"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData, ProjectItem } from "@/data/portfolioData";
import { ParticleSphere } from "@/components/ParticleSphere";
import { 
  ArrowUpRight, 
  MapPin, 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  Terminal, 
  BarChart3, 
  Sparkles, 
  Database, 
  Check, 
  X, 
  TrendingUp, 
  Copy,
  ExternalLink,
  GraduationCap
} from "lucide-react";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${portfolioData.profile.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] Message from ${formData.name || "Recruiter"}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailto;
  };

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-28 md:space-y-36">

      {/* ========================================================= */}
      {/* 1. HERO SECTION (Matching hxndev.com frame 00:00) */}
      {/* ========================================================= */}
      <section id="home" className="pt-10 sm:pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#1E2330] bg-[#11141D] text-xs font-medium text-[#8A94A6]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for full-time & internship roles</span>
            </div>

            {/* Giant Title */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                I&apos;m Rajesh<br />
                <span className="text-[#8A94A6]">M.</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-white/90 tracking-tight">
                AI/ML Engineer &bull; Data Scientist
              </p>
            </div>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-[#8A94A6] max-w-xl leading-relaxed">
              I build intelligent systems and data solutions people rely on. From predictive machine learning models with <strong className="text-white font-medium">85% accuracy</strong> at Sri Shakthi Institute to enterprise Power BI analytics dashboards at <strong className="text-white font-medium">Thiranex</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#E55B44] hover:bg-[#d04a34] transition-all shadow-lg shadow-[#E55B44]/20 active:scale-[0.98]"
              >
                <span>Explore my work</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#11141D] hover:bg-[#181D2A] border border-[#1E2330] transition-all active:scale-[0.98]"
              >
                <span>Let&apos;s talk</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1E2330]/80 max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">85%</p>
                <p className="text-xs text-[#8A94A6] mt-0.5">Model accuracy</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">7,000+</p>
                <p className="text-xs text-[#8A94A6] mt-0.5">Records analyzed</p>
              </div>
              <div>
                <p className="text-base sm:text-lg font-bold text-white flex items-center space-x-1">
                  <MapPin className="w-4 h-4 text-[#E55B44]" />
                  <span>Coimbatore</span>
                </p>
                <p className="text-xs text-[#8A94A6] mt-0.5">Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          {/* Right 3D Particle Sphere Canvas */}
          <div className="lg:col-span-5 flex justify-center">
            <ParticleSphere />
          </div>
        </div>
      </section>


      {/* ========================================================= */}
      {/* 2. ABOUT SECTION (Matching hxndev.com frame 00:01) */}
      {/* ========================================================= */}
      <section id="about" className="scroll-mt-24 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Rounded Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] rounded-3xl overflow-hidden border border-[#1E2330] bg-[#11141D] p-3 shadow-2xl group">
              <div className="relative aspect-[4/4.8] w-full rounded-2xl overflow-hidden bg-[#181D2A]">
                <Image
                  src="/images/profile.jpg"
                  alt="Rajesh M"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/10 text-[11px] font-medium">
                    Based in Coimbatore, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative Bio */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              I care about how intelligent systems feel.<br />
              <span className="text-[#8A94A6]">And how well they work.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#8A94A6] leading-relaxed">
              <p>
                I&apos;m <strong className="text-white font-medium">Rajesh</strong>, an aspiring AI/ML Engineer and Data Scientist who enjoys turning complex datasets into intelligent, predictive solutions that solve real problems. My background includes studying B.Tech Artificial Intelligence and Machine Learning at <strong className="text-white font-medium">Sri Shakthi Institute of Engineering and Technology</strong> (CGPA: 7.18 / 10).
              </p>
              <p>
                Outside coursework, I build full-stack intelligent applications: customer churn prediction pipelines achieving <strong className="text-white font-medium">85% accuracy and 0.82 AUC-ROC</strong>, an automated AI interview preparation platform powered by <strong className="text-white font-medium">Google Gemini AI and FastAPI</strong>, and interactive Power BI dashboards that reduced reporting turnaround time by <strong className="text-white font-medium">40%</strong> during my work at <strong className="text-white font-medium">Thiranex</strong>.
              </p>
            </div>

            {/* Tag chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Predictive modeling", "Interactive dashboards", "Generative AI & LLMs", "Exploratory Data Analysis", "Database architecture"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium text-white/90 bg-[#11141D] border border-[#1E2330] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center space-x-1.5 text-sm font-semibold text-white hover:text-[#E55B44] transition-colors"
              >
                <span>Let&apos;s build something together</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================= */}
      {/* 3. ORGANIZATIONS ROW (Matching hxndev.com frame 00:02) */}
      {/* ========================================================= */}
      <section className="py-8 border-y border-[#1E2330]/80">
        <p className="text-center text-xs font-mono uppercase tracking-widest text-[#8A94A6] mb-6">
          Organizations & Platforms I&apos;ve worked with
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-sm font-semibold text-[#8A94A6]">
          <span className="hover:text-white transition-colors">Sri Shakthi IET</span>
          <span className="hover:text-white transition-colors">Thiranex</span>
          <span className="hover:text-white transition-colors">Microsoft</span>
          <span className="hover:text-white transition-colors">HackerRank</span>
          <span className="hover:text-white transition-colors">Udemy</span>
        </div>
      </section>


      {/* ========================================================= */}
      {/* 4. PROFESSIONAL EXPERIENCE (Matching hxndev.com frame 00:03) */}
      {/* ========================================================= */}
      <section id="experience" className="scroll-mt-24 space-y-10">
        <div className="text-center space-y-2">
          <p className="text-xs font-mono uppercase tracking-widest text-[#8A94A6]">
            THE WORK BEHIND THE RESUME
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Thiranex */}
          <div className="p-6 sm:p-8 rounded-3xl border border-[#1E2330] bg-[#11141D] space-y-6 hover:border-white/20 transition-all shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Data Analyst</h3>
                  <p className="text-xs font-semibold text-[#E55B44]">Thiranex &bull; Coimbatore, Tamil Nadu</p>
                </div>
                <span className="text-xs font-mono text-[#8A94A6] bg-[#181D2A] px-2.5 py-1 rounded-full border border-[#1E2330]">
                  Practical Experience
                </span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-[#8A94A6] leading-relaxed">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E55B44] mt-2 shrink-0"></span>
                  <span>Analyzed operational datasets using Python and SQL to uncover business trends and insights.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E55B44] mt-2 shrink-0"></span>
                  <span>Built interactive Power BI dashboards and KPI reports, reducing reporting time by 40%.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E55B44] mt-2 shrink-0"></span>
                  <span>Cleaned, transformed, and validated raw datasets across multiple formats for analytical integrity.</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1E2330]">
              {["Python", "SQL", "Power BI", "DAX", "Microsoft Excel", "KPI Reporting"].map((tag) => (
                <span key={tag} className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#181D2A] text-[#8A94A6] border border-[#1E2330]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: AI/ML Engineering Projects */}
          <div className="p-6 sm:p-8 rounded-3xl border border-[#1E2330] bg-[#11141D] space-y-6 hover:border-white/20 transition-all shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">AI/ML Project Developer</h3>
                  <p className="text-xs font-semibold text-[#E55B44]">Sri Shakthi IET &bull; Final Year</p>
                </div>
                <span className="text-xs font-mono text-[#8A94A6] bg-[#181D2A] px-2.5 py-1 rounded-full border border-[#1E2330]">
                  2023 &ndash; Expected 2027
                </span>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-[#8A94A6] leading-relaxed">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E55B44] mt-2 shrink-0"></span>
                  <span>Engineered customer churn Random Forest classification model on 7,000+ records with 85% accuracy.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E55B44] mt-2 shrink-0"></span>
                  <span>Developed full-stack AI interview coach with React, FastAPI, PostgreSQL, and Google Gemini AI.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E55B44] mt-2 shrink-0"></span>
                  <span>Maintained 7.18 / 10 CGPA in undergraduate Artificial Intelligence & Machine Learning coursework.</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1E2330]">
              {["Scikit-learn", "Google Gemini AI", "FastAPI", "PostgreSQL", "React", "TypeScript"].map((tag) => (
                <span key={tag} className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#181D2A] text-[#8A94A6] border border-[#1E2330]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================= */}
      {/* 5. SKILLS & EDUCATION (Matching hxndev.com frame 00:05) */}
      {/* ========================================================= */}
      <section id="education" className="scroll-mt-24 space-y-10">
        <div className="text-center space-y-2">
          <p className="text-xs font-mono uppercase tracking-widest text-[#8A94A6]">
            TOOLKIT & CAPABILITIES
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & tools
          </h2>
        </div>

        {/* 4-Column Structured Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Col 1 */}
          <div className="p-6 rounded-3xl border border-[#1E2330] bg-[#11141D] space-y-4 hover:border-white/20 transition-all">
            <div className="flex items-center space-x-2.5 text-white">
              <Terminal className="w-5 h-5 text-[#E55B44]" />
              <h3 className="text-sm font-bold tracking-tight">Programming & ML</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["Python", "SQL", "Pandas", "NumPy", "Scikit-learn", "EDA", "Regression", "Random Forest", "A/B Testing"].map((s) => (
                <span key={s} className="text-xs px-2.5 py-1 rounded-lg bg-[#181D2A] text-white/90 border border-[#1E2330]">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div className="p-6 rounded-3xl border border-[#1E2330] bg-[#11141D] space-y-4 hover:border-white/20 transition-all">
            <div className="flex items-center space-x-2.5 text-white">
              <BarChart3 className="w-5 h-5 text-[#E55B44]" />
              <h3 className="text-sm font-bold tracking-tight">Data Analytics & BI</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["Power BI", "DAX", "Matplotlib", "Seaborn", "Excel", "Dashboards", "KPI Reporting", "Hypothesis Testing"].map((s) => (
                <span key={s} className="text-xs px-2.5 py-1 rounded-lg bg-[#181D2A] text-white/90 border border-[#1E2330]">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div className="p-6 rounded-3xl border border-[#1E2330] bg-[#11141D] space-y-4 hover:border-white/20 transition-all">
            <div className="flex items-center space-x-2.5 text-white">
              <Sparkles className="w-5 h-5 text-[#E55B44]" />
              <h3 className="text-sm font-bold tracking-tight">AI & Generative AI</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["Generative AI", "LLMs", "Google Gemini AI", "Prompt Engineering", "RAG Concepts", "FastAPI", "React", "TypeScript"].map((s) => (
                <span key={s} className="text-xs px-2.5 py-1 rounded-lg bg-[#181D2A] text-white/90 border border-[#1E2330]">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Col 4 */}
          <div className="p-6 rounded-3xl border border-[#1E2330] bg-[#11141D] space-y-4 hover:border-white/20 transition-all">
            <div className="flex items-center space-x-2.5 text-white">
              <Database className="w-5 h-5 text-[#E55B44]" />
              <h3 className="text-sm font-bold tracking-tight">Databases & Tools</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["MySQL", "PostgreSQL", "Git", "GitHub", "VS Code", "Google Colab", "Jupyter Notebook"].map((s) => (
                <span key={s} className="text-xs px-2.5 py-1 rounded-lg bg-[#181D2A] text-white/90 border border-[#1E2330]">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Degree Card */}
        <div className="p-6 sm:p-8 rounded-3xl border border-[#1E2330] bg-[#11141D] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-2xl bg-[#181D2A] text-[#E55B44]">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                B.Tech in Artificial Intelligence and Machine Learning
              </h3>
              <p className="text-xs sm:text-sm text-[#8A94A6]">
                Sri Shakthi Institute of Engineering and Technology, Coimbatore
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-xs">
            <span className="px-3 py-1 bg-[#181D2A] border border-[#1E2330] rounded-full text-white font-semibold">
              CGPA: 7.18 / 10
            </span>
            <span className="px-3 py-1 bg-[#181D2A] border border-[#1E2330] rounded-full text-[#8A94A6]">
              Expected 2027
            </span>
          </div>
        </div>
      </section>


      {/* ========================================================= */}
      {/* 6. FEATURED PROJECTS (Matching hxndev.com frame 00:06) */}
      {/* ========================================================= */}
      <section id="projects" className="scroll-mt-24 space-y-12">
        <div className="text-center space-y-2">
          <p className="text-xs font-mono uppercase tracking-widest text-[#8A94A6]">
            IDEAS TURNED INTO WORKING PRODUCTS
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured projects
          </h2>
        </div>

        {/* Big Project Showcase Cards */}
        <div className="space-y-8">
          {portfolioData.projects.map((proj) => (
            <div
              key={proj.id}
              className="p-6 sm:p-10 rounded-3xl border border-[#1E2330] bg-[#11141D] space-y-6 hover:border-white/20 transition-all shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Description */}
                <div className="lg:col-span-8 space-y-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#E55B44]">
                    {proj.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {proj.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#8A94A6] leading-relaxed">
                    {proj.shortDescription}
                  </p>

                  {/* Metrics Pills */}
                  {proj.metrics && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {proj.metrics.map((m) => (
                        <span
                          key={m}
                          className="inline-flex items-center space-x-1 text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white border border-white/15"
                        >
                          <TrendingUp className="w-3 h-3 text-[#E55B44]" />
                          <span>{m}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-lg bg-[#181D2A] text-[#8A94A6] border border-[#1E2330]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Action Box */}
                <div className="lg:col-span-4 flex flex-col justify-end space-y-3 pt-4 lg:pt-0">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all shadow-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository ↗</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full text-xs font-bold text-white bg-[#E55B44] hover:bg-[#d04a34] transition-all shadow-sm"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================= */}
      {/* 7. CERTIFICATIONS (Matching hxndev.com frame 00:14) */}
      {/* ========================================================= */}
      <section id="certifications" className="scroll-mt-24 space-y-10">
        <div className="text-center space-y-2">
          <p className="text-xs font-mono uppercase tracking-widest text-[#8A94A6]">
            COURSES & SPECIALIZATIONS
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Always learning
          </h2>
        </div>

        {/* 3-Column Certificate Cards Grid (Matching frame 00:14) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl border border-[#1E2330] bg-[#11141D] flex flex-col justify-between space-y-6 hover:border-white/20 transition-all shadow-lg"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#E55B44]">
                  CERTIFICATE OF COMPLETION
                </span>
                <h3 className="text-base font-bold text-white leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-[#8A94A6]">
                  {cert.issuer} &bull; {cert.year}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1E2330] flex items-center justify-between text-xs text-[#8A94A6]">
                <span className="text-[11px] font-semibold text-white">Rajesh M</span>
                <span className="text-[11px] font-mono text-emerald-400">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================= */}
      {/* 8. CONTACT SECTION (Matching hxndev.com frame 00:16) */}
      {/* ========================================================= */}
      <section id="contact" className="scroll-mt-24 space-y-10">
        <div className="p-8 sm:p-12 rounded-3xl border border-[#1E2330] bg-[#11141D] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-widest text-[#E55B44]">
                  HAVE SOMETHING IN MIND?
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Let&apos;s talk.
                </h2>
              </div>

              <p className="text-sm text-[#8A94A6] leading-relaxed">
                A project, a full-time role, an internship, or just a good conversation. I&apos;d love to hear from you.
              </p>

              {/* Direct Links */}
              <div className="space-y-3 pt-2">
                {/* Email */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-[#181D2A] border border-[#1E2330]">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-[#E55B44]" />
                    <a href={`mailto:${portfolioData.profile.email}`} className="text-xs sm:text-sm font-semibold text-white hover:underline">
                      {portfolioData.profile.email}
                    </a>
                  </div>
                  <button onClick={() => copyToClipboard(portfolioData.profile.email, "email")} className="text-xs text-[#8A94A6] hover:text-white">
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-[#181D2A] border border-[#1E2330]">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-[#E55B44]" />
                    <a href={`tel:${portfolioData.profile.phone}`} className="text-xs sm:text-sm font-semibold text-white hover:underline">
                      {portfolioData.profile.phone}
                    </a>
                  </div>
                  <button onClick={() => copyToClipboard(portfolioData.profile.phone, "phone")} className="text-xs text-[#8A94A6] hover:text-white">
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn & GitHub */}
                <div className="flex items-center space-x-3 pt-1">
                  <a
                    href={portfolioData.profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 p-3 rounded-2xl bg-[#181D2A] border border-[#1E2330] text-xs font-semibold text-white hover:border-white/30 transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn ↗</span>
                  </a>
                  <a
                    href={portfolioData.profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 p-3 rounded-2xl bg-[#181D2A] border border-[#1E2330] text-xs font-semibold text-white hover:border-white/30 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub ↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Contact Form (Matching frame 00:16) */}
            <div className="lg:col-span-7">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[#8A94A6]">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-2xl bg-[#181D2A] border border-[#1E2330] text-white outline-none focus:border-[#E55B44] transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[#8A94A6]">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your email address"
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-2xl bg-[#181D2A] border border-[#1E2330] text-white outline-none focus:border-[#E55B44] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#8A94A6]">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-2xl bg-[#181D2A] border border-[#1E2330] text-white outline-none focus:border-[#E55B44] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#E55B44] hover:bg-[#d04a34] transition-all shadow-lg shadow-[#E55B44]/20 active:scale-[0.98]"
                >
                  <span>Prepare email</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================= */}
      {/* CASE STUDY MODAL */}
      {/* ========================================================= */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#11141D] border border-[#1E2330] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-[#1E2330] pb-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#E55B44]">
                  {selectedProject.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg text-[#8A94A6] hover:text-white hover:bg-[#181D2A] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {selectedProject.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {selectedProject.metrics.map((metric) => (
                  <div key={metric} className="p-2.5 rounded-xl border border-[#1E2330] bg-[#181D2A] text-center">
                    <p className="text-xs font-bold text-white">{metric}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#8A94A6]">Problem Statement</h4>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed bg-[#181D2A]/60 p-4 rounded-xl border border-[#1E2330]">
                {selectedProject.problemStatement}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#8A94A6]">Methodology & Solution</h4>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                {selectedProject.solution}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#8A94A6]">Key Features</h4>
              <ul className="space-y-2">
                {selectedProject.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-white/80">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#1E2330] flex items-center justify-end space-x-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-medium text-[#8A94A6] hover:text-white border border-[#1E2330] rounded-xl hover:bg-[#181D2A] transition-colors"
              >
                Close
              </button>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#E55B44] rounded-xl hover:bg-[#d04a34] transition-colors shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
