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
      <div className="flex items-center justify-between pt-4 pb-8 border-b border-[#E5E5E5]">
        <span className="text-xs font-mono uppercase tracking-widest text-[#777777]">
          03 // BUILT IN THE OPEN
        </span>
        <Link
          href="/"
          className="inline-flex items-center space-x-1.5 text-xs font-medium text-[#666666] hover:text-[#111111] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to intro</span>
        </Link>
      </div>

      {/* Editorial Headline */}
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111111] tracking-tight leading-tight">
          The workbench.
          <span className="block text-[#666666] font-semibold">Always in progress.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#555555] max-w-2xl leading-relaxed">
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
                  ? "bg-[#111111] text-white shadow-sm"
                  : "bg-white text-[#666666] border border-[#E5E5E5] hover:text-[#111111] hover:border-[#111111]"
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
            className="flex flex-col justify-between rounded-2xl border border-[#E5E5E5] bg-white p-6 hover:border-[#111111] transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg space-y-6"
          >
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#777777]">
                  {proj.subtitle}
                </span>
                <h3 className="text-xl font-bold text-[#111111] tracking-tight">
                  {proj.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                {proj.shortDescription}
              </p>

              {/* Metrics Highlights */}
              {proj.metrics && proj.metrics.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.metrics.map((m) => (
                    <span
                      key={m}
                      className="inline-flex items-center space-x-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#111111] text-white"
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
                    className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[#F8F9FA] text-[#666666] border border-[#E5E5E5]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedProject(proj)}
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#111111] hover:underline transition-colors"
              >
                <span>Project Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-xs font-medium text-[#777777] hover:text-[#111111] transition-colors"
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white border border-[#E5E5E5] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative text-[#111111]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-[#E5E5E5] pb-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#777777]">
                  {selectedProject.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg text-[#777777] hover:text-[#111111] hover:bg-[#F8F9FA] transition-colors"
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
                    className="p-2.5 rounded-xl border border-[#E5E5E5] bg-[#F8F9FA] text-center"
                  >
                    <p className="text-xs font-bold text-[#111111]">{metric}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Problem Statement */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#777777]">
                Problem Statement
              </h4>
              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed bg-[#F8F9FA] p-4 rounded-xl border border-[#E5E5E5]">
                {selectedProject.problemStatement}
              </p>
            </div>

            {/* Solution */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#777777]">
                Methodology & Solution
              </h4>
              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                {selectedProject.solution}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#777777]">
                Key Highlights & Features
              </h4>
              <ul className="space-y-2">
                {selectedProject.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-[#444444]">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-end space-x-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-medium text-[#666666] hover:text-[#111111] border border-[#E5E5E5] rounded-xl hover:bg-[#F8F9FA] transition-colors"
              >
                Close
              </button>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#111111] rounded-xl hover:bg-[#333333] transition-colors shadow-sm"
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
