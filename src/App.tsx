import { useState } from 'react'
import InviteCard from './components/InviteCard'
import ConfettiEffect from './components/ConfettiEffect'

export default function App() {
  const [approved, setApproved] = useState(false)

  return (
    <div className="relative min-h-dvh flex items-center justify-center px-4 py-12 bg-gradient-to-br from-[#0d0d1a] via-[#1a0a2e] to-[#0d0d1a] overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-rose-900/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-purple-900/20 blur-[100px]" />
      </div>

      <ConfettiEffect approved={approved} />
      <InviteCard approved={approved} onApprove={() => setApproved(true)} />
    </div>
  )
}
