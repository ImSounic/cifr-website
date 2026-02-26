"use client";

import { useEffect, useRef } from "react";

const BLOBS = [
  { size: 600, color: "rgba(88, 106, 175, 0.18)", baseX: 0.3, baseY: 0.2, freqX: 0.0003, freqY: 0.00023, ampX: 80, ampY: 60, mouseF: 0.06, phase: 0 },
  { size: 500, color: "rgba(120, 150, 182, 0.14)", baseX: 0.7, baseY: 0.6, freqX: 0.00017, freqY: 0.00031, ampX: 100, ampY: 70, mouseF: 0.04, phase: 1.2 },
  { size: 400, color: "rgba(88, 106, 175, 0.10)", baseX: 0.15, baseY: 0.7, freqX: 0.00025, freqY: 0.00019, ampX: 60, ampY: 90, mouseF: 0.08, phase: 2.1 },
];

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouse = useRef({ x: 0.5, y: 0.5 }); // normalized 0-1
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

      // Smooth mouse tracking
      smoothMouse.current.x += (mouse.current.x - smoothMouse.current.x) * 0.04;
      smoothMouse.current.y += (mouse.current.y - smoothMouse.current.y) * 0.04;

      const mx = (smoothMouse.current.x - 0.5) * rect.width;
      const my = (smoothMouse.current.y - 0.5) * rect.height;

      for (let i = 0; i < BLOBS.length; i++) {
        const b = BLOBS[i];
        const el = blobRefs.current[i];
        if (!el) continue;

        const idleX = Math.sin(t * b.freqX + b.phase) * b.ampX;
        const idleY = Math.cos(t * b.freqY + b.phase * 0.7) * b.ampY;
        const mouseX = mx * b.mouseF;
        const mouseY = my * b.mouseF;

        el.style.transform = `translate(${idleX + mouseX}px, ${idleY + mouseY}px)`;
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
          }}
        />
      ))}
    </div>
  );
}
