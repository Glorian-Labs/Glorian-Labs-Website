import { motion, useReducedMotion } from 'framer-motion'

interface HeroProps {
  onExploreProjects: () => void
}

export function Hero({ onExploreProjects }: HeroProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="hero"
      className="relative overflow-hidden border-b border-zinc-800/80 px-6 pb-24 pt-28 sm:px-10 md:pt-36 lg:pb-28 lg:pt-40"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-electric-blue/15 blur-3xl" />
        <div className="absolute right-10 top-40 h-80 w-80 rounded-full bg-brand-purple/20 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 md:flex-row md:items-center md:gap-8">
        <div className="flex w-full flex-col items-start gap-8 md:w-1/2">
          <h1 className="font-display bg-brand-gradient bg-clip-text text-5xl font-bold leading-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
            Glorian Labs
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-zinc-300 sm:text-xl lg:text-2xl">
            Building the Agentic Economy — Autonomous AI Systems for
            Decentralized Intelligence
          </p>

          <button
            type="button"
            onClick={onExploreProjects}
            className="rounded-full bg-brand-gradient px-7 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-50 shadow-glow transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-electric-blue/70 focus:ring-offset-2 focus:ring-offset-zinc-950"
          >
            Explore Projects
          </button>

          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-brand-purple/50 bg-black/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-purple">
              Agentic Research Lab
            </span>
            <span className="rounded-full border border-electric-blue/40 bg-black/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-electric-blue">
              Decentralized Autonomous Systems
            </span>
          </div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] md:w-1/2 md:max-w-[420px] md:self-end lg:max-w-[520px]"
          animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 8, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 scale-95 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.3)_0%,rgba(157,78,221,0.28)_42%,rgba(10,10,10,0)_76%)] opacity-30 blur-3xl"
          />
          <img
            src="/assets/mascot.png"
            alt="Glorian's Agent"
            className="h-auto w-full object-contain"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}
