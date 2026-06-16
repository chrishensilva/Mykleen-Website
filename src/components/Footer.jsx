import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'

const footerLinks = {
  Company:  [
    { label: 'Home',     path: '/'         },
    { label: 'About Us', path: '/about'    },
    { label: 'Services', path: '/projects' },
    { label: 'Contact',  path: '/contact'  },
  ],
  Services: [
    { label: 'Residential Cleaning', path: '/projects' },
    { label: 'Commercial Cleaning',  path: '/projects' },
    { label: 'Deep Carpet Cleaning', path: '/projects' },
    { label: 'End of Lease Cleaning',path: '/projects' },
    { label: 'Window Cleaning',      path: '/projects' },
  ],
}

const socials = [
  { icon: 'M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.88 1.1A4.52 4.52 0 0 0 11.07 8a12.82 12.82 0 0 1-9.29-4.71 4.52 4.52 0 0 0 1.4 6A4.47 4.47 0 0 1 1 8.79v.06a4.51 4.51 0 0 0 3.62 4.42 4.54 4.54 0 0 1-2 .07 4.53 4.53 0 0 0 4.22 3.14A9.06 9.06 0 0 1 1 18.43 12.79 12.79 0 0 0 7.95 20c8.35 0 12.92-6.92 12.92-12.93l-.01-.59A9.23 9.23 0 0 0 23 3z', label: 'Twitter' },
  { icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z', label: 'Facebook' },
  { icon: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5a1 1 0 1 0-1-1 1 1 0 0 0 1 1zM2 6.5C2 4 4 2 6.5 2h11C20 2 22 4 22 6.5v11c0 2.5-2 4.5-4.5 4.5h-11C4 22 2 20 2 17.5z', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-mykleen-slate text-white">

      {/* Newsletter Strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Stay in the loop 🌿</h3>
              <p className="text-slate-400 text-sm">Cleaning tips, seasonal offers, and updates — straight to your inbox.</p>
            </div>
            <form
              className="flex w-full md:w-auto gap-2"
              onSubmit={e => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-64 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-mykleen-blue-light focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-mykleen-blue hover:bg-mykleen-blue-light text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="My Kleen Logo" className="h-14 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your trusted cleaning partner delivering premium hygiene solutions for homes and businesses across the region.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-mykleen-blue transition-colors duration-300"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, path }) => (
                  <li key={label}>
                    <Link
                      to={path}
                      className="text-slate-400 text-sm hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-mykleen-blue-light transition-all duration-200 inline-block" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <svg className="w-4 h-4 mt-0.5 text-mykleen-blue-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+61400000000" className="hover:text-white transition-colors">+61 400 000 000</a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <svg className="w-4 h-4 mt-0.5 text-mykleen-blue-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:hello@mykleen.com.au" className="hover:text-white transition-colors">hello@mykleen.com.au</a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <svg className="w-4 h-4 mt-0.5 text-mykleen-blue-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Mon–Sat: 7am – 7pm</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <svg className="w-4 h-4 mt-0.5 text-mykleen-blue-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Melbourne, VIC, Australia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Trust Badges Row */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} My Kleen. All rights reserved.
            </p>
            {/* Mini trust badges */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: '🌿', text: 'Eco Certified' },
                { icon: '🛡️', text: 'Fully Insured' },
                { icon: '⭐', text: '5-Star Rated' },
                { icon: '✅', text: 'Police Checked' },
              ].map(({ icon, text }) => (
                <span key={text} className="flex items-center gap-1 text-slate-500 text-xs">
                  <span>{icon}</span> {text}
                </span>
              ))}
            </div>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service'].map(t => (
                <a key={t} href="#" className="text-slate-500 text-xs hover:text-white transition-colors duration-200">{t}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
