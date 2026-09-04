import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  X,
  Clapperboard,
  Share2,
  Radio,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '09017521490',
    note: 'Wed & Fri · 1–3 PM',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'pastorkennyomolaja@gmail.com',
    note: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Abayomi Atele, behind NNPC, Iwo Road, Oyo State',
    note: 'In-person services every Wednesday',
  },
]

const socials = [
  {
    icon: Clapperboard,
    label: 'YouTube',
    value: '@KehindeOmolaja',
    href: 'https://youtube.com/@kehindeomolaja6858',
  },
  {
    icon: Share2,
    label: 'Facebook',
    value: 'God\'s Workshop Global Network',
    href: 'https://www.facebook.com/share/p/1EKcQFg6fk/',
  },
  {
    icon: Radio,
    label: 'Pensioners FM 106.7',
    value: 'Every last Thursday · 12 noon',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [showSuccess, setShowSuccess] = useState(false)

  const validate = () => {
    const e: Record<string, boolean> = {}
    if (!form.name.trim()) e.name = true
    if (!form.email.trim()) e.email = true
    if (!form.message.trim()) e.message = true
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setShowSuccess(true)
    setForm({ name: '', email: '', subject: '', message: '' })
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
            className="fixed top-24 right-6 z-50 max-w-sm w-full bg-white rounded-2xl shadow-lift border border-line p-5 flex items-start gap-4"
          >
            <div className="shrink-0 w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-success" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-ink text-sm">Message sent</p>
              <p className="mt-1 text-sm text-slate leading-relaxed">
                Your message has been sent. We'll get back to you shortly.
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
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white leading-tight">
              Get in
              <br />
              <span className="italic text-accent-400">Touch</span>
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-xl">
              Reach out to God's Workshop Global Network — we're here to pray with you,
              answer your questions, and walk with you on your journey.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="h-full bg-ivory rounded-2xl p-7 border border-line hover:border-accent-300 hover:shadow-lift transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                    <c.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-ink">{c.title}</h3>
                  <p className="mt-2 text-[15px] text-ink/85 leading-relaxed break-words">{c.value}</p>
                  <p className="mt-2 text-sm text-slate">{c.note}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form + socials */}
      <section className="py-20 bg-ivory">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <AnimatedSection direction="left" className="lg:col-span-3">
              <div className="rounded-[2rem] border border-line bg-white p-8 sm:p-10 shadow-soft h-full">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink leading-tight">
                  Send us a message
                </h2>
                <p className="mt-2 text-slate">
                  Fill in the form and we'll respond as soon as we can.
                </p>

                <form onSubmit={handleSubmit} noValidate className="mt-8">
                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="c-name" className="block text-sm font-semibold text-ink mb-2">
                        Full Name <span className="text-error">*</span>
                      </label>
                      <input
                        id="c-name"
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
                    <div>
                      <label htmlFor="c-email" className="block text-sm font-semibold text-ink mb-2">
                        Email <span className="text-error">*</span>
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className={errors.email ? inputError : inputNormal}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-error">Please enter your email.</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-6">
                    <label htmlFor="c-subject" className="block text-sm font-semibold text-ink mb-2">
                      Subject
                    </label>
                    <input
                      id="c-subject"
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="What is this about?"
                      className={inputNormal}
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label htmlFor="c-message" className="block text-sm font-semibold text-ink mb-2">
                      Message <span className="text-error">*</span>
                    </label>
                    <textarea
                      id="c-message"
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="How can we help you?"
                      className={`${errors.message ? inputError : inputNormal} resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-error">Please enter your message.</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold shadow-lg shadow-accent-600/25 hover:shadow-accent-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                  >
                    <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Connect */}
            <AnimatedSection direction="right" className="lg:col-span-2">
              <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-3xl p-8 sm:p-10 text-white shadow-lift h-full">
                <h3 className="font-heading text-2xl font-bold">Connect with us</h3>
                <p className="mt-3 text-white/70 leading-relaxed">
                  Follow God's Workshop and Pastor Kehinde on social media, or listen live
                  on the radio.
                </p>

                <div className="mt-8 space-y-4">
                  {socials.map((s) => (
                    <div
                      key={s.label}
                      className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                          <s.icon className="w-5 h-5 text-accent-400" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold">{s.label}</p>
                          <p className="text-xs text-white/60 mt-0.5 truncate">{s.value}</p>
                        </div>
                      </div>
                      {s.href && (
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center text-sm font-medium text-accent-300 hover:text-accent-200 transition-colors"
                        >
                          Visit {s.label}
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/15">
                  <p className="font-heading text-lg italic text-white/90">
                    "God is still working — He is not done with you yet."
                  </p>
                  <p className="mt-2 text-sm text-white/50">The motto of God's Workshop</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
