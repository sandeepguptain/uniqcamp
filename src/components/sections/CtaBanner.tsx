import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section className="section-cta py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-white md:text-4xl"
        >
          Ready to Transform Your School's Dismissal Process?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mx-auto mt-4 max-w-xl text-lg text-white/90"
        >
          Join hundreds of schools already using UniqCamp for safer, faster, and more transparent student dismissals.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full bg-accent px-6 py-3.5 font-semibold text-accent-foreground hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Request a Demo
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full border-2 border-white bg-transparent px-6 py-3.5 font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
