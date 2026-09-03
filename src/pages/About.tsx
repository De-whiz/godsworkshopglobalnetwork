import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Target,
  Eye,
  Heart,
  BookOpen,
  Users,
  Shield,
  HandHelping,
  GraduationCap,
  ArrowRight,
  Briefcase,
  Flame,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const timeline = [
  {
    year: '2016',
    title: 'Called to full-time ministry',
    text: 'Pastor Kehinde Omolaja (JP) received the call into full-time service, stepping out in obedience.',
  },
  {
    year: '2017',
    title: 'The vision is born',
    text: 'The vision of God\'s Workshop emerged — God working on human beings to repair the faulty components of our lives.',
  },
  {
    year: '2017',
    title: 'Ministry launches',
    text: 'God\'s Workshop began as a prayer platform where people bring problems and leave with solutions and testimonies.',
  },
  {
    year: 'Today',
    title: 'A global network',
    text: 'Renamed God\'s Workshop Global Network, testimonies now spread within and beyond the country.',
  },
]

const visionItems = [
  { icon: Target, text: 'Reaching the world with the gospel of power, starting from our present location.' },
  { icon: Eye, text: 'Proffering solutions to the challenges of life.' },
  { icon: Flame, text: 'Igniting fire in hearts yearning for the true fire of God.' },
  { icon: Users, text: 'Imparting passionate people with genuine, authentic power.' },
  { icon: BookOpen, text: 'Providing accurate, relevant scriptural counseling.' },
  { icon: HandHelping, text: 'Lending a helping hand to the needy in every form required.' },
]

const values = [
  { icon: Shield, name: 'Holiness', desc: 'Living set apart for God\'s purpose' },
  { icon: Heart, name: 'Obedience', desc: 'Walking in alignment with God\'s word' },
  { icon: Flame, name: 'Faith', desc: 'Trusting God beyond what eyes can see' },
  { icon: HandHelping, name: 'Liberality', desc: 'Giving generously with a cheerful heart' },
]

export default function About() {
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

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8">
          <AnimatedSection className="max-w-2xl">
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white leading-tight">
              Rooted in prayer,
              <br />
              <span className="italic text-accent-400">burning for revival</span>
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-xl">
              Discover the heart behind God's Workshop Global Network and the vision
              driving our assignment across the world.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our story + timeline */}
      <section className="py-24 bg-ivory">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-ink leading-tight">
                A vision born of divine calling
              </h2>
              <div className="mt-6 space-y-4 text-slate leading-relaxed">
                <p>
                  God's Workshop is a vision given to Pastor Kehinde Omolaja (JP) in 2017,
                  after he was called into full-time service a year earlier. It exists to
                  support his pastoral assignment as a Pastor in The Redeemed Christian
                  Church of God, Jesus Pinnacle, Oyo State.
                </p>
                <p>
                  Trained as a Mechanical Engineer and an Information Scientist, Pastor
                  Omolaja sought to link his career to his ministry — giving rise to the
                  name <strong className="text-ink">God's Workshop</strong>: God working on
                  human beings to fix the faulty components of our lives.
                </p>
                <p>
                  Today, God's Workshop is a prayer platform, a deliverance centre, and a
                  solution ground — where countless people bring problems and leave with
                  testimonies.
                </p>
              </div>

              <div className="mt-8 p-6 rounded-2xl border-l-4 border-accent-500 bg-white shadow-sm">
                <p className="font-heading text-lg italic text-primary-700">
                  "God is still working — He is not done with you yet."
                </p>
                <p className="mt-2 text-sm text-slate">The motto of God's Workshop</p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative pl-8">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-500 via-primary-600 to-accent-500/30" />
                <div className="space-y-8">
                  {timeline.map((item, i) => (
                    <AnimatedSection key={i} delay={i * 0.12}>
                      <div className="relative">
                        <div className="absolute -left-8 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-accent-500 bg-ivory" />
                        <span className="inline-block text-xs font-bold uppercase tracking-wider text-accent-600">
                          {item.year}
                        </span>
                        <h3 className="mt-1 font-heading text-xl font-bold text-ink">{item.title}</h3>
                        <p className="mt-1.5 text-slate leading-relaxed">{item.text}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 mx-auto">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h2 className="mt-6 font-heading text-3xl sm:text-4xl font-bold text-ink text-balance">
              Reaching the world with the gospel of power
            </h2>
            <p className="mt-4 text-lg text-slate leading-relaxed">
              Providing solutions to all human problems in such a way as to enhance
              commitment and service to God.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-ivory">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <AnimatedSection className="max-w-2xl mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h2 className="mt-6 font-heading text-4xl sm:text-5xl font-bold text-ink leading-tight">
              What we are pressing toward
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visionItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-line hover:border-accent-300 hover:shadow-lift transition-all duration-300 h-full">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-accent-500/15 to-accent-500/5 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent-600" />
                  </div>
                  <p className="text-ink/85 leading-snug">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <AnimatedSection className="max-w-2xl mb-12">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-ink leading-tight">
              What we stand for
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <AnimatedSection key={v.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="bg-ivory rounded-2xl p-7 border border-line h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                    <v.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-ink">{v.name}</h3>
                  <p className="mt-2 text-sm text-slate">{v.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pastor profile */}
      <section className="py-24 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <AnimatedSection direction="left" className="lg:col-span-2">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
                  <img
                    src="/images/IMG-20260903-WA0019.jpg"
                    alt="Pastor Kehinde Omolaja"
                    className="w-full h-[560px] lg:h-[620px] object-cover object-top"
                  />
                </div>
                <div className="absolute inset-0 rounded-3xl ring-1 ring-white/20 ring-inset pointer-events-none" />
                <div className="absolute -bottom-4 -right-4 bg-accent-500 rounded-2xl px-5 py-3 shadow-xl">
                  <p className="font-heading text-2xl font-bold text-white">6</p>
                  <p className="text-xs text-white/90">Books Authored</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="lg:col-span-3">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold leading-tight">
                Pastor Kehinde Omolaja <span className="italic text-accent-400">(JP)</span>
              </h2>
              <div className="mt-6 space-y-4 text-white/80 leading-relaxed">
                <p>
                  An ordained Pastor in The Redeemed Christian Church of God, married to
                  Pastor Esther Adeola Omolaja and blessed with a son after 19 years of waiting.
                </p>
                <p>
                  A general in the prayer ministry, born again in 1990, his passion for prayer
                  has transformed countless lives — from his days on campus to the present moment.
                </p>
                <p>
                  A prolific writer of <strong className="text-white">6 books</strong> and a
                  seasoned teacher of the word, he pairs his teaching qualification with a career
                  in Engineering.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { icon: GraduationCap, label: 'Mechanical Engineering', sub: 'First Degree' },
                  { icon: Briefcase, label: 'Information Science', sub: 'Second Degree' },
                  { icon: BookOpen, label: '6 Books', sub: 'Prolific Author' },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-4"
                  >
                    <s.icon className="w-5 h-5 text-accent-400" />
                    <p className="mt-3 text-sm font-semibold leading-tight">{s.label}</p>
                    <p className="text-xs text-white/50 mt-0.5">{s.sub}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ivory">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <AnimatedSection className="rounded-[2rem] border border-line bg-white p-10 sm:p-14 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Be part of what God is doing
            </h2>
            <p className="mt-4 text-lg text-slate max-w-xl mx-auto">
              Need prayer, want to share a testimony, or simply want to learn more — we're
              here for you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/prayer-request"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold shadow-lg shadow-accent-600/25 hover:shadow-accent-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Heart className="w-5 h-5" />
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