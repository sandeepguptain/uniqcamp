import { Link, useNavigate } from "react-router-dom";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const linkClass = "text-sm text-white/80 hover:text-white transition-colors";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="text-white" style={{ background: 'linear-gradient(180deg, hsl(262 55% 25%) 0%, hsl(262 48% 20%) 100%)' }}>
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-16">
        <div className="grid gap-12 md:grid-cols-4 md:gap-8">
          <div className="md:col-span-1">
            <Link
              to="/"
              onClick={() => setTimeout(() => scrollTo("hero"), 50)}
              className="flex items-center focus:outline-none rounded-lg focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-purple-dark"
            >
              <img src="/logo.png" alt="UniqCamp" className="h-11 w-auto object-contain md:h-12" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Smart student dismissal and safety platform. Efficiency, safety, and transparency in one place.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/90">Company</h4>
            <ul className="mt-4 space-y-3">
              <li><Link to="/" className={linkClass}>About Us</Link></li>
              <li><Link to="/contact" className={linkClass}>Careers</Link></li>
              <li><Link to="/contact" className={linkClass}>Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/90">Solutions</h4>
            <ul className="mt-4 space-y-3">
              <li><button type="button" onClick={() => navigate("/", { state: { scrollTo: "solutions" } })} className={linkClass}>Features</button></li>
              <li><Link to="/contact" className={linkClass}>Pricing</Link></li>
              <li><button type="button" onClick={() => navigate("/", { state: { scrollTo: "solutions" } })} className={linkClass}>Integrations</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/90">Support</h4>
            <ul className="mt-4 space-y-3">
              <li><Link to="/contact" className={linkClass}>Help Center</Link></li>
              <li><Link to="/contact" className={linkClass}>Contact Us</Link></li>
              <li><Link to="/contact" className={linkClass}>Privacy Policy</Link></li>
              <li><Link to="/contact" className={linkClass}>Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-white/10">
          <p className="text-center text-sm text-white/60">
            © {new Date().getFullYear()} UniqCamp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
