import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

/** Glowing data packet that travels the page spine on scroll. */
export default function MachineSpine() {
  const reduce = usePrefersReducedMotion()
  const pathRef = useRef(null)
  const packetRef = useRef(null)
  const svgRef = useRef(null)

  useEffect(() => {
    if (reduce || !pathRef.current || !packetRef.current) return undefined

    const path = pathRef.current
    const packet = packetRef.current
    const length = path.getTotalLength()

    path.style.strokeDasharray = `${length}`
    path.style.strokeDashoffset = `${length}`

    const ctx = gsap.context(() => {
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,
        },
      })

      ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.45,
        onUpdate: (self) => {
          const p = path.getPointAtLength(length * self.progress)
          gsap.set(packet, { attr: { cx: p.x, cy: p.y } })
        },
      })
    }, svgRef)

    return () => ctx.revert()
  }, [reduce])

  if (reduce) return null

  return (
    <div
      className="pointer-events-none fixed inset-y-0 left-3 z-30 hidden w-10 md:left-5 md:block lg:left-8"
      aria-hidden
    >
      <svg
        ref={svgRef}
        className="h-full w-full"
        viewBox="0 0 40 1000"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M20 20 C20 120, 8 180, 20 280 S32 420, 20 520 S8 680, 20 780 S28 920, 20 980"
          fill="none"
          stroke="rgba(255,140,66,0.22)"
          strokeWidth="1.5"
        />
        <circle
          ref={packetRef}
          cx="20"
          cy="20"
          r="4"
          fill="#ff8c42"
          style={{ filter: 'drop-shadow(0 0 8px #ff8c42)' }}
        />
      </svg>
    </div>
  )
}
