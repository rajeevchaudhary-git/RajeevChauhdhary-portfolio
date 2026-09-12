import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useSound } from '../context/SoundContext'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useIsCoarsePointer } from '../hooks/useMediaQuery'

export function MagneticButton({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  download,
  disabled = false,
  ...rest
}) {
  const reduce = usePrefersReducedMotion()
  const coarse = useIsCoarsePointer()
  const { click } = useSound()
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 280, damping: 22, mass: 0.4 })
  const y = useSpring(my, { stiffness: 280, damping: 22, mass: 0.4 })

  const base =
    'group relative inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-sm tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper'

  const styles =
    variant === 'primary'
      ? 'bg-copper text-base hover:bg-copper-bright glow-copper'
      : 'bg-transparent text-copper glass-panel hover:border-copper/50'

  const onMove = (e) => {
    if (reduce || coarse || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const dx = e.clientX - (r.left + r.width / 2)
    const dy = e.clientY - (r.top + r.height / 2)
    mx.set(dx * 0.28)
    my.set(dy * 0.28)
  }

  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  const handleClick = (e) => {
    click(1)
    onClick?.(e)
  }

  const Comp = href ? motion.a : motion.button
  const props = href
    ? { href, download, ...rest }
    : { type, disabled, ...rest }

  return (
    <Comp
      ref={ref}
      {...props}
      onClick={disabled ? undefined : handleClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x, y }}
      whileTap={reduce || disabled ? undefined : { scale: 0.97 }}
      className={`${base} ${styles} mech-press ${disabled ? 'opacity-60 pointer-events-none' : ''} ${className}`}
      data-cursor="hot"
    >
      <span
        className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-amber/60 to-transparent"
        aria-hidden
      />
      <span className="relative z-10">{children}</span>
    </Comp>
  )
}

export function WireLink({ href, children, className = '', external = false, onClick }) {
  const { click } = useSound()
  return (
    <a
      href={href}
      onClick={(e) => {
        click(0.5)
        onClick?.(e)
      }}
      className={`group relative font-mono text-sm text-copper transition-colors hover:text-copper-bright ${className}`}
      data-cursor="hot"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="absolute -bottom-0.5 left-0 h-px w-0 bg-copper transition-all duration-300 group-hover:w-full"
        style={{ boxShadow: '0 0 8px rgba(255,140,66,0.6)' }}
        aria-hidden
      />
    </a>
  )
}

export function SectionHeader({ code, title, subtitle }) {
  return (
    <header className="mb-12 md:mb-16">
      <div className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.22em] text-copper uppercase">
        <span
          className="inline-flex h-2 w-2 bg-copper"
          style={{ boxShadow: '0 0 12px #ff8c42' }}
          aria-hidden
        />
        <span>{code}</span>
        <span className="h-px max-w-28 flex-1 bg-steel" aria-hidden />
      </div>
      <h2 className="max-w-3xl font-sans text-4xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-muted">{subtitle}</p>
      ) : null}
    </header>
  )
}

export function GlassCard({ children, className = '', style, ...rest }) {
  return (
    <div className={`glass-panel ${className}`} style={style} {...rest}>
      {children}
    </div>
  )
}

/** 3D tilt wrapper for cards */
export function TiltCard({ children, className = '', onClick }) {
  const reduce = usePrefersReducedMotion()
  const coarse = useIsCoarsePointer()
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 20,
  })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), {
    stiffness: 200,
    damping: 20,
  })

  const onMove = (e) => {
    if (reduce || coarse || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative [transform-style:preserve-3d] ${className}`}
      style={
        reduce || coarse
          ? undefined
          : { rotateX: rx, rotateY: ry, transformPerspective: 900 }
      }
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}
