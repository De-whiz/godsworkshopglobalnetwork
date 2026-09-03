import { Link } from 'react-router-dom'
import { Heart, Mail, Phone, MapPin, Globe, Play, Music2 } from 'lucide-react'

const explore = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Testimonies', path: '/testimonies' },
  { name: 'Books', path: '/books' },
]

const involve = [
  { name: 'Submit Prayer Point', path: '/prayer-request' },
  { name: 'Share Testimony', path: '/submit-testimony' },
  { name: 'Contact Us', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-accent-500/60 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo/logo.jpg"
                alt="God's Workshop logo"
                className="w-11 h-11 rounded-full object-cover ring-2 ring-white/20"
              />
              <span className="font-heading text-xl font-semibold">God's Workshop</span>
            </div>
            <p className="mt-5 text-sm text-white/60 leading-relaxed">
              A prayer platform, a deliverance centre, a solution ground. God is still
              working.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Globe, label: 'Facebook', href: 'https://facebook.com' },
                { icon: Play, label: 'YouTube', href: 'https://youtube.com' },
                { icon: Music2, label: 'TikTok', href: 'https://tiktok.com' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">Explore</h3>
            <ul className="mt-5 space-y-3">
              {explore.map((l) => (
                <li key={l.name}>
                  <Link to={l.path} className="text-sm text-white/70 hover:text-accent-400 transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">Get Involved</h3>
            <ul className="mt-5 space-y-3">
              {involve.map((l) => (
                <li key={l.name}>
                  <Link to={l.path} className="text-sm text-white/70 hover:text-accent-400 transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white/70">09017521490</p>
                  <p className="text-xs text-white/40">Wed &amp; Fri · 1–3 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent-400 mt-0.5 shrink-0" />
                <p className="text-white/70 text-[13px] break-all">pastorkennyomolaja@gmail.com</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-400 mt-0.5 shrink-0" />
                <p className="text-white/70 text-[13px]">
                  Abayomi Atele, behind NNPC,
                  <br />
                  Iwo Road, Oyo State
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-4 h-4 text-accent-400 mt-0.5 shrink-0" />
                <p className="text-white/70 text-[13px]">Pensioners FM 106.7 · last Thursday, 12 noon</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} God's Workshop Global Network. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Motto: <span className="italic text-accent-400">God is still working.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}