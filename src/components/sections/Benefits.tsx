const benefits = [
  {
    title: "Safety first",
    description: "Geofencing, QR at gate, and staff-verified dismissal reduce risk and give parents real-time status.",
    icon: "🛡️",
  },
  {
    title: "Less chaos at pickup",
    description: "Class-wise checkout, clear gate/route rules, and TV or wall QR keep lines organised and predictable.",
    icon: "📋",
  },
  {
    title: "One source of truth",
    description: "Single platform for notices, dismissal, appointments, and payments—fewer tools and less confusion.",
    icon: "✅",
  },
  {
    title: "Scalable for networks",
    description: "Super Admin manages multiple schools; parents and staff can work across schools from one place.",
    icon: "📈",
  },
  {
    title: "Flexible pickup methods",
    description: "Self, parent pickup, personal cab, school bus—all supported with permitted drivers and guardians.",
    icon: "🚗",
  },
  {
    title: "Support and transparency",
    description: "Technical help requests, logs, and role-based access make support and audits straightforward.",
    icon: "🔍",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="border-t border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Benefits for your school
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Why schools and parents choose UniqCamp for dismissal and student safety.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ title, description, icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md"
            >
              <span className="text-2xl">{icon}</span>
              <h3 className="mt-3 font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
