import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "Solutions", id: "solutions" },
  { label: "Why Choose Us", id: "benefits" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Contact", id: "contact", isPage: true },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleNavClick = (item: (typeof navLinks)[number]) => {
    if ("isPage" in item && item.isPage) {
      navigate("/contact");
    } else if (isHome) {
      scrollToSection(item.id);
    } else {
      navigate("/", { state: { scrollTo: item.id } });
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-card">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <Link
          to="/"
          onClick={() => isHome && setTimeout(() => scrollToSection("hero"), 50)}
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2 rounded-md"
        >
          <img src="/logo.png" alt="UniqCamp" className="h-11 w-auto object-contain md:h-12" />
        </Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((item) =>
            item.isPage ? (
              <Link
                key={item.id}
                to="/contact"
                className="rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item)}
                className="relative pb-1 text-sm font-medium text-foreground/70 transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </button>
            )
          )}
        </nav>
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
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
        <div className="md:hidden border-t border-border bg-card px-4 py-3 flex flex-col gap-0">
          {navLinks.map((item) =>
            item.isPage ? (
              <Link
                key={item.id}
                to="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item)}
                className="py-3 text-left text-sm font-medium text-muted-foreground hover:text-foreground border-b border-border last:border-0"
              >
                {item.label}
              </button>
            )
          )}
        </div>
      )}
    </header>
  );
}
