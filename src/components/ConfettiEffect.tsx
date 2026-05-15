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
        particleCount: Math.floor(200 * particleRatio),
      })
    }

    fire(0.25, { spread: 26, startVelocity: 55, origin: { x: 0.1, y: 0.7 } })
    fire(0.25, { spread: 26, startVelocity: 55, origin: { x: 0.9, y: 0.7 } })
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 })
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 })
    fire(0.1, { spread: 120, startVelocity: 45 })
  }, [approved])

  return null
}
