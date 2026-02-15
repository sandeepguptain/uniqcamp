const steps = [
  {
    title: "Parent Requests Pickup",
    description: "Parents initiate dismissal requests through the UniqCamp app, ensuring secure authorization.",
  },
  {
    title: "Teacher/Staff Approval",
    description: "Teachers and designated staff approve requests, ensuring student readiness and safety.",
  },
  {
    title: "Student Dismissal",
    description: "Students are securely dismissed and checked out, with real-time updates for parents.",
  },
  {
    title: "Daily Pickup Confirmation",
    description: "Parents confirm student pickup, completing the seamless and secure dismissal cycle.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          How It Works
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Our simple 4-step process ensures a smooth dismissal.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-amber-400 text-2xl font-bold text-foreground shadow-md">
                {i + 1}
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
