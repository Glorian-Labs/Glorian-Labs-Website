import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer
      className="border-t border-zinc-800 px-6 py-8 text-sm text-zinc-400 sm:px-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
        <p>Company No. 17023765 | © 2026 Glorian Labs Ltd </p>
        <p className="text-zinc-500">Autonomous agents. Decentralized intelligence.</p>
      </div>
    </motion.footer>
  )
}
