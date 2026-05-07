"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "About",   href: "#about" },
  { label: "Work",    href: "#work" },
  { label: "Notes",   href: "#notes" },
  { label: "Contact", href: "#contact" },
];

const LINK_COLOR = { color: "var(--link)" };

export default function ActiveNav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = LINKS.map(l => l.href.slice(1)).filter(Boolean);
    const observer = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-1 text-[0.65rem] tracking-widest uppercase">
      {LINKS.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          className="hover:opacity-70 transition-opacity"
          style={{
            ...LINK_COLOR,
            fontWeight: active === href.slice(1) ? 700 : undefined,
            textDecoration: active === href.slice(1) ? "underline" : "none",
          }}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
