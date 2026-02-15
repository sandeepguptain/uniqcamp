export default function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-lg md:p-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Get in touch
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Want to bring UniqCamp to your school or network? We’d love to show you how it works and tailor it to your needs.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:contact@uniqcamp.com"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:opacity-90"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact us
            </a>
            <button
              type="button"
              onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-primary bg-transparent px-6 py-3 font-semibold text-primary transition hover:bg-primary/5"
            >
              See Solutions
            </button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            We provide demos, customisation for your school’s workflow, and support so you can go live with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}

