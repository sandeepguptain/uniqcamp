const items = [
  {
    title: "Attendance Management",
    description: "Integrated attendance tracking for comprehensive student records.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "After-School Management",
    description: "Streamlined management of after-school activities and programs.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Timetables",
    description: "Optimized school scheduling with intelligent AI algorithms.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Early Dismissal Requests",
    description: "Advanced features for managing and approving early student dismissals.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function FutureRoadmap() {
  return (
    <section id="future" className="border-t border-border bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Future Roadmap
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Exciting enhancements coming soon to UniqCamp.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map(({ title, description, icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-background p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">{icon}</div>
              <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
