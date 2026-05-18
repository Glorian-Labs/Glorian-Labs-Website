import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Hedron',
    subtitle: 'Agentic framework on Hedera',
    description:
      'An autonomous agent SDK for composable coordination and intelligent on-chain transactions across the Hedera ecosystem. Recognized with a grant at the Hedera Africa Hackathon.',
    badge: 'Hedera Grant Recipient',
    isInDevelopment: true,
    statusLabel: undefined,
    url: 'https://github.com/Glorian-Labs/Hedron'
  },
  {
    name: 'Agentic Prototypes',
    subtitle: 'The mind behind the lab',
    description:
      'Founder-led research & development on agentic runtimes, workflows, and protocols, verifiable AI, and zero-knowledge proof networks for autonomous decentralized systems.',
    badge: 'Origin Lab',
    isInDevelopment: true,
    statusLabel: 'Live',
    url: 'https://github.com/Hebx'
  },
  {
    name: 'In the Lab',
    subtitle: 'Glorian research pipeline',
    description:
      'Glorian’s next horizons: autonomous commerce, multi-agent coordination, verifiable settlement, and security automation for decentralized AI.',
    badge: 'Coming Soon',
    isInDevelopment: true,
    statusLabel: 'In Research',
    url: null
  }
] as const

export function Projects() {
  return (
    <motion.section
      id="projects"
      className="px-6 py-20 sm:px-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-electric-blue">
          Current Projects
        </p>
        <h2 className="font-display text-3xl font-bold text-zinc-50 sm:text-4xl lg:text-5xl">
          Building Foundational Agentic Infrastructure
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const Card = project.url ? 'a' : 'article'
            const cardProps = project.url
              ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
              : {}
            return (
              <Card
                key={project.name}
                {...cardProps}
                className="group flex h-full flex-col rounded-2xl border border-zinc-700/60 bg-white/5 p-6 shadow-panel-glow backdrop-blur-md transition-all duration-300 hover:scale-[1.015] hover:border-electric-blue/80 hover:shadow-[0_0_40px_rgba(0,212,255,0.2)]"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl font-semibold text-zinc-50">
                    {project.name}
                  </h3>
                  <span className="shrink-0 whitespace-nowrap rounded-full border border-brand-purple/50 bg-brand-purple/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-purple">
                    {project.badge}
                  </span>
                </div>
                <p className="mb-3 text-sm font-medium uppercase tracking-wide text-electric-blue/90">
                  {project.subtitle}
                </p>
                <p className="leading-relaxed text-zinc-300">{project.description}</p>
                {(project.isInDevelopment ?? project.statusLabel) ? (
                  <div className="mt-auto pt-5">
                    <span className="inline-flex rounded-md border border-zinc-600 bg-zinc-900/70 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-200">
                      {project.statusLabel ?? 'In Development'}
                    </span>
                  </div>
                ) : null}
              </Card>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
