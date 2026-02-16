import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-primary/15 py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="card-lower rounded-r-2xl p-8 md:p-12 max-w-3xl"
        >
          <div className="flex items-center gap-2 text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">Contact</span>
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Get in touch
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Want safer, smarter dispersal at your school? We'd love to show you how UniqCamp works and tailor it to your needs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact us
              </Link>
            </motion.div>
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full border-2 border-primary bg-transparent px-6 py-3 font-semibold text-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
            >
              See Solutions
            </motion.button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            We provide demos, customisation for your school's dispersal workflow, and support so you can go live with confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
