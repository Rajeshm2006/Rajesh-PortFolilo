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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Subtle AI/Tech Dot Matrix Grid */}
      <div 
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
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

      {/* 3. Ambient Ambient Glow Orbs (Subtle breathing lights) */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-b from-white/[0.045] via-emerald-500/[0.02] to-transparent rounded-full blur-[120px] will-change-transform pointer-events-none animate-pulse-slow" />
      <div className="absolute top-[35%] -left-[10%] w-[500px] h-[400px] bg-white/[0.025] rounded-full blur-[140px] will-change-transform pointer-events-none animate-pulse-slow" style={{ animationDelay: "3s" }} />
      <div className="absolute top-[60%] -right-[10%] w-[500px] h-[400px] bg-emerald-500/[0.018] rounded-full blur-[140px] will-change-transform pointer-events-none animate-pulse-slow" style={{ animationDelay: "6s" }} />

      {/* 4. Interactive Cursor Spotlight (Gentle spotlight follows cursor on desktop) */}
      {mousePosition && (
        <div
          className="hidden sm:block absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(550px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.035), transparent 75%)`,
          }}
        />
      )}

      {/* 5. Edge Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0E14]/30 to-[#0B0E14] pointer-events-none" />
    </div>
  );
};
