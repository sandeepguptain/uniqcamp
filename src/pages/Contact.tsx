import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const apiPort = import.meta.env.VITE_API_PORT ?? "3007";
const CONTACT_ENDPOINT =
  (import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined) ??
  (import.meta.env.DEV ? `http://localhost:${apiPort}/api/contact` : "/api/contact");
const CONTACT_EMAIL = "in.bebigupta@gmail.com";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildMailtoBody(form: { name: string; email: string; school: string; phone: string; message: string }) {
  const lines = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `School/Organization: ${form.school}`,
    form.phone ? `Phone: ${form.phone}` : "",
    form.message ? `\nMessage:\n${form.message}` : "",
  ].filter(Boolean);
  return encodeURIComponent(lines.join("\n"));
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    school: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [usedMailto, setUsedMailto] = useState(false);

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!emailRegex.test(form.email)) next.email = "Please enter a valid email.";
    if (!form.school.trim()) next.school = "School or organization is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      if (CONTACT_ENDPOINT) {
        const res = await fetch(CONTACT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            school: form.school,
            phone: form.phone || undefined,
            message: form.message || undefined,
            subject: `UniqCamp demo request from ${form.name} (${form.school})`,
          }),
        });
        if (!res.ok) throw new Error("Submit failed");
        setForm({ name: "", email: "", school: "", phone: "", message: "" });
      } else {
        const subject = encodeURIComponent(`UniqCamp demo request – ${form.name} (${form.school})`);
        const body = buildMailtoBody(form);
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
        setUsedMailto(true);
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-[80vh] bg-background">
      <section className="border-t border-primary/15 py-16 md:py-24" style={{ background: "hsl(262 40% 98%)" }}>
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="card-lower rounded-r-2xl p-8 md:p-12"
          >
            <div className="flex items-center gap-2 text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">Contact Us</span>
            </div>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Request a demo
            </h1>
            <p className="mt-3 text-muted-foreground">
              Tell us about your school or network. We'll get back to you to schedule a demo and show you how UniqCamp can reimagine your student dispersal—safer, smarter, faster.
            </p>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 rounded-xl bg-primary/10 p-6 text-foreground"
              >
                <p className="font-semibold text-primary">Thank you!</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {usedMailto
                    ? "Your email client should open. Send the email to complete your request. If it didn't open, email us at contact@uniqcamp.com with your details."
                    : "We've received your request and will be in touch within 1–2 business days."}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    to="/"
                    className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-95"
                  >
                    Back to home
                  </Link>
                  <button
                    type="button"
                    onClick={() => { setStatus("idle"); setUsedMailto(false); }}
                    className="rounded-full border-2 border-primary/50 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5"
                  >
                    Send another request
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-foreground">
                    Your name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="e.g. Jane Smith"
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    autoComplete="name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-foreground">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@school.org"
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    autoComplete="email"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="contact-school" className="block text-sm font-medium text-foreground">
                    School or organization <span className="text-primary">*</span>
                  </label>
                  <input
                    id="contact-school"
                    type="text"
                    value={form.school}
                    onChange={update("school")}
                    placeholder="e.g. Lincoln Elementary"
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    autoComplete="organization"
                  />
                  {errors.school && <p className="mt-1 text-sm text-red-600">{errors.school}</p>}
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-foreground">
                    Phone <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+1 234 567 8900"
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-foreground">
                    Message <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <textarea
                    id="contact-message"
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us about your needs, number of students, or preferred demo time..."
                    rows={4}
                    className="mt-1.5 w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please email us at{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-primary">
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                )}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-70"
                  >
                    {status === "sending" ? "Sending…" : "Request a demo"}
                  </button>
                  <Link
                    to="/"
                    className="rounded-full border-2 border-primary/50 bg-primary/5 px-6 py-3 font-semibold text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
                  >
                    Back to home
                  </Link>
                </div>
              </form>
            )}

            <div className="mt-10 border-t border-border pt-8">
              <p className="text-sm text-muted-foreground">
                Prefer email? Write to us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-primary hover:underline">
                  {CONTACT_EMAIL}
                </a>
                . We typically respond within 1–2 business days.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
