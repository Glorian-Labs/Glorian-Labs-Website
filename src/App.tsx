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

function scrollToAbout(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault()
  const el = document.getElementById('about')
  if (!el) return
  const y = el.getBoundingClientRect().top + window.scrollY - 80
  window.scrollTo({ top: y, behavior: 'smooth' })
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

      <header className="sticky top-0 z-20 border-b border-zinc-800/80 bg-black/50 backdrop-blur-md">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-4 sm:px-10 sm:py-5">
          <a
            href="#hero"
            className="inline-flex items-center py-1"
            aria-label="Glorian Labs home"
          >
            <img
              src="/assets/logo-system/glorian-lockup.svg"
              alt="Glorian Labs"
              className="h-auto w-[190px] sm:w-[230px] md:w-[260px]"
              loading="eager"
              decoding="async"
            />
          </a>
          <p className="hidden text-center text-xs font-medium uppercase tracking-widest text-zinc-500 xl:block">
            Agentic Intelligence for the Next Economy
          </p>
          <nav className="hidden justify-self-end items-center gap-6 md:flex">
            {navItems.map((item) =>
              item.href === '#about' ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={scrollToAbout}
                  className="text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-electric-blue"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-electric-blue"
                >
                  {item.label}
                </a>
              )
            )}
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
