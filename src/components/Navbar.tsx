"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";
import { 
  Home, 
  User, 
  Cpu, 
  FolderGit2, 
  Briefcase, 
  Mail, 
  Download, 
  Menu, 
  X 
} from "lucide-react";

const navItems = [
  { label: "INTRO", href: "/", icon: Home },
  { label: "ABOUT", href: "/about", icon: User },
  { label: "SKILLS", href: "/skills", icon: Cpu },
  { label: "PROJECTS", href: "/projects", icon: FolderGit2 },
  { label: "EXPERIENCE", href: "/experience", icon: Briefcase },
  { label: "CONTACT", href: "/contact", icon: Mail },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Centered Floating Pill Navigation Bar (matching video template) */}
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-between sm:justify-start gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#121720]/90 backdrop-blur-xl border border-[#232B3B] shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          
          {/* Logo Badge */}
          <Link
            href="/"
            className="flex items-center space-x-1.5 px-2.5 py-1 text-xs font-bold text-white tracking-wider hover:opacity-80 transition-opacity"
          >
            <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
            <span className="font-mono text-sm">rm.</span>
          </Link>

          <div className="h-4 w-px bg-[#232B3B] mx-1 hidden sm:block"></div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`inline-flex items-center space-x-1.5 px-3 py-1.5 text-[11px] font-semibold tracking-wider rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-white text-[#0B0E14] shadow-sm"
                      : "text-[#8892B0] hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="h-4 w-px bg-[#232B3B] mx-1 hidden md:block"></div>

          {/* Resume Download Action */}
          <a
            href={portfolioData.profile.resumeUrl}
            download
            className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-[11px] font-semibold tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-full transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-1">
            <a
              href={portfolioData.profile.resumeUrl}
              download
              className="p-1.5 text-white/80 hover:text-white"
              aria-label="Download Resume"
              title="Resume"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#8892B0] hover:text-white rounded-full transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md md:hidden pt-24 px-6 space-y-3 animate-in fade-in duration-200">
          <div className="bg-[#121720] border border-[#232B3B] rounded-2xl p-4 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${
                    isActive
                      ? "bg-white text-[#0B0E14]"
                      : "text-[#8892B0] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#0B0E14]"></span>}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
