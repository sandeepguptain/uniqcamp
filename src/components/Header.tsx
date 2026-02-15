import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "Solutions", href: "#solutions", id: "solutions" },
  { label: "Why Choose Us", href: "#benefits", id: "benefits" },
  { label: "How It Works", href: "#how-it-works", id: "how-it-works" },
  { label: "Roadmap", href: "#future", id: "future" },
  { label: "Contact", href: "#contact", id: "contact" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link to="/" className="flex items-center font-bold text-xl text-foreground" onClick={() => setTimeout(() => scrollToSection("hero"), 50)}>
          <img src="/logo.png" alt="UniqCamp" className="h-10 w-auto object-contain" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleNavClick(id)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </button>
          ))}
        </nav>
        <button
          type="button"
          className="md:hidden p-2 rounded-lg hover:bg-muted"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 flex flex-col gap-2">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleNavClick(id)}
              className="py-2 text-left text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
