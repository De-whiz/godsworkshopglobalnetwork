import { Link } from 'react-router-dom'
import { Heart, MessageSquareText } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function PrayerCTA() {
  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <AnimatedSection>
          <div className="relative rounded-[2rem] overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="/images/IMG-20260903-WA0015.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-primary-900/85" />
            </div>

            <div className="relative z-10 px-8 py-16 sm:px-14 sm:py-20 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
                  Need prayer?
                  <br />
                  <span className="italic text-accent-400">God is still working.</span>
                </h2>
                <p className="mt-5 text-lg text-white/80 max-w-md leading-relaxed">
                  Submit your prayer point and let us stand with you in faith. Or share
                  the testimony of what God has already done.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
                <Link
                  to="/prayer-request"
                  className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold shadow-xl shadow-black/20 hover:shadow-accent-600/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Heart className="w-5 h-5" />
                  Submit Prayer Point
                </Link>
                <Link
                  to="/submit-testimony"
                  className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full border border-white/40 text-white font-semibold backdrop-blur-sm hover:bg-white/15 hover:border-white/70 transition-all duration-300"
                >
                  <MessageSquareText className="w-5 h-5" />
                  Share a Testimony
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}