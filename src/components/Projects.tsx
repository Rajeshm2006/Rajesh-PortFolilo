"use client";

import React, { useState } from "react";
import { portfolioData, ProjectItem } from "@/data/portfolioData";
import { Github, ExternalLink, X, ArrowRight, Check, TrendingUp } from "lucide-react";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E5E5E5] bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-[#777777] font-semibold">
            03 // Work
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm text-[#777777] max-w-2xl">
            Practical machine learning models, full-stack AI platforms, and regression pipelines with quantifiable metrics.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((proj) => (
            <div
              key={proj.id}
              className="flex flex-col justify-between border border-[#E5E5E5] rounded-xl bg-white p-6 hover:border-[#111111] transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#777777]">
                    {proj.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-[#111111] tracking-tight">
                    {proj.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#111111]/80 leading-relaxed">
                  {proj.shortDescription}
                </p>

                {/* Metrics Pills */}
                {proj.metrics && proj.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="inline-flex items-center space-x-1 text-[10px] font-semibold px-2 py-0.5 rounded bg-[#111111] text-white"
                      >
                        <TrendingUp className="w-2.5 h-2.5" />
                        <span>{metric}</span>
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#F2F2F2] text-[#111111] border border-[#E5E5E5]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-[#E5E5E5] flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#111111] hover:underline"
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
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white border border-[#111111] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[#E5E5E5] pb-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#777777]">
                  {selectedProject.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-md text-[#777777] hover:text-[#111111] hover:bg-[#F2F2F2] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics Highlight */}
            {selectedProject.metrics && selectedProject.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {selectedProject.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="p-2.5 rounded-lg border border-[#E5E5E5] bg-[#F2F2F2] text-center"
                  >
                    <p className="text-xs font-bold text-[#111111]">{metric}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Problem Statement */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                Problem Statement
              </h4>
              <p className="text-xs sm:text-sm text-[#111111]/85 leading-relaxed bg-[#F2F2F2]/50 p-3.5 rounded-lg border border-[#E5E5E5]">
                {selectedProject.problemStatement}
              </p>
            </div>

            {/* Solution */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                Methodology & Solution
              </h4>
              <p className="text-xs sm:text-sm text-[#111111]/85 leading-relaxed">
                {selectedProject.solution}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                Key Highlights & Features
              </h4>
              <ul className="space-y-2">
                {selectedProject.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-[#111111]/85">
                    <Check className="w-4 h-4 text-[#111111] mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 bg-[#F2F2F2] text-[#111111] rounded border border-[#E5E5E5] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-end space-x-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-medium text-[#777777] hover:text-[#111111] border border-[#E5E5E5] rounded-md hover:bg-[#F2F2F2] transition-colors"
              >
                Close
              </button>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#111111] rounded-md hover:bg-[#333333] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
