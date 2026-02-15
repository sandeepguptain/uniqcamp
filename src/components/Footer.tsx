function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="bg-purple-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <button type="button" onClick={() => scrollTo("hero")} className="flex items-center gap-3 font-bold text-lg text-white focus:outline-none">
              <img src="/logo.png" alt="UniqCamp" className="h-10 w-auto object-contain" />
            </button>
            <p className="mt-3 text-sm text-white/80">
              Smart student dismissal and safety platform for schools. Efficiency, safety, and transparency in one place.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="mt-3 space-y-2">
              <li><button type="button" onClick={() => scrollTo("hero")} className="text-sm text-white/80 hover:text-white text-left">About Us</button></li>
              <li><button type="button" onClick={() => scrollTo("contact")} className="text-sm text-white/80 hover:text-white text-left">Careers</button></li>
              <li><button type="button" onClick={() => scrollTo("contact")} className="text-sm text-white/80 hover:text-white text-left">Blog</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Solutions</h4>
            <ul className="mt-3 space-y-2">
              <li><button type="button" onClick={() => scrollTo("solutions")} className="text-sm text-white/80 hover:text-white text-left">Features</button></li>
              <li><button type="button" onClick={() => scrollTo("contact")} className="text-sm text-white/80 hover:text-white text-left">Pricing</button></li>
              <li><button type="button" onClick={() => scrollTo("solutions")} className="text-sm text-white/80 hover:text-white text-left">Integrations</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Support</h4>
            <ul className="mt-3 space-y-2">
              <li><button type="button" onClick={() => scrollTo("contact")} className="text-sm text-white/80 hover:text-white text-left">Help Center</button></li>
              <li><button type="button" onClick={() => scrollTo("contact")} className="text-sm text-white/80 hover:text-white text-left">Contact Us</button></li>
              <li><button type="button" onClick={() => scrollTo("contact")} className="text-sm text-white/80 hover:text-white text-left">Privacy Policy</button></li>
              <li><button type="button" onClick={() => scrollTo("contact")} className="text-sm text-white/80 hover:text-white text-left">Terms of Service</button></li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-white/70">
          © {new Date().getFullYear()} UniqCamp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
