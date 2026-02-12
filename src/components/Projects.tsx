import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Hedron',
    subtitle: 'AI agent framework on Hedera',
    description:
      'Autonomous agent framework SDK for composable coordination and intelligent transactions within the Hedera ecosystem, and recognized as a recent grant winner at the Hedera Africa Hackathon.',
    badge: 'Hedera Grant Recipient',
    isInDevelopment: true,
    statusLabel: undefined,
    url: 'https://github.com/hebx/hedron'
  },
  {
    name: 'Ascent CLI',
    subtitle: 'Developer tooling suite for Aptos blockchain',
    description:
      'A developer-first CLI experience that streamlines agent deployment, monitoring, and lifecycle workflows across Aptos-based environments.',
    badge: 'Aptos Ecosystem Builder',
    isInDevelopment: true,
    statusLabel: undefined,
    url: 'https://github.com/Hebx/ascent-cli'
  },
  {
    name: 'TBA',
    subtitle: 'More agentic experiments',
    description:
      'A pipeline of upcoming prototypes focused on multi-agent coordination, autonomous governance, and economic primitives for decentralized AI.',
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
                className="group block rounded-2xl border border-zinc-700/60 bg-white/5 p-6 shadow-panel-glow backdrop-blur-md transition-all duration-300 hover:scale-[1.015] hover:border-electric-blue/80 hover:shadow-[0_0_40px_rgba(0,212,255,0.2)]"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="font-display text-2xl font-semibold text-zinc-50">
                    {project.name}
                  </h3>
                  <span className="rounded-full border border-brand-purple/50 bg-brand-purple/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-purple">
                    {project.badge}
                  </span>
                </div>
                <p className="mb-3 text-sm font-medium uppercase tracking-wide text-electric-blue/90">
                  {project.subtitle}
                </p>
                <p className="leading-relaxed text-zinc-300">{project.description}</p>
                {(project.isInDevelopment ?? project.statusLabel) ? (
                  <span className="mt-5 inline-flex rounded-md border border-zinc-600 bg-zinc-900/70 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-200">
                    {project.statusLabel ?? 'In Development'}
                  </span>
                ) : null}
              </Card>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
