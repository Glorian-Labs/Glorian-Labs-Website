import { motion } from 'framer-motion'

export function Contact() {
  return (
    <motion.section
      id="contact"
      className="bg-brand-bg-start px-6 py-20 sm:px-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto w-full max-w-6xl rounded-2xl border border-zinc-700/60 bg-white/5 p-6 shadow-panel-glow backdrop-blur-md sm:p-10">
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
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="mailto:contact@glorianlabs.com"
            className="inline-flex rounded-full border border-electric-blue/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-electric-blue transition-colors duration-200 hover:bg-electric-blue/10 focus:outline-none focus:ring-2 focus:ring-electric-blue/70 focus:ring-offset-2 focus:ring-offset-zinc-950"
            aria-label="Email Glorian Labs"
          >
            contact@glorianlabs.com
          </a>
          <a
            href="https://github.com/glorian-labs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-300 transition-colors duration-200 hover:border-zinc-400 hover:bg-white/5 hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-electric-blue/70 focus:ring-offset-2 focus:ring-offset-zinc-950"
            aria-label="Glorian Labs on GitHub"
          >
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </motion.section>
  )
}
