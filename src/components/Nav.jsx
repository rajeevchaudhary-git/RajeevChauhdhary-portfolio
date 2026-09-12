import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '../data/content'
import { MagneticButton, WireLink } from './ui'
import { GearIcon } from './icons'
import { useSound } from '../context/SoundContext'

const links = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Log' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { enabled, toggle, click } = useSound()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? 'border-b border-copper/15 bg-base/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#home" className="flex items-center gap-2 text-copper" data-cursor="hot">
          <GearIcon className="h-6 w-6" />
          <span className="font-mono text-sm tracking-wide text-ink">
            RC<span className="text-copper">::</span>SYS
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((l) => (
            <WireLink key={l.href} href={l.href}>
              {l.label}
            </WireLink>
          ))}
          <button
            type="button"
            onClick={toggle}
            data-cursor="hot"
            className="font-mono text-[11px] tracking-wider text-muted transition hover:text-copper"
            aria-pressed={enabled}
            title="Toggle ambient machine audio"
          >
            AUD:{enabled ? 'ON' : 'OFF'}
          </button>
          <MagneticButton href={profile.cv} download className="!px-4 !py-2 text-xs">
            CV
          </MagneticButton>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggle}
            className="border border-steel px-2 py-2 font-mono text-[10px] text-copper"
            aria-pressed={enabled}
          >
            AUD
          </button>
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-copper/40 text-copper"
            aria-expanded={open}
            aria-label="Toggle menu"
            data-cursor="hot"
            onClick={() => {
              click(0.6)
              setOpen((v) => !v)
            }}
          >
            <span
              className={`h-px w-5 bg-current transition ${open ? 'translate-y-[4px] rotate-45' : ''}`}
            />
            <span className={`h-px w-5 bg-current transition ${open ? 'opacity-0' : ''}`} />
            <span
              className={`h-px w-5 bg-current transition ${open ? '-translate-y-[4px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-steel bg-panel-solid/95 backdrop-blur-xl md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="border-b border-steel/50 py-2 font-mono text-sm text-ink/90"
                  onClick={() => setOpen(false)}
                >
                  <span className="mr-2 text-copper">{'>'}</span>
                  {l.label}
                </a>
              ))}
              <MagneticButton href={profile.cv} download className="mt-3 w-full">
                Download CV
              </MagneticButton>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
