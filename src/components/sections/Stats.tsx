import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "../../hooks/useCountUp";

const stats = [
  { value: "500+", label: "Schools" },
  { value: "50K+", label: "Students" },
  { value: "98%", label: "Parent Satisfaction" },
  { value: "70%", label: "Reduction in Dismissal Time" },
];

function StatItem({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const displayValue = useCountUp(value, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="text-center text-white"
    >
      <div className="text-3xl font-bold tabular-nums md:text-4xl lg:text-5xl">{displayValue}</div>
      <div className="mt-1.5 text-sm font-medium text-white/90 md:text-base">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="bg-purple-banner py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-12">
          {stats.map(({ value, label }, i) => (
            <StatItem key={label} value={value} label={label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
