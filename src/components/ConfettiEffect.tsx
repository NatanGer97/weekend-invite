import { useEffect } from 'react'
import confetti from 'canvas-confetti'

interface ConfettiEffectProps {
  approved: boolean
}

export default function ConfettiEffect({ approved }: ConfettiEffectProps) {
  useEffect(() => {
    if (!approved) return

    const colors = ['#ff6b8a', '#ffd700', '#ffb3c6', '#c084fc', '#f9a8d4']

    const fire = (particleRatio: number, opts: confetti.Options) => {
      confetti({
        origin: { y: 0.7 },
        colors,
        ...opts,
        particleCount: Math.floor(120 * particleRatio),
      })
    }

    // Defer off the main thread so React can commit the state change first
    const t = setTimeout(() => {
      fire(0.3, { spread: 60, startVelocity: 50, origin: { x: 0.2, y: 0.75 } })
      fire(0.3, { spread: 60, startVelocity: 50, origin: { x: 0.8, y: 0.75 } })
      fire(0.4, { spread: 100, decay: 0.91, scalar: 0.9 })
    }, 80)

    return () => clearTimeout(t)
  }, [approved])

  return null
}
