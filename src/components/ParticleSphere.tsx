"use client";

import React, { useEffect, useRef } from "react";

export const ParticleSphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };

    window.addEventListener("resize", onResize);

    // Generate sphere points
    const numPoints = 280;
    const radius = Math.min(width, height) * 0.38;
    const points: { x: number; y: number; z: number; origX: number; origY: number; origZ: number }[] = [];

    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      points.push({ x, y, z, origX: x, origY: y, origZ: z });
    }

    let rotX = 0;
    let rotY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left - rect.width / 2;
      const clientY = e.clientY - rect.top - rect.height / 2;
      mouseX = (clientX / rect.width) * 0.8;
      mouseY = (clientY / rect.height) * 0.8;
    };

    window.addEventListener("mousemove", onMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      rotY += 0.003 + mouseX * 0.005;
      rotX += 0.002 + mouseY * 0.005;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const projectedPoints: { px: number; py: number; alpha: number; z: number }[] = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Rotate Y
        const x1 = p.origX * cosY - p.origZ * sinY;
        const z1 = p.origZ * cosY + p.origX * sinY;

        // Rotate X
        const y2 = p.origY * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.origY * sinX;

        // Projection
        const fov = 450;
        const scale = fov / (fov + z2);
        const px = width / 2 + x1 * scale;
        const py = height / 2 + y2 * scale;
        const alpha = Math.max(0.1, (z2 + radius) / (2 * radius));

        projectedPoints.push({ px, py, alpha, z: z2 });

        // Draw node point
        ctx.beginPath();
        ctx.arc(px, py, Math.max(0.8, 1.8 * scale), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.85})`;
        ctx.fill();
      }

      // Draw subtle connecting lines between close points
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p1 = projectedPoints[i];
          const p2 = projectedPoints[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = dx * dx + dy * dy;

          if (dist < 1800) {
            const lineAlpha = (1 - dist / 1800) * Math.min(p1.alpha, p2.alpha) * 0.25;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[420px] mx-auto flex items-center justify-center">
      {/* Background glow behind sphere */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.04] to-transparent rounded-full blur-3xl pointer-events-none" />
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};
