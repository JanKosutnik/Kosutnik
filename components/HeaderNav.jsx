"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "/#about", label: "about", id: "about" },
  { href: "/#notes", label: "notes", id: "notes" },
  { href: "/#contact", label: "contact", id: "contact" }
];

export default function HeaderNav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return undefined;
    }

    const sections = links.map((link) => document.getElementById(link.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav id="nav" aria-label="Primary">
      {links.map((link) => (
        <a className={active === link.id ? "active" : undefined} data-spy={link.id} href={link.href} key={link.id}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
