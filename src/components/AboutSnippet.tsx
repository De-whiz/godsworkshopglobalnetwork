import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function AboutSnippet() {
  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <AnimatedSection direction="left" className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-lift">
                <img
                  src="/images/IMG-20260903-WA0017.jpg"
                  alt="God's Workshop ministry gathering"
                  className="w-full h-[420px] object-cover"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-2xl shadow-lift px-6 py-4 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center">
                  <span className="text-white font-heading text-xl font-bold">G</span>
                </div>
                <div>
                  <p className="font-heading text-lg font-bold text-ink leading-tight">
                    God is still working
                  </p>
                  <p className="text-sm text-slate">Our ministry motto</p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="lg:col-span-7">
            <div className="space-y-6 lg:pl-4">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-ink leading-tight text-balance">
                Fixing the faulty components of our lives
              </h2>
              <p className="text-lg text-slate leading-relaxed">
                God's Workshop is a vision given to Pastor Kehinde Omolaja (JP) in 2017 —
                a place where people bring different problems and go back with solutions.
                The name reflects God working on human beings to repair what is broken.
              </p>
              <p className="text-slate leading-relaxed">
                Countless people have come with varying challenges, and God has proffered
                solutions. Testimonies of God's Workshop now reach within and beyond the
                country, carried by the power of the Holy Spirit.
              </p>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 mt-2 font-semibold text-primary-600 hover:text-primary-700 transition-colors"
              >
                Discover our story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}