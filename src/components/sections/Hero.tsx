import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-background gradient-mesh py-24 md:py-32 lg:py-40">
      <div className="relative mx-auto max-w-4xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-primary"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em]">Student Dispersal · Safety · Transparency</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-5 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Student Dispersal, Reimagined
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 max-w-xl text-lg font-medium text-primary"
        >
          Safer. Smarter. Faster.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-3 max-w-xl text-lg text-muted-foreground"
        >
          UniqCamp reimagines how students leave school—with one platform connecting parents, staff, and drivers for safer, faster dispersal every day.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Request a Demo
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full border-2 border-primary/50 bg-primary/5 px-6 py-3.5 font-semibold text-primary hover:border-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
