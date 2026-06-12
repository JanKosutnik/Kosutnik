"use client";

import { usePathname } from "next/navigation";

const links = [
  { href: "/#about", label: "about" },
  { href: "/#principles", label: "principles" },
  { href: "/#notes", label: "notes" },
  { href: "/#contact", label: "contact" }
];

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary">
      {links.map((link) => {
        const isActive = link.href === "/#notes" && pathname.startsWith("/writing");
        return (
          <a href={link.href} key={link.href} className={isActive ? "active" : undefined}>
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
