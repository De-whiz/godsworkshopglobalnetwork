import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, ArrowRight, ExternalLink } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const books = [
  {
    id: 1,
    title: 'Power of the Prayer Ministry',
    desc: 'The discipline and authority of a life rooted in prayer.',
    tone: 'from-primary-700 to-primary-900',
  },
  {
    id: 2,
    title: 'Walking in Divine Favour',
    desc: 'The open doors that favour and obedience bring.',
    tone: 'from-primary-600 to-primary-800',
  },
  {
    id: 3,
    title: "Tackling Life's Fables",
    desc: 'Confidence to overcome every challenge through faith.',
    tone: 'from-primary-800 to-primary-950',
  },
]

export default function BooksSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <AnimatedSection className="max-w-xl">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-ink leading-tight">
              In print, feeding the world
            </h2>
            <p className="mt-4 text-lg text-slate">
              Pastor Kehinde Omolaja (JP) has authored 6 books to date — each one a tool
              for transformation.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Link
              to="/books"
              className="group inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700"
            >
              Browse all books
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((b, i) => (
            <AnimatedSection key={b.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="group cursor-pointer"
              >
                <div
                  className={`aspect-[3/4] rounded-2xl bg-gradient-to-br ${b.tone} relative overflow-hidden shadow-lg shadow-primary-900/20`}
                >
                  <div className="absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#fff_2px,#fff_3px)]" />
                  <div className="absolute inset-y-0 left-4 w-px bg-white/15" />
                  <div className="h-full flex flex-col items-center justify-center text-center px-8 relative">
                    <BookOpen className="w-10 h-10 text-accent-400 mb-5" />
                    <h3 className="font-heading text-2xl font-bold text-white leading-tight">
                      {b.title}
                    </h3>
                  </div>
                  <div className="absolute top-5 right-5 w-6 h-6 rounded-full border border-accent-400/50" />
                </div>

                <div className="mt-5 px-1">
                  <p className="text-[15px] text-ink/85 leading-relaxed">{b.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 group-hover:text-primary-600 transition-colors">
                    Get the book
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}