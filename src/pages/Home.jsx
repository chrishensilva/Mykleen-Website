import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '../components/UI/Button'
import Card from '../components/UI/Card'
import StatsCounter from '../components/UI/StatsCounter'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef(null)
  const trustRef = useRef(null)
  const featuredRef = useRef(null)
  const testimonialsRef = useRef(null)
  const howRef = useRef(null)

  useEffect(() => {
    // Hero entrance animations
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-animate', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
      )

      // Trust section scroll reveals
      gsap.fromTo('.trust-card', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: trustRef.current,
            start: 'top 80%',
          }
        }
      )

      // Featured services scroll reveals
      gsap.fromTo('.service-card', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featuredRef.current,
            start: 'top 80%',
          }
        }
      )

      // Testimonials scroll reveals
      gsap.fromTo('.testimonial-card', 
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: 'top 80%',
          }
        }
      )

      // How It Works steps
      gsap.fromTo('.step-item', 
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.18,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: howRef.current,
            start: 'top 80%',
          }
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 md:pt-40 md:pb-32 text-white flex items-center min-h-[90vh] overflow-hidden"
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/VIP Commercial Cleaning Services [get.gt].mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/90 via-[#0f1e3a]/80 to-[#0a1628]/70 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Text */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <span className="hero-animate inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 text-mykleen-blue-light text-sm font-semibold tracking-wide border border-white/20 mb-6">
                ✨ Your Eco-Friendly Cleaning Partner
              </span>
              <h1 className="hero-animate text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
                The Standard of Clean <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mykleen-blue-light to-mykleen-green-light">
                  for Home & Office
                </span>
              </h1>
              <p className="hero-animate text-lg sm:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
                Premium cleaning services tailored to your space. We combine eco-safe products and certified specialists for a flawless shine.
              </p>
              <div className="hero-animate flex flex-wrap justify-center lg:justify-start gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg" className="shadow-lg shadow-mykleen-blue-dark/20">
                    Book a Cleaning
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="ghost" size="lg">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Graphic / Badge Card */}
            <div className="hero-animate lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl animate-float">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-mykleen-green/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-mykleen-blue/20 rounded-full blur-2xl"></div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-mykleen-blue to-mykleen-blue-light flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">My Kleen Assurance</h3>
                      <p className="text-slate-400 text-xs">Certified Green & Non-Toxic Products</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">Satisfaction Rate</span>
                      <span className="text-mykleen-green-light font-bold">100% Guaranteed</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-mykleen-green h-full w-full rounded-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5 text-center">
                      <div className="text-2xl font-extrabold text-white">5.0 ★</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Google Rating</div>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5 text-center">
                      <div className="text-2xl font-extrabold text-white">10k+</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Cleaned Spaces</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators / Value Props */}
      <section ref={trustRef} className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eco-badge mb-3">Our Commitments</span>
            <h2 className="section-heading">Why Leading Properties Choose Us</h2>
            <p className="section-subheading mx-auto">
              We go beyond surface cleaning. We create spaces that promote wellness, focus, and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 — Eco Products */}
            <div className="trust-card group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mykleen-green to-mykleen-green-light rounded-t-3xl" />
              <div className="w-14 h-14 rounded-2xl bg-green-50 text-mykleen-green-light flex items-center justify-center mb-5 group-hover:bg-mykleen-green group-hover:text-white transition-all duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m11.314 11.314l.707-.707M4 12a8 8 0 1116 0 8 8 0 01-16 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-mykleen-slate mb-3">Eco-Friendly Products</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                We strictly use biodegradable, non-toxic, and allergen-free cleaning solutions — safe for pets, children, and the planet.
              </p>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-mykleen-green-light text-xs font-semibold rounded-full border border-green-100">
                🌿 Zero Harsh Chemicals
              </span>
            </div>

            {/* Card 2 — Certified Professionals */}
            <div className="trust-card group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mykleen-blue to-mykleen-blue-light rounded-t-3xl" />
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-mykleen-blue flex items-center justify-center mb-5 group-hover:bg-mykleen-blue group-hover:text-white transition-all duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-mykleen-slate mb-3">Certified Professionals</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                Fully vetted, background-checked, insured, and trained specialists — delivering consistent, immaculate results every single visit.
              </p>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-mykleen-blue text-xs font-semibold rounded-full border border-blue-100">
                🛡️ Background Checked
              </span>
            </div>

            {/* Card 3 — 100% Satisfaction */}
            <div className="trust-card group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-t-3xl" />
              <div className="w-14 h-14 rounded-2xl bg-yellow-50 text-yellow-500 flex items-center justify-center mb-5 group-hover:bg-yellow-400 group-hover:text-white transition-all duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-mykleen-slate mb-3">100% Satisfaction</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                Not satisfied? We return within 24 hours and re-clean the affected areas completely free of charge. No questions asked.
              </p>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-50 text-yellow-600 text-xs font-semibold rounded-full border border-yellow-100">
                ⭐ 5-Star Guarantee
              </span>
            </div>

            {/* Card 4 — Flexible Scheduling */}
            <div className="trust-card group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-t-3xl" />
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center mb-5 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-mykleen-slate mb-3">Flexible Scheduling</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                Book one-off cleans or recurring weekly, fortnightly, or monthly services. We work around your hours, not the other way round.
              </p>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 text-purple-600 text-xs font-semibold rounded-full border border-purple-100">
                📅 Book in 2 Minutes
              </span>
            </div>

            {/* Card 5 — Insured & Bonded */}
            <div className="trust-card group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mykleen-blue-dark to-mykleen-blue rounded-t-3xl" />
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-mykleen-slate mb-3">Fully Insured &amp; Bonded</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                All services are fully insured with public liability coverage. Your property and belongings are protected at every step.
              </p>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full border border-indigo-100">
                🔒 Liability Covered
              </span>
            </div>

            {/* Card 6 — Transparent Pricing */}
            <div className="trust-card group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mykleen-green-light to-teal-400 rounded-t-3xl" />
              <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-500 flex items-center justify-center mb-5 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
              </div>
              <h3 className="text-xl font-bold text-mykleen-slate mb-3">No Hidden Costs</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                Upfront, transparent pricing with no surprise fees. What we quote is what you pay — straightforward and fair, always.
              </p>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-600 text-xs font-semibold rounded-full border border-teal-100">
                💰 Upfront Quotes
              </span>
            </div>
          </div>

          {/* Accreditation / Trust Strip */}
          <div className="mt-16 pt-10 border-t border-slate-200">
            <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by property owners, managers &amp; businesses across the region</p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
              {[
                { label: 'Google', rating: '5.0 ★', sub: 'Top Rated' },
                { label: 'Verified', rating: '✓', sub: 'Insured & Bonded' },
                { label: 'Clients', rating: '10k+', sub: 'Spaces Cleaned' },
                { label: 'Guarantee', rating: '100%', sub: 'Satisfaction Rate' },
                { label: 'Response', rating: '< 2h', sub: 'Quote Turnaround' },
              ].map(({ label, rating, sub }) => (
                <div key={label} className="flex flex-col items-center text-center min-w-[80px]">
                  <div className="text-2xl font-extrabold text-mykleen-slate">{rating}</div>
                  <div className="text-[11px] text-mykleen-blue font-bold uppercase tracking-widest mt-0.5">{label}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* Animated Stats Counter */}
      <StatsCounter />

      {/* How It Works */}
      <section ref={howRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eco-badge mb-3">Simple Process</span>
            <h2 className="section-heading">How My Kleen Works</h2>
            <p className="section-subheading mx-auto">
              Four easy steps from booking to a sparkling clean space — completely stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector line - desktop only */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-mykleen-blue/20 via-mykleen-blue to-mykleen-blue/20 z-0" />

            {[
              { step: '01', title: 'Book Online', desc: 'Fill out our 2-minute quote form with your space type and preferred schedule.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
              { step: '02', title: 'We Confirm', desc: 'Our team reviews your request and calls back within 2 hours to confirm details.', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
              { step: '03', title: 'We Clean', desc: 'Our certified specialists arrive on time and follow a rigorous cleaning checklist.', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
              { step: '04', title: 'You Approve', desc: 'We do a final walkthrough. Not 100% happy? We re-clean at no extra cost.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
            ].map(({ step, title, desc, icon }, i) => (
              <div key={i} className="step-item relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-mykleen-blue to-mykleen-blue-light text-white flex flex-col items-center justify-center shadow-lg shadow-mykleen-blue/20 mb-5">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                  </svg>
                </div>
                <span className="text-xs font-extrabold text-mykleen-blue uppercase tracking-widest mb-2">Step {step}</span>
                <h3 className="text-lg font-bold text-mykleen-slate mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Snippet */}
      <section ref={featuredRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="eco-badge mb-3">Premium Catalog</span>
              <h2 className="section-heading">Our Specialized Solutions</h2>
              <p className="section-subheading">
                We craft specialized services tailored to residential, commercial, and post-lease hygiene requirements.
              </p>
            </div>
            <Link to="/projects">
              <Button variant="secondary" className="whitespace-nowrap">
                View All Services
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="service-card group cursor-pointer">
              <Card className="h-full border border-slate-100 overflow-hidden group-hover:border-mykleen-blue/30 group-hover:shadow-2xl group-hover:shadow-mykleen-blue/5 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-mykleen-blue flex items-center justify-center mb-6 group-hover:bg-mykleen-blue group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </div>
                <h3 className="text-xl font-bold text-mykleen-slate mb-3 group-hover:text-mykleen-blue transition-colors">Residential Cleaning</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  From routine dusting to detailed disinfection, we keep your home fresh, sanitary, and healthy.
                </p>
                <div className="flex items-center text-mykleen-blue font-bold text-sm gap-1 group-hover:gap-2 transition-all">
                  <span>Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </div>
              </Card>
            </div>

            {/* Service 2 */}
            <div className="service-card group cursor-pointer">
              <Card className="h-full border border-slate-100 overflow-hidden group-hover:border-mykleen-blue/30 group-hover:shadow-2xl group-hover:shadow-mykleen-blue/5 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-mykleen-blue flex items-center justify-center mb-6 group-hover:bg-mykleen-blue group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <h3 className="text-xl font-bold text-mykleen-slate mb-3 group-hover:text-mykleen-blue transition-colors">Commercial Cleaning</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  Maintain a clean, professional, and productive environment for your employees and clients alike.
                </p>
                <div className="flex items-center text-mykleen-blue font-bold text-sm gap-1 group-hover:gap-2 transition-all">
                  <span>Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </div>
              </Card>
            </div>

            {/* Service 3 */}
            <div className="service-card group cursor-pointer">
              <Card className="h-full border border-slate-100 overflow-hidden group-hover:border-mykleen-blue/30 group-hover:shadow-2xl group-hover:shadow-mykleen-blue/5 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-mykleen-blue flex items-center justify-center mb-6 group-hover:bg-mykleen-blue group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-mykleen-slate mb-3 group-hover:text-mykleen-blue transition-colors">End of Lease Cleaning</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  Bond-back guarantee cleans adhering to rigorous real-estate standard inspection checklists.
                </p>
                <div className="flex items-center text-mykleen-blue font-bold text-sm gap-1 group-hover:gap-2 transition-all">
                  <span>Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

         {/* Testimonials / Social Proof */}
      <section ref={testimonialsRef} className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eco-badge mb-3">Client Love</span>
            <h2 className="section-heading">What Our Customers Say</h2>
            <p className="section-subheading mx-auto">
              Real reviews from homeowners, tenants, and facility managers across the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="testimonial-card group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  "My Kleen has been cleaning our corporate headquarters for over a year. The consistency is amazing — their team is incredibly professional and every visit is spotless."
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-mykleen-blue flex items-center justify-center font-bold text-white text-sm">
                  SJ
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-mykleen-slate text-sm">Sarah Jenkins</h4>
                  <p className="text-slate-400 text-xs">Office Manager, TechCorp</p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-50 text-mykleen-green-light font-bold border border-green-100">✓ Verified</span>
              </div>
            </div>

            {/* Testimonial 2 — Featured */}
            <div className="testimonial-card group relative bg-gradient-to-br from-mykleen-blue to-mykleen-blue-light rounded-3xl p-8 shadow-xl shadow-mykleen-blue/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-white">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-300 fill-yellow-300" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <div>
                <p className="text-white/90 text-sm leading-relaxed mb-6">
                  "The End of Lease clean was absolutely immaculate. Our real estate agent said it was the cleanest handover she'd seen all year — we got our full bond back without any issues!"
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-white/20 pt-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-sm">
                  MR
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white text-sm">Marcus Riviera</h4>
                  <p className="text-white/60 text-xs">Tenant, Richmond</p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white font-bold border border-white/30">✓ Verified</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-card group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  "I love their eco-friendly approach. Knowing they use non-toxic products gives me complete peace of mind with my two toddler boys playing on the floor."
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-mykleen-green flex items-center justify-center font-bold text-white text-sm">
                  EK
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-mykleen-slate text-sm">Emily K.</h4>
                  <p className="text-slate-400 text-xs">Home Owner, Kew</p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-50 text-mykleen-green-light font-bold border border-green-100">✓ Verified</span>
              </div>
            </div>
          </div>

          {/* Google rating bar */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <p className="text-slate-600 text-sm font-semibold">
              <span className="text-mykleen-slate font-extrabold">5.0</span> out of 5 · Based on 200+ reviews on Google
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eco-badge mb-3">Transparent Pricing</span>
            <h2 className="section-heading">Simple, Fair Pricing Plans</h2>
            <p className="section-subheading mx-auto">
              No hidden fees. Choose the plan that fits your space. All plans include our 100% satisfaction guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Starter */}
            <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold text-mykleen-slate mb-1">Starter</h3>
              <p className="text-slate-400 text-sm mb-6">Perfect for small apartments & studios</p>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-extrabold text-mykleen-slate">$89</span>
                <span className="text-slate-400 text-sm mb-1">/visit</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['1–2 bedroom apartment', 'Kitchen & bathroom clean', 'Vacuuming & mopping', 'Eco-safe products', 'Satisfaction guarantee'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-slate-600 text-sm">
                    <svg className="w-4 h-4 text-mykleen-green-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button variant="secondary" className="w-full justify-center">Get a Quote</Button>
              </Link>
            </div>

            {/* Standard – Popular */}
            <div className="relative rounded-3xl border-2 border-mykleen-blue bg-white p-8 shadow-2xl shadow-mykleen-blue/10 scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-mykleen-blue text-white text-xs font-extrabold uppercase tracking-widest shadow-lg">
                Most Popular
              </div>
              <h3 className="text-lg font-bold text-mykleen-blue mb-1">Standard</h3>
              <p className="text-slate-400 text-sm mb-6">Great for 3–4 bedroom homes</p>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-extrabold text-mykleen-blue">$149</span>
                <span className="text-slate-400 text-sm mb-1">/visit</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['3–4 bedroom home', 'Full interior clean', 'Oven & appliance clean', 'Window sill & glass wipe', 'Priority scheduling', 'Satisfaction guarantee'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-slate-600 text-sm">
                    <svg className="w-4 h-4 text-mykleen-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button variant="primary" className="w-full justify-center shadow-lg shadow-mykleen-blue/25">Book Now</Button>
              </Link>
            </div>

            {/* Premium */}
            <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-bold text-mykleen-slate mb-1">Premium</h3>
              <p className="text-slate-400 text-sm mb-6">Full-service for large homes & offices</p>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-extrabold text-mykleen-slate">$249</span>
                <span className="text-slate-400 text-sm mb-1">/visit</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['5+ bedroom home or office', 'Deep clean all rooms', 'Carpet extraction included', 'Eco-sterilization fogging', 'Same-day booking available', 'Dedicated account manager', 'Satisfaction guarantee'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-slate-600 text-sm">
                    <svg className="w-4 h-4 text-mykleen-green-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button variant="secondary" className="w-full justify-center">Get a Quote</Button>
              </Link>
            </div>
          </div>

          <p className="text-center text-slate-400 text-xs mt-10">
            * All prices are indicative. Final quote is personalised after property assessment. GST included.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0a0f1e] via-[#0f1e3a] to-[#0c2340] text-white text-center">
        {/* Decorative blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-mykleen-blue/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-mykleen-green/20 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-mykleen-blue/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 text-mykleen-blue-light text-sm font-semibold border border-white/20 mb-6">
            🚀 Book in under 2 minutes
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
            Ready to Experience <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mykleen-blue-light to-mykleen-green-light">
              True Cleanliness?
            </span>
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Book online or call us today. We design a tailored hygiene plan matching your exact space and schedule.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link to="/contact">
              <Button variant="primary" size="lg" className="shadow-xl shadow-mykleen-blue/30">
                Book a Cleaning
              </Button>
            </Link>
            <a href="tel:+61400000000">
              <Button variant="ghost" size="lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Us Now
              </Button>
            </a>
          </div>

          {/* Quick proof row */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-slate-400 text-sm">
            {['✅ No Lock-in Contracts', '🌿 Eco-Safe Products', '⭐ 5-Star Guarantee', '🛡️ Fully Insured'].map(item => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
