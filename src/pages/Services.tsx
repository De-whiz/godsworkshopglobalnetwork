import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Clock,
  MapPin,
  Video,
  Building2,
  CalendarDays,
  Calendar,
  Heart,
  ArrowRight,
  Flame,
  Sparkles,
  Moon,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const weekly = [
  {
    day: 'Sunday',
    abbr: 'SUN',
    name: 'Business Breakthrough Service',
    time: '11:00 PM',
    type: 'Online',
    icon: Video,
    desc: 'A service dedicated to breaking financial barriers and unlocking divine favour in business.',
  },
  {
    day: 'Wednesday',
    abbr: 'WED',
    name: 'In-Person Prayer & Deliverance',
    time: '10:00 AM',
    type: 'On-Site',
    icon: Building2,
    desc: 'A powerful gathering for prayer, healing and deliverance at our physical location.',
  },
  {
    day: 'Friday',
    abbr: 'FRI',
    name: 'Miracle & Prophetic Service',
    time: '11:00 PM',
    type: 'Online',
    icon: Video,
    desc: 'An intense night of miracles, prophetic words and encounters with God\'s power.',
  },
]

const monthly = [
  {
    name: 'Operation 7-7-7',
    sub: '7 days of fasting & prayer',
    icon: Flame,
    desc: 'A focused week of consecration, seeking God\'s face in fasting and deep prayer.',
  },
  {
    name: 'Crossover Service',
    sub: 'Last day of the month, 11:00 PM',
    icon: Moon,
    desc: 'Crossing into a new month with prayer, thanksgiving and prophetic declarations.',
  },
  {
    name: 'Tackle Nights',
    sub: 'May & November',
    icon: Sparkles,
    desc: 'Special nights of intense warfare prayer, tackling stubborn challenges head-on.',
  },
]

export default function Services() {
  return (
    <>
      {/* Page hero */}
      <section className="relative pt-36 pb-20 bg-primary-950 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_30%_40%,#C9A84C,transparent_45%),radial-gradient(circle_at_75%_60%,#8B4D7B,transparent_40%)]" />
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full border border-white/5"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8">
          <AnimatedSection className="max-w-2xl">
            <h1 className="font-heading text-4xl sm:text-6xl font-bold text-white leading-tight">
              Our Services &
              <br />
              <span className="italic text-accent-400">Programs</span>
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-xl">
              Join us throughout the week for services designed to build your faith,
              ignite your prayer life and bring lasting transformation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Weekly services */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <AnimatedSection className="max-w-2xl mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800">
              <CalendarDays className="w-7 h-7 text-white" />
            </div>
            <h2 className="mt-6 font-heading text-3xl sm:text-5xl font-bold text-ink leading-tight">
              Weekly services
            </h2>
            <p className="mt-4 text-lg text-slate">
              Three services every week — online and in-person — each with a unique focus.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-6">
            {weekly.map((s, i) => (
              <AnimatedSection key={s.day} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="group h-full bg-ivory rounded-2xl border border-line p-7 hover:border-accent-300 hover:shadow-lift transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="shrink-0 w-12 sm:w-16 h-12 sm:h-16 rounded-xl bg-primary-50 flex flex-col items-center justify-center">
                      <span className="font-heading text-xs font-bold text-primary-600 uppercase tracking-wide">
                        {s.abbr}
                      </span>
                    </div>
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-accent-500/15 to-accent-500/5 flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-accent-600" />
                    </div>
                  </div>

                  <h3 className="mt-6 font-heading text-xl font-bold text-ink leading-tight">
                    {s.name}
                  </h3>
                  <p className="mt-3 text-[15px] text-slate leading-relaxed">
                    {s.desc}
                  </p>

                  <div className="mt-6 pt-5 border-t border-line flex items-center gap-4 text-sm text-slate">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-accent-500" />
                      {s.time}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      {s.type === 'Online' ? (
                        <Video className="w-4 h-4 text-accent-500" />
                      ) : (
                        <Building2 className="w-4 h-4 text-accent-500" />
                      )}
                      {s.type}
                    </span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly programs */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <AnimatedSection className="max-w-2xl mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600">
              <Calendar className="w-7 h-7 text-white" />
            </div>
            <h2 className="mt-6 font-heading text-3xl sm:text-5xl font-bold text-ink leading-tight">
              Monthly programs
            </h2>
            <p className="mt-4 text-lg text-slate">
              Special gatherings that go beyond the ordinary — deeper consecration, greater fire.
            </p>
          </AnimatedSection>

          <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-3xl p-8 sm:p-12 text-white shadow-lift">
            <div className="grid sm:grid-cols-3 gap-8">
              {monthly.map((m, i) => (
                <AnimatedSection key={m.name} delay={i * 0.1}>
                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <m.icon className="w-6 h-6 text-accent-400" />
                    </div>
                    <h3 className="mt-5 font-heading text-xl font-bold">{m.name}</h3>
                    <p className="mt-2 text-sm text-accent-300 font-medium">{m.sub}</p>
                    <p className="mt-3 text-sm text-white/70 leading-relaxed">{m.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/15 flex items-start gap-4">
              <MapPin className="w-5 h-5 text-accent-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white/90 font-medium">
                  Abayomi Atele, behind NNPC, Iwo Road, Oyo State
                </p>
                <p className="text-sm text-white/50 mt-1">
                  In-person services every Wednesday at 10:00 AM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <AnimatedSection className="rounded-[2rem] border border-line bg-ivory p-10 sm:p-14 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Be part of what God is doing
            </h2>
            <p className="mt-4 text-lg text-slate max-w-xl mx-auto">
              Join us in any of our services — online or on-site. God is still working,
              and He wants to work in your life.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/prayer-request"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold shadow-lg shadow-accent-600/25 hover:shadow-accent-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Submit Prayer Point
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-primary-200 text-primary-700 font-semibold hover:border-primary-500 hover:bg-primary-50 transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
