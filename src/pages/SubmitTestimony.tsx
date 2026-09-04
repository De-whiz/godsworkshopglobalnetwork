import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircleHeart, CheckCircle, X, Quote } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const categories = [
  'Financial Breakthrough',
  'Healing',
  'Deliverance',
  'Family & Children',
  'Revival',
]

export default function SubmitTestimony() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    category: '',
    testimony: '',
  })
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [showSuccess, setShowSuccess] = useState(false)

  const validate = () => {
    const e: Record<string, boolean> = {}
    if (!form.name.trim()) e.name = true
    if (!form.category) e.category = true
    if (!form.testimony.trim()) e.testimony = true
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setShowSuccess(true)
    setForm({ name: '', email: '', category: '', testimony: '' })
    setErrors({})
    setTimeout(() => setShowSuccess(false), 5000)
  }

  const inputBase =
    'w-full rounded-xl border bg-white px-5 py-3.5 text-ink placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all font-body'
  const inputNormal = `${inputBase} border-line`
  const inputError = `${inputBase} border-error/50 focus:ring-error/40 focus:border-error/40`

  return (
    <>
      {/* Success toast */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, x: 40, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
            className="fixed top-24 right-4 left-4 sm:right-6 sm:left-auto z-50 max-w-sm bg-white rounded-2xl shadow-lift border border-line p-5 flex items-start gap-4"
          >
            <div className="shrink-0 w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-success" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-ink text-sm">Testimony shared</p>
              <p className="mt-1 text-sm text-slate leading-relaxed">
                Your testimony has been submitted. Thank you for glorifying God!
              </p>
            </div>
            <button
              onClick={() => setShowSuccess(false)}
              className="shrink-0 text-slate/50 hover:text-ink transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

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
            <h1 className="font-heading text-[36px] sm:text-6xl font-bold text-white leading-tight">
              Share Your
              <br />
              <span className="italic text-accent-400">Testimony</span>
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-xl">
              God is still working. Tell us what He has done for you — your story
              will encourage someone else's faith.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-ivory">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection>
              <div className="rounded-[2rem] border border-line bg-white p-8 sm:p-12 shadow-soft">
                {/* Motto quote */}
                <div className="mb-8 p-5 rounded-2xl bg-ivory border border-line flex items-start gap-3">
                  <Quote className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" />
                  <p className="font-heading text-sm italic text-primary-700 leading-relaxed">
                    "God is still working — He is not done with you yet."
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  {/* Name */}
                  <div className="mb-6">
                    <label htmlFor="t-name" className="block text-sm font-semibold text-ink mb-2">
                      Full Name <span className="text-error">*</span>
                    </label>
                    <input
                      id="t-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Enter your full name"
                      className={errors.name ? inputError : inputNormal}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-error">Please enter your name.</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label htmlFor="t-email" className="block text-sm font-semibold text-ink mb-2">
                      Email
                    </label>
                    <input
                      id="t-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className={inputNormal}
                    />
                  </div>

                  {/* Category */}
                  <div className="mb-6">
                    <label htmlFor="t-category" className="block text-sm font-semibold text-ink mb-2">
                      Testimony Category <span className="text-error">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="t-category"
                        value={form.category}
                        onChange={(e) => setForm({ ...form, category: e.target.value })}
                        className={`${errors.category ? inputError : inputNormal} appearance-none pr-10`}
                      >
                        <option value="">Select a category</option>
                        {categories.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                        <svg className="w-4 h-4 text-slate" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    {errors.category && (
                      <p className="mt-1.5 text-xs text-error">Please select a category.</p>
                    )}
                  </div>

                  {/* Testimony */}
                  <div className="mb-8">
                    <label htmlFor="t-testimony" className="block text-sm font-semibold text-ink mb-2">
                      Your Testimony <span className="text-error">*</span>
                    </label>
                    <textarea
                      id="t-testimony"
                      rows={8}
                      value={form.testimony}
                      onChange={(e) => setForm({ ...form, testimony: e.target.value })}
                      placeholder="Share what God has done for you..."
                      className={`${errors.testimony ? inputError : inputNormal} resize-none`}
                    />
                    {errors.testimony && (
                      <p className="mt-1.5 text-xs text-error">Please share your testimony.</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold shadow-lg shadow-accent-600/25 hover:shadow-accent-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                  >
                    <MessageCircleHeart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Share Testimony
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
