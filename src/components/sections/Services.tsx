const services = [
  {
    title: "Dismissal & pickup management",
    description: "Early dismissal requests, approvals (teacher → principal), daily pickup/drop status, and QR-based checkout at gates with staff attribution.",
    icon: "🚸",
  },
  {
    title: "Multi-role access & permissions",
    description: "Super Admin, Principal/Admin, Teacher, Bus driver, Security guard, Escorts, Coordinator—each with the right visibility and actions.",
    icon: "🔐",
  },
  {
    title: "Parent & guardian experience",
    description: "OTP login, student linking (by ID or approval flow), guardians and permitted cab drivers, pickup confirmation with optional auto-confirm, multi-school support.",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    title: "TV display & QR at gates",
    description: "Dynamic QR per route, configurable expiry and geofencing, notices on screen, wrong-gate/unauthorised messaging, or printable QR for walls.",
    icon: "📺",
  },
  {
    title: "Meetings & communication",
    description: "Request and approve principal/teacher meetings; push notifications for staff and parents; call parent from teacher app.",
    icon: "📅",
  },
  {
    title: "Billing & technical support",
    description: "School payment invoices, request for payment, request for technical help (visible to super admin), and application logs for support.",
    icon: "🛠️",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-border bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Services we offer
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          End-to-end capabilities so your school can run dismissal and safety in one place.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-background p-6 transition hover:border-primary/40 hover:shadow-md"
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
