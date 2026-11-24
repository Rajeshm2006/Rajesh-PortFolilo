"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Courses", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.substring(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0D14]/90 backdrop-blur-md border-b border-[#1E2330] py-3.5 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Logo (Matching hxndev.) */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#home");
          }}
          className="flex items-center space-x-1.5 text-lg font-bold tracking-tight text-white hover:opacity-85 transition-opacity"
        >
          <span className="font-mono text-xl">rajesh.</span>
        </a>

        {/* Center: Navigation Pill Container (Matching hxndev.com style) */}
        <nav className="hidden md:flex items-center space-x-1 px-3 py-1.5 rounded-full bg-[#11141D]/90 backdrop-blur-md border border-[#1E2330] shadow-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 relative ${
                  isActive
                    ? "text-white font-semibold bg-white/10"
                    : "text-[#8A94A6] hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-0.5 rounded-full bg-white"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Resume Button */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={portfolioData.profile.resumeUrl}
            download
            className="inline-flex items-center space-x-1 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all shadow-sm"
          >
            <span>Résumé</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/80" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center sm:hidden space-x-2">
          <a
            href={portfolioData.profile.resumeUrl}
            download
            className="p-1.5 text-white/90 hover:text-white"
            aria-label="Download Resume"
          >
            <Download className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#8A94A6] hover:text-white rounded-lg transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0A0D14] border-b border-[#1E2330] px-4 pt-3 pb-6 space-y-1.5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className={`w-full text-left px-4 py-2.5 text-sm rounded-xl transition-colors flex items-center justify-between ${
                  isActive
                    ? "bg-[#11141D] text-white font-semibold border border-[#1E2330]"
                    : "text-[#8A94A6] hover:text-white hover:bg-[#11141D]/50"
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
