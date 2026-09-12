import { profile } from '../data/content'
import { GearIcon } from './icons'
import { WireLink } from './ui'

export default function Footer() {
  return (
    <footer className="border-t border-copper/15 bg-base-2/80 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-6">
        <div className="flex items-center gap-3 text-copper">
          <GearIcon className="h-5 w-5" />
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {profile.name} · mechanical control plane v3
          </p>
        </div>
        <div className="flex flex-wrap gap-5">
          {profile.socials.map((s) => (
            <WireLink key={s.label} href={s.href} external>
              {s.label}
            </WireLink>
          ))}
        </div>
      </div>
    </footer>
  )
}
