import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, MessageCircle } from 'lucide-react'
import { config } from '../config'

interface InviteCardProps {
  approved: boolean
  onApprove: () => void
}

export default function InviteCard({ approved, onApprove }: InviteCardProps) {
  const whatsappUrl = `https://wa.me/${config.whatsappPhone}?text=${encodeURIComponent(
    config.whatsappMessage,
  )}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-md"
    >
      <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-10 shadow-2xl shadow-black/60">
        {/* Inner glow ring */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />

        {/* Header icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 flex justify-center"
        >
          <span className="text-5xl select-none">🌹</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-2xl font-bold leading-snug text-white text-center mb-3"
        >
          {config.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-base text-white/55 text-center leading-relaxed mb-8"
        >
          {config.subtitle}
        </motion.p>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="space-y-3 mb-8"
        >
          <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
            <Calendar className="shrink-0 text-rose-400" size={18} />
            <span className="text-white/80 text-sm font-medium">{config.date}</span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
            <MapPin className="shrink-0 text-rose-400" size={18} />
            <span className="text-white/80 text-sm font-medium">{config.location}</span>
          </div>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-xs text-white/35 text-center leading-relaxed mb-8"
        >
          {config.note}
        </motion.p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* CTA area */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="space-y-3"
        >
          <AnimatePresence mode="wait">
            {!approved ? (
              <motion.button
                key="cta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={onApprove}
                className="w-full rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 py-4 text-base font-semibold text-white shadow-lg shadow-rose-900/40 hover:shadow-rose-900/60 transition-shadow"
              >
                {config.ctaButton}
              </motion.button>
            ) : (
              <motion.div
                key="approved"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full rounded-2xl border border-rose-500/30 bg-rose-500/10 py-4 text-center"
              >
                <span className="text-sm font-medium text-rose-300">{config.approvedText}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {approved && (
              <motion.a
                key="whatsapp"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 py-4 text-[#25D366] text-sm font-medium hover:bg-[#25D366]/20 transition-colors"
              >
                <MessageCircle size={18} />
                {config.whatsappButtonText}
              </motion.a>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  )
}
