import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Card from '../components/UI/Card'
import StatsCounter from '../components/UI/StatsCounter'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  const contrastRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Story section animations
      gsap.from('.story-animate', {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      })

      // Core Values grid animations
      gsap.from('.value-card', {
        scrollTrigger: {
          trigger: valuesRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      })

      // Contrast matrix animations
      gsap.from('.contrast-row', {
        scrollTrigger: {
          trigger: contrastRef.current,
          start: 'top 80%',
        },
        y: 15,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="pt-24 overflow-x-hidden">
      {/* Hero Banner */}
      <section className="relative bg-hero py-24 border-b border-white/5 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 300" preserveAspectRatio="none">
            <path d="M0,120 C360,220 1080,20 1440,120 L1440,300 L0,300 Z" fill="url(#about-grad)" />
            <defs>
              <linearGradient id="about-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4192D0" />
                <stop offset="100%" stopColor="#4CAF50" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 text-mykleen-green-light text-sm font-semibold tracking-wide border border-white/20 mb-6">
            🌿 Our Story &amp; Identity
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
            About My Kleen
          </h1>
          <p className="text-slate-300 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Pioneering premium, eco-friendly cleaning solutions built on reliability, sustainability, and absolute precision.
          </p>
        </div>
      </section>

      {/* Our Story & Philosophy */}
      <section ref={storyRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="story-animate eco-badge">Our Journey</span>
              <h2 className="story-animate text-3xl md:text-4xl font-bold text-mykleen-slate leading-tight">
                A Fresh Approach to Clean Living
              </h2>
              <p className="story-animate text-slate-600 leading-relaxed text-base">
                Founded with a simple mission—to elevate the hygiene standards of modern living and working spaces without compromising environmental integrity. We recognized that standard commercial cleaners often rely on aggressive, toxic chemicals that harm indoor air quality and the ecosystem.
              </p>
              <p className="story-animate text-slate-600 leading-relaxed text-base">
                At <strong>My Kleen</strong>, we developed a system that balances state-of-the-art cleaning tools with certified non-toxic biodegradable products. Our approach guarantees a spotlessly clean space that is simultaneously safe for pets, children, employees, and client visitors.
              </p>
              <div className="story-animate border-l-4 border-mykleen-blue pl-4 py-2 bg-slate-50/50 rounded-r-xl">
                <p className="text-slate-700 italic font-medium text-sm">
                  "Our philosophy is simple: Cleanliness should promote wellness. We leave your space cleaner, healthier, and refreshed."
                </p>
              </div>
            </div>

            {/* Visual badge card */}
            <div className="story-animate lg:col-span-5 flex justify-center">
              <div className="bg-gradient-to-br from-[#2C6B9E] to-[#4192D0] rounded-3xl p-8 text-white relative shadow-xl overflow-hidden w-full max-w-md">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                <h3 className="text-2xl font-bold mb-4">Our Green Standard</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-mykleen-green-light mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm">Zero toxic fumes or heavy artificial perfumes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-mykleen-green-light mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm">Strict adherence to carbon-offsetting methods.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-mykleen-green-light mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm">Reusable micro-fiber tech to reduce single-use waste.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Strip */}
      <StatsCounter darkBg />

      {/* Core Values */}
      <section ref={valuesRef} className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eco-badge mb-3">Our Core Values</span>
            <h2 className="section-heading">Built on Principles</h2>
            <p className="section-subheading mx-auto">
              Our culture defines how we treat our clients, our employees, and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Value 1 */}
            <Card className="value-card text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-mykleen-blue flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-mykleen-slate mb-2">Integrity</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Vetted professionals you can trust implicitly with your home, workspace, and assets.
              </p>
            </Card>

            {/* Value 2 */}
            <Card className="value-card text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-mykleen-blue flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
              </div>
              <h3 className="text-lg font-bold text-mykleen-slate mb-2">Precision</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Detail-oriented workflows checklist-based inspection. No corner or edge is ever missed.
              </p>
            </Card>

            {/* Value 3 */}
            <Card className="value-card text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-mykleen-green-light flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m11.314 11.314l.707-.707M4 12a8 8 0 1116 0 8 8 0 01-16 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-mykleen-slate mb-2">Green Cleaning</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Pure eco-friendly products that are safer for breathing environments and biological life.
              </p>
            </Card>

            {/* Value 4 */}
            <Card className="value-card text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-mykleen-blue flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.757a1 1 0 00.707-1.707l-5.414-5.414a1 1 0 00-.707-.293V7a3 3 0 01-3 3H5.828a1 1 0 00-.707 1.707l5.414 5.414a1 1 0 00.707.293V14a3 3 0 013-3h1.757a1 1 0 00.707-1.707l-5.414-5.414a1 1 0 00-.707-.293" /></svg>
              </div>
              <h3 className="text-lg font-bold text-mykleen-slate mb-2">Customer Care</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Friendly customer support representatives to handle schedule updates or modifications instantly.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Comparative Matrix */}
      <section ref={contrastRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eco-badge mb-3">Comparison Matrix</span>
            <h2 className="section-heading">How We Set the Standard</h2>
            <p className="section-subheading mx-auto">
              See how My Kleen outperforms generic, traditional cleaning service alternatives.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/40">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="p-6 text-sm font-bold text-mykleen-slate">Service Feature</th>
                  <th className="p-6 text-sm font-bold text-mykleen-blue bg-mykleen-blue/5">My Kleen Premium</th>
                  <th className="p-6 text-sm font-bold text-slate-400">Generic Cleaning Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                <tr className="contrast-row hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-semibold text-mykleen-slate">Product Quality</td>
                  <td className="p-6 text-mykleen-green-light bg-mykleen-blue/5 font-medium flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Certified non-toxic, pet & child safe
                  </td>
                  <td className="p-6 text-slate-500">Standard chemicals, harsh residues</td>
                </tr>

                <tr className="contrast-row hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-semibold text-mykleen-slate">Staffing Vetting</td>
                  <td className="p-6 text-mykleen-green-light bg-mykleen-blue/5 font-medium flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    100% background checked & insured
                  </td>
                  <td className="p-6 text-slate-500">Sub-contracted, unchecked workers</td>
                </tr>

                <tr className="contrast-row hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-semibold text-mykleen-slate">Methodology</td>
                  <td className="p-6 text-mykleen-green-light bg-mykleen-blue/5 font-medium flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Rigorous checklist inspection
                  </td>
                  <td className="p-6 text-slate-500">Visual sweep only, missed areas</td>
                </tr>

                <tr className="contrast-row hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-semibold text-mykleen-slate">Guarantee</td>
                  <td className="p-6 text-mykleen-green-light bg-mykleen-blue/5 font-medium flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    24h satisfaction free re-clean
                  </td>
                  <td className="p-6 text-slate-500">No follow-up support available</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eco-badge mb-3">The People Behind the Clean</span>
            <h2 className="section-heading">Meet Our Core Team</h2>
            <p className="section-subheading mx-auto">
              Experienced, caring, and passionate about delivering an exceptional service every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                initials: 'JW',
                name: 'James Wilson',
                role: 'Founder & Head of Operations',
                bio: 'With 12+ years in commercial facilities management, James built My Kleen to set a new benchmark for eco-conscious cleaning in Australia.',
                color: 'from-mykleen-blue to-mykleen-blue-light',
                badge: '12+ Years Experience'
              },
              {
                initials: 'SP',
                name: 'Sarah Parker',
                role: 'Client Relations Manager',
                bio: 'Sarah ensures every client interaction is smooth, personalised, and professional — from first inquiry to post-clean satisfaction check.',
                color: 'from-mykleen-green to-mykleen-green-light',
                badge: 'Client Champion'
              },
              {
                initials: 'MT',
                name: 'Marcus Tran',
                role: 'Lead Cleaning Technician',
                bio: 'Marcus oversees quality assurance on every job, personally training new team members to maintain our rigorous 65-point cleaning standard.',
                color: 'from-purple-500 to-indigo-500',
                badge: 'QA Certified'
              },
            ].map(({ initials, name, role, bio, color, badge }) => (
              <div key={name} className="group bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white font-extrabold text-xl mb-5 shadow-lg`}>
                  {initials}
                </div>
                <h3 className="text-lg font-bold text-mykleen-slate mb-0.5">{name}</h3>
                <p className="text-mykleen-blue text-xs font-semibold uppercase tracking-widest mb-3">{role}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{bio}</p>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 text-slate-500 text-xs font-semibold rounded-full border border-slate-100">
                  ✦ {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </main>
  )
}

function FAQ() {
  const faqs = [
    {
      q: 'What products do you use, and are they safe for children and pets?',
      a: 'All our cleaning solutions are 100% biodegradable, non-toxic, and allergen-free — certified safe for children, pets, and people with respiratory sensitivities. We never use bleach-based, ammonia-based, or phthalate-containing products.'
    },
    {
      q: 'How do I book a cleaning, and how quickly can you come?',
      a: 'You can book online via our Contact page in under 2 minutes. For most metro areas we offer next-day bookings, and for urgent commercial requests we offer same-day scheduling subject to availability.'
    },
    {
      q: "What happens if I'm not satisfied with the clean?",
      a: 'We offer a 24-hour satisfaction guarantee. If any area is missed or doesn\'t meet our standard, simply notify us and we\'ll return and re-clean it completely free of charge — no arguments, no hassle.'
    },
    {
      q: 'Are your cleaners background-checked and insured?',
      a: 'Yes — every My Kleen team member is police-checked, identity-verified, and covered by full public liability insurance before their first job. You can trust them completely in your home or office.'
    },
    {
      q: 'Do you offer recurring cleaning plans?',
      a: 'Absolutely. We offer weekly, fortnightly, and monthly recurring plans with discounted rates. You can pause, adjust, or cancel at any time — we have no lock-in contracts.'
    },
  ]

  const [open, setOpen] = useState(null)

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="eco-badge mb-3">Common Questions</span>
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subheading mx-auto">
            Everything you need to know before booking.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i ? 'border-mykleen-blue/30 shadow-md shadow-mykleen-blue/5' : 'border-slate-100'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >
                <span className={`font-semibold text-sm leading-snug transition-colors ${open === i ? 'text-mykleen-blue' : 'text-mykleen-slate'}`}>
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                  open === i ? 'bg-mykleen-blue text-white rotate-45' : 'bg-slate-100 text-slate-400'
                }`}>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              <div className={`transition-all duration-300 ${open === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
