import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Construction } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

export default function UnderDevelopment({ title }: { title: string }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-ivory relative overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-[10%] w-72 h-72 rounded-full border border-primary-200"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-20 right-[10%] w-48 h-48 rounded-full border border-accent-200"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="max-w-xl mx-auto px-6 text-center relative z-10">
        <AnimatedSection>
          <motion.div
            className="w-28 h-28 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center shadow-lift"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Construction className="w-12 h-12 text-white" />
          </motion.div>

          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-ink">{title}</h1>

          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-600 mx-auto rounded-full my-6" />

          <p className="text-lg text-slate leading-relaxed">
            This page is being prepared. We are working hard to bring you something
            beautiful and meaningful. Please check back soon.
          </p>

          <div className="max-w-xs mx-auto mt-10">
            <div className="flex justify-between text-xs text-slate mb-2">
              <span>Progress</span>
              <span>Under Development</span>
            </div>
            <div className="h-2 bg-line rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-600 to-accent-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '60%' }}
                transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          <Link
            to="/"
            className="group inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}