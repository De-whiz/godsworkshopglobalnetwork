import { motion } from 'framer-motion'
import { BookOpen, ArrowUpRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const books = [
  {
    id: 1,
    title: 'Faith Plus',
    image: '/images/faith-plus.jpeg',
    link: 'https://selar.com/62hp8k',
  },
  {
    id: 2,
    title: 'The Mechanism of Prayer',
    image: '/images/mechanism-of-prayer.jpeg',
    link: 'https://selar.com/27r432',
  },
  {
    id: 3,
    title: 'Character Modelling',
    image: '/images/character-modelling.jpeg',
    link: 'https://selar.com/779y5bd119',
  },
]

export default function BooksSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <AnimatedSection className="max-w-xl">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-ink leading-tight">
            In print, feeding the world
          </h2>
          <p className="mt-4 text-lg text-slate">
            Pastor Kehinde Omolaja (JP) has authored books that are tools
            for transformation.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((b, i) => (
            <AnimatedSection key={b.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="group"
              >
                <a
                  href={b.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg shadow-primary-900/20 relative bg-ivory">
                    <img
                      src={b.image}
                      alt={b.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-5 h-5 text-primary-700" />
                    </div>
                  </div>
                </a>

                <div className="mt-5 px-1 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-accent-500 shrink-0" />
                  <h3 className="font-heading text-lg font-bold text-ink leading-tight">
                    {b.title}
                  </h3>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
