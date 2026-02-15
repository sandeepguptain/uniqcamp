import { useState } from "react";

const platforms = [
  {
    id: "super-admin",
    name: "Super Admin",
    tagline: "Company-level control for your school application",
    icon: "🏢",
    features: [
      "Login with email ID",
      "Show all schools & school details (staff, students)",
      "School payment invoices & request for payment",
      "Remove / block school",
      "Show request for technical help from schools",
      "Roles and permissions for internal staff",
      "Full application logs for development and bug fixes",
    ],
  },
  {
    id: "parent",
    name: "Parent Application",
    tagline: "Stay in control of pickup and dismissal",
    icon: "👨‍👩‍👧",
    features: [
      "Login through mobile and OTP",
      "View students linked to parent; add student by unique ID or send details (pickup method) for school/teacher approval",
      "Pickup methods: Self, Parent Pickup, Personal Cab, School Bus",
      "Schedule early dismissal and get approval from principal and class staff",
      "QR scanner for daily dismissal request at school premises with status and staff who dismissed",
      "Add guardians for student pickup; add permitted cab drivers",
      "Everyday pickup status & pickup confirmation (auto-confirm based on school setting if parent doesn’t confirm)",
      "Parent profile (name, mobile, photo); remove/block cab drivers and guardians",
      "Request principal/teacher meeting; manage parent and students across multiple schools",
    ],
  },
  {
    id: "teacher",
    name: "Teacher Application",
    tagline: "Class dismissal and parent communication",
    icon: "📚",
    features: [
      "Login through mobile and OTP",
      "Early dismissal approval",
      "View daily pickup and drop status for class",
      "Call parent; view and add notifications",
      "Approve daily requested dismissals and send student from class",
      "Verify student at gate for cabs/buses (permitted by principal); view all allowed students for bus/cab",
      "Approve/request meeting with parents and view list",
    ],
  },
  {
    id: "principal",
    name: "Principal / Admin Application",
    tagline: "Full school configuration and oversight",
    icon: "🎓",
    features: [
      "Login through mobile and OTP",
      "Early dismissal approval (after teacher approval)",
      "Roles and permissions: Admin, Manager, Teacher, Bus driver, Security guard, Escorts, Coordinator",
      "Daily pickup and drop status; all parents and related students",
      "Push notifications; add notifications for staff and parent apps",
      "Dismissal checkout layer class-wise with staff name",
      "School unique code (unique and not changeable)",
      "Upload/add/remove staff and student details (name, class, photo, student ID, pickup method, 1 parent contact)",
      "Pickup methods: Self, Parent Pickup, Personal Cab, School Bus; permitted personal cab driver details; remove/block cab drivers",
      "Add notice on TV (e.g. found/lost, holiday); time for auto pickup confirmation if parent doesn’t confirm",
      "TV display list with exit name; approve/request meeting with parents",
      "Request technical help; payment page; disable dismissal for student when required",
    ],
  },
  {
    id: "cab",
    name: "Personal Cab Application",
    tagline: "Driver-side dismissal and student groups",
    icon: "🚐",
    features: [
      "Login through mobile and OTP",
      "Request group dismissal from class teacher",
      "Accept students; view all student groups",
    ],
  },
  {
    id: "tv",
    name: "TV Display (Web)",
    tagline: "On-premise dismissal and notices",
    icon: "📺",
    features: [
      "Dynamic QR code for dismissal request by guardian/parent per school",
      "Multiple QR routes per campus; principal controls which class can be requested at which route/URL per TV",
      "QR code expiry timer (e.g. default 30 seconds) from principal panel",
      "Network connection status; current time",
      "Current dismissal class and section (parent can request only these when scanning); wrong-gate and unauthorised messages",
      "Notice display from principal panel",
      "Optional geofencing: allow request only when parent is in school geofence (setting in principal panel); geofence editable in principal panel",
      "Real-time notification to staff when parent requests; parent notification when child is dismissed; status visible across panels",
      "If no TV display: principal can generate QR for gate wall; parent scans QR (with geofencing check)",
    ],
  },
];

export default function Platforms() {
  const [openId, setOpenId] = useState<string | null>("parent");

  return (
    <section id="platforms" className="border-t border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Platforms we provide
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          One ecosystem: Super Admin, Parent, Teacher, Principal, Cab, and TV Display—each with the right tools for their role.
        </p>
        <div className="mt-12 space-y-4">
          {platforms.map((p) => {
            const isOpen = openId === p.id;
            return (
              <div
                key={p.id}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:border-primary/30"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
                  onClick={() => setOpenId(isOpen ? null : p.id)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{p.icon}</span>
                    <div>
                      <h3 className="font-semibold text-foreground">{p.name}</h3>
                      <p className="text-sm text-muted-foreground">{p.tagline}</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-muted p-2">
                    <svg
                      className={`h-5 w-5 text-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-border bg-muted/30 px-5 pb-5 pt-4 md:px-6 md:pb-6 md:pt-4">
                    <ul className="space-y-2">
                      {p.features.map((f, i) => (
                        <li key={i} className="flex gap-2 text-sm text-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
