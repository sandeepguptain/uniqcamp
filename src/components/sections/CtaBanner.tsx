export default function CtaBanner() {
  return (
    <section className="bg-purple-banner py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Ready to Transform Your School's Dismissal Process?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
          Join hundreds of schools already using UniqCamp for safer, faster, and more transparent student dismissals.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-lg transition hover:opacity-90"
          >
            Request a Demo
          </button>
          <button
            type="button"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-xl border-2 border-white bg-transparent px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
