const links = [
  { href: "/#about", label: "about" },
  { href: "/#principles", label: "principles" },
  { href: "/#notes", label: "notes" },
  { href: "/#contact", label: "contact" }
];

export default function HeaderNav() {
  return (
    <nav aria-label="Primary">
      {links.map((link) => (
        <a href={link.href} key={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
