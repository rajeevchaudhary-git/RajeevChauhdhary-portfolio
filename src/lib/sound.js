/** Lightweight Web Audio engine — no external files required. */
class SoundEngine {
  constructor() {
    this.ctx = null
    this.master = null
    this.humNodes = null
    this.enabled = false
  }

  ensure() {
    if (this.ctx) return
    const Ctx = window.AudioContext || window.webkitAudioContext
    if (!Ctx) return
    this.ctx = new Ctx()
    this.master = this.ctx.createGain()
    this.master.gain.value = 0.22
    this.master.connect(this.ctx.destination)
  }

  async setEnabled(on) {
    this.ensure()
    if (!this.ctx) return
    if (on && this.ctx.state === 'suspended') await this.ctx.resume()
    this.enabled = on
    if (on) this.startHum()
    else this.stopHum()
  }

  startHum() {
    if (!this.ctx || this.humNodes) return
    const osc1 = this.ctx.createOscillator()
    const osc2 = this.ctx.createOscillator()
    const gain = this.ctx.createGain()
    const filter = this.ctx.createBiquadFilter()
    osc1.type = 'sine'
    osc2.type = 'triangle'
    osc1.frequency.value = 55
    osc2.frequency.value = 110
    filter.type = 'lowpass'
    filter.frequency.value = 280
    gain.gain.value = 0.035
    osc1.connect(filter)
    osc2.connect(filter)
    filter.connect(gain)
    gain.connect(this.master)
    osc1.start()
    osc2.start()
    this.humNodes = { osc1, osc2, gain, filter }
  }

  stopHum() {
    if (!this.humNodes) return
    try {
      this.humNodes.osc1.stop()
      this.humNodes.osc2.stop()
    } catch {
      /* already stopped */
    }
    this.humNodes = null
  }

  click(intensity = 1) {
    if (!this.enabled || !this.ctx) return
    const t = this.ctx.currentTime
    const osc = this.ctx.createOscillator()
    const gain = this.ctx.createGain()
    osc.type = 'square'
    osc.frequency.setValueAtTime(420 + intensity * 80, t)
    osc.frequency.exponentialRampToValueAtTime(90, t + 0.06)
    gain.gain.setValueAtTime(0.08 * intensity, t)
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.07)
    osc.connect(gain)
    gain.connect(this.master)
    osc.start(t)
    osc.stop(t + 0.08)
  }

  whoosh() {
    if (!this.enabled || !this.ctx) return
    const t = this.ctx.currentTime
    const bufferSize = this.ctx.sampleRate * 0.25
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize)
    const src = this.ctx.createBufferSource()
    const filter = this.ctx.createBiquadFilter()
    const gain = this.ctx.createGain()
    src.buffer = buffer
    filter.type = 'bandpass'
    filter.frequency.setValueAtTime(800, t)
    filter.frequency.exponentialRampToValueAtTime(2400, t + 0.2)
    gain.gain.setValueAtTime(0.12, t)
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22)
    src.connect(filter)
    filter.connect(gain)
    gain.connect(this.master)
    src.start(t)
  }

  sendPacket() {
    if (!this.enabled || !this.ctx) return
    const t = this.ctx.currentTime
    ;[0, 0.08, 0.16].forEach((offset, i) => {
      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()
      osc.type = 'sine'
      osc.frequency.value = 520 + i * 160
      gain.gain.setValueAtTime(0.07, t + offset)
      gain.gain.exponentialRampToValueAtTime(0.001, t + offset + 0.1)
      osc.connect(gain)
      gain.connect(this.master)
      osc.start(t + offset)
      osc.stop(t + offset + 0.12)
    })
  }
}

export const soundEngine = new SoundEngine()
