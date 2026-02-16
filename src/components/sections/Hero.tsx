import { motion } from "framer-motion";

function HeroGraphics() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Floating orbs */}
      <motion.div
        className="absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.35, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[15%] top-[20%] h-48 w-48 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)" }}
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[25%] h-64 w-64 rounded-full opacity-[0.12]"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Geometric shapes */}
      <motion.div
        className="absolute right-[40%] top-[25%] h-24 w-24 rotate-12 rounded-2xl border-2 border-primary/20 bg-primary/[0.06]"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 12 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      />
      <motion.div
        className="absolute bottom-[30%] right-[12%] h-16 w-16 rounded-full border-2 border-primary/25 bg-primary/[0.08]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, type: "spring", stiffness: 180 }}
      />
      <motion.div
        className="absolute right-[8%] top-[35%] h-20 w-20 rounded-3xl border-2 border-primary/15 bg-secondary/80 backdrop-blur-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      />
      {/* Small accent dots */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.span
          key={i}
          className="absolute h-2 w-2 rounded-full bg-primary/30"
          style={{
            right: `${18 + i * 8}%`,
            top: `${25 + (i % 3) * 22}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + i * 0.1, type: "spring", stiffness: 200 }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-background gradient-mesh py-24 md:py-32 lg:py-40">
      <HeroGraphics />
      <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-8">
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
