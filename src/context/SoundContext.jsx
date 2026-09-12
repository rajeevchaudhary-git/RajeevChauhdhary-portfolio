import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { soundEngine } from '../lib/sound'

const SoundContext = createContext({
  enabled: false,
  toggle: () => {},
  click: () => {},
  whoosh: () => {},
  sendPacket: () => {},
})

export function SoundProvider({ children }) {
  const [enabled, setEnabled] = useState(false)

  const toggle = useCallback(async () => {
    const next = !enabled
    await soundEngine.setEnabled(next)
    setEnabled(next)
    if (next) soundEngine.click(0.8)
  }, [enabled])

  const click = useCallback((n) => soundEngine.click(n), [])
  const whoosh = useCallback(() => soundEngine.whoosh(), [])
  const sendPacket = useCallback(() => soundEngine.sendPacket(), [])

  const value = useMemo(
    () => ({ enabled, toggle, click, whoosh, sendPacket }),
    [enabled, toggle, click, whoosh, sendPacket]
  )

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
}

export function useSound() {
  return useContext(SoundContext)
}
