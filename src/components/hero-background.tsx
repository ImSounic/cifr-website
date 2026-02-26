"use client";

import { useEffect, useRef } from "react";

interface Blob {
  size: number;
  color: string;
  baseX: number;
  baseY: number;
  blur: number;
  freqX1: number; freqX2: number;
  freqY1: number; freqY2: number;
  ampX1: number; ampX2: number;
  ampY1: number; ampY2: number;
  scaleFreq: number;
  scaleAmp: number;
  opacityBase: number;
  opacityAmp: number;
  opacityFreq: number;
  mouseF: number;
  phase: number;
}

const BLOBS: Blob[] = [
  {
    size: 500, color: "rgba(88, 106, 175, 0.50)", baseX: 0.25, baseY: 0.2, blur: 40,
    freqX1: 0.00035, freqX2: 0.00011, ampX1: 140, ampX2: 50,
    freqY1: 0.00028, freqY2: 0.00015, ampY1: 100, ampY2: 40,
    scaleFreq: 0.0004, scaleAmp: 0.12,
    opacityBase: 1, opacityAmp: 0.3, opacityFreq: 0.00025,
    mouseF: 0.07, phase: 0,
  },
  {
    size: 420, color: "rgba(120, 150, 182, 0.45)", baseX: 0.75, baseY: 0.35, blur: 35,
    freqX1: 0.00022, freqX2: 0.00008, ampX1: 160, ampX2: 70,
    freqY1: 0.00038, freqY2: 0.00013, ampY1: 120, ampY2: 35,
    scaleFreq: 0.00035, scaleAmp: 0.15,
    opacityBase: 1, opacityAmp: 0.25, opacityFreq: 0.0003,
    mouseF: 0.05, phase: 1.8,
  },
  {
    size: 350, color: "rgba(88, 106, 175, 0.40)", baseX: 0.5, baseY: 0.75, blur: 45,
    freqX1: 0.00042, freqX2: 0.00016, ampX1: 120, ampX2: 60,
    freqY1: 0.00019, freqY2: 0.00009, ampY1: 90, ampY2: 50,
    scaleFreq: 0.00045, scaleAmp: 0.10,
    opacityBase: 1, opacityAmp: 0.35, opacityFreq: 0.00022,
    mouseF: 0.09, phase: 3.5,
  },
  {
    size: 280, color: "rgba(140, 120, 200, 0.35)", baseX: 0.15, baseY: 0.55, blur: 50,
    freqX1: 0.00030, freqX2: 0.00018, ampX1: 180, ampX2: 45,
    freqY1: 0.00025, freqY2: 0.00012, ampY1: 130, ampY2: 55,
    scaleFreq: 0.00030, scaleAmp: 0.18,
    opacityBase: 1, opacityAmp: 0.30, opacityFreq: 0.00035,
    mouseF: 0.06, phase: 5.0,
  },
  {
    size: 220, color: "rgba(120, 150, 182, 0.30)", baseX: 0.85, baseY: 0.7, blur: 30,
    freqX1: 0.00050, freqX2: 0.00020, ampX1: 100, ampX2: 80,
    freqY1: 0.00032, freqY2: 0.00014, ampY1: 110, ampY2: 40,
    scaleFreq: 0.00050, scaleAmp: 0.20,
    opacityBase: 1, opacityAmp: 0.40, opacityFreq: 0.00040,
    mouseF: 0.10, phase: 2.3,
  },
];

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const smoothMouse = useRef({ x: 0.5, y: 0.5 });
  const rafId = useRef(0);
  const startTime = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    startTime.current = performance.now();

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) / rect.width;
      mouse.current.y = (e.clientY - rect.top) / rect.height;
    };

    function animate() {
      const t = performance.now() - startTime.current;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) {
        rafId.current = requestAnimationFrame(animate);
        return;
      }

      smoothMouse.current.x += (mouse.current.x - smoothMouse.current.x) * 0.03;
      smoothMouse.current.y += (mouse.current.y - smoothMouse.current.y) * 0.03;

      const mx = (smoothMouse.current.x - 0.5) * rect.width;
      const my = (smoothMouse.current.y - 0.5) * rect.height;

      for (let i = 0; i < BLOBS.length; i++) {
        const b = BLOBS[i];
        const el = blobRefs.current[i];
        if (!el) continue;

        const idleX = Math.sin(t * b.freqX1 + b.phase) * b.ampX1
                    + Math.sin(t * b.freqX2 + b.phase * 1.3) * b.ampX2;
        const idleY = Math.cos(t * b.freqY1 + b.phase * 0.7) * b.ampY1
                    + Math.cos(t * b.freqY2 + b.phase * 1.1) * b.ampY2;

        const mouseX = mx * b.mouseF;
        const mouseY = my * b.mouseF;

        const scale = 1 + Math.sin(t * b.scaleFreq + b.phase * 2) * b.scaleAmp;

        const opacity = b.opacityBase - b.opacityAmp / 2
                      + Math.sin(t * b.opacityFreq + b.phase * 0.5) * (b.opacityAmp / 2);

        el.style.transform = `translate(${idleX + mouseX}px, ${idleY + mouseY}px) scale(${scale})`;
        el.style.opacity = String(opacity);
      }

      rafId.current = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {BLOBS.map((blob, i) => (
        <div
          key={i}
          ref={(el) => { blobRefs.current[i] = el; }}
          className="absolute rounded-full will-change-transform"
          style={{
            width: blob.size,
            height: blob.size,
            left: `${blob.baseX * 100}%`,
            top: `${blob.baseY * 100}%`,
            marginLeft: -blob.size / 2,
            marginTop: -blob.size / 2,
            background: `radial-gradient(circle, ${blob.color}, transparent 70%)`,
            filter: `blur(${blob.blur}px)`,
          }}
        />
      ))}
    </div>
  );
}
