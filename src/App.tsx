import { Analytics } from '@vercel/analytics/react'
import { About } from './components/About'
import { BackgroundEffects } from './components/BackgroundEffects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
] as const

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  const sectionId = href.replace('#', '')
  const el = document.getElementById(sectionId)
  if (!el) return

  e.preventDefault()
  const headerOffset = 104
  const y = el.getBoundingClientRect().top + window.scrollY - headerOffset
  window.scrollTo({ top: y, behavior: 'smooth' })
  window.history.replaceState(null, '', href)
}

export default function App() {
  function handleExploreProjects() {
    const projectsSection = document.getElementById('projects')
    if (!projectsSection) return

    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="relative min-h-screen bg-brand-bg-start text-[#E5E7EB]">
      <BackgroundEffects />

      <header className="sticky top-0 z-20 border-b border-zinc-800/80 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-4 sm:px-10 sm:py-5 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4">
          <a
            href="#hero"
            className="inline-flex items-center justify-center py-1 md:justify-start"
            aria-label="Glorian Labs home"
          >
            <img
              src="/assets/logo-system/glorian-lockup.svg"
              alt="Glorian Labs"
              width={260}
              height={68}
              className="h-auto w-[190px] sm:w-[230px] md:w-[260px]"
              loading="eager"
              decoding="async"
            />
          </a>
          <p className="hidden text-center text-xs font-medium uppercase tracking-widest text-zinc-500 xl:block">
            Agentic Intelligence for the Next Economy
          </p>
          <nav
            className="flex items-center justify-center gap-2 justify-self-end md:gap-6"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="rounded-full border border-zinc-800/90 bg-zinc-950/60 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-300 transition-colors duration-200 hover:border-electric-blue/60 hover:text-electric-blue sm:px-4 md:border-0 md:bg-transparent md:px-0 md:py-0 md:text-sm md:normal-case md:tracking-normal"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Hero onExploreProjects={handleExploreProjects} />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <Analytics />
    </div>
  )
}
