const items = [
  "Attendance",
  "After school management",
  "School timetable using AI",
  "Early dismissal requests from parents (enhancements)",
];

export default function FutureScope() {
  return (
    <section id="future" className="border-t border-border bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Future scope
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Planned enhancements so the platform grows with your school’s needs.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          {items.map((label) => (
            <span
              key={label}
              className="rounded-xl border border-border bg-background px-5 py-2.5 font-medium text-foreground transition hover:border-primary hover:bg-primary/10"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
