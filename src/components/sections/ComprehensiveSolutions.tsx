const roles = [
  {
    id: "parent",
    name: "Parent Application",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    features: [
      "Login through Mobile and OTP",
      "Show Student related to parents; if not added by school: add by student unique Id or add details with pickup method (Self, Parent Pickup, Personal Cab, School Bus) and send for approval",
      "Schedule early Dismissal and status; send for approval to principal and class staff; staff panel to see and approve with old request list",
      "QR scanner for daily dismissal request at school premises; show status and which staff dismissed student",
      "Add guardian for student Pickup",
      "Add permitted Cab drivers details for pickup and drop off",
      "Everyday pickup status",
      "Parent Profile (Name, Mobile Number, Photo)",
      "Pickup confirmation everyday (auto-confirm based on school admin setting if parent does not confirm)",
      "Remove/Block cab drivers and guardians",
      "Request for Principal/teacher Meeting",
      "Manage parent and students for multiple school",
    ],
  },
  {
    id: "teacher",
    name: "Teacher Portal",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    features: [
      "Login through Mobile and OTP",
      "Early dismissal approval",
      "Show daily pickup and drop status of class",
      "Call to parent",
      "Show and add Notification",
      "Approve daily requested dismissal and send student from class",
      "Verify Student at gate for Cabs/Buses if permitted by Principal/admin (shows all allowed students for bus/Cab irrespective of class)",
      "Approve/Request for Meeting with Parents and show list",
    ],
  },
  {
    id: "principal",
    name: "Principal & Admin Control",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    features: [
      "Login through Mobile and OTP",
      "Early dismissal approval after teacher approval",
      "Add roll and permissions (Admin, Manager, Teacher, Bus driver, Security guard, escorts, coordinator)",
      "Show daily pickup and drop status; show all parents and related students",
      "Show push Notification; add Notification for Staffs and Parents Application",
      "Add dismissal checkout layer class wise with staff name",
      "Add School unique code (unique and not changeable)",
      "Upload/Add/Remove Staff Details",
      "Upload/Add/Remove Student Details (Name, Class, Photo, Student Id, pickup method) with 1 Parent Contact number and Name",
      "Add pickup method (Self, Parent Pickup, Personal Cab, School Bus)",
      "Add Permitted personal Cab Driver details; Remove/Block cab drivers",
      "Add notice on TV screen (found/loss, holiday, etc.)",
      "Add Time for auto Pickup confirm on behalf of parent if parent does not confirm",
      "Add TV display list with exit name",
      "Approve/Request for Meeting for Parents and show list",
      "Request for Technical Help; Payment page",
      "Disable dismissal for student if required",
    ],
  },
  {
    id: "cab",
    name: "Personal Cab Driver App",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1V6a1 1 0 00-1-1h-1m-1 1v10a1 1 0 001 1h1m-4 0V6a1 1 0 00-1-1H9a1 1 0 00-1 1v10a1 1 0 001 1h1" />
      </svg>
    ),
    features: [
      "Login through Mobile and OTP",
      "Request to class teacher for group Dismissal",
      "Accept Student",
      "Show all student group",
    ],
  },
  {
    id: "tv",
    name: "TV Display System",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      "Dynamic QR code display at TV screen for Dismissal request by guardian/parents based on the school",
      "Multiple QR code display routes for TV Display at school campus; principal panel setting controls which class can be requested by which route per TV",
      "QR code expiry timer (e.g. default 30 seconds) from principal panel",
      "Show network connection status; Show Current Time",
      "Show Current Dismissal Class and section; wrong gate or unauthorised messages",
      "Show Notice to Display from Principal panel",
      "Check parents' location (geofencing); allow request only when in school geofence (setting in principal panel); Geofencing updatable in Principal panel",
      "On parent request, notify staff to dismiss; parent gets notification when child dismissed; status on panel for the day",
      "If no TV display: principal can generate QR for gate wall; parent scans QR (must be in geofencing area)",
    ],
  },
];

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function ComprehensiveSolutions() {
  return (
    <section id="solutions" className="relative overflow-hidden border-t border-primary/10 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex items-center justify-center gap-2 text-primary"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">Solutions</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.05 }}
          className="mt-2 text-center text-3xl font-extrabold tracking-tight text-foreground md:text-4xl"
        >
          Comprehensive solutions for every role
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-center text-muted-foreground"
        >
          Dedicated portals and features for all stakeholders.
        </motion.p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {roles.map((role) => (
            <motion.article
              key={role.id}
              variants={item}
              className="card-accent group p-6 md:p-7"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                  {role.icon}
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {role.name}
                </h3>
              </div>
              <ul className="max-h-[280px] space-y-2.5 overflow-y-auto pr-1">
                {role.features.map((f, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/80" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
