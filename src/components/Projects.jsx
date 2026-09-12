import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '../data/content'
import { SectionHeader, TiltCard, WireLink, GlassCard } from './ui'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useSound } from '../context/SoundContext'
import { GearIcon } from './icons'

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false)
  const reduce = usePrefersReducedMotion()
  const { click, whoosh } = useSound()

  const toggle = () => {
    const next = !open
    setOpen(next)
    click(0.9)
    if (next) whoosh()
  }

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: reduce ? 0 : index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <TiltCard className="h-full">
        <GlassCard className="overflow-hidden">
          <button
            type="button"
            onClick={toggle}
            aria-expanded={open}
            data-cursor="hot"
            className="flex w-full items-start gap-4 p-5 text-left md:p-6"
          >
            <div className="mt-1 text-copper">
              <GearIcon className="h-9 w-9" spinning={open && !reduce} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] tracking-widest text-muted uppercase">
                <span className="text-copper">{project.code}</span>
                <span>·</span>
                <span>{open ? 'BAY OPEN' : 'MODULE SEALED'}</span>
              </div>
              <h3 className="mt-2 font-sans text-2xl font-semibold tracking-tight text-ink">
                {project.title}
              </h3>
              <p className="mt-1 font-mono text-sm text-muted">{project.subtitle}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="border border-copper/25 bg-copper/5 px-2 py-0.5 font-mono text-[11px] text-copper-bright"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <span
              className={`mt-1 font-mono text-copper transition-transform duration-300 ${
                open ? 'rotate-90' : ''
              }`}
            >
              ▸
            </span>
          </button>

          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                key="panel"
                initial={reduce ? false : { height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="border-t border-copper/20 bg-base/50 px-5 py-5 md:px-6 md:pl-[4.75rem]">
                  <p className="mb-2 font-mono text-xs tracking-wider text-copper uppercase">
                    Problem
                  </p>
                  <p className="leading-relaxed text-ink/80">{project.problem}</p>
                  <p className="mb-2 mt-4 font-mono text-xs tracking-wider text-copper uppercase">
                    Solution
                  </p>
                  <p className="leading-relaxed text-ink/80">{project.solution}</p>
                  {project.link ? (
                    <div className="mt-4">
                      <WireLink href={project.link} external>
                        → {project.linkLabel}
                      </WireLink>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </GlassCard>
      </TiltCard>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          code="SEC.03 // MODULES"
          title="Deployed modules"
          subtitle="Tilt to inspect. Click to unseal the bay and read the system internals."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
