import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { bootLines } from '../data/content'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { GearIcon } from './icons'

export default function BootSequence({ onComplete }) {
  const reduce = usePrefersReducedMotion()
  const [visibleCount, setVisibleCount] = useState(0)
  const [done, setDone] = useState(false)
  const finished = useRef(false)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    if (finished.current) return undefined

    const finish = () => {
      if (finished.current) return
      finished.current = true
      setVisibleCount(bootLines.length)
      setDone(true)
      onCompleteRef.current?.()
    }

    if (reduce) {
      setVisibleCount(bootLines.length)
      const t = setTimeout(finish, 100)
      return () => clearTimeout(t)
    }

    const timers = bootLines.map((line, i) =>
      setTimeout(() => {
        if (!finished.current) setVisibleCount(i + 1)
      }, line.delay + 280)
    )
    const end = setTimeout(finish, 2600)
    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(end)
    }
  }, [reduce])

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-base"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(12px)' }}
          transition={{ duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          role="status"
          aria-live="polite"
          aria-label="System boot sequence"
        >
          <div className="absolute inset-0 blueprint-grid opacity-50" aria-hidden />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(255,140,66,0.12), transparent 70%)',
            }}
            aria-hidden
          />

          <div className="relative mx-4 w-full max-w-xl glass-panel p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between border-b border-steel/80 pb-4">
              <div className="flex items-center gap-3">
                <GearIcon className="h-7 w-7 text-copper" spinning={!reduce} />
                <span className="font-mono text-xs tracking-widest text-copper uppercase">
                  CTRL // BOOT
                </span>
              </div>
              <span className="font-mono text-xs text-muted">PID 1001</span>
            </div>

            <div className="min-h-[8.5rem] space-y-2 font-mono text-sm leading-relaxed">
              {bootLines.slice(0, visibleCount).map((line) => (
                <motion.p
                  key={line.text}
                  initial={reduce ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-ink/90"
                >
                  <span className="text-copper">{line.text.slice(0, 1)}</span>
                  {line.text.slice(1)}
                </motion.p>
              ))}
              {visibleCount < bootLines.length && !reduce ? (
                <span
                  className="inline-block h-4 w-2 animate-pulse bg-copper"
                  style={{ boxShadow: '0 0 10px #ff8c42' }}
                  aria-hidden
                />
              ) : null}
            </div>

            <div className="mt-6 h-1 overflow-hidden bg-steel/80">
              <motion.div
                className="h-full origin-left bg-copper"
                style={{
                  boxShadow: '0 0 12px #ff8c42',
                  transformOrigin: 'left',
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: Math.max(visibleCount / bootLines.length, 0.06) }}
                transition={{ duration: 0.25 }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
