import { lazy, Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { profile } from '../data/content'
import { MagneticButton, WireLink } from './ui'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { usePointer } from '../context/PointerContext'

const HeroScene = lazy(() => import('./hero/HeroScene'))

export default function Hero({ booted }) {
  const reduce = usePrefersReducedMotion()
  const pointer = usePointer()
  const show = booted || reduce
  const { scrollY } = useScroll()
  const gridY = useTransform(scrollY, [0, 600], [0, 80])
  const contentY = useTransform(scrollY, [0, 600], [0, 40])

  const parallaxX = reduce ? 0 : (pointer.nx || 0) * 12
  const parallaxY = reduce ? 0 : (pointer.ny || 0) * -8

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-20"
    >
      {!reduce ? (
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      ) : null}

      <motion.div
        className="pointer-events-none absolute inset-0 blueprint-grid opacity-60"
        style={{ y: reduce ? 0 : gridY }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 30% 45%, rgba(255,140,66,0.1), transparent 55%)',
          transform: `translate3d(${parallaxX * 0.4}px, ${parallaxY * 0.4}px, 0)`,
        }}
      />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-6"
        style={{ y: reduce ? 0 : contentY }}
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 36, filter: 'blur(8px)' }}
          animate={
            show
              ? { opacity: 1, y: 0, filter: 'blur(0px)' }
              : { opacity: 0, y: 36, filter: 'blur(8px)' }
          }
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{
            transform: reduce
              ? undefined
              : `translate3d(${parallaxX * 0.15}px, ${parallaxY * 0.15}px, 0)`,
          }}
        >
          <p className="mb-5 font-mono text-xs tracking-[0.28em] text-copper uppercase">
            Operator ID // Backend Systems
          </p>

          <h1 className="max-w-4xl font-sans text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-ink sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-glow-copper text-copper">{profile.name}</span>
          </h1>

          <p className="mt-6 max-w-xl font-mono text-base leading-relaxed text-muted md:text-lg">
            {profile.role}
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
            Shipping Socket.IO call/chat infrastructure, WebRTC, Redis-backed systems, and payment
            ledgers — scaling JaatakAstro to 15K+ MAU with 3K+ concurrent connections.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href="#projects">View Modules</MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Open Channel
            </MagneticButton>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {profile.socials.map((s) => (
              <WireLink key={s.label} href={s.href} external>
                {s.label}
              </WireLink>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 gap-3 glass-panel p-4 font-mono text-xs sm:grid-cols-4 md:mt-20"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ delay: reduce ? 0 : 0.35, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {[
            ['LOC', 'NEW DELHI'],
            ['MODE', 'PRODUCTION'],
            ['STACK', 'NODE · REDIS'],
            ['SIGNAL', 'ONLINE'],
          ].map(([k, v]) => (
            <div key={k} className="border-l border-copper/40 pl-3">
              <div className="tracking-wider text-muted">{k}</div>
              <div className="mt-1 text-copper-bright">{v}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
