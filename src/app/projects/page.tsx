"use client";

import React, { useState } from "react";
import Link from "next/link";
import { portfolioData, ProjectItem } from "@/data/portfolioData";
import { ArrowLeft, Github, ArrowRight, X, Check, TrendingUp } from "lucide-react";

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const tags = ["ALL", "MACHINE LEARNING", "GENERATIVE AI", "REGRESSION"];

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (selectedTag === "ALL") return true;
    if (selectedTag === "MACHINE LEARNING")
      return p.technologies.some((t) =>
        ["scikit-learn", "Machine Learning", "Random Forest"].includes(t)
      );
    if (selectedTag === "GENERATIVE AI")
      return p.technologies.some((t) =>
        ["Google Gemini AI", "FastAPI", "React"].includes(t)
      );
    if (selectedTag === "REGRESSION")
      return p.technologies.some((t) => ["Regression Analysis", "Regression"].includes(t));
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Top Header with Back to Intro */}
      <div className="flex items-center justify-between pt-4 pb-8 border-b border-[#232B3B]">
        <span className="text-xs font-mono uppercase tracking-widest text-[#8892B0]">
          03 // BUILT IN THE OPEN
        </span>
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-xs font-medium text-[#8892B0] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to intro</span>
        </Link>
      </div>

      {/* Editorial Headline (Exact wording matching the video template) */}
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
          The workbench.
          <span className="block text-[#8892B0] font-semibold">Always in progress.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#8892B0] max-w-2xl leading-relaxed">
          Small tools, practical experiments, and machine learning models. Built to solve real problems, evaluate datasets, or train intelligent systems.
        </p>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          const isActive = selectedTag === tag;
          return (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                isActive
                  ? "bg-white text-[#0B0E14] shadow-sm"
                  : "bg-[#121720] text-[#8892B0] border border-[#232B3B] hover:text-white hover:border-white/20"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="flex flex-col justify-between rounded-2xl border border-[#232B3B] bg-[#121720] p-6 hover:border-white/30 transition-all duration-200 shadow-xl space-y-6"
          >
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#8892B0]">
                  {proj.subtitle}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {proj.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#8892B0] leading-relaxed">
                {proj.shortDescription}
              </p>

              {/* Metrics Highlights */}
              {proj.metrics && proj.metrics.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.metrics.map((m) => (
                    <span
                      key={m}
                      className="inline-flex items-center space-x-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/10"
                    >
                      <TrendingUp className="w-2.5 h-2.5 text-emerald-400" />
                      <span>{m}</span>
                    </span>
                  ))}
                </div>
              )}

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {proj.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[#1A202C] text-[#8892B0] border border-[#232B3B]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#232B3B] flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedProject(proj)}
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-white hover:text-emerald-400 transition-colors"
              >
                <span>Project Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-xs font-medium text-[#8892B0] hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#121720] border border-[#232B3B] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-[#232B3B] pb-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8892B0]">
                  {selectedProject.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg text-[#8892B0] hover:text-white hover:bg-[#1A202C] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics */}
            {selectedProject.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {selectedProject.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="p-2.5 rounded-xl border border-[#232B3B] bg-[#1A202C] text-center"
                  >
                    <p className="text-xs font-bold text-white">{metric}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Problem Statement */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#8892B0]">
                Problem Statement
              </h4>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed bg-[#1A202C]/60 p-4 rounded-xl border border-[#232B3B]">
                {selectedProject.problemStatement}
              </p>
            </div>

            {/* Solution */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#8892B0]">
                Methodology & Solution
              </h4>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                {selectedProject.solution}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#8892B0]">
                Key Highlights & Features
              </h4>
              <ul className="space-y-2">
                {selectedProject.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-white/80">
                    <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-[#232B3B] flex items-center justify-end space-x-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-medium text-[#8892B0] hover:text-white border border-[#232B3B] rounded-lg hover:bg-[#1A202C] transition-colors"
              >
                Close
              </button>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold text-[#0B0E14] bg-white rounded-lg hover:bg-white/90 transition-colors"
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

