import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { usePointer } from '../../context/PointerContext'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useIsCoarsePointer } from '../../hooks/useMediaQuery'

function MagneticParticles({ count = 900 }) {
  const pointer = usePointer()
  const points = useRef()
  const { positions, base } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const base = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const x = (Math.random() - 0.5) * 14
      const y = (Math.random() - 0.5) * 9
      const z = (Math.random() - 0.5) * 6
      positions[i3] = x
      positions[i3 + 1] = y
      positions[i3 + 2] = z
      base[i3] = x
      base[i3 + 1] = y
      base[i3 + 2] = z
    }
    return { positions, base }
  }, [count])

  useFrame((state) => {
    if (!points.current) return
    const arr = points.current.geometry.attributes.position.array
    const t = state.clock.elapsedTime
    const tx = pointer.nx * 3.2
    const ty = pointer.ny * 2.2

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const bx = base[i3]
      const by = base[i3 + 1]
      const bz = base[i3 + 2]
      const dx = tx - arr[i3]
      const dy = ty - arr[i3 + 1]
      const dist = Math.sqrt(dx * dx + dy * dy) + 0.001
      const pull = Math.min(0.045, 0.12 / dist)
      arr[i3] += (bx - arr[i3]) * 0.02 + dx * pull + Math.sin(t * 0.4 + i) * 0.002
      arr[i3 + 1] += (by - arr[i3 + 1]) * 0.02 + dy * pull + Math.cos(t * 0.35 + i) * 0.002
      arr[i3 + 2] = bz + Math.sin(t * 0.5 + bx) * 0.15
    }
    points.current.geometry.attributes.position.needsUpdate = true
    points.current.rotation.y = t * 0.03
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#ff8c42"
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function GearMesh({ position = [2.4, 0.6, -1], scale = 1, speed = 0.35 }) {
  const ref = useRef()
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * speed
  })

  const shape = useMemo(() => {
    const s = new THREE.Shape()
    const teeth = 12
    const outer = 1
    const inner = 0.72
    const hub = 0.28
    for (let i = 0; i < teeth; i++) {
      const a0 = (i / teeth) * Math.PI * 2
      const a1 = ((i + 0.35) / teeth) * Math.PI * 2
      const a2 = ((i + 0.5) / teeth) * Math.PI * 2
      const a3 = ((i + 0.85) / teeth) * Math.PI * 2
      const fn = i === 0 ? 'moveTo' : 'lineTo'
      s[fn](Math.cos(a0) * outer, Math.sin(a0) * outer)
      s.lineTo(Math.cos(a1) * outer, Math.sin(a1) * outer)
      s.lineTo(Math.cos(a2) * inner, Math.sin(a2) * inner)
      s.lineTo(Math.cos(a3) * inner, Math.sin(a3) * inner)
    }
    s.closePath()
    const hole = new THREE.Path()
    hole.absarc(0, 0, hub, 0, Math.PI * 2, true)
    s.holes.push(hole)
    return s
  }, [])

  return (
    <mesh ref={ref} position={position} scale={scale} rotation={[0.5, 0.3, 0]}>
      <extrudeGeometry args={[shape, { depth: 0.18, bevelEnabled: false }]} />
      <meshStandardMaterial
        color="#2a2e35"
        metalness={0.85}
        roughness={0.35}
        emissive="#ff8c42"
        emissiveIntensity={0.18}
      />
    </mesh>
  )
}

function Scene({ particleCount }) {
  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[4, 3, 5]} intensity={1.4} color="#ff8c42" distance={18} />
      <pointLight position={[-4, -2, 2]} intensity={0.4} color="#ffb06b" distance={12} />
      <MagneticParticles count={particleCount} />
      <GearMesh position={[2.8, 0.8, -0.5]} scale={1.1} speed={0.28} />
      <GearMesh position={[3.6, -0.6, -1.2]} scale={0.65} speed={-0.42} />
      <GearMesh position={[-3.2, -1, -1]} scale={0.85} speed={0.22} />
    </>
  )
}

export default function HeroScene() {
  const reduce = usePrefersReducedMotion()
  const coarse = useIsCoarsePointer()
  if (reduce) return null

  const count = coarse ? 280 : 900

  return (
    <div className="pointer-events-none absolute inset-0 -z-0 opacity-80">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene particleCount={count} />
        </Suspense>
      </Canvas>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 65% 40%, transparent 20%, #0a0a0a 78%)',
        }}
      />
    </div>
  )
}
