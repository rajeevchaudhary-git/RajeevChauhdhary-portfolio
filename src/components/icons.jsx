export function GearIcon({ className = 'w-8 h-8', spinning = false }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${spinning ? 'animate-[spin_12s_linear_infinite]' : ''}`}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="3" fill="currentColor" opacity="0.7" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <rect
          key={deg}
          x="29"
          y="4"
          width="6"
          height="12"
          rx="1"
          fill="currentColor"
          opacity="0.85"
          transform={`rotate(${deg} 32 32)`}
        />
      ))}
      <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="1" opacity="0.35" />
    </svg>
  )
}

export function NodeIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13" y="13" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 7h2M7 11v2M17 13V11M13 17h-2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function CircuitTrace({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 40"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 20 H60 L70 10 H110 L120 20 H200"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <circle cx="60" cy="20" r="2.5" fill="currentColor" />
      <circle cx="120" cy="20" r="2.5" fill="currentColor" />
    </svg>
  )
}
