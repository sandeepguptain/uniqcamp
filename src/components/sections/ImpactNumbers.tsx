import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "../../hooks/useCountUp";

const metrics = [
  { value: "2.5M+", label: "Pickups handled", sub: "Last 12 months" },
  { value: "99.9%", label: "Platform uptime", sub: "Reliable & secure" },
  { value: "15", label: "Avg. seconds", sub: "Per dispersal checkout" },
  { value: "24", label: "Support hours", sub: "Every day" },
];


function MetricCard({ value, label, sub, index }: { value: string; label: string; sub: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const displayValue = useCountUp(value, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-accent bg-card/80 p-5 md:p-6"
    >
      <div className="text-2xl font-bold tabular-nums text-primary md:text-3xl">{displayValue}</div>
      <div className="mt-1 font-semibold text-foreground">{label}</div>
      <div className="mt-0.5 text-sm text-muted-foreground">{sub}</div>
    </motion.div>
  );
}

export default function ImpactNumbers() {
  return (
    <section className="section-purple-tint border-t border-primary/10 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-primary"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">Impact in numbers</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-2 text-center text-2xl font-extrabold tracking-tight text-foreground md:text-3xl"
        >
          Data that shows how UniqCamp is transforming school dispersal
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mx-auto mt-2 max-w-lg text-center text-muted-foreground"
        >
          Safer, smarter, faster dispersal—in numbers.
        </motion.p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <MetricCard key={m.label} value={m.value} label={m.label} sub={m.sub} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
