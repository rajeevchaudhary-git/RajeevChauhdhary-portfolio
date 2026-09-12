import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { about, profile } from '../data/content'
import { SectionHeader, MagneticButton, GlassCard } from './ui'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

function Counter({ end, suffix, decimals, active, reduce }) {
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 60, damping: 20 })
  const ref = useRef(null)

  useEffect(() => {
    if (!active) return undefined
    if (reduce) {
      mv.set(end)
      return undefined
    }
    mv.set(0)
    const t = setTimeout(() => mv.set(end), 80)
    return () => clearTimeout(t)
  }, [active, end, mv, reduce])

  useEffect(() => {
    const unsub = spring.on('change', (v) => {
      if (!ref.current) return
      ref.current.textContent = `${v.toFixed(decimals)}${suffix}`
    })
    return unsub
  }, [spring, decimals, suffix])

  return (
    <span ref={ref} className="font-sans text-3xl font-semibold text-copper-bright md:text-4xl">
      {reduce ? `${end.toFixed(decimals)}${suffix}` : `0${suffix}`}
    </span>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = usePrefersReducedMotion()
  const active = inView || reduce

  return (
    <section id="about" className="relative py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          code="SEC.01 // ABOUT"
          title="System specs"
          subtitle="Telemetry and capabilities of the operator behind the control plane."
        />

        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.85fr]">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -28 }}
            animate={active ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard className="p-6 md:p-8">
              <div className="mb-4 flex items-center justify-between border-b border-steel/80 pb-3 font-mono text-xs text-muted">
                <span>SPEC_SHEET.json</span>
                <span className="text-copper">rwxr—</span>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                {about.headline}
              </h3>
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 28)} className="mt-4 leading-relaxed text-ink/75">
                  {p}
                </p>
              ))}
              <p className="mt-4 font-mono text-sm leading-relaxed text-copper/90">
                {about.credentials}
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {about.capabilities.map((c, i) => (
                  <motion.li
                    key={c}
                    className="flex items-start gap-2 font-mono text-sm text-muted"
                    initial={reduce ? false : { opacity: 0, x: -10 }}
                    animate={active ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: reduce ? 0 : 0.2 + i * 0.08 }}
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-copper"
                      style={{ boxShadow: '0 0 8px #ff8c42' }}
                      aria-hidden
                    />
                    {c}
                  </motion.li>
                ))}
              </ul>
              <MagneticButton href={profile.cv} download className="mt-8">
                Download CV
              </MagneticButton>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 28 }}
            animate={active ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: reduce ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard className="grid grid-cols-2 gap-4 p-6">
              <p className="col-span-2 mb-2 font-mono text-xs tracking-widest text-copper uppercase">
                Live telemetry
              </p>
              {about.counters.map((s, i) => (
                <motion.div
                  key={s.key}
                  className="relative border border-steel/70 bg-base/40 p-4"
                  initial={reduce ? false : { opacity: 0, scale: 0.92 }}
                  animate={active ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: reduce ? 0 : 0.2 + i * 0.1 }}
                >
                  <div className="absolute left-0 top-0 h-2 w-2 border-l border-t border-copper" />
                  <div className="absolute right-0 top-0 h-2 w-2 border-r border-t border-copper" />
                  <div className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-copper" />
                  <div className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-copper" />
                  <div className="font-mono text-[10px] tracking-wider text-muted">{s.key}</div>
                  <div className="mt-2">
                    <Counter
                      end={s.end}
                      suffix={s.suffix}
                      decimals={s.decimals}
                      active={active}
                      reduce={reduce}
                    />
                  </div>
                </motion.div>
              ))}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
