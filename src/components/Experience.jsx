import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience } from '../data/content'
import { SectionHeader, GlassCard } from './ui'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = usePrefersReducedMotion()
  const active = inView || reduce

  return (
    <section id="experience" className="relative py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          code="SEC.04 // CHANGELOG"
          title="System log"
          subtitle="Career events streamed as chronological journal entries."
        />

        <GlassCard className="overflow-hidden">
          <div className="flex items-center justify-between border-b border-steel/80 bg-base/40 px-4 py-2.5 font-mono text-[11px] text-muted md:px-6">
            <span>journalctl — unit=career.service</span>
            <span className="text-copper">tail -f</span>
          </div>

          <div className="divide-y divide-steel/60">
            {experience.map((entry, i) => (
              <motion.div
                key={`${entry.ts}-${entry.role}`}
                className="grid gap-2 px-4 py-6 md:grid-cols-[150px_70px_1fr] md:gap-4 md:px-6"
                initial={reduce ? false : { opacity: 0, x: -16 }}
                animate={active ? { opacity: 1, x: 0 } : {}}
                transition={{
                  delay: reduce ? 0 : i * 0.12,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <time className="font-mono text-xs whitespace-nowrap text-copper">{entry.ts}</time>
                <span
                  className={`font-mono text-xs tracking-wider ${
                    entry.level === 'SYS' ? 'text-amber' : 'text-copper-bright'
                  }`}
                >
                  [{entry.level}]
                </span>
                <div>
                  <p>
                    <span className="font-sans text-lg font-semibold text-ink">{entry.role}</span>
                    <span className="font-mono text-sm text-muted"> — {entry.org}</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{entry.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-steel/80 px-4 py-3 font-mono text-xs text-muted md:px-6">
            <span className="text-copper">$</span> waiting for next deploy…
            {!reduce ? (
              <span className="ml-1 inline-block h-3 w-1.5 animate-pulse bg-copper" />
            ) : null}
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
