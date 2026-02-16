import { motion } from "framer-motion";

const steps = [
  {
    title: "Parent Requests Pickup",
    description: "Parents initiate dispersal requests through the UniqCamp app, ensuring secure authorization.",
  },
  {
    title: "Teacher/Staff Approval",
    description: "Teachers and designated staff approve requests, ensuring student readiness and safety.",
  },
  {
    title: "Student Dispersal",
    description: "Students are securely dispersed and checked out, with real-time updates for parents.",
  },
  {
    title: "Daily Pickup Confirmation",
    description: "Parents confirm student pickup, completing the seamless and secure dispersal cycle.",
  },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const stepItem = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-primary/15 py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-primary"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">Process</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-2 text-center text-3xl font-extrabold tracking-tight text-foreground md:text-4xl"
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground"
        >
          Our simple 4-step process ensures a smooth dispersal.
        </motion.p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={stepItem}
              className="flex flex-col items-center text-center p-5 rounded-xl border border-primary/10 bg-primary/[0.03] hover:bg-primary/[0.06] hover:border-primary/20 transition-colors"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground shadow-sm">
                {i + 1}
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
