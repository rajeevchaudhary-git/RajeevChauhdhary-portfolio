import { useCallback, useState } from 'react'
import './index.css'
import { SoundProvider } from './context/SoundContext'
import { PointerProvider } from './context/PointerContext'
import BootSequence from './components/BootSequence'
import CustomCursor from './components/CustomCursor'
import MachineSpine from './components/MachineSpine'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [booted, setBooted] = useState(false)
  const onBootComplete = useCallback(() => setBooted(true), [])

  return (
    <SoundProvider>
      <PointerProvider>
        <BootSequence onComplete={onBootComplete} />
        <CustomCursor />
        <MachineSpine />
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[110] focus:bg-copper focus:px-3 focus:py-2 focus:text-base"
        >
          Skip to content
        </a>
        <Nav />
        <main>
          <Hero booted={booted} />
          <About />
          <TechStack />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </PointerProvider>
    </SoundProvider>
  )
}

export default App
