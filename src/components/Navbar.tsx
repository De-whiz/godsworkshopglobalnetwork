import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Heart, BookOpen } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Testimonies', path: '/testimonies' },
  { name: 'Books', path: '/books' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const overHero = !scrolled && location.pathname === '/'

  return (
    <motion.header
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        overHero
          ? 'bg-transparent'
          : 'bg-ivory/90 backdrop-blur-lg border-b border-line shadow-soft'
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-5 sm:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo/logo.jpg"
            alt="God's Workshop logo"
            className="w-11 h-11 rounded-full object-cover ring-2 ring-white shadow-md group-hover:scale-105 transition-transform duration-300"
          />
          <span
            className={`hidden sm:block font-heading text-lg font-semibold tracking-tight transition-colors ${
              overHero ? 'text-white' : 'text-ink'
            }`}
          >
            God's Workshop
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors ${
                  active
                    ? overHero
                      ? 'text-white'
                      : 'text-primary-600'
                    : overHero
                      ? 'text-white/85 hover:text-white hover:bg-white/10'
                      : 'text-slate hover:text-primary-600'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/prayer-request"
            className={`px-4 py-2.5 text-[15px] font-semibold rounded-full transition-all duration-300 ${
              overHero
                ? 'text-white border border-white/40 hover:border-white hover:bg-white/10'
                : 'text-primary-700 border border-primary-200 hover:border-primary-400 hover:bg-primary-50'
            }`}
          >
            Submit Prayer Point
          </Link>
          <Link
            to="/submit-testimony"
            className="flex items-center gap-2 px-5 py-2.5 text-[15px] font-semibold rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/30 hover:shadow-accent-500/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            <BookOpen className="w-4 h-4" />
            Share Testimony
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg ${overHero ? 'text-white' : 'text-ink'}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <motion.div
        initial={false}
        animate={mobileOpen ? 'open' : 'closed'}
        className="lg:hidden fixed inset-0 z-40"
      >
        <motion.div
          variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
          transition={{ duration: 0.25 }}
          onClick={() => setMobileOpen(false)}
          className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        />
        <motion.div
          variants={{ open: { x: 0 }, closed: { x: '100%' } }}
          transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-ivory shadow-2xl flex flex-col"
        >
          <div className="flex items-center justify-between px-6 h-20 border-b border-line">
            <div className="flex items-center gap-3">
              <img
                src="/logo/logo.jpg"
                alt="God's Workshop logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-heading text-lg font-semibold text-ink">God's Workshop</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    active ? 'bg-primary-50 text-primary-700' : 'text-ink hover:bg-white'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          <div className="px-6 py-6 border-t border-line space-y-3">
            <Link
              to="/prayer-request"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full border border-primary-200 text-primary-700 font-semibold"
            >
              <Heart className="w-4 h-4" />
              Submit Prayer Point
            </Link>
            <Link
              to="/submit-testimony"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold"
            >
              <BookOpen className="w-4 h-4" />
              Share Testimony
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.header>
  )
}