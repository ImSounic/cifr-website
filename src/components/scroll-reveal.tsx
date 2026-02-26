"use client";

import { useEffect, useRef } from "react";

type ScrollRevealVariant = "fade-up" | "fade-left" | "fade-right" | "scale-up" | "fade-in";

const variantClasses: Record<ScrollRevealVariant, string> = {
  "fade-up": "scroll-reveal-up",
  "fade-left": "scroll-reveal-left",
  "fade-right": "scroll-reveal-right",
  "scale-up": "scroll-reveal-scale",
  "fade-in": "scroll-reveal-fade",
};

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: ScrollRevealVariant;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("visible");
          }, delay);
          observer.unobserve(el);
          // Free GPU memory after animation completes
          setTimeout(() => {
            el.style.willChange = "auto";
          }, delay + 800);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`scroll-reveal ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}
