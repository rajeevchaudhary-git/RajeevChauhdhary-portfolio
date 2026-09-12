import { useReducedMotion as useFramerReducedMotion } from 'framer-motion'

/** Prefer Framer's hook; falls back to matchMedia for non-motion trees. */
export function usePrefersReducedMotion() {
  return useFramerReducedMotion()
}
