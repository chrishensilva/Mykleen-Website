import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Services' },
  { path: '/contact', label: 'Contact' },
]

const announcements = [
  '🌿 Eco-certified cleaning — safe for kids & pets',
  '⭐ 5-Star Google Rating · 200+ Reviews',
  '📅 Book today & get your first clean 10% off',
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [annIdx, setAnnIdx] = useState(0)
  const location = useLocation()

  useEffect(() => { setMenuOpen(false) }, [location])

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Rotate announcement text every 4s
  useEffect(() => {
    const id = setInterval(() => setAnnIdx(i => (i + 1) % announcements.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Announcement Bar */}
      <div className={`overflow-hidden transition-all duration-300 ${scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'}`}>
        <div className="bg-mykleen-blue text-white text-xs font-semibold text-center py-2 px-4 flex items-center justify-center gap-4">
          <span className="text-center">{announcements[annIdx]}</span>
          <a href="tel:+61400000000" className="hidden sm:inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white text-xs whitespace-nowrap">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            Call Now
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${scrolled
        ? 'bg-white shadow-md py-3 border-b border-slate-100'
        : 'bg-[#0a0f1e]/45 backdrop-blur-md py-4 border-b border-white/5'
        }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="My Kleen Logo"
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`nav-link pb-1 text-sm font-semibold tracking-wide transition-colors duration-300 ${location.pathname === path
                    ? 'text-mykleen-blue after:w-full'
                    : scrolled
                      ? 'text-mykleen-slate hover:text-mykleen-blue after:bg-mykleen-blue'
                      : 'text-white hover:text-white/80 after:bg-white'
                    }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Phone */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+61400000000"
              className={`flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300 ${scrolled ? 'text-mykleen-slate hover:text-mykleen-blue' : 'text-white/80 hover:text-white'
                }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +61 400 000 000
            </a>
            <Link
              to="/contact"
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 ${scrolled
                ? 'bg-mykleen-blue text-white hover:bg-mykleen-blue-light shadow-md'
                : 'bg-white text-mykleen-blue hover:bg-slate-100 shadow-lg'
                }`}
            >
              Book a Cleaning
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors duration-300 ${scrolled ? 'text-mykleen-slate' : 'text-white'
              }`}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden glass border-t border-white/20 transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`block text-base font-semibold py-2 border-b border-slate-100 transition-colors duration-200 ${location.pathname === path ? 'text-mykleen-blue' : 'text-mykleen-slate hover:text-mykleen-blue'
                  }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="flex flex-col gap-2 pt-1">
            <a href="tel:+61400000000" className="flex items-center gap-2 text-sm font-semibold text-mykleen-slate hover:text-mykleen-blue transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +61 400 000 000
            </a>
            <Link to="/contact" className="btn-primary w-full justify-center mt-1 text-sm">
              Book a Cleaning
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
