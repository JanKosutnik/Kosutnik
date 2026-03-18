"use client";

import { useEffect, useRef } from "react";

export default function ScrollBlur({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const sections = ref.current?.querySelectorAll("section") ?? [];
      const center = window.innerHeight / 2;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - center);
        const ratio = Math.min(distance / (window.innerHeight * 0.75), 1);

        section.style.filter = `blur(${ratio * 2.5}px)`;
        section.style.opacity = String(1 - ratio * 0.45);
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <div ref={ref}>{children}</div>;
}
