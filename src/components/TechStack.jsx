import { useMemo, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { circuitEdges, circuitNodes, skillGroups } from '../data/content'
import { SectionHeader, GlassCard } from './ui'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useSound } from '../context/SoundContext'

export default function TechStack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = usePrefersReducedMotion()
  const active = inView || reduce
  const [hot, setHot] = useState(null)
  const { click } = useSound()

  const nodeMap = useMemo(() => Object.fromEntries(circuitNodes.map((n) => [n.id, n])), [])
  const neighbors = useMemo(() => {
    const map = {}
    circuitNodes.forEach((n) => {
      map[n.id] = new Set([n.id])
    })
    circuitEdges.forEach(([a, b]) => {
      map[a]?.add(b)
      map[b]?.add(a)
    })
    return map
  }, [])

  const isLit = (id) => {
    if (!hot) return true
    return neighbors[hot]?.has(id)
  }

  return (
    <section id="stack" className="relative py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          code="SEC.02 // STACK"
          title="Live architecture map"
          subtitle="Hover a node — current flows along connected traces to related technologies."
        />

        {/* Desktop interactive SVG circuit */}
        <motion.div
          className="relative hidden md:block"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassCard className="relative overflow-hidden p-4 md:p-6">
            <svg viewBox="0 0 100 70" className="h-auto w-full" role="img" aria-label="Technology circuit diagram">
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="1.2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="current" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff8c42" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#ffb06b" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ff8c42" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {circuitEdges.map(([a, b]) => {
                const na = nodeMap[a]
                const nb = nodeMap[b]
                if (!na || !nb) return null
                const lit = Boolean(hot) && (a === hot || b === hot)
                return (
                  <g key={`${a}-${b}`}>
                    <line
                      x1={na.x}
                      y1={na.y}
                      x2={nb.x}
                      y2={nb.y}
                      stroke={lit ? 'rgba(255,140,66,0.55)' : 'rgba(46,51,59,0.9)'}
                      strokeWidth={lit ? 0.45 : 0.25}
                    />
                    {lit && !reduce ? (
                      <line
                        x1={na.x}
                        y1={na.y}
                        x2={nb.x}
                        y2={nb.y}
                        stroke="url(#current)"
                        strokeWidth="0.55"
                        strokeDasharray="2 3"
                        filter="url(#glow)"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="10"
                          to="0"
                          dur="0.7s"
                          repeatCount="indefinite"
                        />
                      </line>
                    ) : null}
                  </g>
                )
              })}

              {circuitNodes.map((n, i) => {
                const lit = !hot || isLit(n.id)
                const focused = hot === n.id
                return (
                  <g
                    key={n.id}
                    className="cursor-pointer"
                    onMouseEnter={() => {
                      setHot(n.id)
                      click(0.35)
                    }}
                    onMouseLeave={() => setHot(null)}
                    onFocus={() => setHot(n.id)}
                    onBlur={() => setHot(null)}
                    tabIndex={0}
                    role="button"
                    aria-label={n.label}
                  >
                    <motion.circle
                      cx={n.x}
                      cy={n.y}
                      r={focused ? 2.4 : 1.8}
                      fill={focused ? '#ff8c42' : lit ? '#ff8c42' : '#2e333b'}
                      opacity={lit ? 1 : 0.35}
                      filter={focused ? 'url(#glow)' : undefined}
                      initial={reduce ? false : { scale: 0 }}
                      animate={active ? { scale: 1 } : {}}
                      transition={{ delay: reduce ? 0 : i * 0.04, duration: 0.4 }}
                      style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                    />
                    <text
                      x={n.x}
                      y={n.y - 3.2}
                      textAnchor="middle"
                      className="fill-ink"
                      style={{
                        fontSize: '2.2px',
                        fontFamily: 'IBM Plex Mono, monospace',
                        opacity: lit ? 0.95 : 0.35,
                        fill: focused ? '#ffb06b' : '#e8eaed',
                      }}
                    >
                      {n.label}
                    </text>
                  </g>
                )
              })}
            </svg>

            <div className="mt-4 flex flex-wrap gap-3 font-mono text-[10px] tracking-wider text-muted uppercase">
              {skillGroups.map((g) => (
                <span key={g.id} className="border border-steel px-2 py-1">
                  <span className="mr-2 inline-block h-1.5 w-1.5 bg-copper align-middle" />
                  {g.title}
                </span>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Mobile fallback */}
        <div className="space-y-4 md:hidden">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={active ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: reduce ? 0 : gi * 0.08 }}
            >
              <GlassCard className="p-4">
                <h3 className="mb-3 font-mono text-xs tracking-widest text-copper uppercase">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-steel/80 bg-base/50 px-2.5 py-1 font-mono text-xs text-ink/85"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
