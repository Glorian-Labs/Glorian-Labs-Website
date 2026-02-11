export function BackgroundEffects() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-gradient-animated absolute -left-24 top-0 h-[28rem] w-[28rem] rounded-full bg-electric-blue/10 opacity-85 blur-3xl sm:opacity-100" />
      <div className="bg-gradient-animated absolute -right-24 top-1/4 h-[24rem] w-[24rem] rounded-full bg-brand-purple/15 opacity-85 blur-3xl [animation-delay:2s] sm:opacity-100" />
      <div className="bg-gradient-animated absolute bottom-[-8rem] left-1/3 h-[22rem] w-[22rem] rounded-full bg-electric-blue/10 opacity-85 blur-3xl [animation-delay:5s] sm:opacity-100" />
      <div className="bg-particles absolute inset-0 opacity-20 sm:opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-bg-start/30 to-brand-bg-end/90 sm:via-brand-bg-start/20 sm:to-brand-bg-end/85" />
    </div>
  )
}
