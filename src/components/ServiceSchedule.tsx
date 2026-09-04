import { motion } from 'framer-motion'
import { Clock, MapPin, Video, Building2, CalendarDays } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const weekly = [
  {
    day: 'Sunday',
    name: 'Business Breakthrough Service',
    time: '11:00 PM',
    type: 'Online',
    icon: Video,
  },
  {
    day: 'Wednesday',
    name: 'In-Person Prayer & Deliverance',
    time: '10:00 AM',
    type: 'On-Site',
    icon: Building2,
  },
  {
    day: 'Friday',
    name: 'Miracle & Prophetic Service',
    time: '11:00 PM',
    type: 'Online',
    icon: Video,
  },
]

const monthly = [
  { name: 'Operation 7-7-7', sub: '7 days of fasting & prayer' },
  { name: 'Crossover Service', sub: 'Last day of the month, 11:00 PM' },
  { name: 'Tackle Nights', sub: 'May & November' },
]

export default function ServiceSchedule() {
  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14">
          <AnimatedSection direction="left">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Join us in service
            </h2>

            <div className="mt-8 space-y-4">
              {weekly.map((s, i) => (
                <AnimatedSection key={s.day} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    className="flex items-center gap-5 bg-white rounded-2xl p-5 border border-line hover:border-accent-300 hover:shadow-lift transition-all"
                  >
                    <div className="shrink-0 w-14 h-14 rounded-xl bg-primary-50 flex flex-col items-center justify-center">
                      <span className="font-heading text-[11px] font-bold text-primary-600 uppercase tracking-wide">
                        {s.day.slice(0, 3)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-ink line-clamp-2">{s.name}</p>
                      <p className="text-sm text-slate mt-0.5 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {s.time}
                        <span className="mx-1 text-line">·</span>
                        {s.type}
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-3xl p-8 sm:p-10 text-white shadow-lift">
              <h3 className="font-heading text-2xl font-bold">Beyond the ordinary</h3>

              <div className="mt-8 space-y-5">
                {monthly.map((m, i) => (
                  <AnimatedSection key={m.name} delay={i * 0.08}>
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <CalendarDays className="w-5 h-5 text-accent-400" />
                      </div>
                      <div>
                        <p className="font-semibold">{m.name}</p>
                        <p className="text-sm text-white/70 mt-0.5">{m.sub}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-white/70">
                    Abayomi Atele, behind NNPC, Iwo Road, Oyo State
                  </p>
                  <p className="text-xs text-white/50 mt-1">Every Wednesday · 10:00 AM</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}