"use client";

import React, { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { ArrowLeft, Search } from "lucide-react";

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["ALL", ...portfolioData.skills.map((s) => s.category)];

  const filteredCategories = portfolioData.skills
    .filter((cat) => selectedCategory === "ALL" || cat.category === selectedCategory)
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Top Header with Back to Intro */}
      <div className="flex items-center justify-between pt-4 pb-8 border-b border-[#E5E5E5]">
        <span className="text-xs font-mono uppercase tracking-widest text-[#777777]">
          02 // CAPABILITIES & TOOLKIT
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
          Hands-on with data.
          <span className="block text-[#666666] font-semibold">Driven by intelligence.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#555555] max-w-2xl leading-relaxed">
          Comprehensive toolkit spanning Python, Machine Learning models, Power BI analytics, Generative AI APIs, and SQL database pipelines.
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-[#888888] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills (e.g. Python, Scikit-learn, Power BI, LLM)..."
            className="w-full pl-11 pr-4 py-3 bg-white border border-[#E5E5E5] rounded-2xl text-xs sm:text-sm text-[#111111] placeholder-[#888888] outline-none focus:border-[#111111] transition-colors shadow-sm"
          />
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                  isActive
                    ? "bg-[#111111] text-white shadow-sm"
                    : "bg-white text-[#666666] border border-[#E5E5E5] hover:text-[#111111] hover:border-[#111111]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {filteredCategories.map((group) => (
          <div
            key={group.category}
            className="p-6 rounded-2xl border border-[#E5E5E5] bg-white space-y-5 hover:border-[#111111] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E5]">
              <h3 className="text-sm font-bold text-[#111111] tracking-wide">
                {group.category}
              </h3>
              <span className="text-[11px] font-mono text-[#777777]">
                {group.skills.length} skills
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium text-[#222222] bg-[#F8F9FA] border border-[#E5E5E5] rounded-xl hover:border-[#111111] hover:bg-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
