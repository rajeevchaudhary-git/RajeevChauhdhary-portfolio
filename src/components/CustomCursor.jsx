import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useIsCoarsePointer } from '../hooks/useMediaQuery'

export default function CustomCursor() {
  const reduce = usePrefersReducedMotion()
  const coarse = useIsCoarsePointer()
  const enabled = !reduce && !coarse
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  const x = useSpring(0, { stiffness: 480, damping: 38, mass: 0.4 })
  const y = useSpring(0, { stiffness: 480, damping: 38, mass: 0.4 })
  const tx = useSpring(0, { stiffness: 180, damping: 28, mass: 0.55 })
  const ty = useSpring(0, { stiffness: 180, damping: 28, mass: 0.55 })

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove('has-custom-cursor')
      return undefined
    }
    document.body.classList.add('has-custom-cursor')

    const onMove = (e) => {
      setVisible(true)
      x.set(e.clientX)
      y.set(e.clientY)
      tx.set(e.clientX)
      ty.set(e.clientY)
    }
    const onOver = (e) => {
      const el = e.target.closest('a, button, [data-cursor="hot"], input, textarea')
      setHovering(Boolean(el))
    }
    const onLeave = () => setVisible(false)

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerover', onOver, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerover', onOver)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [enabled, x, y, tx, ty])

  if (!enabled) return null

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[200] mix-blend-difference"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
        }}
      >
        <div
          className={`rounded-full bg-copper transition-[width,height,box-shadow] duration-200 ${
            hovering ? 'h-3 w-3 glow-copper' : 'h-2 w-2'
          }`}
          style={{
            boxShadow: hovering
              ? '0 0 18px rgba(255,140,66,0.9), 0 0 40px rgba(255,140,66,0.45)'
              : '0 0 10px rgba(255,140,66,0.7)',
          }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[199]"
        style={{
          x: tx,
          y: ty,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 0.9 : 0,
        }}
      >
        <div
          className={`border border-copper/50 transition-all duration-300 ${
            hovering ? 'h-12 w-12 rotate-45 border-copper' : 'h-8 w-8'
          }`}
          style={{
            boxShadow: '0 0 20px rgba(255,140,66,0.15)',
          }}
        />
      </motion.div>
    </>
  )
}
