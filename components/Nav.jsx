"use client";

import { usePathname } from "next/navigation";

const links = [
  { href: "/#about", label: "about" },
  { href: "/#principles", label: "principles" },
  { href: "/#notes", label: "notes" },
  { href: "/#now", label: "now" },
  { href: "/#contact", label: "contact" }
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary">
      {links.map(({ href, label }) => {
        const active = href === "/#notes" && pathname.startsWith("/writing");
        return (
          <a href={href} key={href} className={active ? "active" : undefined}>
            {label}
          </a>
        );
      })}
    </nav>
  );
}
