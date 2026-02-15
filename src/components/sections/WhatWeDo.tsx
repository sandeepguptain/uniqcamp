const points = [
  {
    title: "What we do",
    description: "We provide a complete school dismissal and student safety ecosystem: early dismissal requests, QR-based pickup at gates, geofencing, and real-time status for parents, teachers, principals, and cab drivers.",
  },
  {
    title: "What we provide",
    description: "Multiple apps (Super Admin, Parent, Teacher, Principal, Personal Cab, TV Display) plus web panels—all integrated so schools can manage notices, appointments, pickup methods, guardians, and daily dismissal in one place.",
  },
  {
    title: "Who it’s for",
    description: "School networks (company/super admin), individual schools (principal/admin), staff (teachers, bus drivers, security), parents/guardians, and permitted cab drivers—everyone stays in sync.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="border-t border-border bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          What we do & what we provide
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Clear overview for clients: our mission, our product, and who benefits.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {points.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-background p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
