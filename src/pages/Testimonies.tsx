import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Quote,
  CalendarDays,
  Sparkles,
  Heart,
  MessageCircleHeart,
  HandHeart,
  Flame,
  Home,
  BookHeart,
  ArrowRight,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

type Category = 'All' | 'Financial Breakthrough' | 'Healing' | 'Family & Children' | 'Deliverance' | 'Revival'

interface Testimony {
  id: number
  date: string
  category: Category
  text: string
  featured?: boolean
}

const testimonies: Testimony[] = [
  {
    id: 1,
    date: 'August 12, 2026',
    category: 'Financial Breakthrough',
    text:
      'A brother was trusting God for financial help and promised not to borrow. He applied the anointing oil prayed over for favour, and God came through — he received several favours from known and unknown people. Even after the need was met, the favour continued.',
  },
  {
    id: 2,
    date: 'August 12, 2026',
    category: 'Healing',
    text:
      'Someone had a recurring health challenge in her stomach. She trusted God that when she applied the blessed anointing oil she would be healed. After applying the oil, the stomach problem disappeared — and since that time it has not resurfaced.',
  },
  {
    id: 3,
    date: 'August 12, 2026',
    category: 'Financial Breakthrough',
    text:
      'A sibling who was well to do had not been of help for years, yet she needed millions in capital for her business. The day she received her anointing oil she was encouraged to speak to him. She anointed her ears before making the call — and the man who was unwilling promised to help, later sending the full amount she requested.',
  },
  {
    id: 4,
    date: 'August 12, 2026',
    category: 'Family & Children',
    text:
      'A mother used the anointing oil on her daughter, trusting God for better academic performance. At the end of the session the daughter took first position — supported by the encouragement to study hard.',
  },
  {
    id: 5,
    date: 'August, 2019',
    category: 'Healing',
    featured: true,
    text:
      'I had an accident on the Lagos-Ibadan expressway. Whenever the month of that accident comes, the right side of my body is always in pain. This year the pain was more excruciating than before and would not respond to medication. To the glory of God, at the second shout of glory during the service as commanded by the pastor, I felt a sensation on the right side of my body — and the pain ceased. Hallelujah!',
  },
  {
    id: 6,
    date: 'August, 2026',
    category: 'Deliverance',
    text:
      'One of the requests on my expectations list has been done. I received victory over the enemy and financial provision divinely.',
  },
  {
    id: 7,
    date: 'August, 2026',
    category: 'Financial Breakthrough',
    text:
      'One of my uncles sent money to me on Sunday. I received divine provision that the family had not expected.',
  },
  {
    id: 8,
    date: 'August, 2026',
    category: 'Healing',
    text:
      'Before I came to the meeting last week I had a pain in my ear. During the three days of fasting and prayer, the pain disappeared totally.',
  },
  {
    id: 9,
    date: 'August, 2026',
    category: 'Family & Children',
    text:
      'My son was healed divinely, after several days of sleeplessness.',
  },
  {
    id: 10,
    date: 'August, 2026',
    category: 'Financial Breakthrough',
    text:
      'A business that had been sleeping for three months has started moving again. I was also divinely favoured.',
  },
  {
    id: 11,
    date: 'August, 2026',
    category: 'Financial Breakthrough',
    text:
      'I received divine favour concerning my business last week on Thursday.',
  },
  {
    id: 12,
    date: 'November, 2017',
    category: 'Revival',
    featured: true,
    text:
      'Last week was my first time attending God\'s Workshop, and I had an encounter. Since then my spiritual and prayer life have been revived. I am now connected whenever I pray.',
  },
  {
    id: 13,
    date: 'August, 2026',
    category: 'Healing',
    text:
      'After receiving the communion of the Son, I was healed from a severe headache.',
  },
  {
    id: 14,
    date: 'August, 2026',
    category: 'Deliverance',
    text:
      'There was help that came to me from the person I least expected last week.',
  },
  {
    id: 15,
    date: 'November, 2017',
    category: 'Financial Breakthrough',
    text:
      'I got an alert from one of my cousins in Australia.',
  },
]

const categories: Category[] = [
  'All',
  'Financial Breakthrough',
  'Healing',
  'Deliverance',
  'Family & Children',
  'Revival',
]

const categoryIcons: Record<string, typeof Heart> = {
  'Financial Breakthrough': HandHeart,
  Healing: Heart,
  Deliverance: Flame,
  'Family & Children': Home,
  Revival: BookHeart,
  All: Sparkles,
}

const catStyles: Record<string, string> = {
  'Financial Breakthrough': 'bg-amber-50 text-amber-700 ring-amber-200',
  Healing: 'bg-green-50 text-green-700 ring-green-200',
  Deliverance: 'bg-rose-50 text-rose-700 ring-rose-200',
  'Family & Children': 'bg-sky-50 text-sky-700 ring-sky-200',
  Revival: 'bg-purple-50 text-purple-700 ring-purple-200',
}

