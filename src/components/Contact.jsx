import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { profile } from '../data/content'
import { SectionHeader, MagneticButton, WireLink, GlassCard } from './ui'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useSound } from '../context/SoundContext'

const PLACEHOLDERS = [
  'Describe the system you want to build…',
  'Real-time call infra? Ledger? Streaming?',
  'Drop a signal — I\'ll route it.',
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = usePrefersReducedMotion()
  const active = inView || reduce
  const { sendPacket, click } = useSound()
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [ph, setPh] = useState('')
  const [phIndex, setPhIndex] = useState(0)

  useEffect(() => {
    if (reduce || form.message) {
      setPh('')
      return undefined
    }
    const full = PLACEHOLDERS[phIndex % PLACEHOLDERS.length]
    let i = 0
    let phase = 'type'
    const id = setInterval(() => {
      if (phase === 'type') {
        i += 1
        setPh(full.slice(0, i))
        if (i >= full.length) phase = 'pause'
      } else if (phase === 'pause') {
        phase = 'delete'
      } else {
        i -= 1
        setPh(full.slice(0, Math.max(i, 0)))
        if (i <= 0) {
          clearInterval(id)
          setPhIndex((n) => n + 1)
        }
      }
    }, 48)
    return () => clearInterval(id)
  }, [phIndex, reduce, form.message])

  const onSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    sendPacket()
    click(1)
    setStatus('Dispatching packet…')

    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio contact — ${form.name || 'Operator'}`)
      const body = encodeURIComponent(
        `From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      )
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('Channel opened — packet queued.')
      setSending(false)
    }, 700)
  }

  const field =
    'w-full border border-steel/80 bg-base/60 px-3 py-2.5 font-mono text-sm text-ink placeholder:text-muted/50 focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper/40'

  return (
    <section id="contact" className="relative py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          code="SEC.05 // CHANNEL"
          title="Open a terminal"
          subtitle="Compose a message and dispatch it like a data packet on the wire."
        />

        <motion.div
          className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassCard className="overflow-hidden">
            <div className="flex items-center gap-2 border-b border-steel/80 bg-base/40 px-4 py-2.5 font-mono text-[11px] text-muted">
              <span
                className="h-2 w-2 rounded-full bg-copper"
                style={{ boxShadow: '0 0 10px #ff8c42' }}
              />
              <span>ssh contact@{profile.name.toLowerCase().replace(' ', '-')}</span>
            </div>

            <form onSubmit={onSubmit} className="space-y-4 p-5 md:p-6">
              <label className="block">
                <span className="mb-1.5 block font-mono text-xs text-copper">$ export NAME=</span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className={field}
                  placeholder="your name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block font-mono text-xs text-copper">$ export EMAIL=</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className={field}
                  placeholder="you@domain.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block font-mono text-xs text-copper">
                  $ cat &gt;&gt; message.txt
                </span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className={`${field} min-h-[120px] resize-y`}
                  placeholder={form.message ? '' : ph || PLACEHOLDERS[0]}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                />
              </label>

              <div className="relative flex flex-wrap items-center gap-4 pt-2">
                <MagneticButton type="submit" disabled={sending}>
                  {sending ? 'dispatching…' : './send.sh'}
                </MagneticButton>
                <AnimatePresence>
                  {status ? (
                    <motion.span
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="font-mono text-xs text-copper-bright"
                      role="status"
                    >
                      {status}
                    </motion.span>
                  ) : null}
                </AnimatePresence>

                {sending ? (
                  <motion.span
                    className="absolute -top-2 left-36 h-2 w-2 rounded-full bg-copper"
                    initial={{ x: 0, opacity: 1 }}
                    animate={{ x: 80, opacity: 0 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    style={{ boxShadow: '0 0 12px #ff8c42' }}
                    aria-hidden
                  />
                ) : null}
              </div>
            </form>
          </GlassCard>

          <GlassCard className="p-6 font-mono text-sm">
            <p className="mb-4 text-xs tracking-widest text-copper uppercase">Endpoints</p>
            <dl className="space-y-4 text-ink/85">
              <div>
                <dt className="text-xs text-muted">EMAIL</dt>
                <dd className="mt-1">
                  <WireLink href={`mailto:${profile.email}`}>{profile.email}</WireLink>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted">PHONE</dt>
                <dd className="mt-1">
                  <WireLink href={profile.phoneHref}>{profile.phone}</WireLink>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted">LOC</dt>
                <dd className="mt-1 text-ink/70">{profile.location}</dd>
              </div>
            </dl>
            <div className="mt-8 space-y-2">
              {profile.socials.map((s) => (
                <div key={s.label}>
                  <WireLink href={s.href} external>
                    {s.label.toLowerCase()} →
                  </WireLink>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
