import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, ArrowRight, Sparkles, Clock, PlayCircle, Quote } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  return (
    <section className="relative min-h-svh flex items-center overflow-hidden">
      {/* Background image with slow Ken Burns zoom */}
      <motion.img
        src="/images/IMG-20260903-WA0018.jpg"
        alt="God's Workshop gathering"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
      />

      {/* Layered gradient overlays for depth and legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/30" />

      {/* Animated glow orbs */}
      <motion.div
        className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full blur-3xl opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.55), transparent 70%)' }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-[8%] w-[420px] h-[420px] rounded-full blur-3xl opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(139,77,123,0.6), transparent 70%)' }}
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating particles */}
      {Array.from({ length: 22 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white/60"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            width: 2 + (i % 3),
            height: 2 + (i % 3),
          }}
          animate={{ y: [0, -40, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 6 + (i % 5), repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
        />
      ))}

      {/* Gold top accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-500 via-accent-300 to-transparent origin-left"
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          {/* Left column */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="inline-flex items-center gap-2.5"
            >
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/25 backdrop-blur-md bg-white/10 text-white/90 text-[13px] font-medium">
                <Sparkles className="w-3.5 h-3.5 text-accent-400" />
                God's Workshop Global Network
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease }}
              className="mt-7 font-heading text-[44px] sm:text-6xl lg:text-[72px] font-bold leading-[1.03] text-white"
            >
              A place where
              <br />
              <span className="relative inline-block">
                <span className="italic text-accent-400">problems end</span>
                <motion.span
                  className="absolute left-[-4px] right-[-4px] bottom-[6px] h-[10px] -z-10 rounded-full opacity-60"
                  style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.35), rgba(201,168,76,0.05))' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
              <br />
              and testimonies begin
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease }}
              className="mt-6 text-lg sm:text-xl text-white/75 leading-relaxed max-w-[540px]"
            >
              God is still working. Bring your challenges to a prayer platform, a
              deliverance centre, a solution ground — and leave with answers.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/prayer-request"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white text-base font-semibold shadow-xl shadow-accent-600/40 hover:shadow-accent-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Submit Prayer Point
              </Link>
              <Link
                to="/about"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-white/40 text-white text-base font-semibold backdrop-blur-md bg-white/5 hover:bg-white/15 hover:border-white/70 hover:-translate-y-0.5 transition-all duration-300"
              >
                <PlayCircle className="w-5 h-5" />
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease }}
              className="mt-14 flex items-center gap-8 sm:gap-12"
            >
              {[
                { n: '9+', l: 'Years of Ministry' },
                { n: '6', l: 'Books Written' },
                { n: '1000+', l: 'Lives Touched' },
              ].map((s) => (
                <div key={s.l} className="border-l border-white/20 pl-5">
                  <p className="font-heading text-3xl sm:text-4xl font-bold text-white">
                    {s.n}
                  </p>
                  <p className="text-[13px] text-white/60 mt-1">{s.l}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — floating service cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative flex flex-col gap-5">
              {/* Upcoming service card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-6 shadow-2xl shadow-black/20 ml-auto w-[85%]"
              >
                <div className="flex items-center gap-2 text-accent-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest font-semibold">
                    Upcoming Service
                  </span>
                </div>
                <p className="mt-3 font-heading text-2xl font-semibold text-white">
                  Business Breakthrough
                </p>
                <p className="text-white/70 text-sm mt-1">Sunday · 11:00 PM · Online</p>
                <div className="mt-4 h-1.5 w-24 rounded-full bg-white/20 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-accent-400 to-accent-600 rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
              </motion.div>

              {/* Quote card */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="rounded-3xl border border-accent-400/30 bg-gradient-to-br from-primary-800/80 to-primary-900/80 backdrop-blur-xl p-6 shadow-2xl shadow-black/25 w-[80%]"
              >
                <Quote className="w-6 h-6 text-accent-400" />
                <p className="mt-3 font-heading text-lg italic text-white/90 leading-snug">
                  "God is still working — He is not done with you yet."
                </p>
                <p className="mt-3 text-sm text-accent-400 font-medium">
                  — The motto of God's Workshop
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ivory to-transparent" />

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[11px] uppercase tracking-[0.2em] text-white/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-9 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}