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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
      {/* 1. Subtle AI/Tech Dot Matrix Grid for White Background */}
      <div 
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.12) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 65% at 50% 25%, #000 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 65% at 50% 25%, #000 40%, transparent 100%)",
        }}
      />

      {/* 2. Linear Micro-Grid Crossbeams */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "84px 84px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 100%)",
        }}
      />

      {/* 3. Ambient Ambient Glow Orbs */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-slate-200/50 via-slate-100/30 to-transparent rounded-full blur-[120px] will-change-transform pointer-events-none animate-pulse-slow" />
      <div className="absolute top-[35%] -left-[10%] w-[500px] h-[400px] bg-slate-200/40 rounded-full blur-[140px] will-change-transform pointer-events-none animate-pulse-slow" style={{ animationDelay: "3s" }} />
      <div className="absolute top-[60%] -right-[10%] w-[500px] h-[400px] bg-slate-200/30 rounded-full blur-[140px] will-change-transform pointer-events-none animate-pulse-slow" style={{ animationDelay: "6s" }} />

      {/* 4. Interactive Cursor Spotlight (Desktop) */}
      {mousePosition && (
        <div
          className="hidden sm:block absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(550px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 0, 0.025), transparent 75%)`,
          }}
        />
      )}

      {/* 5. Edge Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white pointer-events-none" />
    </div>
  );
};
