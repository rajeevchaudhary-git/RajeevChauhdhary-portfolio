import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const PointerContext = createContext({ x: 0.5, y: 0.5, nx: 0, ny: 0 })

export function PointerProvider({ children }) {
  const [pos, setPos] = useState({ x: 0.5, y: 0.5, nx: 0, ny: 0 })

  useEffect(() => {
    let raf = 0
    let latest = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    const onMove = (e) => {
      latest = { x: e.clientX, y: e.clientY }
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const w = window.innerWidth || 1
        const h = window.innerHeight || 1
        setPos({
          x: latest.x / w,
          y: latest.y / h,
          nx: (latest.x / w) * 2 - 1,
          ny: -((latest.y / h) * 2 - 1),
        })
      })
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const value = useMemo(() => pos, [pos])
  return <PointerContext.Provider value={value}>{children}</PointerContext.Provider>
}

export function usePointer() {
  return useContext(PointerContext)
}
