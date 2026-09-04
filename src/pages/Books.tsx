import { motion } from 'framer-motion'
import { BookOpen, ArrowUpRight, ShoppingBag } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

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

export default function Books() {
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
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white leading-tight">
              Books by
              <br />
              <span className="italic text-accent-400">Pastor Kehinde (JP)</span>
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-xl">
              Tools for transformation — each book carries a message
              designed to build, restore and ignite faith.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Book catalog */}
      <section className="py-24 bg-ivory">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg shadow-primary-900/20 relative bg-white">
                      <img
                        src={b.image}
                        alt={b.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                        <ArrowUpRight className="w-6 h-6 text-primary-700" />
                      </div>
                    </div>
                  </a>

                  <div className="mt-6 px-1">
                    <div className="flex items-center gap-2.5">
                      <BookOpen className="w-5 h-5 text-accent-500 shrink-0" />
                      <h3 className="font-heading text-xl font-bold text-ink leading-tight">
                        {b.title}
                      </h3>
                    </div>
                    <a
                      href={b.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      Get this book
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <AnimatedSection className="rounded-[2rem] border border-line bg-ivory p-10 sm:p-14 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 mx-auto">
              <ShoppingBag className="w-7 h-7 text-white" />
            </div>
            <h2 className="mt-6 font-heading text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Get your copies today
            </h2>
            <p className="mt-4 text-lg text-slate max-w-xl mx-auto">
              Available exclusively on Selar. Order now and start your journey of transformation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              {books.map((b) => (
                <a
                  key={b.id}
                  href={b.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold shadow-lg shadow-accent-600/25 hover:shadow-accent-500/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {b.title}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