export default function Testimonies() {
  const [active, setActive] = useState<Category>('All')
  const filtered =
    active === 'All' ? testimonies : testimonies.filter((t) => t.category === active)
  const featured = filtered.filter((t) => t.featured)
  const rest = filtered.filter((t) => !t.featured)

  return (
    <>
      {/* Page hero */}
      <section className="relative pt-36 pb-20 bg-primary-950 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_30%_40%,#C9A84C,transparent_45%),radial-gradient(circle_at_75%_60%,#8B4D7B,transparent_40%)]" />
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

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10 items-end">
          <AnimatedSection className="lg:col-span-8">
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white leading-tight">
              Wonderful is what
              <br />
              <span className="italic text-accent-400">God has done</span>
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-xl">
              Real answers from real people. These are testimonies of God's Workshop —
              lives transformed through prayer, deliverance and His unstoppable power.
            </p>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-4">
            <Link
              to="/submit-testimony"
              className="group inline-flex items-center justify-center gap-2.5 w-full px-7 py-4 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold shadow-xl shadow-accent-600/30 hover:shadow-accent-500/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircleHeart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Share Your Testimony
            </Link>
            <p className="mt-4 text-sm text-white/50 text-center lg:text-left">
              God is still working — tell us what He did for you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-primary-900 border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-10 grid grid-cols-3 gap-6">
          {[
            { n: '15+', l: 'Testimonies' },
            { n: '6', l: 'Years of Miracles' },
            { n: '1000+', l: 'Lives Touched' },
          ].map((s, i) => (
            <AnimatedSection key={s.l} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-heading text-3xl sm:text-4xl font-bold text-white">{s.n}</p>
                <p className="text-[13px] text-accent-400/80 mt-1 uppercase tracking-wider">{s.l}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Testimonies grid */}
      <section className="py-24 bg-ivory">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          {/* Category filter */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {categories.map((cat) => {
                const Icon = categoryIcons[cat]
                const isActive = active === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-primary-700 text-white shadow-lg shadow-primary-700/30'
                        : 'bg-white text-slate border border-line hover:border-primary-300 hover:text-primary-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {cat}
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20' : 'bg-ivory'
                      }`}
                    >
                      {cat === 'All'
                        ? testimonies.length
                        : testimonies.filter((t) => t.category === cat).length}
                    </span>
                  </button>
                )
              })}
            </div>
          </AnimatedSection>

          {/* Featured cards */}
          {featured.length > 0 && (
            <div className="mt-14 grid lg:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {featured.map((t) => (
                  <motion.article
                    key={`feat-${t.id}`}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex flex-col h-full rounded-3xl overflow-hidden bg-gradient-to-br from-primary-800 to-primary-950 text-white shadow-2xl shadow-primary-900/30"
                  >
                    <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-accent-500/10 blur-2xl" />
                    <div className="px-8 pt-8 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500 text-white text-xs font-bold uppercase tracking-wide">
                        <Sparkles className="w-3.5 h-3.5" />
                        Featured Testimony
                      </span>
                      <Quote className="w-8 h-8 text-accent-400/60" />
                    </div>
                    <div className="px-8 py-7 flex-1">
                      <p className="font-heading text-xl italic leading-relaxed text-white/95">
                        &ldquo;{t.text}&rdquo;
                      </p>
                    </div>
                    <div className="px-8 py-5 border-t border-white/10 flex items-center gap-2 text-sm text-white/60">
                      <CalendarDays className="w-4 h-4 text-accent-400" />
                      {t.date}
                      <span className="mx-2 h-3 w-px bg-white/20" />
                      <span className="text-accent-300">{t.category}</span>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Regular cards */}
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {rest.map((t) => {
                const Icon = categoryIcons[t.category] || Heart
                return (
                  <motion.article
                    key={t.id}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6 }}
                    className="flex flex-col h-full bg-white rounded-2xl border border-line overflow-hidden hover:shadow-lift transition-shadow duration-500"
                  >
                    <div className="px-7 pt-7 flex items-center justify-between">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ring-1 ${catStyles[t.category]}`}
                      >
                        <Icon className="w-3 h-3" />
                        {t.category}
                      </span>
                      <Quote className="w-6 h-6 text-accent-200" />
                    </div>
                    <div className="px-7 py-6 flex-1">
                      <p className="text-[15px] text-ink/85 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                    </div>
                    <div className="px-7 py-5 border-t border-line flex items-center gap-2 text-sm text-slate">
                      <CalendarDays className="w-4 h-4 text-accent-500" />
                      {t.date}
                    </div>
                  </motion.article>
                )
              })}
            </AnimatePresence>

            {/* Empty state */}
            {rest.length === 0 && featured.length === 0 && (
              <AnimatedSection className="md:col-span-2 lg:col-span-3">
                <div className="text-center py-16 text-slate">
                  <Sparkles className="w-10 h-10 mx-auto text-accent-400" />
                  <p className="mt-4 text-lg font-medium">No testimonies in this category yet.</p>
                </div>
              </AnimatedSection>
            )}
          </div>

          {/* Closing banner */}
          <AnimatedSection className="mt-20">
            <div className="relative rounded-[2rem] overflow-hidden border border-line bg-white p-10 sm:p-14 text-center shadow-soft">
              <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_20%_30%,#C9A84C,transparent_45%),radial-gradient(circle_at_80%_70%,#8B4D7B,transparent_45%)]" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <Quote className="w-10 h-10 mx-auto text-accent-500" />
                <h2 className="mt-5 font-heading text-3xl sm:text-4xl font-bold text-ink leading-tight">
                  Testimonies of God's Workshop reach within
                  <br className="hidden sm:block" /> and beyond the nation
                </h2>
                <p className="mt-4 text-lg text-slate">
                  God is still working. Whatever problem you carry, bring it to Him — He
                  is ready to turn it into your testimony.
                </p>
                <Link
                  to="/prayer-request"
                  className="group inline-flex items-center gap-2.5 mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold shadow-lg shadow-accent-600/25 hover:shadow-accent-500/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Submit a Prayer Point
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}