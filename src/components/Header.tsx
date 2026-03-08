import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { trackClick, trackOutboundLink } from "../analytics";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "Solutions", id: "solutions" },
  { label: "Why Choose Us", id: "benefits" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Contact", id: "contact", isPage: true },
];

const loginLinks = [
  { label: "School Login", href: "https://school.uniqcamp.com/" },
  { label: "Parent Login", href: "https://parent.uniqcamp.com/" },
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
      trackClick("nav_contact", "/contact");
      navigate("/contact");
    } else if (isHome) {
      trackClick(`nav_${item.id}`, `#${item.id}`);
      scrollToSection(item.id);
    } else {
      trackClick(`nav_${item.id}`, `/#${item.id}`);
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
          className="flex items-center rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
        >
          <img src="/logo.png" alt="UniqCamp" className="h-11 w-auto object-contain md:h-12" />
        </Link>
        <nav className="hidden items-center gap-4 md:flex" aria-label="Main navigation">
          {navLinks.map((item) =>
            item.isPage ? (
              <Link
                key={item.id}
                to="/contact"
                onClick={() => trackClick("nav_contact", "/contact")}
                className="relative pb-1 text-sm font-medium text-foreground/70 transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
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
          {loginLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackOutboundLink(item.href, item.label)}
              className="rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground md:hidden"
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
        <div className="flex flex-col gap-0 border-t border-border bg-card px-4 py-3 md:hidden">
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
                className="border-b border-border py-3 text-left text-sm font-medium text-muted-foreground hover:text-foreground last:border-0"
              >
                {item.label}
              </button>
            )
          )}
          {loginLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                trackOutboundLink(item.href, item.label);
                setOpen(false);
              }}
              className="border-b border-border py-3 text-left text-sm font-semibold text-primary last:border-0"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
