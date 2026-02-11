import { motion } from 'framer-motion'

export function About() {
  return (
    <motion.section
      id="about"
      className="px-6 py-20 sm:px-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.1fr_1fr] md:items-start">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-electric-blue">
            About
          </p>
          <h2 className="font-display text-3xl font-bold text-zinc-50 sm:text-4xl lg:text-5xl">
            Researching and Shipping the Future of Intelligent Economies
          </h2>
        </div>

        <div className="space-y-5">
          <p className="leading-relaxed text-zinc-300">
            Glorian Labs is an independent research lab exploring the
            intersection of AI agents and decentralized economies. We build
            open-source prototypes and tools that enable autonomous
            coordination, intelligent decision-making, and new economic
            primitives in Web3 environments.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-electric-blue/40 bg-black/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-electric-blue">
              Open-Source First
            </span>
            <span className="rounded-full border border-brand-purple/50 bg-black/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-purple">
              Agentic Systems R&D
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
