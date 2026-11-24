"use client";

import React, { useEffect, useState } from "react";

export const BackgroundEffects: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0A0D14]">
      {/* 1. Subtle Tech Dot Grid Matrix */}
      <div 
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.22) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 65% at 50% 25%, #000 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 65% at 50% 25%, #000 40%, transparent 100%)",
        }}
      />

      {/* 2. Linear Micro-Grid Crossbeams */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "84px 84px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 100%)",
        }}
      />

      {/* 3. Ambient Glow Orbs */}
      <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-white/[0.045] via-[#E55B44]/[0.015] to-transparent rounded-full blur-[130px] will-change-transform pointer-events-none animate-pulse-slow" />
      <div className="absolute top-[40%] -left-[10%] w-[500px] h-[400px] bg-white/[0.025] rounded-full blur-[140px] will-change-transform pointer-events-none animate-pulse-slow" style={{ animationDelay: "3s" }} />
      <div className="absolute top-[65%] -right-[10%] w-[500px] h-[400px] bg-[#E55B44]/[0.018] rounded-full blur-[140px] will-change-transform pointer-events-none animate-pulse-slow" style={{ animationDelay: "6s" }} />

      {/* 4. Interactive Cursor Spotlight (Desktop) */}
      {mousePosition && (
        <div
          className="hidden sm:block absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(550px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.03), transparent 75%)`,
          }}
        />
      )}

      {/* 5. Edge Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0D14]/30 to-[#0A0D14] pointer-events-none" />
    </div>
  );
};
