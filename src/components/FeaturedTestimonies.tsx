import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Quote, CalendarDays } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const featuredTestimonies = [
  {
    id: 1,
    date: 'August 12, 2026',
    category: 'Healing',
    text: 'Someone was having a health challenge in the stomach region. She trusted God that when she applied the anointing oil she would be healed. After applying the oil, the stomach problem disappeared.',
  },
  {
    id: 2,
    date: 'August, 2019',
    category: 'Miracle',
    text: 'I had an accident on the Lagos-Ibadan expressway. Whenever that month comes, the right side of my body is always in pain. At the second shout of glory, I felt a sensation and the pain ceased.',
  },
  {
    id: 3,
    date: 'November, 2017',
    category: 'Breakthrough',
    text: 'Last week was my first time attending God\'s Workshop and I had an encounter. Since then my spiritual and prayer life have been revived. I am now connected whenever I pray.',
  },
]

const catStyles: Record<string, string> = {
  Healing: 'bg-green-50 text-green-700',
  Miracle: 'bg-purple-50 text-purple-700',
  Breakthrough: 'bg-amber-50 text-amber-700',
}

export default function FeaturedTestimonies() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <AnimatedSection className="max-w-2xl">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-ink leading-tight">
            Stories of God's faithfulness
          </h2>
          <p className="mt-4 text-lg text-slate leading-relaxed">
            Real answers from real people — lives transformed through prayer at
            God's Workshop.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {featuredTestimonies.map((t, i) => (
            <AnimatedSection key={t.id} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="flex flex-col h-full bg-ivory rounded-2xl border border-line overflow-hidden hover:shadow-lift transition-shadow duration-500"
              >
                <div className="px-7 pt-7">
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${catStyles[t.category]}`}
                    >
                      {t.category}
                    </span>
                    <Quote className="w-7 h-7 text-accent-300" />
                  </div>
                </div>

                <div className="px-7 py-6 flex-1">
                  <p className="text-[15px] text-ink/85 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                </div>

                <div className="px-7 py-5 border-t border-line flex items-center gap-2 text-sm text-slate">
                  <CalendarDays className="w-4 h-4 text-accent-500" />
                  {t.date}
                </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center">
          <Link
            to="/testimonies"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border-2 border-primary-600 text-primary-700 font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300"
          >
            View More Testimonies
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}