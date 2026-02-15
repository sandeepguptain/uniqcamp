export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-background gradient-mesh py-20 md:py-28 lg:py-32">
      <div className="relative mx-auto max-w-5xl px-4 text-center md:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Streamline Student Dismissal with Smart Technology
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          UniqCamp brings efficiency, safety, and transparency to school dismissals. Connect parents, staff, and drivers in one seamless platform so every child gets home safely.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:opacity-90"
          >
            Request a Demo
          </button>
          <button
            type="button"
            onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-xl border-2 border-primary bg-transparent px-6 py-3 font-semibold text-primary transition hover:bg-primary/5"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
