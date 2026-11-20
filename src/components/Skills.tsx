"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Terminal, Database, Cpu, BarChart3, Sparkles, Layers } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  Programming: <Terminal className="w-4 h-4 text-[#111111]" />,
  "Data Science": <Layers className="w-4 h-4 text-[#111111]" />,
  "Machine Learning": <Cpu className="w-4 h-4 text-[#111111]" />,
  "Data Analytics": <BarChart3 className="w-4 h-4 text-[#111111]" />,
  "AI & Generative AI": <Sparkles className="w-4 h-4 text-[#111111]" />,
  "Databases and Tools": <Database className="w-4 h-4 text-[#111111]" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E5E5E5] bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-[#777777] font-semibold">
            02 // Capabilities
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Technical Skills
          </h2>
          <p className="text-sm text-[#777777] max-w-2xl">
            Core technical competencies across Programming, Machine Learning, Data Analytics, Generative AI, and Databases.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((cat) => (
            <div
              key={cat.category}
              className="p-6 border border-[#E5E5E5] rounded-xl bg-white hover:border-[#111111] transition-all hover:shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2.5 pb-2 border-b border-[#E5E5E5]">
                  <div className="p-1.5 bg-[#F2F2F2] rounded-md">
                    {categoryIcons[cat.category] || <Terminal className="w-4 h-4 text-[#111111]" />}
                  </div>
                  <h3 className="text-sm font-bold text-[#111111] tracking-tight">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium text-[#111111] bg-[#F2F2F2] border border-[#E5E5E5] rounded-md transition-colors hover:bg-white hover:border-[#111111]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

