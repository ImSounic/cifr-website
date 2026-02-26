"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const glowPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(0);

  useEffect(() => {
    if ("ontouchstart" in window && navigator.maxTouchPoints > 0) {
      return;
    }

    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow) return;

    document.documentElement.classList.add("has-custom-cursor");

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('a, button, [data-cursor="hover"]')) {
        dot.classList.add("cursor-hover");
        glow.classList.add("cursor-hover");
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('a, button, [data-cursor="hover"]')) {
        dot.classList.remove("cursor-hover");
        glow.classList.remove("cursor-hover");
      }
    };

    function animate() {
      if (!dot || !glow) return;

      // Dot: responsive follow
      dotPos.current.x += (mouse.current.x - dotPos.current.x) * 0.35;
      dotPos.current.y += (mouse.current.y - dotPos.current.y) * 0.35;

      // Glow: slow trailing follow — creates the wake
      glowPos.current.x += (mouse.current.x - glowPos.current.x) * 0.07;
      glowPos.current.y += (mouse.current.y - glowPos.current.y) * 0.07;

      dot.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px)`;
      glow.style.transform = `translate(${glowPos.current.x}px, ${glowPos.current.y}px)`;

      rafId.current = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} id="cursor-glow" />
      <div ref={dotRef} id="cursor-dot" />
    </>
  );
}
