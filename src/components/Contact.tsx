import { motion } from 'framer-motion'

export function Contact() {
  return (
    <motion.section
      id="contact"
      className="px-6 py-20 sm:px-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-brand-purple/40 bg-gradient-to-br from-brand-purple/20 to-black/50 p-8 shadow-glow backdrop-blur-md sm:p-10">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-electric-blue">
          Contact
        </p>
        <h2 className="font-display text-3xl font-bold text-zinc-50 sm:text-4xl lg:text-5xl">
          Let’s Collaborate
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-zinc-300">
          Interested in partnerships, research collaboration, or early access to
          our systems? Reach out and we’ll connect.
        </p>
        <a
          href="mailto:contact@glorianlabs.com"
          className="mt-8 inline-flex rounded-full border border-electric-blue/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-electric-blue transition-colors duration-200 hover:bg-electric-blue/10 focus:outline-none focus:ring-2 focus:ring-electric-blue/70 focus:ring-offset-2 focus:ring-offset-zinc-950"
          aria-label="Email Glorian Labs"
        >
          contact@glorianlabs.com
        </a>
      </div>
    </motion.section>
  )
}
